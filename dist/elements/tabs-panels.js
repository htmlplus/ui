import { P as PlusCore, h as html, c as Property, O as Overrides, V as Variant, d as Element } from "../core/index.js";
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
let TabsPanels = class extends PlusCore {
  render() {
    return html`<slot />`;
  }
};
TabsPanels.tag = "plus-tabs-panels";
TabsPanels.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    type: 0
  }),
  Overrides()
], TabsPanels.prototype, "overrides", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 0
  }),
  Variant()
], TabsPanels.prototype, "variant", 2);
TabsPanels = __decorateClass([
  Element()
], TabsPanels);
export {
  TabsPanels
};
