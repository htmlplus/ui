import { P as PlusCore, b as attributes, h as html, c as Property, O as Overrides, V as Variant, S as State, C as Consumer, d as Element } from "../core/index.js";
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
let DrawerToggler = class extends PlusCore {
  render() {
    return html`${attributes(this, [{
      "role": "button"
    }, {
      "state": this.drawer?.open ? "opened" : "closed"
    }, {
      "onClick": this.drawer?.toggle
    }])}
				<slot>${this.drawer?.open ? "Close" : "Open"}</slot>
				<slot name=${this.drawer?.open ? "close" : "open"}></slot>
			`;
  }
};
DrawerToggler.tag = "plus-drawer-toggler";
DrawerToggler.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    type: 512
  })
], DrawerToggler.prototype, "connector", 2);
__decorateClass([
  Property({
    type: 0
  }),
  Overrides()
], DrawerToggler.prototype, "overrides", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 0
  }),
  Variant()
], DrawerToggler.prototype, "variant", 2);
__decorateClass([
  State(),
  Consumer("drawer.connector")
], DrawerToggler.prototype, "drawer", 2);
DrawerToggler = __decorateClass([
  Element()
], DrawerToggler);
export {
  DrawerToggler
};
