import { _ as __decorate, P as PlusCore, h as html, e as styles, b as Property, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]){display:none!important}:host{display:block}.root{border-radius:inherit;overflow:hidden;position:relative}::slotted(*){box-sizing:border-box;height:100%;inset:0;position:absolute;width:100%}::slotted(*){margin:0}";

/**
 * @stable
 *
 * @slot default - The default slot.
 */
let AspectRatio = class AspectRatio extends PlusCore {
    constructor() {
        super(...arguments);
        /**
         * Specifies the minimum height.
         */
        this.minHeight = undefined;
        /**
         * Specifies the maximum height.
         */
        this.maxHeight = undefined;
        /**
         * Specifies the ratio.
         */
        this.value = 1;
    }
    get ratio() {
        if (typeof this.value === 'number')
            return this.value;
        let [valueA, valueB] = `${this.value}`.split('/').map((item) => isNaN(item) ? NaN : parseFloat(item));
        valueB = valueB !== null && valueB !== void 0 ? valueB : 1;
        if (!isNaN(valueA + valueB))
            return valueA / valueB;
    }
    get style() {
        const ratio = this.ratio;
        if (!ratio)
            return;
        // TODO: parse number in @Property()
        const minHeight = isNaN(this.minHeight) ? this.minHeight : `${this.minHeight}px`;
        const maxHeight = isNaN(this.maxHeight) ? this.maxHeight : `${this.maxHeight}px`;
        const paddingTop = minHeight || maxHeight ? `clamp(${minHeight || 0}, ${100 / ratio}%, ${maxHeight || '9999px'})` : `${100 / ratio}%`;
        return {
            paddingTop
        };
    }
    render() {
        return html `<div class="root" style=${styles(this.style)}>
        <slot />
      </div>`;
    }
};
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
AspectRatio.tag = "plus-aspect-ratio";
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
AspectRatio.style = css_248z;
__decorate([
    Property({
        type: 320
    })
], AspectRatio.prototype, "minHeight", void 0);
__decorate([
    Property({
        type: 320
    })
], AspectRatio.prototype, "maxHeight", void 0);
__decorate([
    Property({
        type: 320
    })
], AspectRatio.prototype, "value", void 0);
AspectRatio = __decorate([
    Element()
], AspectRatio);

export { AspectRatio };
