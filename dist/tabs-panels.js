import { _ as __decorate, P as PlusCore, h as html, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]){display:none!important}:host{display:block}";

/**
 * TODO: This element contains panels.
 * @subset
 *
 * @slot default - The default slot.
 */
let TabsPanels = class TabsPanels extends PlusCore {
    render() {
        return html `<slot />`;
    }
};
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
TabsPanels.tag = "plus-tabs-panels";
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
TabsPanels.style = css_248z;
TabsPanels = __decorate([
    Element()
], TabsPanels);

export { TabsPanels };
