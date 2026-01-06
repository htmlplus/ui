import { P as PlusCore, b as _internal_h_, c as Property, V as Variant, O as Overrides, d as Element } from "../core/index.js";
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
let PlusDialogBody = class extends PlusCore {
  render() {
    return _internal_h_`<slot />`;
  }
};
PlusDialogBody.tag = "plus-dialog-body";
PlusDialogBody.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], PlusDialogBody.prototype, "scrollable", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 0
  }),
  Variant()
], PlusDialogBody.prototype, "variant", 2);
__decorateClass([
  Property({
    type: 0
  }),
  Overrides()
], PlusDialogBody.prototype, "overrides", 2);
PlusDialogBody = __decorateClass([
  Element()
], PlusDialogBody);
export {
  PlusDialogBody
};
