import { P as PlusCore, i as isCSSColor, h as html, j as attributes, a as Property, f as Style, b as Element } from "./core/index.js";
const STYLE_IMPORTED = ":host,\n:host::before,\n:host::after {\n  box-sizing: border-box;\n}\n\n:host *,\n:host *::before,\n:host *::after {\n  box-sizing: border-box;\n}\n\n:host([hidden]) {\n  display: none !important;\n}\n\n:host {\n  --plus-divider-color: black;\n}\n\n:host([type=dashed])::part(line) {\n  border-style: dashed;\n}\n\n:host([type=dotted])::part(line) {\n  border-style: dotted;\n}\n\n:host([type=double])::part(line) {\n  border-style: double;\n}\n\n:host([type=groove])::part(line) {\n  border-style: groove;\n}\n\n:host([type=inset])::part(line) {\n  border-style: inset;\n}\n\n:host([type=outset])::part(line) {\n  border-style: outset;\n}\n\n:host([type=ridge])::part(line) {\n  border-style: ridge;\n}\n\n:host([type=solid])::part(line) {\n  border-style: solid;\n}\n\n:host([width=xs])::part(line) {\n  border-width: 1px;\n}\n\n:host([width=sm])::part(line) {\n  border-width: 2px;\n}\n\n:host([width=md])::part(line) {\n  border-width: 3px;\n}\n\n:host([width=lg])::part(line) {\n  border-width: 4px;\n}\n\n:host([width=xl])::part(line) {\n  border-width: 5px;\n}\n\n:host {\n  color: var(--plus-divider-color);\n  gap: 0.5rem;\n  align-items: center;\n  display: flex;\n}\n\n:host::part(line) {\n  border-color: hsl(from var(--plus-divider-color) h s 85);\n  flex: 1 1 auto;\n}\n\n:host([placement=start])::part(prefix),\n:host([placement=end])::part(suffix) {\n  display: none;\n}\n\n:host([aria-orientation=horizontal]) {\n  flex-direction: row;\n}\n\n:host([aria-orientation=horizontal])::part(line) {\n  border-right: none;\n  border-bottom: none;\n  border-left: none;\n}\n\n:host([aria-orientation=horizontal][variant=inset])::part(prefix) {\n  margin-inline-start: 5rem;\n}\n\n:host([aria-orientation=horizontal][variant=middle])::part(prefix) {\n  margin-inline-start: 1rem;\n}\n\n:host([aria-orientation=horizontal][variant=middle])::part(suffix) {\n  margin-inline-end: 1rem;\n}\n\n:host([aria-orientation=vertical]) {\n  flex-direction: column;\n  height: auto;\n  min-height: 100%;\n  align-self: stretch;\n}\n\n:host([aria-orientation=vertical])::part(line) {\n  border-top: none;\n  border-right: none;\n  border-bottom: none;\n}\n\n:host([aria-orientation=vertical][variant=inset])::part(prefix) {\n  margin-block-start: 5rem;\n}\n\n:host([aria-orientation=vertical][variant=middle])::part(prefix) {\n  margin-block-start: 1rem;\n}\n\n:host([aria-orientation=vertical][variant=middle])::part(suffix) {\n  margin-block-end: 1rem;\n}\n\n:host(:empty) {\n  gap: 0;\n}";
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
let Divider = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.placement = "center";
    this.width = "md";
    this.type = "solid";
    this.variant = "full";
  }
  get style() {
    return {
      "--plus-divider-color": isCSSColor(this.color) ? this.color : void 0
    };
  }
  render() {
    return html`${attributes(this, [{
      "aria-orientation": this.vertical ? "vertical" : "horizontal"
    }, {
      "role": "separator"
    }])}
        <div part="line prefix"></div>
        <slot />
        <div part="line suffix"></div>
      `;
  }
};
Divider.tag = "plus-divider";
Divider.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    reflect: true,
    type: 256
  })
], Divider.prototype, "color", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], Divider.prototype, "placement", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], Divider.prototype, "width", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], Divider.prototype, "type", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], Divider.prototype, "variant", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 2
  })
], Divider.prototype, "vertical", 2);
__decorateClass([
  Style()
], Divider.prototype, "style", 1);
Divider = __decorateClass([
  Element()
], Divider);
export {
  Divider
};
