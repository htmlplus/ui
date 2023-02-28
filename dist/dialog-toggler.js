import { _ as __decorate, d as createLink, u as uhtml, P as Property, A as Attributes, W as Watch, B as Bind, a as Element } from './core/index.js';

var css_248z = "*,:after,:before{box-sizing:border-box}:host,:host:after,:host:before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none}:host{cursor:default;display:inline-block;user-select:none}";

const { Inject, reconnect } = createLink({
    crawl: true,
    namespace: ({ connector }) => connector ? `Dialog:${connector}` : undefined
});
/**
 * @slot default - The default slot.
 * @TODO open    - Specifies the content of toggler when it's opened.
 * @TODO close   - Specifies the content of toggler when it's closed.
 */
let DialogToggler = class DialogToggler {
    constructor() {
        this.toggle = () => console.log('TODO: can not use out of dialog');
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
DialogToggler.TAG = "plus-dialog-toggler";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
DialogToggler.STYLES = css_248z;
__decorate([
    Property({
        type: 256
    })
], DialogToggler.prototype, "connector", void 0);
__decorate([
    Inject()
], DialogToggler.prototype, "toggle", void 0);
__decorate([
    Inject(true)
], DialogToggler.prototype, "tunnel", void 0);
__decorate([
    Attributes()
], DialogToggler.prototype, "attributes", null);
__decorate([
    Watch(['connector'])
], DialogToggler.prototype, "watcher", null);
__decorate([
    Bind()
], DialogToggler.prototype, "onClick", null);
DialogToggler = __decorate([
    Element("plus-dialog-toggler")
], DialogToggler);

export { DialogToggler };
