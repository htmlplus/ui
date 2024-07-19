import { P as PlusCore, h as html, j as attributes, a as Property, S as State, C as Consumer, B as Bind, b as Element } from "./core/index.js";
const STYLE_IMPORTED = ":host,\n:host::before,\n:host::after {\n  box-sizing: border-box;\n}\n\n:host *,\n:host *::before,\n:host *::after {\n  box-sizing: border-box;\n}\n\n:host([hidden]) {\n  display: none !important;\n}\n\n:host {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  user-select: none;\n  padding: 0.5rem 1rem;\n  background-color: whitesmoke;\n  text-align: center;\n  gap: 0.5rem;\n}\n\n:host([active]) {\n  background-color: lightgray;\n}\n\n:host([disabled]) {\n  opacity: 0.5;\n}\n\n:host(:not([disabled])) {\n  cursor: pointer;\n}";
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
    type: 2
  })
], TabsTab.prototype, "disabled", 2);
__decorateClass([
  Property({
    type: 320
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
