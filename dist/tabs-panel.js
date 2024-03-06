import { _ as __decorate, l as createLink, P as PlusCore, h as html, e as attributes, b as Property, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]){display:none!important}:host{display:none}:host([active]){display:block}";

const { Inject } = createLink({
    crawl: true
});
/**
 * TODO: This element contains the contents of each tab and when the tab is activated the panel is displayed.
 *
 * @slot default - The default slot.
 */
let TabsPanel = class TabsPanel extends PlusCore {
    render() {
        return html `${attributes(this, [{
                "active": this.tunnel && this.tunnel === this.value
            }])}
        <slot />
      `;
    }
};
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
TabsPanel.tag = "plus-tabs-panel";
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
TabsPanel.style = css_248z;
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
