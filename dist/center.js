import { _ as __decorate, u as uhtml, P as Property, a as Element } from './core/index.js';

var css_248z = "*,:after,:before{box-sizing:border-box}:host,:host:after,:host:before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none}:host{align-items:center;display:flex;justify-content:center}:host([inline]:not([inline=false])){display:inline-flex}";

/**
 * @stable
 * @slot default - The default slot.
 */
let Center = class Center {
    render() {
        return uhtml.html `<slot />`;
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
