import { P as PlusCore, a as Property, S as Style, E as Element } from "../core/index.js";
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
let Spacer = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.grow = 1;
  }
  get attributes() {
    return {
      style: `flex-grow: ${this.grow};`
    };
  }
};
Spacer.tag = "plus-spacer";
Spacer.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    type: 128
  })
], Spacer.prototype, "grow", 2);
__decorateClass([
  Style()
], Spacer.prototype, "attributes", 1);
Spacer = __decorateClass([
  Element()
], Spacer);
export {
  Spacer
};
