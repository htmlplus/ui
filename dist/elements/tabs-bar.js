import { P as PlusCore, b as jsx, c as Property, O as Overrides, V as Variant, d as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{flex:0 0 auto;display:flex;overflow:auto}:host([reverse]){flex-direction:row-reverse}:host([grow]) ::slotted(plus-tabs-tab){flex-grow:1}:host([justify=start]),:host([justify=end][reverse]){justify-content:flex-start}:host([justify=center]){justify-content:center}:host([justify=end]),:host([justify=start][reverse]){justify-content:flex-end}";
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
let PlusTabsBar = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.grow = false;
    this.justify = "start";
    this.reverse = false;
  }
  render() {
    return /* @__PURE__ */ jsx("host", { role: "tablist", value: this, children: /* @__PURE__ */ jsx("slot", {}) });
  }
};
PlusTabsBar.tag = "plus-tabs-bar";
PlusTabsBar.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], PlusTabsBar.prototype, "grow", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 32
  })
], PlusTabsBar.prototype, "justify", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], PlusTabsBar.prototype, "reverse", 2);
__decorateClass([
  Property({
    type: 1
  }),
  Overrides()
], PlusTabsBar.prototype, "overrides", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 1
  }),
  Variant()
], PlusTabsBar.prototype, "variant", 2);
PlusTabsBar = __decorateClass([
  Element()
], PlusTabsBar);
export {
  PlusTabsBar
};
