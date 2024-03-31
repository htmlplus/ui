import { _ as __decorate, P as PlusCore, h as html, b as Property, S as State, C as Consumer, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]){display:none!important}:host{display:none}:host([active]){display:block}";

/**
 * TODO: This element contains the contents of each tab and when the tab is activated the panel is displayed.
 * @subset
 *
 * @slot default - The default slot.
 */
let TabsPanel = class TabsPanel extends PlusCore {
    /**
     * TODO
     */
    get active() {
        var _a, _b, _c;
        if (((_a = this.parent) === null || _a === void 0 ? void 0 : _a.current) === null)
            return false;
        if (((_b = this.parent) === null || _b === void 0 ? void 0 : _b.current) === undefined)
            return false;
        return ((_c = this.parent) === null || _c === void 0 ? void 0 : _c.current) === this.value;
    }
    render() {
        return html `
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
    Property({
        reflect: true,
        type: 0
    })
], TabsPanel.prototype, "active", null);
__decorate([
    State(),
    Consumer('tabs')
], TabsPanel.prototype, "parent", void 0);
TabsPanel = __decorate([
    Element()
], TabsPanel);

export { TabsPanel };
