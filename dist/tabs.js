import { _ as __decorate, P as PlusCore, h as html, b as Property, E as Event, d as Provider, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]){display:none!important}:host{display:flex;flex-direction:column;gap:.5rem}:host([vertical]){flex-direction:row}:host([vertical]) ::slotted(plus-tabs-bar){flex-direction:column}:host([vertical]) ::slotted(plus-tabs-bar[reverse]){flex-direction:column-reverse}";

/**
 * @development
 *
 * @slot default - The default slot.
 */
let Tabs = class Tabs extends PlusCore {
    get state() {
        return {
            current: this.value,
            change: this.change.bind(this)
        };
    }
    change(value) {
        const event = this.plusChange(value);
        if (event.defaultPrevented)
            return;
        this.value = value;
    }
    render() {
        return html `<slot />`;
    }
};
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
Tabs.tag = "plus-tabs";
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
Tabs.style = css_248z;
__decorate([
    Property({
        type: 320
    })
], Tabs.prototype, "value", void 0);
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], Tabs.prototype, "vertical", void 0);
__decorate([
    Event({
        cancelable: true
    })
], Tabs.prototype, "plusChange", void 0);
__decorate([
    Provider('tabs')
], Tabs.prototype, "state", null);
Tabs = __decorate([
    Element()
], Tabs);

export { Tabs };
