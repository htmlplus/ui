import { P as PlusCore, h as html, a as Property, b as Element } from "./core/index.js";
const STYLE_IMPORTED = ':host,\n:host::before,\n:host::after {\n  box-sizing: border-box;\n}\n\n:host *,\n:host *::before,\n:host *::after {\n  box-sizing: border-box;\n}\n\n:host([hidden]) {\n  display: none !important;\n}\n\n:host {\n  --plus-card-background-color: white;\n  --plus-card-border-color: lightgray;\n  --plus-card-border-radius: 0.25rem;\n  --plus-card-border-width: 1px;\n  --plus-card-box-shadow: none;\n}\n\n:host {\n  background-color: var(--plus-card-background-color);\n  border-radius: var(--plus-card-border-radius);\n  box-shadow: var(--plus-card-box-shadow);\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-clip: border-box;\n}\n\n:host([flat]) {\n  box-shadow: none;\n}\n\n:host([outlined]) {\n  border: solid var(--plus-card-border-width) var(--plus-card-border-color);\n}\n\n:host([tile]) {\n  border-radius: 0;\n}\n\n:host([elevation="1"]) {\n  box-shadow: 0 02px 01px -1px rgba(0, 0, 0, 0.2), 0 01px 01px 0px rgba(0, 0, 0, 0.14), 0 1px 03px 0px rgba(0, 0, 0, 0.12);\n}\n\n:host([elevation="2"]) {\n  box-shadow: 0 03px 01px -2px rgba(0, 0, 0, 0.2), 0 02px 02px 0px rgba(0, 0, 0, 0.14), 0 1px 05px 0px rgba(0, 0, 0, 0.12);\n}\n\n:host([elevation="3"]) {\n  box-shadow: 0 03px 03px -2px rgba(0, 0, 0, 0.2), 0 03px 04px 0px rgba(0, 0, 0, 0.14), 0 1px 08px 0px rgba(0, 0, 0, 0.12);\n}\n\n:host([elevation="4"]) {\n  box-shadow: 0 02px 04px -1px rgba(0, 0, 0, 0.2), 0 04px 05px 0px rgba(0, 0, 0, 0.14), 0 1px 10px 0px rgba(0, 0, 0, 0.12);\n}\n\n:host([elevation="5"]) {\n  box-shadow: 0 03px 05px -1px rgba(0, 0, 0, 0.2), 0 05px 08px 0px rgba(0, 0, 0, 0.14), 0 1px 14px 0px rgba(0, 0, 0, 0.12);\n}\n\n:host([elevation="6"]) {\n  box-shadow: 0 03px 05px -1px rgba(0, 0, 0, 0.2), 0 06px 10px 0px rgba(0, 0, 0, 0.14), 0 1px 18px 0px rgba(0, 0, 0, 0.12);\n}\n\n:host([elevation="7"]) {\n  box-shadow: 0 04px 05px -2px rgba(0, 0, 0, 0.2), 0 07px 10px 1px rgba(0, 0, 0, 0.14), 0 2px 16px 1px rgba(0, 0, 0, 0.12);\n}\n\n:host([elevation="8"]) {\n  box-shadow: 0 05px 05px -3px rgba(0, 0, 0, 0.2), 0 08px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n:host([elevation="9"]) {\n  box-shadow: 0 05px 06px -3px rgba(0, 0, 0, 0.2), 0 09px 12px 1px rgba(0, 0, 0, 0.14), 0 3px 16px 2px rgba(0, 0, 0, 0.12);\n}\n\n:host([elevation="10"]) {\n  box-shadow: 0 06px 06px -3px rgba(0, 0, 0, 0.2), 0 10px 14px 1px rgba(0, 0, 0, 0.14), 0 4px 18px 3px rgba(0, 0, 0, 0.12);\n}\n\n:host([elevation="11"]) {\n  box-shadow: 0 06px 07px -4px rgba(0, 0, 0, 0.2), 0 11px 15px 1px rgba(0, 0, 0, 0.14), 0 4px 20px 3px rgba(0, 0, 0, 0.12);\n}\n\n:host([elevation="12"]) {\n  box-shadow: 0 07px 08px -4px rgba(0, 0, 0, 0.2), 0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12);\n}\n\n:host([elevation="13"]) {\n  box-shadow: 0 07px 08px -4px rgba(0, 0, 0, 0.2), 0 13px 19px 2px rgba(0, 0, 0, 0.14), 0 5px 24px 4px rgba(0, 0, 0, 0.12);\n}\n\n:host([elevation="14"]) {\n  box-shadow: 0 07px 09px -4px rgba(0, 0, 0, 0.2), 0 14px 21px 2px rgba(0, 0, 0, 0.14), 0 5px 26px 4px rgba(0, 0, 0, 0.12);\n}\n\n:host([elevation="15"]) {\n  box-shadow: 0 08px 09px -5px rgba(0, 0, 0, 0.2), 0 15px 22px 2px rgba(0, 0, 0, 0.14), 0 6px 28px 5px rgba(0, 0, 0, 0.12);\n}\n\n:host([elevation="16"]) {\n  box-shadow: 0 08px 10px -5px rgba(0, 0, 0, 0.2), 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12);\n}\n\n:host([elevation="17"]) {\n  box-shadow: 0 08px 11px -5px rgba(0, 0, 0, 0.2), 0 17px 26px 2px rgba(0, 0, 0, 0.14), 0 6px 32px 5px rgba(0, 0, 0, 0.12);\n}\n\n:host([elevation="18"]) {\n  box-shadow: 0 09px 11px -5px rgba(0, 0, 0, 0.2), 0 18px 28px 2px rgba(0, 0, 0, 0.14), 0 7px 34px 6px rgba(0, 0, 0, 0.12);\n}\n\n:host([elevation="19"]) {\n  box-shadow: 0 09px 12px -6px rgba(0, 0, 0, 0.2), 0 19px 29px 2px rgba(0, 0, 0, 0.14), 0 7px 36px 6px rgba(0, 0, 0, 0.12);\n}\n\n:host([elevation="20"]) {\n  box-shadow: 0 10px 13px -6px rgba(0, 0, 0, 0.2), 0 20px 31px 3px rgba(0, 0, 0, 0.14), 0 8px 38px 7px rgba(0, 0, 0, 0.12);\n}\n\n:host([elevation="21"]) {\n  box-shadow: 0 10px 13px -6px rgba(0, 0, 0, 0.2), 0 21px 33px 3px rgba(0, 0, 0, 0.14), 0 8px 40px 7px rgba(0, 0, 0, 0.12);\n}\n\n:host([elevation="22"]) {\n  box-shadow: 0 10px 14px -6px rgba(0, 0, 0, 0.2), 0 22px 35px 3px rgba(0, 0, 0, 0.14), 0 8px 42px 7px rgba(0, 0, 0, 0.12);\n}\n\n:host([elevation="23"]) {\n  box-shadow: 0 11px 14px -7px rgba(0, 0, 0, 0.2), 0 23px 36px 3px rgba(0, 0, 0, 0.14), 0 9px 44px 8px rgba(0, 0, 0, 0.12);\n}\n\n:host([elevation="24"]) {\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);\n}';
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
    type: 64
  })
], Card.prototype, "elevation", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 2
  })
], Card.prototype, "flat", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 2
  })
], Card.prototype, "outlined", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 2
  })
], Card.prototype, "tile", 2);
Card = __decorateClass([
  Element()
], Card);
export {
  Card
};
