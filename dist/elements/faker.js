import { P as PlusCore, E as ExternalDependencyError, c as Property, V as Variant, O as Overrides, d as Element } from "../core/index.js";
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
let Faker = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.api = "lorem.paragraph";
    this.arguments = [];
  }
  get content() {
    const method = this.api?.split(".").reduce((result, key) => result?.[key], this.instance);
    if (!method) return null;
    this.instance.seed(this.seed);
    return method(...this.arguments) || null;
  }
  connectedCallback() {
    if (this.instance) return;
    import("@faker-js/faker").then((module) => {
      this.instance = module.default?.faker || module.faker;
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
Faker.tag = "plus-faker";
Faker.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    type: 512
  })
], Faker.prototype, "api", 2);
__decorateClass([
  Property({
    type: 1
  })
], Faker.prototype, "arguments", 2);
__decorateClass([
  Property({
    type: 0
  })
], Faker.prototype, "instance", 2);
__decorateClass([
  Property({
    type: 128
  })
], Faker.prototype, "seed", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 0
  }),
  Variant()
], Faker.prototype, "variant", 2);
__decorateClass([
  Property({
    type: 0
  }),
  Overrides()
], Faker.prototype, "overrides", 2);
Faker = __decorateClass([
  Element()
], Faker);
export {
  Faker
};
