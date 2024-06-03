import { _ as __decorate, P as PlusCore, t as toUnit, h as html, b as Property, j as Style, c as Element } from './core/index.js';

/**
 * @slot default - The default slot.
 */
let Stack = class Stack extends PlusCore {
    constructor() {
        super(...arguments);
        /**
         * The alignment of items along the cross axis.
         */
        this.items = 'center';
        /**
         * The distribution of items along the main axis.
         */
        this.justify = 'center';
    }
    get style() {
        var _a, _b, _c;
        let direction = this.vertical ? 'column' : 'row';
        if (this.reverse)
            direction += '-reverse';
        return {
            'align-items': (_a = this.items) === null || _a === void 0 ? void 0 : _a.replace(/start|end/, 'flex-$&'),
            'display': 'flex',
            'flex-direction': direction,
            'gap': toUnit(this.gap),
            'justify-content': (_c = (_b = this.justify) === null || _b === void 0 ? void 0 : _b.replace(/start|end/, 'flex-$&')) === null || _c === void 0 ? void 0 : _c.replace(/between|around|evenly/, 'space-$&')
        };
    }
    render() {
        return html `<slot />`;
    }
};
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
Stack.tag = "plus-stack";
__decorate([
    Property({
        type: 320
    })
], Stack.prototype, "gap", void 0);
__decorate([
    Property({
        type: 8
    })
], Stack.prototype, "items", void 0);
__decorate([
    Property({
        type: 8
    })
], Stack.prototype, "justify", void 0);
__decorate([
    Property({
        type: 2
    })
], Stack.prototype, "reverse", void 0);
__decorate([
    Property({
        type: 2
    })
], Stack.prototype, "vertical", void 0);
__decorate([
    Style()
], Stack.prototype, "style", null);
Stack = __decorate([
    Element()
], Stack);

export { Stack };
