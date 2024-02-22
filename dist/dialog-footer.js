import { _ as __decorate, P as PlusCore, h as html, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]){display:none!important}:host{align-items:center;border-bottom-left-radius:calc(.3rem - 1px);border-bottom-right-radius:calc(.3rem - 1px);border-top:1px solid rgba(0,0,0,.2);display:flex;flex-shrink:0;flex-wrap:wrap;justify-content:flex-end;padding:.75rem}:host ::slotted(*){margin:.25rem}";

/**
 * @slot default - The default slot.
 */
let DialogFooter = class DialogFooter extends PlusCore {
    render() {
        return html `<slot />`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
DialogFooter.TAG = "plus-dialog-footer";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
DialogFooter.STYLES = css_248z;
DialogFooter = __decorate([
    Element()
], DialogFooter);

export { DialogFooter };
