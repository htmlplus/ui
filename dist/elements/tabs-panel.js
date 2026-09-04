import { P as PlusCore, a as jsx, b as Property, O as Overrides, c as Preset, S as State, C as Consumer, d as Element } from "../core/index.js";
const STYLE_IMPORTED_PlusTabsPanel = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{display:none}:host([active]){display:block}";
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
PlusTabsPanel.style = STYLE_IMPORTED_PlusTabsPanel;
PlusTabsPanel.tag = "plus-tabs-panel";
__decorateClass([
  Property({ type: 512 })
], PlusTabsPanel.prototype, "value", 2);
__decorateClass([
  Property({ type: 8, reflect: true })
], PlusTabsPanel.prototype, "active", 1);
__decorateClass([
  Property({ type: 256 }),
  Overrides()
], PlusTabsPanel.prototype, "overrides", 2);
__decorateClass([
  Property({ type: 1, reflect: true }),
  Preset()
], PlusTabsPanel.prototype, "preset", 2);
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
