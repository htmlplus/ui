import { P as PlusCore, a as jsx, b as Property, O as Overrides, c as Preset, d as Element } from "../core/index.js";
const STYLE_IMPORTED_PlusCenter = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{display:flex;align-items:center;justify-content:center}:host([inline]){display:inline-flex}";
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
let PlusCenter = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.inline = false;
  }
  render() {
    return /* @__PURE__ */ jsx("slot", {});
  }
};
PlusCenter.style = STYLE_IMPORTED_PlusCenter;
PlusCenter.tag = "plus-center";
__decorateClass([
  Property({ type: 8, reflect: true })
], PlusCenter.prototype, "inline", 2);
__decorateClass([
  Property({ type: 256 }),
  Overrides()
], PlusCenter.prototype, "overrides", 2);
__decorateClass([
  Property({ type: 1, reflect: true }),
  Preset()
], PlusCenter.prototype, "preset", 2);
PlusCenter = __decorateClass([
  Element()
], PlusCenter);
export {
  PlusCenter
};
