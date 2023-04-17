import { _ as __decorate, u as uhtml, P as Property, d as Attributes, b as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{speak:never;word-wrap:normal;-moz-osx-font-smoothing:grayscale;font-feature-settings:\"liga\";-webkit-font-feature-settings:\"liga\";-webkit-font-smoothing:antialiased;align-items:center;direction:ltr;display:inline-flex;font-style:normal;font-variant:normal;font-weight:400;justify-content:center;letter-spacing:normal;line-height:1;text-align:center;text-decoration:inherit;text-rendering:auto;text-rendering:optimizeLegibility;text-transform:none;white-space:nowrap}:host([flip]:not([flip=false])),:host([rotate]:not([rotate=false])){filter:none}:host([flip=both]){transform:scale(-1)}:host([flip=horizontal]){transform:scaleX(-1)}:host([flip=vertical]){transform:scaleY(-1)}:host([rotate=\"90\"]){transform:rotate(90deg)}:host([rotate=\"180\"]){transform:rotate(180deg)}:host([rotate=\"270\"]){transform:rotate(270deg)}:host([size=xs]){font-size:.75em}:host([size=sm]){font-size:.875em}:host([size=lg]){font-size:1.33333em}:host([size=\"1x\"]){font-size:1em}:host([size=\"2x\"]){font-size:2em}:host([size=\"3x\"]){font-size:3em}:host([size=\"4x\"]){font-size:4em}:host([size=\"5x\"]){font-size:5em}:host([size=\"6x\"]){font-size:6em}:host([size=\"7x\"]){font-size:7em}:host([size=\"8x\"]){font-size:8em}:host([size=\"9x\"]){font-size:9em}:host([size=\"10x\"]){font-size:10em}";

/**
 * @development
 * @slot default - The default slot.
 */
let Icon = class Icon {
    get attributes() {
        if (!this.color)
            return;
        return {
            style: `color: ${this.color}`
        };
    }
    render() {
        return uhtml.html `<slot>${this.name}</slot>`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Icon.TAG = "plus-icon";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Icon.STYLES = css_248z;
__decorate([
    Property({
        reflect: true,
        type: 256
    })
], Icon.prototype, "color", void 0);
__decorate([
    Property({
        reflect: true,
        type: 8
    })
], Icon.prototype, "flip", void 0);
__decorate([
    Property({
        reflect: true,
        type: 256
    })
], Icon.prototype, "name", void 0);
__decorate([
    Property({
        reflect: true,
        type: 64
    })
], Icon.prototype, "rotate", void 0);
__decorate([
    Property({
        reflect: true,
        type: 256
    })
], Icon.prototype, "size", void 0);
__decorate([
    Attributes()
], Icon.prototype, "attributes", null);
Icon = __decorate([
    Element()
], Icon);

export { Icon };
