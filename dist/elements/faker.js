import { P as PlusCore, a as Property, E as Element } from "../core/index.js";
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
    var _a;
    const method = (_a = this.api) == null ? void 0 : _a.split(".").reduce((result, key) => result == null ? void 0 : result[key], this.instance);
    if (!method) return null;
    this.instance.seed(this.seed);
    return method(...this.arguments) || null;
  }
  connectedCallback() {
    if (this.instance) return;
    return import("@faker-js/faker").then((module) => {
      this.instance = module.faker;
    }).catch(() => {
      throw new Error("The `faker` element depends on an external package, but it doesn't seem to be installed. Running `npm install @faker-js/faker` will fix this problem.");
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
Faker = __decorateClass([
  Element()
], Faker);
export {
  Faker
};
