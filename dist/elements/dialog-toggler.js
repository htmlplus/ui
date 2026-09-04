import { P as PlusCore, j as jsxs, a as jsx, b as Property, O as Overrides, c as Preset, S as State, C as Consumer, d as Element } from "../core/index.js";
const STYLE_IMPORTED_PlusDialogToggler = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{display:inline-block;cursor:default;user-select:none}";
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
    return /* @__PURE__ */ jsxs(
      "host",
      {
        role: "button",
        state: this.dialog?.open ? "opened" : "closed",
        value: this,
        onClick: this.dialog?.toggle,
        children: [
          /* @__PURE__ */ jsx("slot", { children: this.dialog?.open ? "Close" : "Open" }),
          /* @__PURE__ */ jsx("slot", { name: this.dialog?.open ? "close" : "open" })
        ]
      }
    );
  }
};
PlusDialogToggler.style = STYLE_IMPORTED_PlusDialogToggler;
PlusDialogToggler.tag = "plus-dialog-toggler";
__decorateClass([
  Property({ type: 512 })
], PlusDialogToggler.prototype, "connector", 2);
__decorateClass([
  Property({ type: 256 }),
  Overrides()
], PlusDialogToggler.prototype, "overrides", 2);
__decorateClass([
  Property({ type: 1, reflect: true }),
  Preset()
], PlusDialogToggler.prototype, "preset", 2);
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
