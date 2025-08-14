import { a as Property, O as Overrides, E as Element } from "../core/index.js";
import { CarouselChild } from "./carousel-child.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{display:inline-flex}";
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
let CarouselCounter = class extends CarouselChild {
  constructor() {
    super(...arguments);
    this.template = "%CURRENT% / %TOTAL%";
    this.events = ["init", "reInit", "select"];
  }
  get content() {
    return this.template.replaceAll("%TOTAL%", this.total).replaceAll("%CURRENT%", this.current);
  }
  get current() {
    var _a;
    const value = (_a = this.api) == null ? void 0 : _a.selectedScrollSnap();
    if (typeof value != "number") return "-";
    return `${value + 1}`;
  }
  get total() {
    var _a;
    const value = (_a = this.api) == null ? void 0 : _a.scrollSnapList().length;
    if (typeof value != "number") return "-";
    return `${value}`;
  }
  render() {
    return this.content;
  }
};
CarouselCounter.tag = "plus-carousel-counter";
CarouselCounter.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    type: 512
  })
], CarouselCounter.prototype, "template", 2);
__decorateClass([
  Property({
    type: 0
  }),
  Overrides()
], CarouselCounter.prototype, "overrides", 2);
CarouselCounter = __decorateClass([
  Element()
], CarouselCounter);
export {
  CarouselCounter
};
