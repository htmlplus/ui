import { P as PlusCore, a as Property, f as Style, b as Element } from "./core/index.js";
const STYLE_IMPORTED = ":host,\n:host::before,\n:host::after {\n  box-sizing: border-box;\n}\n\n:host *,\n:host *::before,\n:host *::after {\n  box-sizing: border-box;\n}\n\n:host([hidden]) {\n  display: none !important;\n}\n\n:host {\n  display: block;\n}";
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
    type: 64
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
