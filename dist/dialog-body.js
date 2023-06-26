import { _ as __decorate, P as PlusBase, h as html, b as Property, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{flex:1 1 auto;padding:1rem;position:relative}:host([scrollable]:not([scrollable=false])){overflow:hidden;overflow-y:auto}";

/**
 * @slot default - The default slot.
 */
let DialogBody = class DialogBody extends PlusBase {
    render() {
        return html `<slot />`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
DialogBody.TAG = "plus-dialog-body";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
DialogBody.STYLES = css_248z;
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], DialogBody.prototype, "scrollable", void 0);
DialogBody = __decorate([
    Element()
], DialogBody);

export { DialogBody };
