import { P as PlusCore, h as html, b as Element } from "./core/index.js";
const STYLE_IMPORTED = ":host,\n:host::before,\n:host::after {\n  box-sizing: border-box;\n}\n\n:host *,\n:host *::before,\n:host *::after {\n  box-sizing: border-box;\n}\n\n:host([hidden]) {\n  display: none !important;\n}\n\n:host {\n  display: flex;\n  flex-shrink: 0;\n  align-items: center;\n  justify-content: space-between;\n  padding: 1rem;\n  border-bottom: solid 1px rgba(0, 0, 0, 0.2);\n  border-top-right-radius: calc(0.3rem - 1px);\n  border-top-left-radius: calc(0.3rem - 1px);\n}";
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
