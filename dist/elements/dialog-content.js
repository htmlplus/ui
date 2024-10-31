import { P as PlusCore, h as html, a as Property, E as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{position:relative;display:flex;flex-direction:column;background-color:#fff;background-clip:padding-box;border:solid 1px rgba(0,0,0,.2);border-radius:.3rem;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);outline:0}";
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
let DialogContent = class extends PlusCore {
  render() {
    return html`<slot />`;
  }
};
DialogContent.tag = "plus-dialog-content";
DialogContent.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], DialogContent.prototype, "scrollable", 2);
DialogContent = __decorateClass([
  Element()
], DialogContent);
export {
  DialogContent
};
