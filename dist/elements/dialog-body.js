import { P as PlusCore, h as html, a as Property, E as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{position:relative;flex:1 1 auto;padding:1rem}:host([scrollable]){overflow:hidden;overflow-y:auto}";
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
let DialogBody = class extends PlusCore {
  render() {
    return html`<slot />`;
  }
};
DialogBody.tag = "plus-dialog-body";
DialogBody.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], DialogBody.prototype, "scrollable", 2);
DialogBody = __decorateClass([
  Element()
], DialogBody);
export {
  DialogBody
};
