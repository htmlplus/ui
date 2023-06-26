import { _ as __decorate, P as PlusBase, n as toAxis, t as toUnit, d as styles, h as html, e as attributes, f as host, b as Property, c as Element } from './core/index.js';

/**
 * @stable
 * @slot default - The default slot.
 */
let Floating = class Floating extends PlusBase {
    constructor() {
        super(...arguments);
        /**
         * Specifies the deviation from the center.
         */
        this.offset = 0;
        /**
         * Specifies the display location.
         */
        this.placement = 'end-bottom';
    }
    get style() {
        var _a;
        let placement = this.placement || '';
        if (placement.match(/^(top|bottom)$/))
            placement = `-${placement}`;
        let [x, y] = placement.split('-');
        x || (x = 'center');
        y || (y = 'center');
        x = toAxis(x, this.isRTL);
        const centeredX = x == 'center';
        const centeredY = y == 'center';
        const X = !centeredX ? x : this.isRTL ? 'right' : 'left';
        const Y = !centeredY ? y : 'top';
        const offset = [this.offset].flat().map(offset => toUnit(offset));
        const offsetX = offset[0];
        const offsetY = (_a = offset[1]) !== null && _a !== void 0 ? _a : offset[0];
        const style = {
            position: this.fixed ? 'fixed' : 'absolute'
        };
        style[X] = centeredX ? `calc(50% + ${offsetX})` : `calc(0px + ${offsetX})`;
        style[Y] = centeredY ? `calc(50% + ${offsetY})` : `calc(0px + ${offsetY})`;
        if (centeredX || centeredY) {
            style['transform'] = `translate(${centeredX ? `${this.isRTL ? '' : '-'}50%` : '0'}, ${centeredY ? '-50%' : '0'})`;
        }
        return styles(style);
    }
    render() {
        return html `${attributes(host(this), [{
                "style": styles(this.style)
            }])}
        <slot />
      `;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Floating.TAG = "plus-floating";
__decorate([
    Property({
        type: 2
    })
], Floating.prototype, "fixed", void 0);
__decorate([
    Property({
        type: 321
    })
], Floating.prototype, "offset", void 0);
__decorate([
    Property({
        type: 8
    })
], Floating.prototype, "placement", void 0);
Floating = __decorate([
    Element()
], Floating);

export { Floating };
