import { P as PlusCore, h as html, a as Property, E as Event, c as Provider, b as Element } from "./core/index.js";
const STYLE_IMPORTED = ":host,\n:host::before,\n:host::after {\n  box-sizing: border-box;\n}\n\n:host *,\n:host *::before,\n:host *::after {\n  box-sizing: border-box;\n}\n\n:host([hidden]) {\n  display: none !important;\n}\n\n:host {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n:host([vertical]) {\n  flex-direction: row;\n}\n:host([vertical]) ::slotted(plus-tabs-bar) {\n  flex-direction: column;\n}\n:host([vertical]) ::slotted(plus-tabs-bar[reverse]) {\n  flex-direction: column-reverse;\n}";
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
let Tabs = class extends PlusCore {
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
    return html`<slot />`;
  }
};
Tabs.tag = "plus-tabs";
Tabs.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    type: 320
  })
], Tabs.prototype, "value", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 2
  })
], Tabs.prototype, "vertical", 2);
__decorateClass([
  Event({
    cancelable: true
  })
], Tabs.prototype, "plusChange", 2);
__decorateClass([
  Provider("tabs")
], Tabs.prototype, "state", 1);
Tabs = __decorateClass([
  Element()
], Tabs);
export {
  Tabs
};
