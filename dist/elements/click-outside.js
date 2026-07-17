import { P as PlusCore, o as on, l as off, a as jsx, b as Property, O as Overrides, V as Variant, E as Event, B as Bind, c as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{display:contents}";
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
let PlusClickOutside = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.capture = false;
    this.disabled = false;
    this.once = false;
  }
  initialize() {
    on(this.$host, "outside", this.onClickOutside, this.options);
  }
  terminate() {
    off(this.$host, "outside", this.onClickOutside, this.options);
  }
  onClickOutside() {
    if (this.once) {
      this.terminate();
    }
    this.plusClickOutside();
  }
  updatedCallback() {
    this.terminate();
    this.options = {
      capture: this.capture
    };
    if (this.disabled) return;
    this.initialize();
  }
  disconnectedCallback() {
    this.terminate();
  }
  render() {
    return /* @__PURE__ */ jsx("slot", {});
  }
};
PlusClickOutside.tag = "plus-click-outside";
PlusClickOutside.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    type: 8
  })
], PlusClickOutside.prototype, "capture", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], PlusClickOutside.prototype, "disabled", 2);
__decorateClass([
  Property({
    type: 8
  })
], PlusClickOutside.prototype, "once", 2);
__decorateClass([
  Property({
    type: 1
  }),
  Overrides()
], PlusClickOutside.prototype, "overrides", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 1
  }),
  Variant()
], PlusClickOutside.prototype, "variant", 2);
__decorateClass([
  Event({
    cancelable: true
  })
], PlusClickOutside.prototype, "plusClickOutside", 2);
__decorateClass([
  Bind()
], PlusClickOutside.prototype, "onClickOutside", 1);
PlusClickOutside = __decorateClass([
  Element()
], PlusClickOutside);
export {
  PlusClickOutside
};
