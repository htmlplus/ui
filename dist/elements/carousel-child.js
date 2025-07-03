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
    var _a;
    (_a = this.state) == null ? void 0 : _a.register(this.$host);
  }
  updateCallback() {
    var _a, _b;
    if (((_a = this.state) == null ? void 0 : _a.api) != this.api) {
      this.handleApiChange((_b = this.state) == null ? void 0 : _b.api);
    }
  }
  disconnectedCallback() {
    var _a;
    this.terminate();
    (_a = this.state) == null ? void 0 : _a.unregister(this.$host);
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
