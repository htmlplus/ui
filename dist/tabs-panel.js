import { _ as __decorate, P as PlusCore, h as html, e as attributes, b as Property, S as State, C as Consumer, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]){display:none!important}:host{display:none}:host([active]){display:block}";

/**
 * TODO: This element contains the contents of each tab and when the tab is activated the panel is displayed.
 *
 * @slot default - The default slot.
 */
let TabsPanel = class TabsPanel extends PlusCore {
    render() {
        var _a;
        return html `${attributes(this, [{
                "active": ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.current) === this.value
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
        type: 320
    })
], TabsPanel.prototype, "value", void 0);
__decorate([
    State(),
    Consumer('tabs')
], TabsPanel.prototype, "parent", void 0);
TabsPanel = __decorate([
    Element()
], TabsPanel);

export { TabsPanel };
