import { P as PlusCore, e as State, C as Consumer, B as Bind } from "../core/index.js";
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
class CarouselChild extends PlusCore {
  initialize() {
    if (!this.api) return;
    for (const event of this.events) {
      this.api.on(event, this.handleUpdate);
    }
  }
  terminate() {
    if (!this.api) return;
    for (const event of this.events) {
      this.api.off(event, this.handleUpdate);
    }
    this.api = void 0;
  }
  handleApiChange(api) {
    this.terminate();
    this.api = api;
    this.initialize();
  }
  handleUpdate() {
    this.forceUpdate();
  }
  readyCallback() {
    this.state?.register(this.$host);
  }
  updateCallback() {
    if (this.state?.api !== this.api) {
      this.handleApiChange(this.state?.api);
    }
  }
  disconnectedCallback() {
    this.terminate();
    this.state?.unregister(this.$host);
  }
}
__decorateClass([
  State(),
  Consumer("carousel")
], CarouselChild.prototype, "state", 2);
__decorateClass([
  Bind()
], CarouselChild.prototype, "handleUpdate", 1);
export {
  CarouselChild
};
