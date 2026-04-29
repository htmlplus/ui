import { P as PlusCore, b as jsx, c as Property, O as Overrides, V as Variant, e as Event, S as State, W as Watch, B as Bind, d as Element } from "../core/index.js";
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
let PlusIntersection = class extends PlusCore {
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
  watcher(next, _prev, name) {
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
    this.observer?.disconnect();
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
    return /* @__PURE__ */ jsx("host", { state: this.isIntersecting ? "in" : "out", value: this, children: /* @__PURE__ */ jsx("slot", {}) });
  }
};
PlusIntersection.tag = "plus-intersection";
__decorateClass([
  Property({
    type: 4
  })
], PlusIntersection.prototype, "disabled", 2);
__decorateClass([
  Property({
    type: 4
  })
], PlusIntersection.prototype, "once", 2);
__decorateClass([
  Property({
    type: 0
  })
], PlusIntersection.prototype, "root", 2);
__decorateClass([
  Property({
    type: 512
  })
], PlusIntersection.prototype, "rootMargin", 2);
__decorateClass([
  Property({
    type: 129
  })
], PlusIntersection.prototype, "threshold", 2);
__decorateClass([
  Property({
    type: 0
  }),
  Overrides()
], PlusIntersection.prototype, "overrides", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 0
  }),
  Variant()
], PlusIntersection.prototype, "variant", 2);
__decorateClass([
  Event()
], PlusIntersection.prototype, "plusChange", 2);
__decorateClass([
  State()
], PlusIntersection.prototype, "isIntersecting", 2);
__decorateClass([
  Watch(["behavior", "disabled", "once", "root", "rootMargin", "threshold"])
], PlusIntersection.prototype, "watcher", 1);
__decorateClass([
  Bind()
], PlusIntersection.prototype, "onIntersecting", 1);
PlusIntersection = __decorateClass([
  Element()
], PlusIntersection);
export {
  PlusIntersection
};
