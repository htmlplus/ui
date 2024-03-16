import { _ as __decorate, P as PlusCore, h as html, e as attributes, b as Property, S as State, C as Consumer, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]){display:none!important}:host{cursor:default;display:inline-block;user-select:none}";

/**
 * @slot default - The default slot.
 * @TODO open    - Specifies the content of toggler when it's opened.
 * @TODO close   - Specifies the content of toggler when it's closed.
 */
let DialogToggler = class DialogToggler extends PlusCore {
    render() {
        var _a, _b, _c;
        return html `${attributes(this, [{
                "role": "button"
            }, {
                "state": ((_a = this.dialog) === null || _a === void 0 ? void 0 : _a.open) ? 'open' : 'close'
            }, {
                "onClick": (_b = this.dialog) === null || _b === void 0 ? void 0 : _b.toggle
            }])}
        <slot>${((_c = this.dialog) === null || _c === void 0 ? void 0 : _c.open) ? 'Close' : 'Open'}</slot>
      `;
    }
};
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
DialogToggler.tag = "plus-dialog-toggler";
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
DialogToggler.style = css_248z;
__decorate([
    Property({
        type: 256
    })
], DialogToggler.prototype, "connector", void 0);
__decorate([
    State(),
    Consumer('dialog.connector')
], DialogToggler.prototype, "dialog", void 0);
DialogToggler = __decorate([
    Element()
], DialogToggler);

export { DialogToggler };
