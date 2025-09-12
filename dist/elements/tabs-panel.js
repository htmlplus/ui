import { P as PlusCore, h as html, c as Property, V as Variant, O as Overrides, S as State, C as Consumer, d as Element } from "../core/index.js";
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
let TabsPanel = class extends PlusCore {
  get active() {
    if (this.parent?.current === null) return false;
    if (this.parent?.current === void 0) return false;
    return this.parent?.current === this.value;
  }
  render() {
    return html`
				<slot />
			`;
  }
};
TabsPanel.tag = "plus-tabs-panel";
TabsPanel.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    type: 640
  })
], TabsPanel.prototype, "value", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 0
  }),
  Variant()
], TabsPanel.prototype, "variant", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 0
  })
], TabsPanel.prototype, "active", 1);
__decorateClass([
  Property({
    type: 0
  }),
  Overrides()
], TabsPanel.prototype, "overrides", 2);
__decorateClass([
  State(),
  Consumer("tabs")
], TabsPanel.prototype, "parent", 2);
TabsPanel = __decorateClass([
  Element()
], TabsPanel);
export {
  TabsPanel
};
