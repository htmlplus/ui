import { P as PlusCore, j as jsxs, b as jsx, c as Property, O as Overrides, V as Variant, S as State, C as Consumer, d as Element } from "../core/index.js";
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
let PlusDrawerToggler = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.connector = "";
  }
  render() {
    return /* @__PURE__ */ jsxs("host", { role: "button", state: this.drawer?.open ? "opened" : "closed", value: this, onClick: this.drawer?.toggle, children: [
      /* @__PURE__ */ jsx("slot", { children: this.drawer?.open ? "Close" : "Open" }),
      /* @__PURE__ */ jsx("slot", { name: this.drawer?.open ? "close" : "open" })
    ] });
  }
};
PlusDrawerToggler.tag = "plus-drawer-toggler";
PlusDrawerToggler.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    type: 1025
  })
], PlusDrawerToggler.prototype, "connector", 2);
__decorateClass([
  Property({
    type: 1
  }),
  Overrides()
], PlusDrawerToggler.prototype, "overrides", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 1
  }),
  Variant()
], PlusDrawerToggler.prototype, "variant", 2);
__decorateClass([
  State(),
  Consumer("drawer.connector")
], PlusDrawerToggler.prototype, "drawer", 2);
PlusDrawerToggler = __decorateClass([
  Element()
], PlusDrawerToggler);
export {
  PlusDrawerToggler
};
