import { n as classes, h as html, a as Property, S as Style, E as Element } from "../core/index.js";
import { CarouselChild } from "./carousel-child.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{display:inline-flex}.root{transition:all .5s ease;display:flex;align-items:center}button{background-color:#d3d3d3;border:solid .25rem rgba(0,0,0,0);width:1.25rem;height:1.25rem;border-radius:50%;transition:all .5s ease;appearance:none;background-clip:padding-box;touch-action:manipulation;text-decoration:none;padding:0;margin:0;display:flex;align-items:center;justify-content:center;flex:0 0 auto;min-width:0}button.selected{background-color:gray}:host([numbers]) button{width:2rem;height:2rem}:host([clickable]) button{cursor:pointer}:host([infinity]){width:0}:host([infinity]) .root{transform:translateX(calc(var(--plus-carousel-indicators-selected) * -1.25rem - 0.625rem))}:host([infinity]) button{scale:0}:host([infinity]) button.selected{scale:1}:host([infinity]) :is(.prev-1,.next-1){scale:.75}:host([infinity]) :is(.prev-2,.next-2){scale:.5}";
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
let CarouselIndicators = class extends CarouselChild {
  constructor() {
    super(...arguments);
    this.events = ["init", "reInit", "select"];
  }
  get indexes() {
    var _a;
    return ((_a = this.api) == null ? void 0 : _a.slideNodes().map((_, index) => index)) || [];
  }
  scrollTo(index) {
    var _a;
    if (this.clickable) {
      (_a = this.api) == null ? void 0 : _a.scrollTo(index, this.clickable === "jump");
    }
  }
  get style() {
    var _a;
    return {
      "--plus-carousel-indicators-selected": ((_a = this.api) == null ? void 0 : _a.selectedScrollSnap()) || 0
    };
  }
  getClass(index) {
    const selected = this.api.selectedScrollSnap();
    return classes({
      selected: selected === index,
      prev: selected > index ? Math.abs(selected - index) : false,
      next: selected < index ? Math.abs(selected - index) : false
    });
  }
  render() {
    return html`<div class="root" part="root">
        ${this.indexes.map((index) => html`<button part="indicator" type="button" class=${this.getClass(index)} onClick=${() => this.scrollTo(index)}>
            ${this.numbers ? index + 1 : ""}
          </button>`)}
      </div>`;
  }
};
CarouselIndicators.tag = "plus-carousel-indicators";
CarouselIndicators.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    reflect: true,
    type: 20
  })
], CarouselIndicators.prototype, "clickable", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], CarouselIndicators.prototype, "infinity", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], CarouselIndicators.prototype, "numbers", 2);
__decorateClass([
  Style()
], CarouselIndicators.prototype, "style", 1);
CarouselIndicators = __decorateClass([
  Element()
], CarouselIndicators);
export {
  CarouselIndicators
};
