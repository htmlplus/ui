import { _ as __decorate, u as uhtml, b as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{flex:1 1 auto;padding:1rem}";

/**
 * @development
 * @slot default - The default slot.
 */
let CardBody = class CardBody {
    render() {
        return uhtml.html `<slot />`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
CardBody.TAG = "plus-card-body";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
CardBody.STYLES = css_248z;
CardBody = __decorate([
    Element()
], CardBody);

export { CardBody };
