import { _ as __decorate, P as PlusCore, h as html, b as Property, W as Watch, c as Element, m as createLink } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]){display:none!important}:host{display:block}";

const { reconnect } = createLink({
    crawl: true,
    namespace: ({ connector }) => connector ? `Tabs:${connector}` : undefined
});
/**
 * TODO: This element contains panels.
 * @slot default - The default slot.
 */
let TabsPanels = class TabsPanels extends PlusCore {
    watcher() {
        reconnect(this);
    }
    render() {
        return html `<slot />`;
    }
};
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
TabsPanels.TAG = "plus-tabs-panels";
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
TabsPanels.STYLES = css_248z;
__decorate([
    Property({
        type: 256
    })
], TabsPanels.prototype, "connector", void 0);
__decorate([
    Watch(['connector'])
], TabsPanels.prototype, "watcher", null);
TabsPanels = __decorate([
    Element()
], TabsPanels);

export { TabsPanels };
