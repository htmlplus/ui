import { P as PlusCore, h as html, a as Property, E as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{display:flex;align-items:center;justify-content:center}:host([inline]){display:inline-flex}";
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
let Center = class extends PlusCore {
  render() {
    return html`<slot />`;
  }
};
Center.tag = "plus-center";
Center.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], Center.prototype, "inline", 2);
Center = __decorateClass([
  Element()
], Center);
export {
  Center
};
