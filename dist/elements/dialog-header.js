import { P as PlusCore, h as html, E as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{display:flex;flex-shrink:0;align-items:center;justify-content:space-between;padding:1rem;border-bottom:solid 1px rgba(0,0,0,.2);border-top-right-radius:calc(.3rem - 1px);border-top-left-radius:calc(.3rem - 1px)}";
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
let DialogHeader = class extends PlusCore {
  render() {
    return html`<slot />`;
  }
};
DialogHeader.tag = "plus-dialog-header";
DialogHeader.style = STYLE_IMPORTED;
DialogHeader = __decorateClass([
  Element()
], DialogHeader);
export {
  DialogHeader
};
