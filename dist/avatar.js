import { _ as __decorate, u as uhtml, P as Property, a as Element } from './core/index.js';

var css_248z = "*,:after,:before{box-sizing:border-box}:host,:host:after,:host:before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none}:host{--plus-avatar-border-radius:4px}:host{align-items:center;background-color:#d3d3d3;border-radius:var(--plus-avatar-border-radius);color:gray;display:inline-flex;justify-content:center;position:relative;text-align:center;text-transform:uppercase;user-select:none;vertical-align:middle}:host([shape=circle]){--plus-avatar-border-radius:50%}:host([shape=round]){--plus-avatar-border-radius:4px}:host([shape=tile]){--plus-avatar-border-radius:0}:host([size=xxs]){font-size:.35rem;height:1rem;width:1rem}:host([size=xs]){font-size:.525rem;height:1.5rem;width:1.5rem}:host([size=sm]){font-size:.7rem;height:2rem;width:2rem}:host([size=md]){font-size:1.05rem;height:3rem;width:3rem}:host([size=lg]){font-size:1.4rem;height:4rem;width:4rem}:host([size=xl]){font-size:2.1rem;height:6rem;width:6rem}:host([size=xxl]){font-size:2.8rem;height:8rem;width:8rem}::slotted(*){border-radius:var(--plus-avatar-border-radius);height:100%;inset:0;position:absolute;width:100%}";

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
