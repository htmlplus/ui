import { P as PlusCore, a as jsx, b as Property, O as Overrides, c as Preset, d as Element } from "../core/index.js";
const STYLE_IMPORTED_PlusProgressBarStack = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{background-color:#dcdcdc;border-radius:.25rem;display:flex;overflow:hidden}::slotted(plus-progress-bar){overflow:visible}";
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
let PlusProgressBarStack = class extends PlusCore {
  render() {
    return /* @__PURE__ */ jsx("slot", {});
  }
};
PlusProgressBarStack.style = STYLE_IMPORTED_PlusProgressBarStack;
PlusProgressBarStack.tag = "plus-progress-bar-stack";
__decorateClass([
  Property({ type: 256 }),
  Overrides()
], PlusProgressBarStack.prototype, "overrides", 2);
__decorateClass([
  Property({ type: 1, reflect: true }),
  Preset()
], PlusProgressBarStack.prototype, "preset", 2);
PlusProgressBarStack = __decorateClass([
  Element()
], PlusProgressBarStack);
export {
  PlusProgressBarStack
};
