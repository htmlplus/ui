import { _ as __decorate, P as PlusCore, h as html, e as attributes, b as Property, S as State, C as Consumer, B as Bind, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]){display:none!important}:host{align-items:center;display:flex;justify-content:center;padding:.5rem 1rem;user-select:none}:host([disabled]) span{opacity:.5}:host([active]){background-color:#d2d2d2}";

/**
 * TODO: Tabs make it easy to switch between different views.
 *
 * @slot default - The default slot.
 */
let TabsTab = class TabsTab extends PlusCore {
    /**
     * Events handler
     */
    onClick() {
        var _a;
        if (!this.disabled) {
            (_a = this.parent) === null || _a === void 0 ? void 0 : _a.change(this.value);
        }
    }
    render() {
        var _a;
        return html `${attributes(this, [{
                "active": ((_a = this.parent) === null || _a === void 0 ? void 0 : _a.current) === this.value
            }, {
                "onClick": this.onClick
            }])}
        <span>
          <slot />
        </span>
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
