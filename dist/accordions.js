import { _ as __decorate, P as PlusCore, h as html, b as Property, d as Provider, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]){display:none!important}:host{display:block}";

/**
 * @subset
 *
 * @slot default - The default slot.
 */
let Accordions = class Accordions extends PlusCore {
    get state() {
        return {
            open: this.open.bind(this)
        };
    }
    open(target) {
        if (!this.persistent)
            return;
        for (const accordion of Array.from(this.$host.children)) {
            if (accordion === target)
                continue;
            if (!accordion['open'])
                continue;
            accordion.shadowRoot.querySelector('[part=header]')['click']();
        }
    }
    render() {
        return html `<slot />`;
    }
};
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
Accordions.tag = "plus-accordions";
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
Accordions.style = css_248z;
__decorate([
    Property({
        type: 2
    })
], Accordions.prototype, "persistent", void 0);
__decorate([
    Provider('accordions')
], Accordions.prototype, "state", null);
Accordions = __decorate([
    Element()
], Accordions);

export { Accordions };
