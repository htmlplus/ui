import { P as PlusCore, j as jsxs, a as jsx, b as Property, O as Overrides, V as Variant, S as State, C as Consumer, c as Element } from "../core/index.js";
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
  constructor() {
    super(...arguments);
    this.connector = "";
  }
  render() {
    return /* @__PURE__ */ jsxs("host", { role: "button", state: this.dialog?.open ? "opened" : "closed", value: this, onClick: this.dialog?.toggle, children: [
      /* @__PURE__ */ jsx("slot", { children: this.dialog?.open ? "Close" : "Open" }),
      /* @__PURE__ */ jsx("slot", { name: this.dialog?.open ? "close" : "open" })
    ] });
  }
};
PlusDialogToggler.tag = "plus-dialog-toggler";
PlusDialogToggler.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    type: 1024
  })
], PlusDialogToggler.prototype, "connector", 2);
__decorateClass([
  Property({
    type: 1
  }),
  Overrides()
], PlusDialogToggler.prototype, "overrides", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 1
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
