import { _ as __decorate, u as uhtml, P as Property, A as Attributes, a as Element } from './core/index.js';

var css_248z = "*,:after,:before{box-sizing:border-box}:host,:host:after,:host:before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none}:host{--plus-divider-color:grey;--plus-divider-gutter:0.5rem;--plus-divider-opacity:0.25;--plus-divider-type:unset;--plus-divider-width:unset}:host{align-items:center;color:var(--plus-divider-color);display:flex;font-size:.75rem}:host:after,:host:before{content:\"\";flex:1 1 auto;opacity:var(--plus-divider-opacity)}:host([placement=end]):after,:host([placement=start]):before{content:none}:host([type=dashed]){--plus-divider-type:dashed}:host([type=dotted]){--plus-divider-type:dotted}:host([type=double]){--plus-divider-type:double}:host([type=groove]){--plus-divider-type:groove}:host([type=inset]){--plus-divider-type:inset}:host([type=outset]){--plus-divider-type:outset}:host([type=ridge]){--plus-divider-type:ridge}:host([type=solid]){--plus-divider-type:solid}:host([width=xs]){--plus-divider-width:1px}:host([width=sm]){--plus-divider-width:2px}:host([width=md]){--plus-divider-width:3px}:host([width=lg]){--plus-divider-width:4px}:host([width=xl]){--plus-divider-width:5px}:host([aria-orientation=horizontal]){flex-direction:row}:host([aria-orientation=horizontal]):after,:host([aria-orientation=horizontal]):before{border-top:var(--plus-divider-width) var(--plus-divider-type) var(--plus-divider-color)}:host([aria-orientation=horizontal]):before{margin-inline-end:var(--plus-divider-gutter)}:host([aria-orientation=horizontal]):after{margin-inline-start:var(--plus-divider-gutter)}:host([aria-orientation=horizontal]:empty):before{margin-inline-end:0}:host([aria-orientation=horizontal]:empty):after{margin-inline-start:0}:host([aria-orientation=horizontal][variant=inset]):before{margin-inline-start:5rem}:host([aria-orientation=horizontal][variant=middle]):before{margin-inline-start:1rem}:host([aria-orientation=horizontal][variant=middle]):after{margin-inline-end:1rem}:host([aria-orientation=vertical]){align-self:stretch;flex-direction:column;height:auto;min-height:100%}:host([aria-orientation=vertical]):after,:host([aria-orientation=vertical]):before{border-left:var(--plus-divider-width) var(--plus-divider-type) var(--plus-divider-color)}:host([aria-orientation=vertical]):before{margin-block-end:var(--plus-divider-gutter)}:host([aria-orientation=vertical]):after{margin-block-start:var(--plus-divider-gutter)}:host([aria-orientation=vertical]:empty):after,:host([aria-orientation=vertical]:empty):before{margin-block:0}:host([aria-orientation=vertical][variant=inset]):before{margin-block-start:5rem}:host([aria-orientation=vertical][variant=middle]):before{margin-block-start:1rem}:host([aria-orientation=vertical][variant=middle]):after{margin-block-end:1rem}";

/**
 * @stable
 */
let Divider = class Divider {
    constructor() {
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
    get attributes() {
        return {
            'aria-orientation': this.vertical ? 'vertical' : 'horizontal',
            'role': 'separator'
        };
    }
    render() {
        return uhtml.html `<slot />`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Divider.TAG = "plus-divider";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Divider.STYLES = css_248z;
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
__decorate([
    Attributes()
], Divider.prototype, "attributes", null);
Divider = __decorate([
    Element("plus-divider")
], Divider);

export { Divider };
