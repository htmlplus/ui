import { Q as Query, P as PlusCore, f as toCSSUnit, j as jsxs, a as jsx, b as Property, O as Overrides, V as Variant, E as Event, S as State, e as Style, B as Bind, c as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{top:var(--plus-sticky-top, 0);z-index:var(--plus-sticky-z-index);position:sticky;display:block;will-change:auto}:host([disabled]){position:static}.sizer-wrapper{position:relative;pointer-events:none;visibility:hidden}.sizer{position:absolute;top:calc((var(--plus-sticky-top, 0) + 1px)*-1)}";
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
let PlusSticky = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.top = 0;
    this.watcher = false;
  }
  get style() {
    return {
      ":host": {
        "--plus-sticky-top": toCSSUnit(this.top),
        "--plus-sticky-z-index": this.zIndex
      }
    };
  }
  initialize() {
    this.observer = new IntersectionObserver(this.onIntersecting, {
      threshold: [1]
    });
    this.observer.observe(this.$sizer);
  }
  terminate() {
    this.state = void 0;
    this.observer?.disconnect();
  }
  onIntersecting(entries) {
    const [entry] = entries;
    this.state = entry.intersectionRatio < 1 ? "stick" : "normal";
    this.plusChange(this.state);
  }
  updatedCallback() {
    this.terminate();
    if (this.disabled) return;
    if (!this.watcher) return;
    this.initialize();
  }
  disconnectedCallback() {
    this.terminate();
  }
  render() {
    return /* @__PURE__ */ jsxs("host", { state: this.watcher ? this.state : null, value: this, children: [
      /* @__PURE__ */ jsx("div", { className: "sizer-wrapper", children: /* @__PURE__ */ jsx("div", { className: "sizer" }) }),
      /* @__PURE__ */ jsx("slot", {}),
      !!this.state && /* @__PURE__ */ jsx("div", { className: this.state, children: /* @__PURE__ */ jsx("slot", { name: this.state }) })
    ] });
  }
};
PlusSticky.tag = "plus-sticky";
PlusSticky.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], PlusSticky.prototype, "disabled", 2);
__decorateClass([
  Property({
    type: 1280
  })
], PlusSticky.prototype, "top", 2);
__decorateClass([
  Property({
    type: 8
  })
], PlusSticky.prototype, "watcher", 2);
__decorateClass([
  Property({
    type: 256
  })
], PlusSticky.prototype, "zIndex", 2);
__decorateClass([
  Property({
    type: 1
  }),
  Overrides()
], PlusSticky.prototype, "overrides", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 1
  }),
  Variant()
], PlusSticky.prototype, "variant", 2);
__decorateClass([
  Event()
], PlusSticky.prototype, "plusChange", 2);
__decorateClass([
  Query(".sizer")
], PlusSticky.prototype, "$sizer", 2);
__decorateClass([
  State()
], PlusSticky.prototype, "state", 2);
__decorateClass([
  Style()
], PlusSticky.prototype, "style", 1);
__decorateClass([
  Bind()
], PlusSticky.prototype, "onIntersecting", 1);
PlusSticky = __decorateClass([
  Element()
], PlusSticky);
export {
  PlusSticky
};
