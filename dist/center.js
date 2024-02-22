import { _ as __decorate, P as PlusCore, h as html, b as Property, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]){display:none!important}:host{align-items:center;display:flex;justify-content:center}:host([inline]){display:inline-flex}";

/**
 * @stable
 * @slot default - The default slot.
 */
let Center = class Center extends PlusCore {
    render() {
        return html `<slot />`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Center.TAG = "plus-center";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Center.STYLES = css_248z;
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], Center.prototype, "inline", void 0);
Center = __decorate([
    Element()
], Center);

export { Center };
