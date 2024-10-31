import { P as PlusCore, i as isCSSColor, h as html, d as attributes, a as Property, S as Style, E as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{--plus-divider-color: black}:host([type=dashed])::part(line){border-style:dashed}:host([type=dotted])::part(line){border-style:dotted}:host([type=double])::part(line){border-style:double}:host([type=groove])::part(line){border-style:groove}:host([type=inset])::part(line){border-style:inset}:host([type=outset])::part(line){border-style:outset}:host([type=ridge])::part(line){border-style:ridge}:host([type=solid])::part(line){border-style:solid}:host([width=xs])::part(line){border-width:1px}:host([width=sm])::part(line){border-width:2px}:host([width=md])::part(line){border-width:3px}:host([width=lg])::part(line){border-width:4px}:host([width=xl])::part(line){border-width:5px}:host{color:var(--plus-divider-color);gap:.5rem;align-items:center;display:flex}:host::part(line){border-color:hsl(from var(--plus-divider-color) h s 85);flex:1 1 auto}:host([placement=start])::part(prefix),:host([placement=end])::part(suffix){display:none}:host([aria-orientation=horizontal]){flex-direction:row}:host([aria-orientation=horizontal])::part(line){border-right:none;border-bottom:none;border-left:none}:host([aria-orientation=horizontal][variant=inset])::part(prefix){margin-inline-start:5rem}:host([aria-orientation=horizontal][variant=middle])::part(prefix){margin-inline-start:1rem}:host([aria-orientation=horizontal][variant=middle])::part(suffix){margin-inline-end:1rem}:host([aria-orientation=vertical]){flex-direction:column;height:auto;min-height:100%;align-self:stretch}:host([aria-orientation=vertical])::part(line){border-top:none;border-right:none;border-bottom:none}:host([aria-orientation=vertical][variant=inset])::part(prefix){margin-block-start:5rem}:host([aria-orientation=vertical][variant=middle])::part(prefix){margin-block-start:1rem}:host([aria-orientation=vertical][variant=middle])::part(suffix){margin-block-end:1rem}:host(:empty){gap:0}";
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
    type: 512
  })
], Divider.prototype, "color", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 16
  })
], Divider.prototype, "placement", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 16
  })
], Divider.prototype, "width", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 16
  })
], Divider.prototype, "type", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 16
  })
], Divider.prototype, "variant", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
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
