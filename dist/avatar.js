import { P as PlusCore, i as isCSSColor, e as isSize, t as toUnit, h as html, d as styles, a as Property, f as Style, b as Element } from "./core/index.js";
const STYLE_IMPORTED = ":host,\n:host::before,\n:host::after {\n  box-sizing: border-box;\n}\n\n:host *,\n:host *::before,\n:host *::after {\n  box-sizing: border-box;\n}\n\n:host([hidden]) {\n  display: none !important;\n}\n\n:host {\n  --plus-avatar-color: gray;\n  --plus-avatar-size: 3rem;\n}\n\n:host {\n  color: var(--plus-avatar-color);\n  background-color: hsl(from var(--plus-avatar-color) h s 90%);\n  border-radius: 0.25rem;\n  height: var(--plus-avatar-size);\n  width: var(--plus-avatar-size);\n  align-items: center;\n  display: inline-flex;\n  justify-content: center;\n  position: relative;\n  text-align: center;\n  text-transform: uppercase;\n  user-select: none;\n  vertical-align: middle;\n}\n\n:host([shape=circle]) {\n  border-radius: 50%;\n}\n\n:host([shape=round]) {\n  border-radius: 0.25rem;\n}\n\n:host([shape=tile]) {\n  border-radius: 0;\n}\n\n:host([size=xxs]) {\n  --plus-avatar-size: 1rem;\n}\n\n:host([size=xs]) {\n  --plus-avatar-size: 1.5rem;\n}\n\n:host([size=sm]) {\n  --plus-avatar-size: 2rem;\n}\n\n:host([size=md]) {\n  --plus-avatar-size: 3rem;\n}\n\n:host([size=lg]) {\n  --plus-avatar-size: 4rem;\n}\n\n:host([size=xl]) {\n  --plus-avatar-size: 6rem;\n}\n\n:host([size=xxl]) {\n  --plus-avatar-size: 8rem;\n}\n\nslot[name] {\n  display: block;\n  position: absolute;\n}\n\nslot:not([name]) {\n  border-radius: inherit;\n  font-size: calc(var(--plus-avatar-size) * 0.35);\n}\n\n::slotted(a) {\n  position: absolute;\n  inset: 0;\n}\n\n::slotted(:not([slot]):not(plus-icon)) {\n  border-radius: inherit;\n  height: 100%;\n  width: 100%;\n}\n\n::slotted(plus-avatar) {\n  border: solid 2px white;\n}";
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
let Avatar = class extends PlusCore {
  get placements() {
    const offset = this.shape == "circle" ? "14.64466%" : "0";
    return [{
      key: "bottom",
      style: {
        bottom: 0,
        [this.isRTL ? "right" : "left"]: "50%",
        transform: `translate(${this.isRTL ? "+50%" : "-50%"}, +50%)`
      }
    }, {
      key: "center",
      style: {
        top: "50%",
        [this.isRTL ? "right" : "left"]: "50%",
        transform: `translate(${this.isRTL ? "+50%" : "-50%"}, -50%)`
      }
    }, {
      key: "end",
      style: {
        top: "50%",
        [this.isRTL ? "left" : "right"]: 0,
        transform: `translate(${this.isRTL ? "-50%" : "+50%"}, -50%)`
      }
    }, {
      key: "end-bottom",
      style: {
        bottom: offset,
        [this.isRTL ? "left" : "right"]: offset,
        transform: `translate(${this.isRTL ? "-50%" : "+50%"}, +50%)`
      }
    }, {
      key: "end-top",
      style: {
        top: offset,
        [this.isRTL ? "left" : "right"]: offset,
        transform: `translate(${this.isRTL ? "-50%" : "+50%"}, -50%)`
      }
    }, {
      key: "left",
      style: {
        top: "50%",
        left: 0,
        transform: "translate(-50%, -50%)"
      }
    }, {
      key: "left-bottom",
      style: {
        bottom: offset,
        left: offset,
        transform: "translate(-50%, +50%)"
      }
    }, {
      key: "left-top",
      style: {
        top: offset,
        left: offset,
        transform: "translate(-50%, -50%)"
      }
    }, {
      key: "right",
      style: {
        top: "50%",
        right: 0,
        transform: "translate(+50%, -50%)"
      }
    }, {
      key: "right-bottom",
      style: {
        bottom: offset,
        right: offset,
        transform: "translate(+50%, +50%)"
      }
    }, {
      key: "right-top",
      style: {
        top: offset,
        right: offset,
        transform: "translate(+50%, -50%)"
      }
    }, {
      key: "start",
      style: {
        top: "50%",
        [this.isRTL ? "right" : "left"]: 0,
        transform: `translate(${this.isRTL ? "+50%" : "-50%"}, -50%)`
      }
    }, {
      key: "start-bottom",
      style: {
        bottom: offset,
        [this.isRTL ? "right" : "left"]: offset,
        transform: `translate(${this.isRTL ? "+50%" : "-50%"}, +50%)`
      }
    }, {
      key: "start-top",
      style: {
        top: offset,
        [this.isRTL ? "right" : "left"]: offset,
        transform: `translate(${this.isRTL ? "+50%" : "-50%"}, -50%)`
      }
    }, {
      key: "top",
      style: {
        top: 0,
        [this.isRTL ? "right" : "left"]: "50%",
        transform: `translate(${this.isRTL ? "+50%" : "-50%"}, -50%)`
      }
    }];
  }
  get style() {
    return {
      "--plus-avatar-color": isCSSColor(this.color) ? this.color : void 0,
      "--plus-avatar-size": isSize(this.color) ? void 0 : toUnit(this.size)
    };
  }
  render() {
    return html`
        <slot />
        ${this.placements.map((placement) => html`<slot name=${placement.key} style=${styles(placement.style)} />`)}
      `;
  }
};
Avatar.tag = "plus-avatar";
Avatar.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    reflect: true,
    type: 256
  })
], Avatar.prototype, "color", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], Avatar.prototype, "shape", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 328
  })
], Avatar.prototype, "size", 2);
__decorateClass([
  Style()
], Avatar.prototype, "style", 1);
Avatar = __decorateClass([
  Element()
], Avatar);
export {
  Avatar
};
