import { P as PlusCore, i as isCSSColor, h as html, d as attributes, a as Property, S as Style, E as Element } from "../core/index.js";
const STYLE_IMPORTED = ':host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host([type=double-bounce]) .root div{width:100%;height:100%;border-radius:50%;background-color:currentColor;opacity:.6;position:absolute;top:0;left:0;animation:bounce 2s infinite ease-in-out}:host([type=double-bounce]) .root div:nth-child(2){animation-delay:-1s}@keyframes bounce{0%,100%{transform:scale(0)}50%{transform:scale(1)}}:host([type=default]) .root div{width:100%;height:100%;position:absolute;top:0;left:0;transform-origin:50% 50%;animation:spinner .8s linear infinite}:host([type=default]) .root div:after{content:" ";display:block;position:absolute;top:0;left:46.25%;width:7.5%;height:25%;border-radius:20%;background:currentColor}:host([type=default]) .root div:nth-child(1){transform:rotate(0deg);animation-delay:-.7s}:host([type=default]) .root div:nth-child(2){transform:rotate(45deg);animation-delay:-.6s}:host([type=default]) .root div:nth-child(3){transform:rotate(90deg);animation-delay:-0.5s}:host([type=default]) .root div:nth-child(4){transform:rotate(135deg);animation-delay:-0.4s}:host([type=default]) .root div:nth-child(5){transform:rotate(180deg);animation-delay:-.3s}:host([type=default]) .root div:nth-child(6){transform:rotate(225deg);animation-delay:-.2s}:host([type=default]) .root div:nth-child(7){transform:rotate(270deg);animation-delay:-.1s}:host([type=default]) .root div:nth-child(8){transform:rotate(315deg);animation-delay:0s}@keyframes spinner{0%{opacity:1}100%{opacity:0}}:host([type=dual-ring]) .root:after{content:" ";display:block;width:100%;height:100%;border-radius:50%;border:.2em solid currentColor;border-color:currentColor rgba(0,0,0,0) currentColor rgba(0,0,0,0);animation:dual-ring 1.2s linear infinite}@keyframes dual-ring{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}:host([type=ring]) .root:after{content:" ";display:block;width:100%;height:100%;border-radius:50%;border:.2em solid currentColor;border-color:currentColor currentColor currentColor rgba(0,0,0,0);animation:ring 1.2s linear infinite}@keyframes ring{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}:host([type=ripple]) .root{background-color:currentColor;border-radius:100%;animation:ripple 1s infinite ease-in-out}@keyframes ripple{0%{transform:scale(0)}100%{transform:scale(1);opacity:0}}:host([type=square]) .root{width:85%;height:85%;margin:7.5%;background-color:currentColor;animation:square 1.2s infinite ease-in-out}@keyframes square{0%{transform:perspective(120px) rotateX(0deg) rotateY(0deg)}50%{transform:perspective(120px) rotateX(-180.1deg) rotateY(0deg)}100%{transform:perspective(120px) rotateX(-180deg) rotateY(-179.9deg)}}:host{color:currentColor;display:inline-block;overflow:hidden;vertical-align:middle;color:var(--plus-color, currentColor)}:host([size=inherit]){height:1em;width:1em}:host([size=sm]){height:1rem;width:1rem}:host([size=md]){height:2rem;width:2rem}:host([size=lg]){height:3rem;width:3rem}.root{display:block;position:relative;width:100%;height:100%}';
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
let Spinner = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.size = "inherit";
    this.type = "default";
  }
  get style() {
    return {
      color: isCSSColor(this.color) ? this.color : void 0
    };
  }
  get elements() {
    const map = {
      "default": 8,
      "double-bounce": 2
    };
    const number = map[this.type] ?? 1;
    return Array.from(Array(number).keys());
  }
  render() {
    return html`${attributes(this, [{
      "role": "status"
    }])}
        <div class="root">
          ${this.elements.map((element) => html`<div key=${element} />`)}
        </div>
      `;
  }
};
Spinner.tag = "plus-spinner";
Spinner.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    reflect: true,
    type: 512
  })
], Spinner.prototype, "color", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 16
  })
], Spinner.prototype, "size", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 16
  })
], Spinner.prototype, "type", 2);
__decorateClass([
  Style()
], Spinner.prototype, "style", 1);
Spinner = __decorateClass([
  Element()
], Spinner);
export {
  Spinner
};
