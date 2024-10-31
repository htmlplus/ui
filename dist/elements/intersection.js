import { P as PlusCore, h as html, d as attributes, a as Property, c as Event, e as State, W as Watch, B as Bind, E as Element } from "../core/index.js";
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
let Intersection = class extends PlusCore {
  get disconnected() {
    return this.once && this.isIntersecting;
  }
  get options() {
    return {
      root: this.root,
      rootMargin: this.rootMargin,
      threshold: this.threshold
    };
  }
  watcher(next, prev, name) {
    switch (name) {
      case "disabled":
        if (next) this.terminate();
        else if (!this.disconnected) this.initialize();
        break;
      case "once":
        if (next || this.disabled) break;
        this.terminate();
        this.initialize();
        break;
      case "root":
      case "rootMargin":
      case "threshold":
        if (this.disabled || this.disconnected) break;
        this.terminate();
        this.initialize();
        break;
    }
  }
  initialize() {
    this.observer = new IntersectionObserver(this.onIntersecting, this.options);
    this.observer.observe(this.$host);
  }
  terminate() {
    var _a;
    (_a = this.observer) == null ? void 0 : _a.disconnect();
    delete this.observer;
  }
  onIntersecting(entries) {
    const [entry] = entries;
    this.isIntersecting = entry.isIntersecting;
    this.plusChange(entry);
    if (!this.isIntersecting || !this.once) return;
    this.terminate();
  }
  connectedCallback() {
    if (this.disabled) return;
    this.initialize();
  }
  disconnectedCallback() {
    this.terminate();
  }
  render() {
    return html`${attributes(this, [{
      "state": this.isIntersecting ? "in" : "out"
    }])}
        <slot />
      `;
  }
};
Intersection.tag = "plus-intersection";
__decorateClass([
  Property({
    type: 4
  })
], Intersection.prototype, "disabled", 2);
__decorateClass([
  Property({
    type: 4
  })
], Intersection.prototype, "once", 2);
__decorateClass([
  Property({
    type: 0
  })
], Intersection.prototype, "root", 2);
__decorateClass([
  Property({
    type: 512
  })
], Intersection.prototype, "rootMargin", 2);
__decorateClass([
  Property({
    type: 129
  })
], Intersection.prototype, "threshold", 2);
__decorateClass([
  Event()
], Intersection.prototype, "plusChange", 2);
__decorateClass([
  State()
], Intersection.prototype, "isIntersecting", 2);
__decorateClass([
  Watch(["behavior", "disabled", "once", "root", "rootMargin", "threshold"])
], Intersection.prototype, "watcher", 1);
__decorateClass([
  Bind()
], Intersection.prototype, "onIntersecting", 1);
Intersection = __decorateClass([
  Element()
], Intersection);
export {
  Intersection
};
