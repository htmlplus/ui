import { P as PlusCore, h as html, j as attributes, a as Property, b as Element } from "./core/index.js";
const STYLE_IMPORTED = ":host,\n:host::before,\n:host::after {\n  box-sizing: border-box;\n}\n\n:host *,\n:host *::before,\n:host *::after {\n  box-sizing: border-box;\n}\n\n:host([hidden]) {\n  display: none !important;\n}\n\n:host {\n  flex: 0 0 auto;\n  display: flex;\n  overflow: auto;\n}\n\n:host([reverse]) {\n  flex-direction: row-reverse;\n}\n\n:host([grow]) ::slotted(plus-tabs-tab) {\n  flex-grow: 1;\n}\n\n:host([justify=start]),\n:host([justify=end][reverse]) {\n  justify-content: flex-start;\n}\n\n:host([justify=center]) {\n  justify-content: center;\n}\n\n:host([justify=end]),\n:host([justify=start][reverse]) {\n  justify-content: flex-end;\n}";
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
    type: 2
  })
], TabsBar.prototype, "grow", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], TabsBar.prototype, "justify", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 2
  })
], TabsBar.prototype, "reverse", 2);
TabsBar = __decorateClass([
  Element()
], TabsBar);
export {
  TabsBar
};
