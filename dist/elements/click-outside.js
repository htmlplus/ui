import { P as PlusCore, o as on, b as off, h as html, a as Property, c as Event, W as Watch, B as Bind, E as Element } from "../core/index.js";
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
let ClickOutside = class extends PlusCore {
  get options() {
    return {
      capture: this.capture
    };
  }
  watcher(next, prev, name) {
    switch (name) {
      case "disabled":
        next ? this.terminate() : this.initialize();
        break;
      case "capture":
      case "once":
        this.terminate();
        this.initialize();
        break;
    }
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
  connectedCallback() {
    if (this.disabled) return;
    this.initialize();
  }
  disconnectedCallback() {
    this.terminate();
  }
  render() {
    return html`<slot />`;
  }
};
ClickOutside.tag = "plus-click-outside";
__decorateClass([
  Property({
    type: 4
  })
], ClickOutside.prototype, "capture", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], ClickOutside.prototype, "disabled", 2);
__decorateClass([
  Property({
    type: 4
  })
], ClickOutside.prototype, "once", 2);
__decorateClass([
  Event({
    cancelable: true
  })
], ClickOutside.prototype, "plusClickOutside", 2);
__decorateClass([
  Watch(["capture", "disabled", "once"])
], ClickOutside.prototype, "watcher", 1);
__decorateClass([
  Bind()
], ClickOutside.prototype, "onClickOutside", 1);
ClickOutside = __decorateClass([
  Element()
], ClickOutside);
export {
  ClickOutside
};
