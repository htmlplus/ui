import { P as PlusCore, h as html, E as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{flex:1 1 auto;padding:1rem 1rem}";
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = decorator(result) || result;
  return result;
};
let CardBody = class extends PlusCore {
  render() {
    return html`<slot />`;
  }
};
CardBody.tag = "plus-card-body";
CardBody.style = STYLE_IMPORTED;
CardBody = __decorateClass([
  Element()
], CardBody);
export {
  CardBody
};
