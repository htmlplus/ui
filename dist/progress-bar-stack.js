import { P as PlusCore, h as html, b as Element } from "./core/index.js";
const STYLE_IMPORTED = ":host,\n:host::before,\n:host::after {\n  box-sizing: border-box;\n}\n\n:host *,\n:host *::before,\n:host *::after {\n  box-sizing: border-box;\n}\n\n:host([hidden]) {\n  display: none !important;\n}\n\n:host {\n  background-color: gainsboro;\n  border-radius: 0.25rem;\n  display: flex;\n  overflow: hidden;\n}\n\n::slotted(plus-progress-bar) {\n  overflow: visible;\n}";
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
