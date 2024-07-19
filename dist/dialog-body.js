import { P as PlusCore, h as html, a as Property, b as Element } from "./core/index.js";
const STYLE_IMPORTED = ":host,\n:host::before,\n:host::after {\n  box-sizing: border-box;\n}\n\n:host *,\n:host *::before,\n:host *::after {\n  box-sizing: border-box;\n}\n\n:host([hidden]) {\n  display: none !important;\n}\n\n:host {\n  position: relative;\n  flex: 1 1 auto;\n  padding: 1rem;\n}\n\n:host([scrollable]) {\n  overflow: hidden;\n  overflow-y: auto;\n}";
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
let DialogBody = class extends PlusCore {
  render() {
    return html`<slot />`;
  }
};
DialogBody.tag = "plus-dialog-body";
DialogBody.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    reflect: true,
    type: 2
  })
], DialogBody.prototype, "scrollable", 2);
DialogBody = __decorateClass([
  Element()
], DialogBody);
export {
  DialogBody
};
