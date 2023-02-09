import { _ as __decorate, e as createLink, u as uhtml, P as Property, A as Attributes, B as Bind, a as Element } from './core/index.js';

var css_248z = "*,:after,:before{box-sizing:border-box}:host,:host:after,:host:before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none}:host{align-items:center;display:flex;justify-content:center;padding:.5rem 1rem;user-select:none}:host([disabled]:not([disabled=false])) span{opacity:.5}:host([active]:not([active=false])){background-color:#d2d2d2}";

const { Inject } = createLink({
    crawl: true
});
/**
 * TODO: Tabs make it easy to switch between different views.
 * @slot default - The default slot.
 */
let TabsTab = class TabsTab {
    constructor() {
        this.change = () => console.log('TODO: can not use out of tabs');
    }
    get attributes() {
        return {
            active: this.tunnel && this.tunnel === this.value,
            onClick: this.onClick
        };
    }
    /**
     * Events handler
     */
    onClick() {
        if (this.disabled)
            return;
        this.change(this.value);
    }
    render() {
        return uhtml.html `<span>
        <slot />
      </span>`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
TabsTab.TAG = "plus-tabs-tab";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
TabsTab.STYLES = css_248z;
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], TabsTab.prototype, "disabled", void 0);
__decorate([
    Property({
        type: 0
    })
], TabsTab.prototype, "value", void 0);
__decorate([
    Inject(true)
], TabsTab.prototype, "tunnel", void 0);
__decorate([
    Inject()
], TabsTab.prototype, "change", void 0);
__decorate([
    Attributes()
], TabsTab.prototype, "attributes", null);
__decorate([
    Bind()
], TabsTab.prototype, "onClick", null);
TabsTab = __decorate([
    Element("plus-tabs-tab")
], TabsTab);

export { TabsTab };