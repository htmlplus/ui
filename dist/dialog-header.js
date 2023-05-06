import { _ as __decorate, b as html, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{align-items:center;border-bottom:1px solid rgba(0,0,0,.2);border-top-left-radius:calc(.3rem - 1px);border-top-right-radius:calc(.3rem - 1px);display:flex;flex-shrink:0;justify-content:space-between;padding:1rem}";

/**
 * @slot default - The default slot.
 */
let DialogHeader = class DialogHeader {
    render() {
        return html `<slot />`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
DialogHeader.TAG = "plus-dialog-header";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
DialogHeader.STYLES = css_248z;
DialogHeader = __decorate([
    Element()
], DialogHeader);

export { DialogHeader };
