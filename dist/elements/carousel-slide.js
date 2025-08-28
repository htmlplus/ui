import { h as html, a as Property, O as Overrides, L as Listen, E as Element } from "../core/index.js";
import { CarouselChild } from "./carousel-child.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{display:block;flex:0 0 auto}:host([clickable]){cursor:pointer}global plus-carousel[axis=x] plus-carousel-slide{min-width:0}global plus-carousel[axis=y] plus-carousel-slide{min-height:0}";
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
let CarouselSlide = class extends CarouselChild {
  constructor() {
    super(...arguments);
    this.events = ["init", "reInit", "select"];
  }
  get index() {
    return Array.prototype.indexOf.call(this.api?.slideNodes() || [], this.$host);
  }
  handleClick() {
    if (this.clickable) {
      this.state?.scrollTo(this.index, this.clickable === "jump");
    }
  }
  render() {
    return html`<slot />`;
  }
};
CarouselSlide.tag = "plus-carousel-slide";
CarouselSlide.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    reflect: true,
    type: 20
  })
], CarouselSlide.prototype, "clickable", 2);
__decorateClass([
  Property({
    type: 0
  }),
  Overrides()
], CarouselSlide.prototype, "overrides", 2);
__decorateClass([
  Listen("click")
], CarouselSlide.prototype, "handleClick", 1);
CarouselSlide = __decorateClass([
  Element()
], CarouselSlide);
export {
  CarouselSlide
};
