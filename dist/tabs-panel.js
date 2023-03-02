import { _ as __decorate, f as createLink, u as uhtml, P as Property, A as Attributes, a as Element } from './core/index.js';

var css_248z = "*,:after,:before{box-sizing:border-box}:host,:host:after,:host:before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none}:host{display:none}:host([active]:not([active=false])){display:block}";

const { Inject } = createLink({
    crawl: true
});
/**
 * TODO: This component contains the contents of each tab and when the tab is activated the panel is displayed.
 * @slot default - The default slot.
 */
let TabsPanel = class TabsPanel {
    get attributes() {
        return {
            active: this.tunnel && this.tunnel === this.value
        };
    }
    render() {
        return uhtml.html `<slot />`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
TabsPanel.TAG = "plus-tabs-panel";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
TabsPanel.STYLES = css_248z;
__decorate([
    Property({
        type: 0
    })
], TabsPanel.prototype, "value", void 0);
__decorate([
    Inject(true)
], TabsPanel.prototype, "tunnel", void 0);
__decorate([
    Attributes()
], TabsPanel.prototype, "attributes", null);
TabsPanel = __decorate([
    Element("plus-tabs-panel")
], TabsPanel);

export { TabsPanel };
