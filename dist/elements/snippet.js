import { P as PlusCore, h as toCSSColor, b as _internal_h_, c as Property, O as Overrides, V as Variant, g as Style, d as Element } from "../core/index.js";
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
let PlusSnippet = class extends PlusCore {
  get style() {
    return {
      ":host": {
        "--plus-snippet-color": toCSSColor(this.color)
      }
    };
  }
  render() {
    return _internal_h_`
				<pre part="pre">
					<span part="symbol">${this.symbol}</span>
					<slot part="default" />
				</pre>
				<slot name="copy" part="copy" />
			`;
  }
};
PlusSnippet.tag = "plus-snippet";
PlusSnippet.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    reflect: true,
    type: 0
  })
], PlusSnippet.prototype, "color", 2);
__decorateClass([
  Property({
    type: 512
  })
], PlusSnippet.prototype, "symbol", 2);
__decorateClass([
  Property({
    type: 0
  }),
  Overrides()
], PlusSnippet.prototype, "overrides", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 0
  }),
  Variant()
], PlusSnippet.prototype, "variant", 2);
__decorateClass([
  Style()
], PlusSnippet.prototype, "style", 1);
PlusSnippet = __decorateClass([
  Element()
], PlusSnippet);
export {
  PlusSnippet
};
