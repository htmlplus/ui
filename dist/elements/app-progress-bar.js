import { Q as Query, P as PlusCore, d as attributes, h as html, a as Property, e as State, M as Method, E as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{height:2px;transition:200ms linear;z-index:1031;display:block;pointer-events:none;position:fixed;top:0;right:0;left:0;overflow:hidden}[part=bar]{background-color:#1e90ff;transition:200ms ease;height:100%;width:100%}:host([state=idle]){display:none}:host([state=completed]){opacity:0}";
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
let AppProgressBar = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.minimum = 0.08;
    this.trickleRate = 0.02;
    this.trickleSpeed = 800;
    this.state = "idle";
    this.progress = null;
  }
  done(force) {
    if (!force && !this.progress) return;
    this.set(1);
  }
  increase(amount) {
    if (!this.progress) {
      return this.start();
    }
    if (typeof amount !== "number") {
      amount = (1 - this.progress) * this.clamp(Math.random() * this.progress, 0.1, 0.95);
    }
    amount = this.clamp(this.progress + amount, 0, 0.994);
    this.set(amount);
  }
  set(progress) {
    clearTimeout(this.timeout);
    progress = this.clamp(progress, this.minimum, 1);
    this.progress = progress === 1 ? null : progress;
    if (this.state != "progressing") {
      this.state = "progressing";
      this.update(0);
    }
    requestAnimationFrame(() => {
      this.update(progress);
      if (progress !== 1) return;
      const speed = parseFloat(getComputedStyle(this.$bar).transitionDuration) * 1e3;
      this.timeout = window.setTimeout(() => {
        this.state = "completed";
        const speed2 = parseFloat(getComputedStyle(this.$host).transitionDuration) * 1e3;
        this.timeout = window.setTimeout(() => this.state = "idle", speed2);
      }, speed);
    });
  }
  start() {
    if (!this.progress) this.set(0);
    if (this.trickleDisabled) return;
    this.refresh();
  }
  trickle() {
    this.increase(Math.random() * this.trickleRate);
  }
  clamp(input, min, max) {
    if (input < min) return min;
    if (input > max) return max;
    return input;
  }
  refresh() {
    setTimeout(() => {
      if (!this.progress) return;
      this.trickle();
      this.refresh();
    }, this.trickleSpeed);
  }
  update(progress) {
    this.$bar.style.transform = `translate3d(${(-1 + progress) * 100}%, 0, 0)`;
  }
  disconnectedCallback() {
    clearTimeout(this.timeout);
  }
  render() {
    return html`${attributes(this, [{
      "state": this.state
    }])}
        <div part="bar"></div>
      `;
  }
};
AppProgressBar.tag = "plus-app-progress-bar";
AppProgressBar.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    type: 128
  })
], AppProgressBar.prototype, "minimum", 2);
__decorateClass([
  Property({
    type: 4
  })
], AppProgressBar.prototype, "trickleDisabled", 2);
__decorateClass([
  Property({
    type: 128
  })
], AppProgressBar.prototype, "trickleRate", 2);
__decorateClass([
  Property({
    type: 128
  })
], AppProgressBar.prototype, "trickleSpeed", 2);
__decorateClass([
  Query("[part=bar]")
], AppProgressBar.prototype, "$bar", 2);
__decorateClass([
  State()
], AppProgressBar.prototype, "state", 2);
__decorateClass([
  Method()
], AppProgressBar.prototype, "done", 1);
__decorateClass([
  Method()
], AppProgressBar.prototype, "increase", 1);
__decorateClass([
  Method()
], AppProgressBar.prototype, "set", 1);
__decorateClass([
  Method()
], AppProgressBar.prototype, "start", 1);
__decorateClass([
  Method()
], AppProgressBar.prototype, "trickle", 1);
AppProgressBar = __decorateClass([
  Element()
], AppProgressBar);
export {
  AppProgressBar
};
