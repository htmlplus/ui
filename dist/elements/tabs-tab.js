import { P as PlusCore, _ as _internal_a_, b as _internal_h_, c as Property, V as Variant, O as Overrides, S as State, C as Consumer, B as Bind, d as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{display:flex;align-items:center;justify-content:center;user-select:none;padding:.5rem 1rem;background-color:#f5f5f5;text-align:center;gap:.5rem}:host([active]){background-color:#d3d3d3}:host([disabled]){opacity:.5}:host(:not([disabled])){cursor:pointer}";
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
let PlusTabsTab = class extends PlusCore {
  get active() {
    if (this.parent?.current === null) return false;
    if (this.parent?.current === void 0) return false;
    return this.parent?.current === this.value;
  }
  onClick() {
    if (!this.disabled && this.value) {
      this.parent?.change(this.value);
    }
  }
  render() {
    return _internal_h_`${_internal_a_(this, [{
      "onClick": this.onClick
    }])}
				<slot />
			`;
  }
};
PlusTabsTab.tag = "plus-tabs-tab";
PlusTabsTab.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], PlusTabsTab.prototype, "disabled", 2);
__decorateClass([
  Property({
    type: 512
  })
], PlusTabsTab.prototype, "value", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 0
  }),
  Variant()
], PlusTabsTab.prototype, "variant", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 0
  })
], PlusTabsTab.prototype, "active", 1);
__decorateClass([
  Property({
    type: 0
  }),
  Overrides()
], PlusTabsTab.prototype, "overrides", 2);
__decorateClass([
  State(),
  Consumer("tabs")
], PlusTabsTab.prototype, "parent", 2);
__decorateClass([
  Bind()
], PlusTabsTab.prototype, "onClick", 1);
PlusTabsTab = __decorateClass([
  Element()
], PlusTabsTab);
export {
  PlusTabsTab
};
