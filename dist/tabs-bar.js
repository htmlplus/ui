import { _ as __decorate, h as html, d as attributes, e as host, P as Property, b as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{display:flex;flex:0 0 auto;overflow:auto}:host([reverse]:not([reverse=false])){flex-direction:row-reverse}:host([grow]:not([grow=false])) ::slotted(plus-tabs-tab){flex-grow:1}:host([justify=end][reverse]:not([reverse=false])),:host([justify=start]){justify-content:flex-start}:host([justify=center]){justify-content:center}:host([justify=end]),:host([justify=start][reverse]:not([reverse=false])){justify-content:flex-end}";

/**
 * TODO: Arranges tabs within a bar.
 * @slot default - The default slot.
 */
let TabsBar = class TabsBar {
    constructor() {
        /**
         * Specifies how the tabs are aligned.
         */
        this.justify = 'start';
    }
    render() {
        return html `${attributes(host(this), [{
                "role": "tablist"
            }])}
        <slot />
      `;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
TabsBar.TAG = "plus-tabs-bar";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
TabsBar.STYLES = css_248z;
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
