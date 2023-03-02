import { _ as __decorate, u as uhtml, P as Property, W as Watch, a as Element, f as createLink } from './core/index.js';

var css_248z = "*,:after,:before{box-sizing:border-box}:host,:host:after,:host:before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none}:host{display:block}";

const { reconnect } = createLink({
    crawl: true,
    namespace: ({ connector }) => connector ? `Tabs:${connector}` : undefined
});
/**
 * TODO: This component contains panels.
 * @slot default - The default slot.
 */
let TabsPanels = class TabsPanels {
    /**
     * Watchers
     */
    watcher() {
        reconnect(this);
    }
    render() {
        return uhtml.html `<slot />`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
TabsPanels.TAG = "plus-tabs-panels";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
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
    Element("plus-tabs-panels")
], TabsPanels);

export { TabsPanels };
