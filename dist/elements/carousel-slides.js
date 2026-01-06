import { b as _internal_h_, c as Property, O as Overrides, V as Variant, d as Element } from "../core/index.js";
import { CarouselChild } from "./carousel-child.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{display:block;overflow:hidden}.container{display:flex}global plus-carousel[auto-height] plus-carousel-slides::part(container){transition:height .25s;align-items:flex-start}global plus-carousel[axis=x] plus-carousel-slides::part(container){flex-direction:row;touch-action:pan-y pinch-zoom}global plus-carousel[axis=y] plus-carousel-slides::part(container){flex-direction:column;touch-action:pan-x pinch-zoom}";
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
let PlusCarouselSlides = class extends CarouselChild {
  constructor() {
    super(...arguments);
    this.events = ["init", "reInit"];
  }
  render() {
    return _internal_h_`<div class="container" part="container">
				<slot />
			</div>`;
  }
};
PlusCarouselSlides.tag = "plus-carousel-slides";
PlusCarouselSlides.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    type: 0
  }),
  Overrides()
], PlusCarouselSlides.prototype, "overrides", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 0
  }),
  Variant()
], PlusCarouselSlides.prototype, "variant", 2);
PlusCarouselSlides = __decorateClass([
  Element()
], PlusCarouselSlides);
export {
  PlusCarouselSlides
};
