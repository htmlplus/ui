import { P as PlusCore, i as isCSSColor, h as html, d as attributes, s as styles, a as Property, S as Style, E as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}@keyframes indeterminate{from{left:0;transform:translateX(-100%)}to{left:100%;transform:translateX(0)}}:host{--plus-progress-bar-indicator-background-color: dodgerblue}:host{background-color:#dcdcdc;border-radius:.25rem;font-size:.75rem;height:1rem;display:flex;overflow:hidden;position:relative;direction:ltr}:host>*{position:absolute;inset:0}:host::part(underlay){background-color:rgba(0,0,0,0)}:host::part(buffer){background-color:hsl(from var(--plus-progress-bar-indicator-background-color) h s 80)}:host::part(indicator){background-color:var(--plus-progress-bar-indicator-background-color);color:#fff;transition:width .6s ease;display:flex;flex-direction:column;align-items:center;justify-content:center;overflow:hidden;white-space:nowrap}:host([sync])::part(indicator){transition:none}:host([variant=indeterminate])::part(indicator){animation:indeterminate 2s linear infinite;width:50% !important}";
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
    type: 128
  })
], ProgressBar.prototype, "buffer", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 512
  })
], ProgressBar.prototype, "color", 2);
__decorateClass([
  Property({
    type: 4
  })
], ProgressBar.prototype, "label", 2);
__decorateClass([
  Property({
    type: 128
  })
], ProgressBar.prototype, "min", 2);
__decorateClass([
  Property({
    type: 128
  })
], ProgressBar.prototype, "max", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], ProgressBar.prototype, "sync", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 512
  })
], ProgressBar.prototype, "variant", 2);
__decorateClass([
  Property({
    type: 128
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
