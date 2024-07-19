import { P as PlusCore, h as html, j as attributes, a as Property, E as Event, B as Bind, b as Element } from "./core/index.js";
const STYLE_IMPORTED = ":host,\n:host::before,\n:host::after {\n  box-sizing: border-box;\n}\n\n:host *,\n:host *::before,\n:host *::after {\n  box-sizing: border-box;\n}\n\n:host([hidden]) {\n  display: none !important;\n}\n\n:host {\n  height: 2em;\n  width: 3.5em;\n  border-radius: 2em;\n  cursor: pointer;\n  display: inline-block;\n  vertical-align: middle;\n  overflow: hidden;\n  user-select: none;\n}\n\n:host([disabled]) {\n  opacity: 0.5;\n}\n\n.root {\n  align-items: center;\n  border-radius: inherit;\n  display: flex;\n  flex-wrap: nowrap;\n  height: 100%;\n  width: 100%;\n  justify-content: space-between;\n  position: relative;\n  transition: 0.3s;\n}\n\n.handle {\n  width: 1.5em;\n  height: 1.5em;\n  background: white;\n  border-radius: inherit;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 1;\n  transition: 0.3s;\n}\n\n.slot {\n  font-size: 0.8em;\n  border-radius: inherit;\n}\n\n.off {\n  padding: 0 0.5em 0 0;\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.on {\n  padding: 0 0 0 0.5em;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n:host .root {\n  background: lightgray;\n}\n\n:host .handle {\n  transform: translate(calc(-1.5em - 0%), -50%);\n}\n\n:host .on {\n  opacity: 0;\n}\n\n:host .off {\n  opacity: 1;\n}\n\n:host([checked]) .root {\n  background: #2196f3;\n}\n\n:host([checked]) .handle {\n  transform: translate(calc(1.5em - 100%), -50%);\n}\n\n:host([checked]) .on {\n  opacity: 1;\n}\n\n:host([checked]) .off {\n  opacity: 0;\n}";
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
    type: 2
  })
], Switch.prototype, "checked", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 2
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
