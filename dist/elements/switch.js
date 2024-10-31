import { P as PlusCore, h as html, d as attributes, a as Property, c as Event, B as Bind, E as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{height:2em;width:3.5em;border-radius:2em;cursor:pointer;display:inline-block;vertical-align:middle;overflow:hidden;user-select:none}:host([disabled]){opacity:.5}.root{align-items:center;border-radius:inherit;display:flex;flex-wrap:nowrap;height:100%;width:100%;justify-content:space-between;position:relative;transition:.3s}.handle{width:1.5em;height:1.5em;background:#fff;border-radius:inherit;position:absolute;top:50%;left:50%;z-index:1;transition:.3s}.slot{font-size:.8em;border-radius:inherit}.off{padding:0 .5em 0 0;border-top-left-radius:0;border-bottom-left-radius:0}.on{padding:0 0 0 .5em;border-top-right-radius:0;border-bottom-right-radius:0}:host .root{background:#d3d3d3}:host .handle{transform:translate(calc(-1.5em - 0%), -50%)}:host .on{opacity:0}:host .off{opacity:1}:host([checked]) .root{background:#2196f3}:host([checked]) .handle{transform:translate(calc(1.5em - 100%), -50%)}:host([checked]) .on{opacity:1}:host([checked]) .off{opacity:0}";
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
let Switch = class extends PlusCore {
  toggle() {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.plusChange();
  }
  onClick(event) {
    event.preventDefault();
    this.toggle();
  }
  onKeyDown(event) {
    if (event.key != " " && event.key != "Enter") return;
    event.preventDefault();
    this.toggle();
  }
  render() {
    return html`${attributes(this, [{
      "aria-checked": `${!!this.checked}`
    }, {
      "aria-disabled": `${!!this.disabled}`
    }, {
      "role": "switch"
    }, {
      "tabindex": 0
    }, {
      "onClick": this.onClick
    }, {
      "onKeyDown": this.onKeyDown
    }])}
        <div class="root" part="root">
          <div class="slot on" part="slot on">
            <slot name="on" />
          </div>
          <div class="handle" part="handle">
            <slot name="handle" />
          </div>
          <div class="slot off" part="slot off">
            <slot name="off" />
          </div>
        </div>
      `;
  }
};
Switch.tag = "plus-switch";
Switch.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], Switch.prototype, "checked", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], Switch.prototype, "disabled", 2);
__decorateClass([
  Event()
], Switch.prototype, "plusChange", 2);
__decorateClass([
  Bind()
], Switch.prototype, "onClick", 1);
__decorateClass([
  Bind()
], Switch.prototype, "onKeyDown", 1);
Switch = __decorateClass([
  Element()
], Switch);
export {
  Switch
};
