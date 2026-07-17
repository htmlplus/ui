import { P as PlusCore, o as on, l as off, b as Property, O as Overrides, V as Variant, E as Event, W as Watch, B as Bind, c as Element } from "../core/index.js";
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
let PlusScrollDetector = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.reference = "document";
    this.vertical = false;
  }
  get $reference() {
    if (typeof this.reference !== "string") return this.reference;
    if (this.reference === "document") return document;
    return document.querySelector(this.reference) || void 0;
  }
  watcher(next) {
    next ? this.terminate() : this.initialize();
  }
  initialize() {
    if (this.disabled) return;
    if (!this.$reference) return;
    on(this.$reference, "scroll", this.onScroll);
    this.onScroll();
  }
  terminate() {
    if (this.$reference) {
      off(this.$reference, "scroll", this.onScroll);
    }
  }
  onScroll() {
    const target = this.$reference instanceof Document ? this.$reference.documentElement : this.$reference;
    if (!target) return;
    const {
      scrollTop,
      scrollLeft,
      scrollHeight,
      scrollWidth,
      clientHeight,
      clientWidth
    } = target;
    const offset = this.vertical ? scrollTop : scrollLeft;
    const total = this.vertical ? scrollHeight : scrollWidth;
    const viewport = this.vertical ? clientHeight : clientWidth;
    const overflow = total - viewport;
    const progress = overflow ? Math.round(offset / overflow * 100) : 0;
    if (this.offset === progress) return;
    this.offset = offset;
    this.plusChange({
      offset,
      overflow,
      progress,
      total,
      viewport
    });
  }
  connectedCallback() {
    this.initialize();
  }
  disconnectedCallback() {
    this.terminate();
  }
  render() {
    return null;
  }
};
PlusScrollDetector.tag = "plus-scroll-detector";
__decorateClass([
  Property({
    type: 8
  })
], PlusScrollDetector.prototype, "disabled", 2);
__decorateClass([
  Property({
    type: 1056
  })
], PlusScrollDetector.prototype, "reference", 2);
__decorateClass([
  Property({
    type: 8
  })
], PlusScrollDetector.prototype, "vertical", 2);
__decorateClass([
  Property({
    type: 1
  }),
  Overrides()
], PlusScrollDetector.prototype, "overrides", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 1
  }),
  Variant()
], PlusScrollDetector.prototype, "variant", 2);
__decorateClass([
  Event()
], PlusScrollDetector.prototype, "plusChange", 2);
__decorateClass([
  Watch(["disabled", "reference"])
], PlusScrollDetector.prototype, "watcher", 1);
__decorateClass([
  Bind()
], PlusScrollDetector.prototype, "onScroll", 1);
PlusScrollDetector = __decorateClass([
  Element()
], PlusScrollDetector);
export {
  PlusScrollDetector
};
