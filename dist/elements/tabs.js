import { P as PlusCore, h as html, a as Property, c as Event, f as Provider, E as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{display:flex;flex-direction:column;gap:.5rem}:host([vertical]){flex-direction:row}:host([vertical]) ::slotted(plus-tabs-bar){flex-direction:column}:host([vertical]) ::slotted(plus-tabs-bar[reverse]){flex-direction:column-reverse}";
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
    type: 640
  })
], Tabs.prototype, "value", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
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
