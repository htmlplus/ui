import { P as PlusCore, a as jsx, b as Property, O as Overrides, V as Variant, c as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{position:relative;display:flex;flex-direction:column;background-color:#fff;background-clip:padding-box;border:solid 1px rgba(0,0,0,.2);border-radius:.3rem;box-shadow:0 3px 6px rgba(0,0,0,.16),0 3px 6px rgba(0,0,0,.23);outline:0}";
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
let PlusDialogContent = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.scrollable = false;
  }
  render() {
    return /* @__PURE__ */ jsx("slot", {});
  }
};
PlusDialogContent.tag = "plus-dialog-content";
PlusDialogContent.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], PlusDialogContent.prototype, "scrollable", 2);
__decorateClass([
  Property({
    type: 1
  }),
  Overrides()
], PlusDialogContent.prototype, "overrides", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 1
  }),
  Variant()
], PlusDialogContent.prototype, "variant", 2);
PlusDialogContent = __decorateClass([
  Element()
], PlusDialogContent);
export {
  PlusDialogContent
};
