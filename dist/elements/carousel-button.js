import { h as html, c as Property, V as Variant, O as Overrides, B as Bind, d as Element } from "../core/index.js";
import { CarouselChild } from "./carousel-child.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{display:inline-flex}button{box-shadow:inset 0 0 0 .2rem #eaeaea;color:#36313d;border-radius:50%;width:2.25rem;height:2.25rem;appearance:none;background-color:rgba(0,0,0,0);touch-action:manipulation;text-decoration:none;cursor:pointer;border:0;padding:0;margin:0;z-index:1;display:flex;align-items:center;justify-content:center}button:disabled{opacity:.5}svg{width:35%;height:35%}";
const CAROUSEL_BUTTON_PREVIOUS_SVG = `
  <svg viewBox="0 0 532 532" part="icon">
    <path
      fill="currentColor"
      d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
    ></path>
  </svg>
`;
const CAROUSEL_BUTTON_NEXT_SVG = `
  <svg viewBox="0 0 532 532" part="icon">
    <path 
      fill="currentColor" 
      d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
    ></path>
  </svg>
`;
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
let CarouselButton = class extends CarouselChild {
  constructor() {
    super(...arguments);
    this.events = ["init", "reInit", "select"];
  }
  get content() {
    switch (this.type) {
      case "next":
        return this.dir === "ltr" ? CAROUSEL_BUTTON_NEXT_SVG : CAROUSEL_BUTTON_PREVIOUS_SVG;
      case "previous":
        return this.dir === "rtl" ? CAROUSEL_BUTTON_NEXT_SVG : CAROUSEL_BUTTON_PREVIOUS_SVG;
      default:
        return this.type?.toString();
    }
  }
  get disabled() {
    switch (this.type) {
      case "next":
        return !this.api?.canScrollNext();
      case "previous":
        return !this.api?.canScrollPrev();
      default:
        return false;
    }
  }
  handleClick() {
    switch (this.type) {
      case "next":
        this.api?.scrollNext(this.jump);
        break;
      case "previous":
        this.api?.scrollPrev(this.jump);
        break;
      default:
        this.api?.scrollTo(this.type, this.jump);
        break;
    }
  }
  render() {
    return html`<button .disabled=${this.disabled} part="button" type="button" onClick=${this.handleClick}>
				<slot .innerHTML=${this.content}></slot>
			</button>`;
  }
};
CarouselButton.tag = "plus-carousel-button";
CarouselButton.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    type: 4
  })
], CarouselButton.prototype, "jump", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 144
  })
], CarouselButton.prototype, "type", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 0
  }),
  Variant()
], CarouselButton.prototype, "variant", 2);
__decorateClass([
  Property({
    type: 0
  }),
  Overrides()
], CarouselButton.prototype, "overrides", 2);
__decorateClass([
  Bind()
], CarouselButton.prototype, "handleClick", 1);
CarouselButton = __decorateClass([
  Element()
], CarouselButton);
export {
  CarouselButton
};
