import { P as PlusCore, o as on, b as off, a as Property, c as Event, W as Watch, B as Bind, E as Element } from "../core/index.js";
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
let ScrollDetector = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.reference = "document";
  }
  get $reference() {
    if (typeof this.reference != "string") return this.reference;
    if (this.reference == "document") return document;
    return document.querySelector(this.reference);
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
    try {
      off(this.$reference, "scroll", this.onScroll);
    } catch {
    }
  }
  onScroll() {
    const {
      scrollTop,
      scrollLeft,
      scrollHeight,
      scrollWidth,
      clientHeight,
      clientWidth
    } = this.$reference.documentElement || this.$reference;
    const offset = this.vertical ? scrollTop : scrollLeft;
    const total = this.vertical ? scrollHeight : scrollWidth;
    const viewport = this.vertical ? clientHeight : clientWidth;
    const overflow = total - viewport;
    const progress = overflow ? Math.round(offset / overflow * 100) : 0;
    if (this.offset == progress) return;
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
ScrollDetector.tag = "plus-scroll-detector";
__decorateClass([
  Property({
    type: 4
  })
], ScrollDetector.prototype, "disabled", 2);
__decorateClass([
  Property({
    type: 528
  })
], ScrollDetector.prototype, "reference", 2);
__decorateClass([
  Property({
    type: 4
  })
], ScrollDetector.prototype, "vertical", 2);
__decorateClass([
  Event()
], ScrollDetector.prototype, "plusChange", 2);
__decorateClass([
  Watch(["disabled", "reference"])
], ScrollDetector.prototype, "watcher", 1);
__decorateClass([
  Bind()
], ScrollDetector.prototype, "onScroll", 1);
ScrollDetector = __decorateClass([
  Element()
], ScrollDetector);
export {
  ScrollDetector
};
