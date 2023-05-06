import { _ as __decorate, b as html, P as Property, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{--plus-card-background-color:#fff;--plus-card-border-color:#d3d3d3;--plus-card-border-radius:0.25rem;--plus-card-border-width:1px;--plus-card-box-shadow:none}:host{word-wrap:break-word;background-clip:border-box;background-color:var(--plus-card-background-color);border-radius:var(--plus-card-border-radius);box-shadow:var(--plus-card-box-shadow);display:flex;flex-direction:column;min-width:0;position:relative}:host([flat]:not([flat=false])){box-shadow:none}:host([outlined]:not([outlined=false])){border:solid var(--plus-card-border-width) var(--plus-card-border-color)}:host([tile]:not([tile=false])){border-radius:0}:host([elevation=\"1\"]){box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}:host([elevation=\"2\"]){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}:host([elevation=\"3\"]){box-shadow:0 3px 3px -2px rgba(0,0,0,.2),0 3px 4px 0 rgba(0,0,0,.14),0 1px 8px 0 rgba(0,0,0,.12)}:host([elevation=\"4\"]){box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}:host([elevation=\"5\"]){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 5px 8px 0 rgba(0,0,0,.14),0 1px 14px 0 rgba(0,0,0,.12)}:host([elevation=\"6\"]){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}:host([elevation=\"7\"]){box-shadow:0 4px 5px -2px rgba(0,0,0,.2),0 7px 10px 1px rgba(0,0,0,.14),0 2px 16px 1px rgba(0,0,0,.12)}:host([elevation=\"8\"]){box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}:host([elevation=\"9\"]){box-shadow:0 5px 6px -3px rgba(0,0,0,.2),0 9px 12px 1px rgba(0,0,0,.14),0 3px 16px 2px rgba(0,0,0,.12)}:host([elevation=\"10\"]){box-shadow:0 6px 6px -3px rgba(0,0,0,.2),0 10px 14px 1px rgba(0,0,0,.14),0 4px 18px 3px rgba(0,0,0,.12)}:host([elevation=\"11\"]){box-shadow:0 6px 7px -4px rgba(0,0,0,.2),0 11px 15px 1px rgba(0,0,0,.14),0 4px 20px 3px rgba(0,0,0,.12)}:host([elevation=\"12\"]){box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 12px 17px 2px rgba(0,0,0,.14),0 5px 22px 4px rgba(0,0,0,.12)}:host([elevation=\"13\"]){box-shadow:0 7px 8px -4px rgba(0,0,0,.2),0 13px 19px 2px rgba(0,0,0,.14),0 5px 24px 4px rgba(0,0,0,.12)}:host([elevation=\"14\"]){box-shadow:0 7px 9px -4px rgba(0,0,0,.2),0 14px 21px 2px rgba(0,0,0,.14),0 5px 26px 4px rgba(0,0,0,.12)}:host([elevation=\"15\"]){box-shadow:0 8px 9px -5px rgba(0,0,0,.2),0 15px 22px 2px rgba(0,0,0,.14),0 6px 28px 5px rgba(0,0,0,.12)}:host([elevation=\"16\"]){box-shadow:0 8px 10px -5px rgba(0,0,0,.2),0 16px 24px 2px rgba(0,0,0,.14),0 6px 30px 5px rgba(0,0,0,.12)}:host([elevation=\"17\"]){box-shadow:0 8px 11px -5px rgba(0,0,0,.2),0 17px 26px 2px rgba(0,0,0,.14),0 6px 32px 5px rgba(0,0,0,.12)}:host([elevation=\"18\"]){box-shadow:0 9px 11px -5px rgba(0,0,0,.2),0 18px 28px 2px rgba(0,0,0,.14),0 7px 34px 6px rgba(0,0,0,.12)}:host([elevation=\"19\"]){box-shadow:0 9px 12px -6px rgba(0,0,0,.2),0 19px 29px 2px rgba(0,0,0,.14),0 7px 36px 6px rgba(0,0,0,.12)}:host([elevation=\"20\"]){box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 20px 31px 3px rgba(0,0,0,.14),0 8px 38px 7px rgba(0,0,0,.12)}:host([elevation=\"21\"]){box-shadow:0 10px 13px -6px rgba(0,0,0,.2),0 21px 33px 3px rgba(0,0,0,.14),0 8px 40px 7px rgba(0,0,0,.12)}:host([elevation=\"22\"]){box-shadow:0 10px 14px -6px rgba(0,0,0,.2),0 22px 35px 3px rgba(0,0,0,.14),0 8px 42px 7px rgba(0,0,0,.12)}:host([elevation=\"23\"]){box-shadow:0 11px 14px -7px rgba(0,0,0,.2),0 23px 36px 3px rgba(0,0,0,.14),0 9px 44px 8px rgba(0,0,0,.12)}:host([elevation=\"24\"]){box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}";

/**
 * @slot default - The default slot.
 */
let Card = class Card {
    render() {
        return html `<slot />`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Card.TAG = "plus-card";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Card.STYLES = css_248z;
__decorate([
    Property({
        reflect: true,
        type: 8
    })
], Card.prototype, "elevation", void 0);
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], Card.prototype, "flat", void 0);
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], Card.prototype, "outlined", void 0);
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], Card.prototype, "tile", void 0);
Card = __decorate([
    Element()
], Card);

export { Card };
