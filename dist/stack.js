import { _ as __decorate, c as styles, t as toUnit, h as html, e as attributes, f as host, P as Property, b as Element } from './core/index.js';

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
        return html `${attributes(host(this), [{
                "style": styles(this.style)
            }])}
        <slot />
      `;
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
Stack = __decorate([
    Element()
], Stack);

export { Stack };
