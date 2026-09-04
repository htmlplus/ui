import { P as PlusCore, a as jsx, b as Property, O as Overrides, c as Preset, E as Event, e as Provider, d as Element } from "../core/index.js";
const STYLE_IMPORTED_PlusTabs = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{display:flex;flex-direction:column;gap:.5rem}:host([vertical]){flex-direction:row}:host([vertical]) ::slotted(plus-tabs-bar){flex-direction:column}:host([vertical]) ::slotted(plus-tabs-bar[reverse]){flex-direction:column-reverse}";
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
let PlusTabs = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.vertical = false;
  }
  get state() {
    return {
      current: this.value,
      change: this.change.bind(this)
    };
  }
  change(value) {
    const event = this.plusChange(value);
    if (event.defaultPrevented) return;
    this.value = value;
  }
  render() {
    return /* @__PURE__ */ jsx("slot", {});
  }
};
PlusTabs.style = STYLE_IMPORTED_PlusTabs;
PlusTabs.tag = "plus-tabs";
__decorateClass([
  Property({ type: 512 })
], PlusTabs.prototype, "value", 2);
__decorateClass([
  Property({ type: 8, reflect: true })
], PlusTabs.prototype, "vertical", 2);
__decorateClass([
  Property({ type: 256 }),
  Overrides()
], PlusTabs.prototype, "overrides", 2);
__decorateClass([
  Property({ type: 1, reflect: true }),
  Preset()
], PlusTabs.prototype, "preset", 2);
__decorateClass([
  Event({ cancelable: true })
], PlusTabs.prototype, "plusChange", 2);
__decorateClass([
  Provider("tabs")
], PlusTabs.prototype, "state", 1);
PlusTabs = __decorateClass([
  Element()
], PlusTabs);
export {
  PlusTabs
};
