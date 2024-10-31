import { P as PlusCore, i as isCSSColor, n as isSize, t as toUnit, h as html, s as styles, a as Property, S as Style, E as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{--plus-avatar-color: gray;--plus-avatar-size: 3rem}:host{color:var(--plus-avatar-color);background-color:hsl(from var(--plus-avatar-color) h s 90%);border-radius:.25rem;height:var(--plus-avatar-size);width:var(--plus-avatar-size);align-items:center;display:inline-flex;justify-content:center;position:relative;text-align:center;text-transform:uppercase;user-select:none;vertical-align:middle}:host([shape=circle]){border-radius:50%}:host([shape=round]){border-radius:.25rem}:host([shape=tile]){border-radius:0}:host([size=xxs]){--plus-avatar-size: 1rem}:host([size=xs]){--plus-avatar-size: 1.5rem}:host([size=sm]){--plus-avatar-size: 2rem}:host([size=md]){--plus-avatar-size: 3rem}:host([size=lg]){--plus-avatar-size: 4rem}:host([size=xl]){--plus-avatar-size: 6rem}:host([size=xxl]){--plus-avatar-size: 8rem}slot[name]{display:block;position:absolute}slot:not([name]){border-radius:inherit;font-size:calc(var(--plus-avatar-size)*.35)}::slotted(a){position:absolute;inset:0}::slotted(:not([slot]):not(plus-icon)){border-radius:inherit;height:100%;width:100%}::slotted(plus-avatar){border:solid 2px #fff}";
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
    type: 512
  })
], Avatar.prototype, "color", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 16
  })
], Avatar.prototype, "shape", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 656
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
