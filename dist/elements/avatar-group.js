import { P as PlusCore, h as html, a as Property, E as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{align-items:center;display:inline-flex;flex-wrap:wrap}:host ::slotted(plus-avatar){margin-inline-end:.5rem}:host ::slotted(plus-avatar:last-of-type){margin-inline-end:0 !important}:host([hoverable]) ::slotted(plus-avatar:hover){z-index:1}:host([stacked]) ::slotted(plus-avatar){border:2px solid #fff;margin-inline-end:-0.5rem}";
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
    type: 4
  })
], AvatarGroup.prototype, "hoverable", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], AvatarGroup.prototype, "stacked", 2);
AvatarGroup = __decorateClass([
  Element()
], AvatarGroup);
export {
  AvatarGroup
};
