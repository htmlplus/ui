import { P as PlusCore, h as html, c as Property, V as Variant, O as Overrides, f as Provider, d as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{display:block}";
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
let Accordions = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.state = {
      open: this.open.bind(this)
    };
  }
  open(target) {
    if (!this.persistent) return;
    for (const accordion of Array.from(this.$host.children)) {
      if (accordion === target) continue;
      if (!accordion["open"]) continue;
      accordion.shadowRoot.querySelector("[part=header]")["click"]();
    }
  }
  render() {
    return html`<slot />`;
  }
};
Accordions.tag = "plus-accordions";
Accordions.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    type: 4
  })
], Accordions.prototype, "persistent", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 0
  }),
  Variant()
], Accordions.prototype, "variant", 2);
__decorateClass([
  Property({
    type: 0
  }),
  Overrides()
], Accordions.prototype, "overrides", 2);
__decorateClass([
  Provider("accordions")
], Accordions.prototype, "state", 2);
Accordions = __decorateClass([
  Element()
], Accordions);
export {
  Accordions
};
