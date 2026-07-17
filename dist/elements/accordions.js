import { P as PlusCore, a as jsx, b as Property, O as Overrides, V as Variant, d as Provider, c as Element } from "../core/index.js";
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
let PlusAccordions = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.persistent = false;
    this.state = {
      open: this.open.bind(this)
    };
  }
  open(target) {
    if (!this.persistent) return;
    for (const accordion of Array.from(this.$host.children)) {
      if (accordion === target) continue;
      if (!("open" in accordion)) continue;
      if (!accordion.open) continue;
      accordion.shadowRoot?.querySelector("[part=header]")?.click?.();
    }
  }
  render() {
    return /* @__PURE__ */ jsx("slot", {});
  }
};
PlusAccordions.tag = "plus-accordions";
PlusAccordions.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    type: 8
  })
], PlusAccordions.prototype, "persistent", 2);
__decorateClass([
  Property({
    type: 1
  }),
  Overrides()
], PlusAccordions.prototype, "overrides", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 1
  }),
  Variant()
], PlusAccordions.prototype, "variant", 2);
__decorateClass([
  Provider("accordions")
], PlusAccordions.prototype, "state", 2);
PlusAccordions = __decorateClass([
  Element()
], PlusAccordions);
export {
  PlusAccordions
};
