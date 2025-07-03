import { h as html, E as Element } from "../core/index.js";
import { CarouselChild } from "./carousel-child.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{display:block;overflow:hidden}.container{display:flex}global plus-carousel[auto-height] plus-carousel-slides::part(container){transition:height .25s;align-items:flex-start}global plus-carousel[axis=x] plus-carousel-slides::part(container){flex-direction:row;touch-action:pan-y pinch-zoom}global plus-carousel[axis=y] plus-carousel-slides::part(container){flex-direction:column;touch-action:pan-x pinch-zoom}";
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(result) || result;
  return result;
};
let CarouselSlides = class extends CarouselChild {
  constructor() {
    super(...arguments);
    this.events = ["init", "reInit"];
  }
  render() {
    return html`<div class="container" part="container">
        <slot />
      </div>`;
  }
};
CarouselSlides.tag = "plus-carousel-slides";
CarouselSlides.style = STYLE_IMPORTED;
CarouselSlides = __decorateClass([
  Element()
], CarouselSlides);
export {
  CarouselSlides
};
