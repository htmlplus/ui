import { _ as __decorate, P as PlusCore, h as html, f as attributes, b as Property, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]){display:none!important}:host([type=dashed])::part(line){border-style:dashed}:host([type=dotted])::part(line){border-style:dotted}:host([type=double])::part(line){border-style:double}:host([type=groove])::part(line){border-style:groove}:host([type=inset])::part(line){border-style:inset}:host([type=outset])::part(line){border-style:outset}:host([type=ridge])::part(line){border-style:ridge}:host([type=solid])::part(line){border-style:solid}:host([width=xs])::part(line){border-width:1px}:host([width=sm])::part(line){border-width:2px}:host([width=md])::part(line){border-width:3px}:host([width=lg])::part(line){border-width:4px}:host([width=xl])::part(line){border-width:5px}:host{align-items:center;display:flex;gap:.5rem}:host::part(line){border-color:#d3d3d3;flex:1 1 auto}:host([placement=end])::part(suffix),:host([placement=start])::part(prefix){display:none}:host([aria-orientation=horizontal]){flex-direction:row}:host([aria-orientation=horizontal])::part(line){border-bottom:none;border-left:none;border-right:none}:host([aria-orientation=horizontal][variant=inset])::part(prefix){margin-inline-start:5rem}:host([aria-orientation=horizontal][variant=middle])::part(prefix){margin-inline-start:1rem}:host([aria-orientation=horizontal][variant=middle])::part(suffix){margin-inline-end:1rem}:host([aria-orientation=vertical]){align-self:stretch;flex-direction:column;height:auto;min-height:100%}:host([aria-orientation=vertical])::part(line){border-bottom:none;border-right:none;border-top:none}:host([aria-orientation=vertical][variant=inset])::part(prefix){margin-block-start:5rem}:host([aria-orientation=vertical][variant=middle])::part(prefix){margin-block-start:1rem}:host([aria-orientation=vertical][variant=middle])::part(suffix){margin-block-end:1rem}:host(:empty){gap:0}";

/**
 * @stable
 *
 * @part line    - The prefix and suffix element.
 * @part prefix  - The prefix element.
 * @part suffix  - The suffix element.
 *
 * @slot default - The default slot.
 */
let Divider = class Divider extends PlusCore {
    constructor() {
        super(...arguments);
        /**
         * Specifies the location of the default slot.
         */
        this.placement = 'center';
        /**
         * Specifies the width of the border.
         */
        this.width = 'md';
        /**
         * Specifies the style of the border.
         */
        this.type = 'solid';
        /**
         * Specifies the amount of indentation.
         */
        this.variant = 'full';
    }
    render() {
        return html `${attributes(this, [{
                "aria-orientation": this.vertical ? 'vertical' : 'horizontal'
            }, {
                "role": "separator"
            }])}
        <div part="line prefix"></div>
        <slot />
        <div part="line suffix"></div>
      `;
    }
};
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
Divider.tag = "plus-divider";
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
Divider.style = css_248z;
__decorate([
    Property({
        reflect: true,
        type: 8
    })
], Divider.prototype, "placement", void 0);
__decorate([
    Property({
        reflect: true,
        type: 8
    })
], Divider.prototype, "width", void 0);
__decorate([
    Property({
        reflect: true,
        type: 8
    })
], Divider.prototype, "type", void 0);
__decorate([
    Property({
        reflect: true,
        type: 8
    })
], Divider.prototype, "variant", void 0);
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], Divider.prototype, "vertical", void 0);
Divider = __decorate([
    Element()
], Divider);

export { Divider };
