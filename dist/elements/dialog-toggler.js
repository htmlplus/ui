import { P as PlusCore, h as html, d as attributes, a as Property, e as State, C as Consumer, E as Element } from "../core/index.js";
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
let DialogToggler = class extends PlusCore {
  render() {
    var _a, _b, _c, _d;
    return html`${attributes(this, [{
      "role": "button"
    }, {
      "state": ((_a = this.dialog) == null ? void 0 : _a.open) ? "opened" : "closed"
    }, {
      "onClick": (_b = this.dialog) == null ? void 0 : _b.toggle
    }])}
        <slot>${((_c = this.dialog) == null ? void 0 : _c.open) ? "Close" : "Open"}</slot>
        <slot name=${((_d = this.dialog) == null ? void 0 : _d.open) ? "close" : "open"}></slot>
      `;
  }
};
DialogToggler.tag = "plus-dialog-toggler";
DialogToggler.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    type: 512
  })
], DialogToggler.prototype, "connector", 2);
__decorateClass([
  State(),
  Consumer("dialog.connector")
], DialogToggler.prototype, "dialog", 2);
DialogToggler = __decorateClass([
  Element()
], DialogToggler);
export {
  DialogToggler
};
