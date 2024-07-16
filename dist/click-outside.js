import { _ as __decorate, P as PlusCore, o as on, m as off, h as html, b as Property, E as Event, W as Watch, B as Bind, c as Element } from './core/index.js';

/**
 * @stable
 *
 * @slot default - The default slot.
 */
let ClickOutside = class ClickOutside extends PlusCore {
    get options() {
        return {
            capture: this.capture
        };
    }
    watcher(next, prev, name) {
        switch (name) {
            case 'disabled':
                next ? this.terminate() : this.initialize();
                break;
            case 'capture':
            case 'once':
                this.terminate();
                this.initialize();
                break;
        }
    }
    initialize() {
        on(this.$host, 'outside', this.onClickOutside, this.options);
    }
    terminate() {
        off(this.$host, 'outside', this.onClickOutside, this.options);
    }
    onClickOutside() {
        if (this.once) {
            this.terminate();
        }
        this.plusClickOutside();
    }
    connectedCallback() {
        if (this.disabled)
            return;
        this.initialize();
    }
    disconnectedCallback() {
        this.terminate();
    }
    render() {
        return html `<slot />`;
    }
};
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
ClickOutside.tag = "plus-click-outside";
__decorate([
    Property({
        type: 2
    })
], ClickOutside.prototype, "capture", void 0);
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], ClickOutside.prototype, "disabled", void 0);
__decorate([
    Property({
        type: 2
    })
], ClickOutside.prototype, "once", void 0);
__decorate([
    Event({
        cancelable: true
    })
], ClickOutside.prototype, "plusClickOutside", void 0);
__decorate([
    Watch(['capture', 'disabled', 'once'])
], ClickOutside.prototype, "watcher", null);
__decorate([
    Bind()
], ClickOutside.prototype, "onClickOutside", null);
ClickOutside = __decorate([
    Element()
], ClickOutside);

export { ClickOutside };
