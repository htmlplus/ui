import { P as PlusCore, o as on, a as off, b as _internal_h_, c as Property, O as Overrides, V as Variant, e as Event, B as Bind, d as Element } from "../core/index.js";
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
    return _internal_h_`<slot />`;
  }
};
PlusClickOutside.tag = "plus-click-outside";
__decorateClass([
  Property({
    type: 4
  })
], PlusClickOutside.prototype, "capture", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], PlusClickOutside.prototype, "disabled", 2);
__decorateClass([
  Property({
    type: 4
  })
], PlusClickOutside.prototype, "once", 2);
__decorateClass([
  Property({
    type: 0
  }),
  Overrides()
], PlusClickOutside.prototype, "overrides", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 0
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
