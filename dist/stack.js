import { _ as __decorate, c as styles, t as toUnit, u as uhtml, P as Property, d as Attributes, b as Element } from './core/index.js';

/**
 * @slot default - The default slot.
 */
let Stack = class Stack {
    constructor() {
        /**
         * TODO.
         */
        this.alignItems = 'center';
        /**
         * TODO.
         */
        this.justifyContent = 'center';
    }
    get attributes() {
        return {
            style: this.style
        };
    }
    get style() {
        let direction = this.vertical ? 'column' : 'row';
        if (this.reverse)
            direction += '-reverse';
        return styles({
            'align-items': this.alignItems,
            'display': 'flex',
            'flex-direction': direction,
            'gap': toUnit(this.gap),
            'justify-content': this.justifyContent
        });
    }
    render() {
        return uhtml.html `<slot />`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Stack.TAG = "plus-stack";
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
    Attributes()
], Stack.prototype, "attributes", null);
Stack = __decorate([
    Element()
], Stack);

export { Stack };
