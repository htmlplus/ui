import { P as PlusCore, h as html, d as attributes, a as Property, c as Event, M as Method, e as State, W as Watch, B as Bind, E as Element } from "../core/index.js";
const COUNTER_EASINGS = {
  "ease-out-expo": (currentTime, beginningValue, changeInValue, duration) => {
    return changeInValue * (-Math.pow(2, -10 * currentTime / duration) + 1) * 1024 / 1023 + beginningValue;
  }
};
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
let Counter = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.easing = "ease-out-expo";
    this.decimal = ".";
    this.decimals = 0;
    this.delay = 0;
    this.duration = 1e3;
    this.from = 0;
    this.numerals = [];
    this.state = "idle";
  }
  complete() {
    cancelAnimationFrame(this.requestAnimationFrame);
    this.reset();
    this.counter = this.to;
    this.state = "completed";
    this.play = false;
  }
  pause() {
    if (this.state != "running") return;
    cancelAnimationFrame(this.requestAnimationFrame);
    this.state = "paused";
  }
  start() {
    switch (this.state) {
      case "completed":
      case "idle":
      case "stopped":
        setTimeout(() => {
          this.reset();
          this.state = "running";
          this.play = true;
          this.requestAnimationFrame = requestAnimationFrame(this.count);
        }, this.delay);
        break;
      case "paused":
        this.startTime = performance.now() - (this.duration - this.remaining);
        this.state = "running";
        this.requestAnimationFrame = requestAnimationFrame(this.count);
        break;
    }
  }
  stop() {
    cancelAnimationFrame(this.requestAnimationFrame);
    this.reset();
    this.counter = this.from;
    this.state = "stopped";
    this.play = false;
  }
  get easingFunction() {
    return COUNTER_EASINGS[this.easing] || this.easing;
  }
  get formated() {
    const counter = this.counter ?? this.from;
    const negative = counter < 0 ? "-" : "";
    let result;
    let x1;
    let x2;
    let x3;
    result = Math.abs(counter).toFixed(this.decimals);
    result += "";
    const x = result.split(".");
    x1 = x[0];
    x2 = x.length > 1 ? this.decimal + x[1] : "";
    if (this.separator) {
      x3 = "";
      for (let i = 0, length = x1.length; i < length; ++i) {
        if (i !== 0 && i % 3 === 0) {
          x3 = this.separator + x3;
        }
        x3 = x1[length - i - 1] + x3;
      }
      x1 = x3;
    }
    if (this.numerals && this.numerals.length) {
      x1 = x1.replace(/[0-9]/g, (w) => this.numerals[+w]);
      x2 = x2.replace(/[0-9]/g, (w) => this.numerals[+w]);
    }
    return negative + x1 + x2;
  }
  get reverse() {
    return this.to < this.from;
  }
  watcher() {
    requestAnimationFrame(() => {
      if (this.play == true && this.state != "running") this.start();
      if (this.play != true && this.state == "paused") this.stop();
      if (this.play != true && this.state == "running") this.stop();
    });
  }
  count(timestamp) {
    if (!this.startTime) this.startTime = timestamp;
    const progress = timestamp - this.startTime;
    this.remaining = this.duration - progress;
    if (!this.easingFunction) {
      this.counter = this.from + (this.to - this.from) * (progress / this.duration);
    } else if (this.reverse) {
      this.counter = this.from - this.easingFunction(progress, 0, this.from - this.to, this.duration);
    } else {
      this.counter = this.easingFunction(progress, this.from, this.to - this.from, this.duration);
    }
    const done = this.reverse ? this.counter < this.to : this.counter > this.to;
    this.counter = done ? this.to : this.counter;
    this.counter = Number(this.counter.toFixed(this.decimals));
    if (progress < this.duration) {
      this.requestAnimationFrame = requestAnimationFrame(this.count);
      return;
    }
    this.complete();
    this.plusComplete();
  }
  reset() {
    this.remaining = void 0;
    this.startTime = void 0;
  }
  disconnectedCallback() {
    this.stop();
  }
  render() {
    return html`${attributes(this, [{
      "state": this.state
    }])}${this.formated}`;
  }
};
Counter.tag = "plus-counter";
__decorateClass([
  Property({
    type: 16
  })
], Counter.prototype, "easing", 2);
__decorateClass([
  Property({
    type: 512
  })
], Counter.prototype, "decimal", 2);
__decorateClass([
  Property({
    type: 128
  })
], Counter.prototype, "decimals", 2);
__decorateClass([
  Property({
    type: 128
  })
], Counter.prototype, "delay", 2);
__decorateClass([
  Property({
    type: 128
  })
], Counter.prototype, "duration", 2);
__decorateClass([
  Property({
    type: 128
  })
], Counter.prototype, "from", 2);
__decorateClass([
  Property({
    type: 1
  })
], Counter.prototype, "numerals", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], Counter.prototype, "play", 2);
__decorateClass([
  Property({
    type: 512
  })
], Counter.prototype, "separator", 2);
__decorateClass([
  Property({
    type: 128
  })
], Counter.prototype, "to", 2);
__decorateClass([
  Event()
], Counter.prototype, "plusComplete", 2);
__decorateClass([
  Method()
], Counter.prototype, "complete", 1);
__decorateClass([
  Method()
], Counter.prototype, "pause", 1);
__decorateClass([
  Method()
], Counter.prototype, "start", 1);
__decorateClass([
  Method()
], Counter.prototype, "stop", 1);
__decorateClass([
  State()
], Counter.prototype, "counter", 2);
__decorateClass([
  State()
], Counter.prototype, "state", 2);
__decorateClass([
  Watch(["play"], true)
], Counter.prototype, "watcher", 1);
__decorateClass([
  Bind()
], Counter.prototype, "count", 1);
Counter = __decorateClass([
  Element()
], Counter);
export {
  Counter
};
