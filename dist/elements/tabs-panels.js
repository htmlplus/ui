import { P as PlusCore, a as jsx, b as Property, O as Overrides, c as Preset, d as Element } from "../core/index.js";
const STYLE_IMPORTED_PlusTabsPanels = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{display:block}";
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
let PlusTabsPanels = class extends PlusCore {
  render() {
    return /* @__PURE__ */ jsx("slot", {});
  }
};
PlusTabsPanels.style = STYLE_IMPORTED_PlusTabsPanels;
PlusTabsPanels.tag = "plus-tabs-panels";
__decorateClass([
  Property({ type: 256 }),
  Overrides()
], PlusTabsPanels.prototype, "overrides", 2);
__decorateClass([
  Property({ type: 1, reflect: true }),
  Preset()
], PlusTabsPanels.prototype, "preset", 2);
PlusTabsPanels = __decorateClass([
  Element()
], PlusTabsPanels);
export {
  PlusTabsPanels
};
