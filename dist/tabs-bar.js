import { _ as __decorate, P as PlusCore, h as html, j as attributes, b as Property, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]){display:none!important}:host{display:flex;flex:0 0 auto;overflow:auto}:host([reverse]){flex-direction:row-reverse}:host([grow]) ::slotted(plus-tabs-tab){flex-grow:1}:host([justify=end][reverse]),:host([justify=start]){justify-content:flex-start}:host([justify=center]){justify-content:center}:host([justify=end]),:host([justify=start][reverse]){justify-content:flex-end}";

/**
 * TODO: Arranges tabs within a bar.
 * @subset
 *
 * @slot default - The default slot.
 */
let TabsBar = class TabsBar extends PlusCore {
    constructor() {
        super(...arguments);
        /**
         * Specifies how the tabs are aligned.
         */
        this.justify = 'start';
    }
    render() {
        return html `${attributes(this, [{
                "role": "tablist"
            }])}
        <slot />
      `;
    }
};
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
TabsBar.tag = "plus-tabs-bar";
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
TabsBar.style = css_248z;
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], TabsBar.prototype, "grow", void 0);
__decorate([
    Property({
        reflect: true,
        type: 8
    })
], TabsBar.prototype, "justify", void 0);
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], TabsBar.prototype, "reverse", void 0);
TabsBar = __decorate([
    Element()
], TabsBar);

export { TabsBar };
