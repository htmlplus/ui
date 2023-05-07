import { _ as __decorate, P as Property, b as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{display:block}";

let Spacer = class Spacer {
    constructor() {
        /**
         * TODO
         */
        this.grow = 1;
    }
    get attributes() {
        return {
            style: `flex-grow: ${this.grow};`
        };
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Spacer.TAG = "plus-spacer";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Spacer.STYLES = css_248z;
__decorate([
    Property({
        type: 64
    })
], Spacer.prototype, "grow", void 0);
Spacer = __decorate([
    Element()
], Spacer);

export { Spacer };
