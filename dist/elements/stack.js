import { P as PlusCore, t as toCSSUnit, b as _internal_h_, c as Property, V as Variant, O as Overrides, g as Style, d as Element } from "../core/index.js";
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
let PlusStack = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.items = "center";
    this.justify = "center";
    this.wrap = false;
  }
  get style() {
    let direction = this.vertical ? "column" : "row";
    if (this.reverse) direction += "-reverse";
    return {
      "align-items": this.items?.replace(/start|end/, "flex-$&"),
      display: "flex",
      "flex-direction": direction,
      gap: toCSSUnit(this.gap),
      "justify-content": this.justify?.replace(/start|end/, "flex-$&")?.replace(/between|around|evenly/, "space-$&"),
      "flex-wrap": (() => {
        switch (this.wrap) {
          case false:
            return "nowrap";
          case true:
            return "wrap";
          case "reverse":
            return "wrap-reverse";
        }
      })()
    };
  }
  render() {
    return _internal_h_`<slot />`;
  }
};
PlusStack.tag = "plus-stack";
__decorateClass([
  Property({
    type: 640
  })
], PlusStack.prototype, "gap", 2);
__decorateClass([
  Property({
    type: 16
  })
], PlusStack.prototype, "items", 2);
__decorateClass([
  Property({
    type: 16
  })
], PlusStack.prototype, "justify", 2);
__decorateClass([
  Property({
    type: 4
  })
], PlusStack.prototype, "reverse", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 0
  }),
  Variant()
], PlusStack.prototype, "variant", 2);
__decorateClass([
  Property({
    type: 4
  })
], PlusStack.prototype, "vertical", 2);
__decorateClass([
  Property({
    type: 20
  })
], PlusStack.prototype, "wrap", 2);
__decorateClass([
  Property({
    type: 0
  }),
  Overrides()
], PlusStack.prototype, "overrides", 2);
__decorateClass([
  Style()
], PlusStack.prototype, "style", 1);
PlusStack = __decorateClass([
  Element()
], PlusStack);
export {
  PlusStack
};
