import { _ as __decorate, c as styles, t as toUnit, u as uhtml, P as Property, d as Attributes, b as Element } from './core/index.js';

/**
 * @slot default - The default slot.
 */
let Stack = class Stack {
    get attributes() {
        return {
            style: this.style
        };
    }
    get style() {
        return styles({
            'align-items': 'center',
            'display': 'flex',
            'flex-direction': this.vertical ? 'column' : 'row',
            'gap': toUnit(this.gap),
            'justify-content': 'center'
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
        type: 256
    })
], Stack.prototype, "gap", void 0);
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
