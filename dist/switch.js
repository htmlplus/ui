import { _ as __decorate, P as PlusBase, h as html, e as attributes, f as host, b as Property, E as Event, B as Bind, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{border-radius:2em;cursor:pointer;display:inline-block;height:2em;overflow:hidden;user-select:none;vertical-align:middle;width:3.5em}:host([disabled]:not([disabled=false])){opacity:.5}.root{align-items:center;display:flex;flex-wrap:nowrap;height:100%;justify-content:space-between;position:relative;width:100%}.handle,.root{border-radius:inherit;transition:.3s}.handle{background:#fff;height:1.5em;left:50%;position:absolute;top:50%;width:1.5em;z-index:1}.slot{border-radius:inherit;font-size:.8em}.off{border-bottom-left-radius:0;border-top-left-radius:0;padding:0 .5em 0 0}.on{border-bottom-right-radius:0;border-top-right-radius:0;padding:0 0 0 .5em}:host .root{background:#d3d3d3}:host .handle{transform:translate(-1.5em,-50%)}:host .on{opacity:0}:host .off{opacity:1}:host([checked]:not([checked=false])) .root{background:#2196f3}:host([checked]:not([checked=false])) .handle{transform:translate(calc(1.5em - 100%),-50%)}:host([checked]:not([checked=false])) .on{opacity:1}:host([checked]:not([checked=false])) .off{opacity:0}";

let Switch = class Switch extends PlusBase {
    toggle() {
        if (this.disabled)
            return;
        this.checked = !this.checked;
        this.plusChange();
    }
    onClick(event) {
        event.preventDefault();
        this.toggle();
    }
    onKeyDown(event) {
        if (event.key != ' ' && event.key != 'Enter')
            return;
        event.preventDefault();
        this.toggle();
    }
    render() {
        return html `${attributes(host(this), [{
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
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Switch.TAG = "plus-switch";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Switch.STYLES = css_248z;
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], Switch.prototype, "checked", void 0);
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], Switch.prototype, "disabled", void 0);
__decorate([
    Event()
], Switch.prototype, "plusChange", void 0);
__decorate([
    Bind()
], Switch.prototype, "onClick", null);
__decorate([
    Bind()
], Switch.prototype, "onKeyDown", null);
Switch = __decorate([
    Element()
], Switch);

export { Switch };
