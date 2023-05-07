import { _ as __decorate, l as createLink, h as html, P as Property, E as Event, W as Watch, b as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{display:flex;flex-direction:column}:host([vertical]:not([vertical=false])){flex-direction:row}:host([vertical]:not([vertical=false])) ::slotted(plus-tabs-bar){flex-direction:column}:host([vertical]:not([vertical=false])) ::slotted(plus-tabs-bar[reverse]:not([reverse=false])){flex-direction:column-reverse}";

const { Action, Observable, reconnect } = createLink({
    crawl: false,
    namespace: ({ connector }) => connector ? `Tabs:${connector}` : undefined
});
/**
 * @development
 * @slot default - The default slot.
 */
let Tabs = class Tabs {
    watcher(next, prev, name) {
        switch (name) {
            case 'connector':
                reconnect(this);
                break;
            case 'value':
                this.tunnel = next;
                break;
        }
    }
    broadcast(value) {
        this.tunnel = value;
    }
    change(value) {
        const event = this.plusChange(value);
        if (event.defaultPrevented)
            return;
        this.value = value;
        this.broadcast(this.value);
    }
    initialize() {
        this.broadcast(this.value);
    }
    connectedCallback() {
        this.initialize();
    }
    render() {
        return html `<slot />`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Tabs.TAG = "plus-tabs";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Tabs.STYLES = css_248z;
__decorate([
    Property({
        type: 0
    })
], Tabs.prototype, "value", void 0);
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], Tabs.prototype, "vertical", void 0);
__decorate([
    Property({
        type: 256
    })
], Tabs.prototype, "connector", void 0);
__decorate([
    Event({
        cancelable: true
    })
], Tabs.prototype, "plusChange", void 0);
__decorate([
    Observable()
], Tabs.prototype, "tunnel", void 0);
__decorate([
    Watch(['connector', 'value'])
], Tabs.prototype, "watcher", null);
__decorate([
    Action()
], Tabs.prototype, "change", null);
Tabs = __decorate([
    Element()
], Tabs);

export { Tabs };
