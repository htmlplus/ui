import { _ as __decorate, P as PlusCore, t as toUnit, h as html, b as Property, j as Style, c as Element } from './core/index.js';

/**
 * @slot default - The default slot.
 */
let Stack = class Stack extends PlusCore {
    constructor() {
        super(...arguments);
        /**
         * TODO.
         */
        this.alignItems = 'center';
        /**
         * TODO.
         */
        this.justifyContent = 'center';
    }
    get style() {
        let direction = this.vertical ? 'column' : 'row';
        if (this.reverse)
            direction += '-reverse';
        return {
            'align-items': this.alignItems,
            'display': 'flex',
            'flex-direction': direction,
            'gap': toUnit(this.gap),
            'justify-content': this.justifyContent
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
        type: 264
    })
], Stack.prototype, "alignItems", void 0);
__decorate([
    Property({
        type: 256
    })
], Stack.prototype, "gap", void 0);
__decorate([
    Property({
        type: 264
    })
], Stack.prototype, "justifyContent", void 0);
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
