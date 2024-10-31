import { P as PlusCore, h as html, d as attributes, a as Property, e as State, C as Consumer, B as Bind, E as Element } from "../core/index.js";
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
let TabsTab = class extends PlusCore {
  get active() {
    var _a, _b, _c;
    if (((_a = this.parent) == null ? void 0 : _a.current) === null) return false;
    if (((_b = this.parent) == null ? void 0 : _b.current) === void 0) return false;
    return ((_c = this.parent) == null ? void 0 : _c.current) === this.value;
  }
  onClick() {
    var _a;
    if (!this.disabled) {
      (_a = this.parent) == null ? void 0 : _a.change(this.value);
    }
  }
  render() {
    return html`${attributes(this, [{
      "onClick": this.onClick
    }])}
        <slot />
      `;
  }
};
TabsTab.tag = "plus-tabs-tab";
TabsTab.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], TabsTab.prototype, "disabled", 2);
__decorateClass([
  Property({
    type: 640
  })
], TabsTab.prototype, "value", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 0
  })
], TabsTab.prototype, "active", 1);
__decorateClass([
  State(),
  Consumer("tabs")
], TabsTab.prototype, "parent", 2);
__decorateClass([
  Bind()
], TabsTab.prototype, "onClick", 1);
TabsTab = __decorateClass([
  Element()
], TabsTab);
export {
  TabsTab
};
