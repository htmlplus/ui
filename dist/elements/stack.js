import { P as PlusCore, t as toCSSUnit, b as jsx, c as Property, O as Overrides, V as Variant, g as Style, d as Element } from "../core/index.js";
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
    this.gap = 0;
    this.items = "center";
    this.justify = "center";
    this.reverse = false;
    this.vertical = false;
    this.wrap = false;
  }
  get style() {
    let direction = this.vertical ? "column" : "row";
    if (this.reverse) direction += "-reverse";
    return {
      ":host": {
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
      }
    };
  }
  render() {
    return /* @__PURE__ */ jsx("slot", {});
  }
};
PlusStack.tag = "plus-stack";
__decorateClass([
  Property({
    type: 1280
  })
], PlusStack.prototype, "gap", 2);
__decorateClass([
  Property({
    type: 32
  })
], PlusStack.prototype, "items", 2);
__decorateClass([
  Property({
    type: 32
  })
], PlusStack.prototype, "justify", 2);
__decorateClass([
  Property({
    type: 8
  })
], PlusStack.prototype, "reverse", 2);
__decorateClass([
  Property({
    type: 8
  })
], PlusStack.prototype, "vertical", 2);
__decorateClass([
  Property({
    type: 40
  })
], PlusStack.prototype, "wrap", 2);
__decorateClass([
  Property({
    type: 1
  }),
  Overrides()
], PlusStack.prototype, "overrides", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 1
  }),
  Variant()
], PlusStack.prototype, "variant", 2);
__decorateClass([
  Style()
], PlusStack.prototype, "style", 1);
PlusStack = __decorateClass([
  Element()
], PlusStack);
export {
  PlusStack
};
