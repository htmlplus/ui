import { P as PlusCore, b as jsx, c as Property, O as Overrides, V as Variant, d as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{display:flex;flex-wrap:wrap;flex-shrink:0;align-items:center;justify-content:flex-end;padding:.75rem;border-top:solid 1px rgba(0,0,0,.2);border-bottom-right-radius:calc(.3rem - 1px);border-bottom-left-radius:calc(.3rem - 1px)}:host ::slotted(*){margin:.25rem}";
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
let PlusDialogFooter = class extends PlusCore {
  render() {
    return /* @__PURE__ */ jsx("slot", {});
  }
};
PlusDialogFooter.tag = "plus-dialog-footer";
PlusDialogFooter.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    type: 1
  }),
  Overrides()
], PlusDialogFooter.prototype, "overrides", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 1
  }),
  Variant()
], PlusDialogFooter.prototype, "variant", 2);
PlusDialogFooter = __decorateClass([
  Element()
], PlusDialogFooter);
export {
  PlusDialogFooter
};
