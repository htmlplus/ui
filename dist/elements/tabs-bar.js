import { P as PlusCore, h as html, d as attributes, a as Property, E as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{flex:0 0 auto;display:flex;overflow:auto}:host([reverse]){flex-direction:row-reverse}:host([grow]) ::slotted(plus-tabs-tab){flex-grow:1}:host([justify=start]),:host([justify=end][reverse]){justify-content:flex-start}:host([justify=center]){justify-content:center}:host([justify=end]),:host([justify=start][reverse]){justify-content:flex-end}";
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
let TabsBar = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.justify = "start";
  }
  render() {
    return html`${attributes(this, [{
      "role": "tablist"
    }])}
        <slot />
      `;
  }
};
TabsBar.tag = "plus-tabs-bar";
TabsBar.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], TabsBar.prototype, "grow", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 16
  })
], TabsBar.prototype, "justify", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], TabsBar.prototype, "reverse", 2);
TabsBar = __decorateClass([
  Element()
], TabsBar);
export {
  TabsBar
};
