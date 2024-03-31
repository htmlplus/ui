import { _ as __decorate, P as PlusCore, h as html, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]){display:none!important}:host{flex:1 1 auto;padding:1rem}";

/**
 * @development
 * @subset
 *
 * @slot default - The default slot.
 */
let CardBody = class CardBody extends PlusCore {
    render() {
        return html `<slot />`;
    }
};
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
CardBody.tag = "plus-card-body";
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
CardBody.style = css_248z;
CardBody = __decorate([
    Element()
], CardBody);

export { CardBody };
