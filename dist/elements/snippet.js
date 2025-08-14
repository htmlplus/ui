import { P as PlusCore, i as toCSSColor, h as html, a as Property, O as Overrides, S as Style, E as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{--plus-snippet-color: black}:host{background-color:hsl(from var(--plus-snippet-color) h s 90%);border:none;border-radius:.5rem;color:var(--plus-snippet-color);gap:.5rem;padding:.5rem 1rem;direction:ltr;display:flex;align-items:center;justify-content:space-between}pre{gap:.5rem;display:flex;align-items:center;white-space:nowrap;margin:0;flex-grow:1}[part=default]{display:block}[part=symbol]{color:hsl(from var(--plus-snippet-color) h s 60%);display:contents;user-select:none}";
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
let Snippet = class extends PlusCore {
  get style() {
    return {
      "--plus-snippet-color": toCSSColor(this.color)
    };
  }
  render() {
    return html`
        <pre part="pre">
          <span part="symbol">${this.symbol}</span>
          <slot part="default" />
        </pre>
        <slot name="copy" part="copy" />
      `;
  }
};
Snippet.tag = "plus-snippet";
Snippet.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    reflect: true,
    type: 512
  })
], Snippet.prototype, "color", 2);
__decorateClass([
  Property({
    type: 512
  })
], Snippet.prototype, "symbol", 2);
__decorateClass([
  Property({
    type: 0
  }),
  Overrides()
], Snippet.prototype, "overrides", 2);
__decorateClass([
  Style()
], Snippet.prototype, "style", 1);
Snippet = __decorateClass([
  Element()
], Snippet);
export {
  Snippet
};
