import { P as PlusCore, i as toCSSColor, b as attributes, h as html, c as Property, V as Variant, O as Overrides, g as Style, d as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{--plus-divider-color: black;--plus-divider-size: 1px;--plus-divider-stroke: solid}:host([stroke=dashed]){--plus-divider-stroke: dashed}:host([stroke=dotted]){--plus-divider-stroke: dotted}:host([stroke=double]){--plus-divider-stroke: double}:host([stroke=groove]){--plus-divider-stroke: groove}:host([stroke=inset]){--plus-divider-stroke: inset}:host([stroke=outset]){--plus-divider-stroke: outset}:host([stroke=ridge]){--plus-divider-stroke: ridge}:host([stroke=solid]){--plus-divider-stroke: solid}:host([size=xs]){--plus-divider-size: 1px}:host([size=sm]){--plus-divider-size: 2px}:host([size=md]){--plus-divider-size: 3px}:host([size=lg]){--plus-divider-size: 4px}:host([size=xl]){--plus-divider-size: 5px}:host{color:var(--plus-divider-color);gap:.5rem;align-items:center;display:flex}:host::part(line){border-color:hsl(from var(--plus-divider-color) h s 85);border-style:var(--plus-divider-stroke);border-width:var(--plus-divider-size);flex:1 1 auto}:host([placement=start])::part(prefix),:host([placement=end])::part(suffix){display:none}:host([orientation=horizontal]){flex-direction:row}:host([orientation=horizontal])::part(line){border-right:none;border-bottom:none;border-left:none}:host([orientation=horizontal][inset=start])::part(prefix){margin-inline-start:5rem}:host([orientation=horizontal][inset=end])::part(suffix){margin-inline-end:5rem}:host([orientation=horizontal][inset=both])::part(prefix){margin-inline-start:1rem}:host([orientation=horizontal][inset=both])::part(suffix){margin-inline-end:1rem}:host([orientation=vertical]){flex-direction:column;height:auto;min-height:100%;align-self:stretch}:host([orientation=vertical])::part(line){border-top:none;border-right:none;border-bottom:none}:host([orientation=vertical][inset=start])::part(prefix){margin-block-start:5rem}:host([orientation=vertical][inset=end])::part(suffix){margin-block-end:5rem}:host([orientation=vertical][inset=both])::part(prefix){margin-block-start:1rem}:host([orientation=vertical][inset=both])::part(suffix){margin-block-end:1rem}:host(:empty){gap:0}slot{display:inline-block}:host([orientation=horizontal][stroke=dashed]) slot,:host([orientation=horizontal][stroke=dotted]) slot{min-width:var(--plus-divider-size)}:host([orientation=vertical][stroke=dashed]) slot,:host([orientation=vertical][stroke=dotted]) slot{min-height:var(--plus-divider-size)}";
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
    this.inset = "none";
    this.orientation = "horizontal";
    this.placement = "center";
    this.size = "md";
    this.stroke = "solid";
  }
  get style() {
    return {
      "--plus-divider-color": toCSSColor(this.color)
    };
  }
  render() {
    return html`${attributes(this, [{
      "aria-orientation": this.orientation
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
    type: 512
  })
], Divider.prototype, "color", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 0
  })
], Divider.prototype, "inset", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 16
  })
], Divider.prototype, "orientation", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 0
  })
], Divider.prototype, "placement", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 0
  })
], Divider.prototype, "size", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 0
  })
], Divider.prototype, "stroke", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 0
  }),
  Variant()
], Divider.prototype, "variant", 2);
__decorateClass([
  Property({
    type: 0
  }),
  Overrides()
], Divider.prototype, "overrides", 2);
__decorateClass([
  Style()
], Divider.prototype, "style", 1);
Divider = __decorateClass([
  Element()
], Divider);
export {
  Divider
};
