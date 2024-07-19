import { P as PlusCore, i as isCSSColor, h as html, j as attributes, a as Property, f as Style, b as Element } from "./core/index.js";
const STYLE_IMPORTED = ':host,\n:host::before,\n:host::after {\n  box-sizing: border-box;\n}\n\n:host *,\n:host *::before,\n:host *::after {\n  box-sizing: border-box;\n}\n\n:host([hidden]) {\n  display: none !important;\n}\n\n:host([type=double-bounce]) .root div {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  background-color: currentColor;\n  opacity: 0.6;\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: bounce 2s infinite ease-in-out;\n}\n\n:host([type=double-bounce]) .root div:nth-child(2) {\n  animation-delay: -1s;\n}\n\n@keyframes bounce {\n  0%, 100% {\n    transform: scale(0);\n  }\n  50% {\n    transform: scale(1);\n  }\n}\n\n:host([type=default]) .root div {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform-origin: 50% 50%;\n  animation: spinner 0.8s linear infinite;\n}\n\n:host([type=default]) .root div:after {\n  content: " ";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 46.25%;\n  width: 7.5%;\n  height: 25%;\n  border-radius: 20%;\n  background: currentColor;\n}\n\n:host([type=default]) .root div:nth-child(1) {\n  transform: rotate(0deg);\n  animation-delay: -0.7s;\n}\n\n:host([type=default]) .root div:nth-child(2) {\n  transform: rotate(45deg);\n  animation-delay: -0.6s;\n}\n\n:host([type=default]) .root div:nth-child(3) {\n  transform: rotate(90deg);\n  animation-delay: -0.5s;\n}\n\n:host([type=default]) .root div:nth-child(4) {\n  transform: rotate(135deg);\n  animation-delay: -0.4s;\n}\n\n:host([type=default]) .root div:nth-child(5) {\n  transform: rotate(180deg);\n  animation-delay: -0.3s;\n}\n\n:host([type=default]) .root div:nth-child(6) {\n  transform: rotate(225deg);\n  animation-delay: -0.2s;\n}\n\n:host([type=default]) .root div:nth-child(7) {\n  transform: rotate(270deg);\n  animation-delay: -0.1s;\n}\n\n:host([type=default]) .root div:nth-child(8) {\n  transform: rotate(315deg);\n  animation-delay: 0s;\n}\n\n@keyframes spinner {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n:host([type=dual-ring]) .root:after {\n  content: " ";\n  display: block;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  border: 0.2em solid currentColor;\n  border-color: currentColor transparent currentColor transparent;\n  animation: dual-ring 1.2s linear infinite;\n}\n\n@keyframes dual-ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n:host([type=ring]) .root:after {\n  content: " ";\n  display: block;\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  border: 0.2em solid currentColor;\n  border-color: currentColor currentColor currentColor transparent;\n  animation: ring 1.2s linear infinite;\n}\n\n@keyframes ring {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n:host([type=ripple]) .root {\n  background-color: currentColor;\n  border-radius: 100%;\n  animation: ripple 1s infinite ease-in-out;\n}\n\n@keyframes ripple {\n  0% {\n    transform: scale(0);\n  }\n  100% {\n    transform: scale(1);\n    opacity: 0;\n  }\n}\n\n:host([type=square]) .root {\n  width: 85%;\n  height: 85%;\n  margin: 7.5%;\n  background-color: currentColor;\n  animation: square 1.2s infinite ease-in-out;\n}\n\n@keyframes square {\n  0% {\n    transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n  }\n  50% {\n    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n  }\n  100% {\n    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n  }\n}\n\n:host {\n  color: currentColor;\n  display: inline-block;\n  overflow: hidden;\n  vertical-align: middle;\n  color: var(--plus-color, currentColor);\n}\n\n:host([size=inherit]) {\n  height: 1em;\n  width: 1em;\n}\n\n:host([size=sm]) {\n  height: 1rem;\n  width: 1rem;\n}\n\n:host([size=md]) {\n  height: 2rem;\n  width: 2rem;\n}\n\n:host([size=lg]) {\n  height: 3rem;\n  width: 3rem;\n}\n\n.root {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}';
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
    type: 256
  })
], Spinner.prototype, "color", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], Spinner.prototype, "size", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
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
