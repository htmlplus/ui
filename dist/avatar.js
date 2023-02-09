import { _ as __decorate, u as uhtml, P as Property, a as Element } from './core/index.js';

var css_248z = "*,:after,:before{box-sizing:border-box}:host,:host:after,:host:before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none}:host{--plus-avatar-background-color:#f2f3f4;--plus-avatar-border-radius:4px;--plus-avatar-color:#626976;--plus-avatar-font-size-ratio:0.35;--plus-avatar-font-weight:300;--plus-avatar-size:auto;--plus-avatar-svg-ratio:0.75}:host{align-items:center;background-color:var(--plus-avatar-background-color);border-radius:var(--plus-avatar-border-radius);color:var(--plus-avatar-color);display:inline-flex;font-size:calc(var(--plus-avatar-size)*var(--plus-avatar-font-size-ratio));font-weight:var(--plus-avatar-font-weight);height:var(--plus-avatar-size);justify-content:center;position:relative;text-align:center;text-transform:uppercase;user-select:none;vertical-align:middle;width:var(--plus-avatar-size)}:host([shape=circle]){--plus-avatar-border-radius:50%}:host([shape=tile]){--plus-avatar-border-radius:0}:host([size=xs]){--plus-avatar-size:1.25rem}:host([size=sm]){--plus-avatar-size:2rem}:host([size=md]){--plus-avatar-size:3.75rem}:host([size=lg]){--plus-avatar-size:5rem}:host([size=xl]){--plus-avatar-size:7rem}:host([size=xxl]){--plus-avatar-size:11rem}::slotted(a){border-radius:var(--plus-avatar-border-radius);inset:0;position:absolute}::slotted(img){border-radius:var(--plus-avatar-border-radius);height:100%;width:100%}::slotted(svg){height:calc(var(--plus-avatar-size)*var(--plus-avatar-svg-ratio));width:calc(var(--plus-avatar-size)*var(--plus-avatar-svg-ratio))}";

let Avatar = class Avatar {
    constructor() {
        /**
         * TODO
         */
        this.shape = 'round';
        /**
         * TODO
         */
        this.size = 'md';
    }
    render() {
        return uhtml.html `<slot />`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Avatar.TAG = "plus-avatar";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Avatar.STYLES = css_248z;
__decorate([
    Property({
        reflect: true,
        type: 8
    })
], Avatar.prototype, "shape", void 0);
__decorate([
    Property({
        reflect: true,
        type: 8
    })
], Avatar.prototype, "size", void 0);
Avatar = __decorate([
    Element("plus-avatar")
], Avatar);

export { Avatar };
