import { P as PlusCore, t as toUnit, h as html, a as Property, S as Style, E as Element } from "../core/index.js";
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
let Stack = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.items = "center";
    this.justify = "center";
  }
  get style() {
    var _a, _b, _c;
    let direction = this.vertical ? "column" : "row";
    if (this.reverse) direction += "-reverse";
    return {
      "align-items": (_a = this.items) == null ? void 0 : _a.replace(/start|end/, "flex-$&"),
      "display": "flex",
      "flex-direction": direction,
      "gap": toUnit(this.gap),
      "justify-content": (_c = (_b = this.justify) == null ? void 0 : _b.replace(/start|end/, "flex-$&")) == null ? void 0 : _c.replace(/between|around|evenly/, "space-$&")
    };
  }
  render() {
    return html`<slot />`;
  }
};
Stack.tag = "plus-stack";
__decorateClass([
  Property({
    type: 640
  })
], Stack.prototype, "gap", 2);
__decorateClass([
  Property({
    type: 16
  })
], Stack.prototype, "items", 2);
__decorateClass([
  Property({
    type: 16
  })
], Stack.prototype, "justify", 2);
__decorateClass([
  Property({
    type: 4
  })
], Stack.prototype, "reverse", 2);
__decorateClass([
  Property({
    type: 4
  })
], Stack.prototype, "vertical", 2);
__decorateClass([
  Style()
], Stack.prototype, "style", 1);
Stack = __decorateClass([
  Element()
], Stack);
export {
  Stack
};
