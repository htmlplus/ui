import { _ as __decorate, d as createLink, u as uhtml, P as Property, A as Attributes, W as Watch, B as Bind, a as Element } from './core/index.js';

var css_248z = "*,:after,:before{box-sizing:border-box}:host,:host:after,:host:before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none}:host{cursor:default;display:inline-block;user-select:none}:host([state=close]) [name=open],:host([state=open]) [name=close]{display:none}";

const { Inject, reconnect } = createLink({
    crawl: true,
    namespace: ({ connector }) => connector ? `Drawer:${connector}` : undefined
});
/**
 * @slot default - The default slot.
 * @TODO open    - Specifies the content of toggler when it's opened.
 * @TODO close   - Specifies the content of toggler when it's closed.
 */
let DrawerToggler = class DrawerToggler {
    constructor() {
        this.toggle = () => console.log('TODO: can not use out of drawer');
    }
    get attributes() {
        return {
            role: 'button',
            state: this.tunnel ? 'open' : 'close',
            onClick: this.onClick
        };
    }
    get text() {
        return this.tunnel ? 'Close' : 'Open';
    }
    /**
     * Watchers
     */
    watcher() {
        reconnect(this);
    }
    /**
     * Events handler
     */
    onClick() {
        this.toggle();
    }
    render() {
        return uhtml.html `<slot>${this.text}</slot>`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
DrawerToggler.TAG = "plus-drawer-toggler";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
DrawerToggler.STYLES = css_248z;
__decorate([
    Property({
        type: 256
    })
], DrawerToggler.prototype, "connector", void 0);
__decorate([
    Inject()
], DrawerToggler.prototype, "toggle", void 0);
__decorate([
    Inject(true)
], DrawerToggler.prototype, "tunnel", void 0);
__decorate([
    Attributes()
], DrawerToggler.prototype, "attributes", null);
__decorate([
    Watch(['connector'])
], DrawerToggler.prototype, "watcher", null);
__decorate([
    Bind()
], DrawerToggler.prototype, "onClick", null);
DrawerToggler = __decorate([
    Element("plus-drawer-toggler")
], DrawerToggler);

export { DrawerToggler };
