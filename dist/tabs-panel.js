import { _ as __decorate, k as createLink, b as html, e as attributes, h as host, P as Property, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{display:none}:host([active]:not([active=false])){display:block}";

const { Inject } = createLink({
    crawl: true
});
/**
 * TODO: This component contains the contents of each tab and when the tab is activated the panel is displayed.
 * @slot default - The default slot.
 */
let TabsPanel = class TabsPanel {
    render() {
        return html `${attributes(host(this), [{
                "active": this.tunnel && this.tunnel === this.value
            }])}
        <slot />
      `;
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
TabsPanel = __decorate([
    Element()
], TabsPanel);

export { TabsPanel };
