import { P as PlusCore, _ as _internal_a_, b as _internal_h_, c as Property, O as Overrides, V as Variant, S as State, C as Consumer, d as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{display:inline-block;cursor:default;user-select:none}";
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
let PlusDialogToggler = class extends PlusCore {
  render() {
    return _internal_h_`${_internal_a_(this, [{
      "role": "button"
    }, {
      "state": this.dialog?.open ? "opened" : "closed"
    }, {
      "onClick": this.dialog?.toggle
    }])}
				<slot>${this.dialog?.open ? "Close" : "Open"}</slot>
				<slot name=${this.dialog?.open ? "close" : "open"}></slot>
			`;
  }
};
PlusDialogToggler.tag = "plus-dialog-toggler";
PlusDialogToggler.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    type: 512
  })
], PlusDialogToggler.prototype, "connector", 2);
__decorateClass([
  Property({
    type: 0
  }),
  Overrides()
], PlusDialogToggler.prototype, "overrides", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 0
  }),
  Variant()
], PlusDialogToggler.prototype, "variant", 2);
__decorateClass([
  State(),
  Consumer("dialog.connector")
], PlusDialogToggler.prototype, "dialog", 2);
PlusDialogToggler = __decorateClass([
  Element()
], PlusDialogToggler);
export {
  PlusDialogToggler
};
