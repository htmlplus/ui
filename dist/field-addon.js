import { P as PlusCore, h as html, b as Element } from "./core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{align-self:stretch;display:flex;align-items:center;white-space:nowrap;border:solid 1px #d3d3d3;border-radius:.25rem}";
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
let FieldAddon = class extends PlusCore {
  render() {
    return html`<slot />`;
  }
};
FieldAddon.tag = "plus-field-addon";
FieldAddon.style = STYLE_IMPORTED;
FieldAddon = __decorateClass([
  Element()
], FieldAddon);
export {
  FieldAddon
};
