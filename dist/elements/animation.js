import { q as setConfig, P as PlusCore, p as getConfig, h as html, a as Property, c as Event, M as Method, W as Watch, B as Bind, E as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{display:block}";
const ANIMATION_EASINGS = {
  "ease": "ease",
  "ease-in": "ease-in",
  "ease-out": "ease-out",
  "ease-in-out": "ease-in-out",
  "ease-in-sine": "cubic-bezier(0.47, 0, 0.745, 0.715)",
  "ease-out-sine": "cubic-bezier(0.39, 0.575, 0.565, 1)",
  "ease-in-out-sine": "cubic-bezier(0.445, 0.05, 0.55, 0.95)",
  "ease-in-quad": "cubic-bezier(0.55, 0.085, 0.68, 0.53)",
  "ease-out-quad": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
  "ease-in-out-quad": "cubic-bezier(0.455, 0.03, 0.515, 0.955)",
  "ease-in-cubic": "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
  "ease-out-cubic": "cubic-bezier(0.215, 0.61, 0.355, 1)",
  "ease-in-out-cubic": "cubic-bezier(0.645, 0.045, 0.355, 1)",
  "ease-in-quart": "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
  "ease-out-quart": "cubic-bezier(0.165, 0.84, 0.44, 1)",
  "ease-in-out-quart": "cubic-bezier(0.77, 0, 0.175, 1)",
  "ease-in-quint": "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  "ease-out-quint": "cubic-bezier(0.23, 1, 0.32, 1)",
  "ease-in-out-quint": "cubic-bezier(0.86, 0, 0.07, 1)",
  "ease-in-expo": "cubic-bezier(0.95, 0.05, 0.795, 0.035)",
  "ease-out-expo": "cubic-bezier(0.19, 1, 0.22, 1)",
  "ease-in-out-expo": "cubic-bezier(1, 0, 0, 1)",
  "ease-in-circ": "cubic-bezier(0.6, 0.04, 0.98, 0.335)",
  "ease-out-circ": "cubic-bezier(0.075, 0.82, 0.165, 1)",
  "ease-in-out-circ": "cubic-bezier(0.785, 0.135, 0.15, 0.86)",
  "ease-in-back": "cubic-bezier(0.6, -0.28, 0.735, 0.045)",
  "ease-out-back": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  "ease-in-out-back": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  "linear": "linear"
};
const register = (name, keyframe) => {
  setConfig({
    asset: {
      animation: {
        [name]: keyframe
      }
    }
  });
};
register("fade-in", [
  { offset: 0, opacity: "0" },
  { offset: 1, opacity: "1" }
]);
register("fade-out", [
  { offset: 0, opacity: "1" },
  { offset: 1, opacity: "0" }
]);
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
let Animation = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.composite = "replace";
    this.delay = 0;
    this.direction = "normal";
    this.duration = 1e3;
    this.easing = "linear";
    this.endDelay = 0;
    this.fill = "none";
    this.iterationComposite = "replace";
    this.iterations = 1;
    this.iterationStart = 0;
    this.playbackRate = 1;
  }
  cancel() {
    var _a;
    (_a = this.instance) == null ? void 0 : _a.cancel();
  }
  commitStyles() {
    var _a;
    (_a = this.instance) == null ? void 0 : _a.commitStyles();
  }
  finish() {
    var _a;
    (_a = this.instance) == null ? void 0 : _a.finish();
  }
  pause() {
    var _a;
    (_a = this.instance) == null ? void 0 : _a.pause();
  }
  persist() {
    var _a;
    (_a = this.instance) == null ? void 0 : _a.persist();
  }
  play() {
    var _a;
    this.run = true;
    (_a = this.instance) == null ? void 0 : _a.play();
  }
  reverse() {
    var _a;
    (_a = this.instance) == null ? void 0 : _a.reverse();
  }
  updatePlaybackRate(playbackRate) {
    var _a;
    (_a = this.instance) == null ? void 0 : _a.updatePlaybackRate(playbackRate);
  }
  get options() {
    return {
      composite: this.composite,
      delay: this.delay,
      direction: this.direction,
      duration: this.duration,
      easing: ANIMATION_EASINGS[this.easing] ?? getConfig("asset", "easing", this.easing) ?? this.easing,
      endDelay: this.endDelay,
      fill: this.fill,
      iterationComposite: this.iterationComposite,
      iterations: this.iterations,
      iterationStart: this.iterationStart,
      playbackRate: this.playbackRate
    };
  }
  watcher() {
    this.run ? this.play() : this.pause();
  }
  onCancel() {
    this.run = false;
    this.plusCancel();
  }
  onFinish() {
    this.run = false;
    this.plusFinish();
  }
  onRemove() {
    this.run = false;
    this.plusRemove();
  }
  updatedCallback() {
    this.disconnectedCallback();
    const keyframes = this.keyframes ?? getConfig("asset", "animation", this.name) ?? [];
    this.instance = this.$host.animate(keyframes, this.options);
    this.instance.addEventListener("cancel", this.onCancel);
    this.instance.addEventListener("finish", this.onFinish);
    this.instance.addEventListener("remove", this.onRemove);
    if (this.run) return;
    this.pause();
  }
  disconnectedCallback() {
    var _a, _b, _c;
    (_a = this.instance) == null ? void 0 : _a.removeEventListener("cancel", this.onCancel);
    (_b = this.instance) == null ? void 0 : _b.removeEventListener("finish", this.onFinish);
    (_c = this.instance) == null ? void 0 : _c.removeEventListener("remove", this.onFinish);
  }
  render() {
    return html`<slot />`;
  }
};
Animation.tag = "plus-animation";
Animation.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    type: 16
  })
], Animation.prototype, "composite", 2);
__decorateClass([
  Property({
    type: 128
  })
], Animation.prototype, "delay", 2);
__decorateClass([
  Property({
    type: 16
  })
], Animation.prototype, "direction", 2);
__decorateClass([
  Property({
    type: 128
  })
], Animation.prototype, "duration", 2);
__decorateClass([
  Property({
    type: 512
  })
], Animation.prototype, "easing", 2);
__decorateClass([
  Property({
    type: 128
  })
], Animation.prototype, "endDelay", 2);
__decorateClass([
  Property({
    type: 16
  })
], Animation.prototype, "fill", 2);
__decorateClass([
  Property({
    type: 0
  })
], Animation.prototype, "instance", 2);
__decorateClass([
  Property({
    type: 16
  })
], Animation.prototype, "iterationComposite", 2);
__decorateClass([
  Property({
    type: 128
  })
], Animation.prototype, "iterations", 2);
__decorateClass([
  Property({
    type: 128
  })
], Animation.prototype, "iterationStart", 2);
__decorateClass([
  Property({
    type: 1
  })
], Animation.prototype, "keyframes", 2);
__decorateClass([
  Property({
    type: 512
  })
], Animation.prototype, "name", 2);
__decorateClass([
  Property({
    type: 128
  })
], Animation.prototype, "playbackRate", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], Animation.prototype, "run", 2);
__decorateClass([
  Event()
], Animation.prototype, "plusCancel", 2);
__decorateClass([
  Event()
], Animation.prototype, "plusFinish", 2);
__decorateClass([
  Event()
], Animation.prototype, "plusRemove", 2);
__decorateClass([
  Method()
], Animation.prototype, "cancel", 1);
__decorateClass([
  Method()
], Animation.prototype, "commitStyles", 1);
__decorateClass([
  Method()
], Animation.prototype, "finish", 1);
__decorateClass([
  Method()
], Animation.prototype, "pause", 1);
__decorateClass([
  Method()
], Animation.prototype, "persist", 1);
__decorateClass([
  Method()
], Animation.prototype, "play", 1);
__decorateClass([
  Method()
], Animation.prototype, "reverse", 1);
__decorateClass([
  Method()
], Animation.prototype, "updatePlaybackRate", 1);
__decorateClass([
  Watch("run", true)
], Animation.prototype, "watcher", 1);
__decorateClass([
  Bind()
], Animation.prototype, "onCancel", 1);
__decorateClass([
  Bind()
], Animation.prototype, "onFinish", 1);
__decorateClass([
  Bind()
], Animation.prototype, "onRemove", 1);
Animation = __decorateClass([
  Element()
], Animation);
export {
  Animation
};
