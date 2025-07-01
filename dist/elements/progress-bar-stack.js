import { P as PlusCore, h as html, E as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{background-color:#dcdcdc;border-radius:.25rem;display:flex;overflow:hidden}::slotted(plus-progress-bar){overflow:visible}";
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
let ProgressBarStack = class extends PlusCore {
  render() {
    return html`<slot />`;
  }
};
ProgressBarStack.tag = "plus-progress-bar-stack";
ProgressBarStack.style = STYLE_IMPORTED;
ProgressBarStack = __decorateClass([
  Element()
], ProgressBarStack);
export {
  ProgressBarStack
};
