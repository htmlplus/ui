import { Q as Query, h as html, c as Property, O as Overrides, V as Variant, B as Bind, d as Element } from "../core/index.js";
import { CarouselChild } from "./carousel-child.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{background-color:#f5f5f5;border-radius:1.8rem;height:.6rem;display:block;position:relative;overflow:hidden}.bar{background-color:#d3d3d3;position:absolute;width:100%;top:0;bottom:0;left:-100%}";
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
let CarouselProgress = class extends CarouselChild {
  constructor() {
    super(...arguments);
    this.events = ["init", "reInit", "scroll", "slideFocus"];
  }
  handleUpdate() {
    if (!this.api) return;
    const value = this.api.scrollProgress();
    if (typeof value !== "number") {
      return this.$bar.removeAttribute("style");
    }
    const progress = Math.max(0, Math.min(1, value)) * 100;
    this.$bar.style.transform = `translate3d(${progress}%, 0px, 0px)`;
  }
  render() {
    return html`<div class="bar" part="bar" />`;
  }
};
CarouselProgress.tag = "plus-carousel-progress";
CarouselProgress.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    type: 0
  }),
  Overrides()
], CarouselProgress.prototype, "overrides", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 0
  }),
  Variant()
], CarouselProgress.prototype, "variant", 2);
__decorateClass([
  Query("div")
], CarouselProgress.prototype, "$bar", 2);
__decorateClass([
  Bind()
], CarouselProgress.prototype, "handleUpdate", 1);
CarouselProgress = __decorateClass([
  Element()
], CarouselProgress);
export {
  CarouselProgress
};
