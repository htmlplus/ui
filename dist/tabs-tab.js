import { _ as __decorate, P as PlusCore, h as html, k as attributes, b as Property, S as State, C as Consumer, B as Bind, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]){display:none!important}:host{align-items:center;background-color:#f5f5f5;display:flex;gap:.5rem;justify-content:center;padding:.5rem 1rem;text-align:center;user-select:none}:host([active]){background-color:#d3d3d3}:host([disabled]){opacity:.5}:host(:not([disabled])){cursor:pointer}";

/**
 * TODO: Tabs make it easy to switch between different views.
 * @subset
 *
 * @slot default - The default slot.
 */
let TabsTab = class TabsTab extends PlusCore {
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
    onClick() {
        var _a;
        if (!this.disabled) {
            (_a = this.parent) === null || _a === void 0 ? void 0 : _a.change(this.value);
        }
    }
    render() {
        return html `${attributes(this, [{
                "onClick": this.onClick
            }])}
        <slot />
      `;
    }
};
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
TabsTab.tag = "plus-tabs-tab";
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
TabsTab.style = css_248z;
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], TabsTab.prototype, "disabled", void 0);
__decorate([
    Property({
        type: 320
    })
], TabsTab.prototype, "value", void 0);
__decorate([
    Property({
        reflect: true,
        type: 0
    })
], TabsTab.prototype, "active", null);
__decorate([
    State(),
    Consumer('tabs')
], TabsTab.prototype, "parent", void 0);
__decorate([
    Bind()
], TabsTab.prototype, "onClick", null);
TabsTab = __decorate([
    Element()
], TabsTab);

export { TabsTab };
