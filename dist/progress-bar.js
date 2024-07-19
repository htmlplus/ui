import { P as PlusCore, i as isCSSColor, h as html, j as attributes, d as styles, a as Property, f as Style, b as Element } from "./core/index.js";
const STYLE_IMPORTED = ":host,\n:host::before,\n:host::after {\n  box-sizing: border-box;\n}\n\n:host *,\n:host *::before,\n:host *::after {\n  box-sizing: border-box;\n}\n\n:host([hidden]) {\n  display: none !important;\n}\n\n/*\n * host\n */\n\n/*\n * indicator\n */\n\n/*\n* buffer\n*/\n\n/*\n * indeterminate\n */\n\n@keyframes indeterminate {\n  from {\n    left: 0;\n    transform: translateX(-100%);\n  }\n  to {\n    left: 100%;\n    transform: translateX(0);\n  }\n}\n\n:host {\n  --plus-progress-bar-indicator-background-color: dodgerblue;\n}\n\n:host {\n  background-color: gainsboro;\n  border-radius: 0.25rem;\n  font-size: 0.75rem;\n  height: 1rem;\n  display: flex;\n  overflow: hidden;\n  position: relative;\n  direction: ltr;\n}\n\n:host > * {\n  position: absolute;\n  inset: 0;\n}\n\n:host::part(underlay) {\n  background-color: transparent;\n}\n\n:host::part(buffer) {\n  background-color: hsl(from var(--plus-progress-bar-indicator-background-color) h s 80);\n}\n\n:host::part(indicator) {\n  background-color: var(--plus-progress-bar-indicator-background-color);\n  color: white;\n  transition: width 0.6s ease;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n:host([sync])::part(indicator) {\n  transition: none;\n}\n\n:host([variant=indeterminate])::part(indicator) {\n  animation: indeterminate 2s linear infinite;\n  width: 50% !important;\n}";
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
let ProgressBar = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.min = 0;
    this.max = 100;
    this.value = 0;
  }
  get style() {
    return {
      "min-width": this.stacked ? this.percentage : null,
      "--plus-progress-bar-indicator-background-color": isCSSColor(this.color) ? this.color : void 0
    };
  }
  get percentage() {
    return this.progress + "%";
  }
  get progress() {
    return (this.value - this.min) * (100 / Math.abs(this.max - this.min));
  }
  get stacked() {
    return this.$host.parentElement.nodeName.startsWith(this.$host.nodeName);
  }
  render() {
    return html`${attributes(this, [{
      "aria-valuemin": this.min
    }, {
      "aria-valuemax": this.max
    }, {
      "aria-valuenow": this.progress
    }, {
      "role": "progressbar"
    }])}
        <div part="underlay"></div>
        <div part="buffer" style=${styles({
      width: `${this.buffer || 0}%`
    })}></div>
        <div part="indicator" style=${styles({
      width: this.stacked ? "100%" : this.percentage
    })}>
          <slot>${this.label ? this.percentage : null}</slot>
        </div>
      `;
  }
};
ProgressBar.tag = "plus-progress-bar";
ProgressBar.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    type: 64
  })
], ProgressBar.prototype, "buffer", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 256
  })
], ProgressBar.prototype, "color", 2);
__decorateClass([
  Property({
    type: 2
  })
], ProgressBar.prototype, "label", 2);
__decorateClass([
  Property({
    type: 64
  })
], ProgressBar.prototype, "min", 2);
__decorateClass([
  Property({
    type: 64
  })
], ProgressBar.prototype, "max", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 2
  })
], ProgressBar.prototype, "sync", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 256
  })
], ProgressBar.prototype, "variant", 2);
__decorateClass([
  Property({
    type: 64
  })
], ProgressBar.prototype, "value", 2);
__decorateClass([
  Style()
], ProgressBar.prototype, "style", 1);
ProgressBar = __decorateClass([
  Element()
], ProgressBar);
export {
  ProgressBar
};
