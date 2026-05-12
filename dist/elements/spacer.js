import { P as PlusCore, c as Property, O as Overrides, V as Variant, g as Style, d as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{display:block}";
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
let PlusSpacer = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.grow = 1;
  }
  get style() {
    return {
      ":host": {
        "flex-grow": this.grow
      }
    };
  }
};
PlusSpacer.tag = "plus-spacer";
PlusSpacer.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    type: 257
  })
], PlusSpacer.prototype, "grow", 2);
__decorateClass([
  Property({
    type: 1
  }),
  Overrides()
], PlusSpacer.prototype, "overrides", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 1
  }),
  Variant()
], PlusSpacer.prototype, "variant", 2);
__decorateClass([
  Style()
], PlusSpacer.prototype, "style", 1);
PlusSpacer = __decorateClass([
  Element()
], PlusSpacer);
export {
  PlusSpacer
};
