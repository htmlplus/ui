import { P as PlusCore, E as ExternalDependencyError, c as Property, O as Overrides, V as Variant, d as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{white-space:pre-wrap}";
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
let PlusFaker = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.api = "lorem.paragraph";
    this.arguments = [];
  }
  get content() {
    const method = this.api.split(".").reduce((result, key) => result?.[key], this.instance);
    if (!method) return null;
    this.instance?.seed(this.seed);
    return method(...this.arguments || []) || null;
  }
  connectedCallback() {
    if (this.instance) return;
    import("@faker-js/faker").then((module) => {
      this.instance = module.faker;
    }).catch((error) => {
      throw new ExternalDependencyError(this.$host, "@faker-js/faker", {
        cause: error
      });
    });
  }
  render() {
    return this.content;
  }
};
PlusFaker.tag = "plus-faker";
PlusFaker.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    type: 1024
  })
], PlusFaker.prototype, "api", 2);
__decorateClass([
  Property({
    type: 2
  })
], PlusFaker.prototype, "arguments", 2);
__decorateClass([
  Property({
    type: 1
  })
], PlusFaker.prototype, "instance", 2);
__decorateClass([
  Property({
    type: 256
  })
], PlusFaker.prototype, "seed", 2);
__decorateClass([
  Property({
    type: 1
  }),
  Overrides()
], PlusFaker.prototype, "overrides", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 1
  }),
  Variant()
], PlusFaker.prototype, "variant", 2);
PlusFaker = __decorateClass([
  Element()
], PlusFaker);
export {
  PlusFaker
};
