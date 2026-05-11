import { Q as Query, P as PlusCore, h as toCSSColor, b as jsx, c as Property, O as Overrides, V as Variant, S as State, g as Style, M as Method, d as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{height:2px;transition:200ms linear;z-index:1031;display:block;pointer-events:none;position:fixed;top:0;right:0;left:0;overflow:hidden}[part=bar]{background-color:var(--plus-app-progress-bar-color);transition:200ms ease;height:100%;width:100%}:host([state=idle]){display:none}:host([state=completed]){opacity:0}";
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
let PlusAppProgressBar = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.color = "dodgerblue";
    this.minimum = 0.08;
    this.trickleDisabled = false;
    this.trickleRate = 0.02;
    this.trickleSpeed = 800;
    this.state = "idle";
    this.progress = null;
  }
  get style() {
    return {
      ":host": {
        "--plus-app-progress-bar-color": toCSSColor(this.color)
      }
    };
  }
  done(force) {
    if (!force && !this.progress) return;
    this.set(1);
  }
  increase(amount) {
    if (!this.progress) {
      return void this.start();
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
    if (this.state !== "progressing") {
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
        this.timeout = window.setTimeout(() => {
          this.state = "idle";
        }, speed2);
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
    return /* @__PURE__ */ jsx("host", { state: this.state, value: this, children: /* @__PURE__ */ jsx("div", { part: "bar" }) });
  }
};
PlusAppProgressBar.tag = "plus-app-progress-bar";
PlusAppProgressBar.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    reflect: true,
    type: 1
  })
], PlusAppProgressBar.prototype, "color", 2);
__decorateClass([
  Property({
    type: 257
  })
], PlusAppProgressBar.prototype, "minimum", 2);
__decorateClass([
  Property({
    type: 9
  })
], PlusAppProgressBar.prototype, "trickleDisabled", 2);
__decorateClass([
  Property({
    type: 257
  })
], PlusAppProgressBar.prototype, "trickleRate", 2);
__decorateClass([
  Property({
    type: 257
  })
], PlusAppProgressBar.prototype, "trickleSpeed", 2);
__decorateClass([
  Property({
    type: 1
  }),
  Overrides()
], PlusAppProgressBar.prototype, "overrides", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 1
  }),
  Variant()
], PlusAppProgressBar.prototype, "variant", 2);
__decorateClass([
  Query("[part=bar]")
], PlusAppProgressBar.prototype, "$bar", 2);
__decorateClass([
  State()
], PlusAppProgressBar.prototype, "state", 2);
__decorateClass([
  Style()
], PlusAppProgressBar.prototype, "style", 1);
__decorateClass([
  Method()
], PlusAppProgressBar.prototype, "done", 1);
__decorateClass([
  Method()
], PlusAppProgressBar.prototype, "increase", 1);
__decorateClass([
  Method()
], PlusAppProgressBar.prototype, "set", 1);
__decorateClass([
  Method()
], PlusAppProgressBar.prototype, "start", 1);
__decorateClass([
  Method()
], PlusAppProgressBar.prototype, "trickle", 1);
PlusAppProgressBar = __decorateClass([
  Element()
], PlusAppProgressBar);
export {
  PlusAppProgressBar
};
