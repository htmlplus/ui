import { _ as __decorate, P as PlusCore, h as html, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]){display:none!important}:host{align-items:center;border-bottom:1px solid rgba(0,0,0,.2);border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px);display:flex;flex-shrink:0;justify-content:space-between;padding:1rem}";

/**
 * @subset
 *
 * @slot default - The default slot.
 */
let DialogHeader = class DialogHeader extends PlusCore {
    render() {
        return html `<slot />`;
    }
};
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
DialogHeader.tag = "plus-dialog-header";
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
DialogHeader.style = css_248z;
DialogHeader = __decorate([
    Element()
], DialogHeader);

export { DialogHeader };
