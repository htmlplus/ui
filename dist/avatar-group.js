import { P as PlusCore, h as html, a as Property, b as Element } from "./core/index.js";
const STYLE_IMPORTED = ":host,\n:host::before,\n:host::after {\n  box-sizing: border-box;\n}\n\n:host *,\n:host *::before,\n:host *::after {\n  box-sizing: border-box;\n}\n\n:host([hidden]) {\n  display: none !important;\n}\n\n:host {\n  align-items: center;\n  display: inline-flex;\n  flex-wrap: wrap;\n}\n\n:host ::slotted(plus-avatar) {\n  margin-inline-end: 0.5rem;\n}\n\n:host ::slotted(plus-avatar:last-of-type) {\n  margin-inline-end: 0 !important;\n}\n\n:host([hoverable]) ::slotted(plus-avatar:hover) {\n  z-index: 1;\n}\n\n:host([stacked]) ::slotted(plus-avatar) {\n  border: 2px solid white;\n  margin-inline-end: -0.5rem;\n}";
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
let AvatarGroup = class extends PlusCore {
  render() {
    return html`<slot />`;
  }
};
AvatarGroup.tag = "plus-avatar-group";
AvatarGroup.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    reflect: true,
    type: 2
  })
], AvatarGroup.prototype, "hoverable", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 2
  })
], AvatarGroup.prototype, "stacked", 2);
AvatarGroup = __decorateClass([
  Element()
], AvatarGroup);
export {
  AvatarGroup
};
