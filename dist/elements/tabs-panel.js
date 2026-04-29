import { P as PlusCore, b as jsx, c as Property, O as Overrides, V as Variant, S as State, C as Consumer, d as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{display:none}:host([active]){display:block}";
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
let PlusTabsPanel = class extends PlusCore {
  get active() {
    if (this.parent?.current === null) return false;
    if (this.parent?.current === void 0) return false;
    return this.parent?.current === this.value;
  }
  render() {
    return /* @__PURE__ */ jsx("host", { value: this, children: /* @__PURE__ */ jsx("slot", {}) });
  }
};
PlusTabsPanel.tag = "plus-tabs-panel";
PlusTabsPanel.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    type: 512
  })
], PlusTabsPanel.prototype, "value", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 0
  })
], PlusTabsPanel.prototype, "active", 1);
__decorateClass([
  Property({
    type: 0
  }),
  Overrides()
], PlusTabsPanel.prototype, "overrides", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 0
  }),
  Variant()
], PlusTabsPanel.prototype, "variant", 2);
__decorateClass([
  State(),
  Consumer("tabs")
], PlusTabsPanel.prototype, "parent", 2);
PlusTabsPanel = __decorateClass([
  Element()
], PlusTabsPanel);
export {
  PlusTabsPanel
};
