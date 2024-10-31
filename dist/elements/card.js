import { P as PlusCore, h as html, a as Property, E as Element } from "../core/index.js";
const STYLE_IMPORTED = ':host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{--plus-card-background-color: white;--plus-card-border-color: lightgray;--plus-card-border-radius: 0.25rem;--plus-card-border-width: 1px;--plus-card-box-shadow: none}:host{background-color:var(--plus-card-background-color);border-radius:var(--plus-card-border-radius);box-shadow:var(--plus-card-box-shadow);position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-clip:border-box}:host([flat]){box-shadow:none}:host([outlined]){border:solid var(--plus-card-border-width) var(--plus-card-border-color)}:host([tile]){border-radius:0}:host([elevation="1"]){box-shadow:0 02px 01px -1px rgba(0, 0, 0, 0.2), 0 01px 01px 0px rgba(0, 0, 0, 0.14), 0 1px 03px 0px rgba(0, 0, 0, 0.12)}:host([elevation="2"]){box-shadow:0 03px 01px -2px rgba(0, 0, 0, 0.2), 0 02px 02px 0px rgba(0, 0, 0, 0.14), 0 1px 05px 0px rgba(0, 0, 0, 0.12)}:host([elevation="3"]){box-shadow:0 03px 03px -2px rgba(0, 0, 0, 0.2), 0 03px 04px 0px rgba(0, 0, 0, 0.14), 0 1px 08px 0px rgba(0, 0, 0, 0.12)}:host([elevation="4"]){box-shadow:0 02px 04px -1px rgba(0, 0, 0, 0.2), 0 04px 05px 0px rgba(0, 0, 0, 0.14), 0 1px 10px 0px rgba(0, 0, 0, 0.12)}:host([elevation="5"]){box-shadow:0 03px 05px -1px rgba(0, 0, 0, 0.2), 0 05px 08px 0px rgba(0, 0, 0, 0.14), 0 1px 14px 0px rgba(0, 0, 0, 0.12)}:host([elevation="6"]){box-shadow:0 03px 05px -1px rgba(0, 0, 0, 0.2), 0 06px 10px 0px rgba(0, 0, 0, 0.14), 0 1px 18px 0px rgba(0, 0, 0, 0.12)}:host([elevation="7"]){box-shadow:0 04px 05px -2px rgba(0, 0, 0, 0.2), 0 07px 10px 1px rgba(0, 0, 0, 0.14), 0 2px 16px 1px rgba(0, 0, 0, 0.12)}:host([elevation="8"]){box-shadow:0 05px 05px -3px rgba(0, 0, 0, 0.2), 0 08px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)}:host([elevation="9"]){box-shadow:0 05px 06px -3px rgba(0, 0, 0, 0.2), 0 09px 12px 1px rgba(0, 0, 0, 0.14), 0 3px 16px 2px rgba(0, 0, 0, 0.12)}:host([elevation="10"]){box-shadow:0 06px 06px -3px rgba(0, 0, 0, 0.2), 0 10px 14px 1px rgba(0, 0, 0, 0.14), 0 4px 18px 3px rgba(0, 0, 0, 0.12)}:host([elevation="11"]){box-shadow:0 06px 07px -4px rgba(0, 0, 0, 0.2), 0 11px 15px 1px rgba(0, 0, 0, 0.14), 0 4px 20px 3px rgba(0, 0, 0, 0.12)}:host([elevation="12"]){box-shadow:0 07px 08px -4px rgba(0, 0, 0, 0.2), 0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12)}:host([elevation="13"]){box-shadow:0 07px 08px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12)}:host([elevation="14"]){box-shadow:0 07px 09px -4px rgba(0, 0, 0, 0.2), 0 14px 21px 2px rgba(0, 0, 0, 0.14), 0 5px 26px 4px rgba(0, 0, 0, 0.12)}:host([elevation="15"]){box-shadow:0 08px 09px -5px rgba(0, 0, 0, 0.2), 0 15px 22px 2px rgba(0, 0, 0, 0.14), 0 6px 28px 5px rgba(0, 0, 0, 0.12)}:host([elevation="16"]){box-shadow:0 08px 10px -5px rgba(0, 0, 0, 0.2), 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12)}:host([elevation="17"]){box-shadow:0 08px 11px -5px rgba(0, 0, 0, 0.2), 0 17px 26px 2px rgba(0, 0, 0, 0.14), 0 6px 32px 5px rgba(0, 0, 0, 0.12)}:host([elevation="18"]){box-shadow:0 09px 11px -5px rgba(0, 0, 0, 0.2), 0 18px 28px 2px rgba(0, 0, 0, 0.14), 0 7px 34px 6px rgba(0, 0, 0, 0.12)}:host([elevation="19"]){box-shadow:0 09px 12px -6px rgba(0, 0, 0, 0.2), 0 19px 29px 2px rgba(0, 0, 0, 0.14), 0 7px 36px 6px rgba(0, 0, 0, 0.12)}:host([elevation="20"]){box-shadow:0 10px 13px -6px rgba(0, 0, 0, 0.2), 0 20px 31px 3px rgba(0, 0, 0, 0.14), 0 8px 38px 7px rgba(0, 0, 0, 0.12)}:host([elevation="21"]){box-shadow:0 10px 13px -6px rgba(0, 0, 0, 0.2), 0 21px 33px 3px rgba(0, 0, 0, 0.14), 0 8px 40px 7px rgba(0, 0, 0, 0.12)}:host([elevation="22"]){box-shadow:0 10px 14px -6px rgba(0, 0, 0, 0.2), 0 22px 35px 3px rgba(0, 0, 0, 0.14), 0 8px 42px 7px rgba(0, 0, 0, 0.12)}:host([elevation="23"]){box-shadow:0 11px 14px -7px rgba(0, 0, 0, 0.2), 0 23px 36px 3px rgba(0, 0, 0, 0.14), 0 9px 44px 8px rgba(0, 0, 0, 0.12)}:host([elevation="24"]){box-shadow:0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12)}';
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
let Card = class extends PlusCore {
  render() {
    return html`<slot />`;
  }
};
Card.tag = "plus-card";
Card.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    reflect: true,
    type: 128
  })
], Card.prototype, "elevation", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], Card.prototype, "flat", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], Card.prototype, "outlined", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], Card.prototype, "tile", 2);
Card = __decorateClass([
  Element()
], Card);
export {
  Card
};
