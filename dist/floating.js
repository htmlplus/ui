import { _ as __decorate, j as isRTL, i as toAxis, t as toUnit, b as styles, u as uhtml, P as Property, A as Attributes, a as Element } from './core/index.js';

/**
 * @stable
 * @slot default - The default slot.
 */
let Floating = class Floating {
    constructor() {
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
        const rtl = isRTL(this);
        let placement = this.placement || '';
        if (placement.match(/^(top|bottom)$/))
            placement = `-${placement}`;
        let [x, y] = placement.split('-');
        x || (x = 'center');
        y || (y = 'center');
        x = toAxis(x, rtl);
        const centeredX = x == 'center';
        const centeredY = y == 'center';
        const X = !centeredX ? x : rtl ? 'right' : 'left';
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
            style['transform'] = `translate(${centeredX ? `${rtl ? '' : '-'}50%` : '0'}, ${centeredY ? '-50%' : '0'})`;
        }
        return styles(style);
    }
    get attributes() {
        return {
            style: this.style
        };
    }
    render() {
        return uhtml.html `<slot />`;
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
__decorate([
    Attributes()
], Floating.prototype, "attributes", null);
Floating = __decorate([
    Element("plus-floating")
], Floating);

export { Floating };
