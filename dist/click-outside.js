import { _ as __decorate, h as host, o as on, c as off, u as uhtml, P as Property, E as Event, W as Watch, B as Bind, a as Element } from './core/index.js';

/**
 * @stable
 * @slot default - The default slot.
 */
let ClickOutside = class ClickOutside {
    get $host() {
        return host(this);
    }
    get options() {
        return {
            capture: this.capture
        };
    }
    bind() {
        on(this.$host, 'outside', this.onClickOutside, this.options);
    }
    unbind() {
        off(this.$host, 'outside', this.onClickOutside, this.options);
    }
    watcher(next, prev, name) {
        switch (name) {
            case 'disabled':
                next ? this.unbind() : this.bind();
                break;
            case 'capture':
            case 'once':
                this.unbind();
                this.bind();
                break;
        }
    }
    onClickOutside() {
        if (this.once)
            this.unbind();
        this.plusClickOutside();
    }
    connectedCallback() {
        if (this.disabled)
            return;
        this.bind();
    }
    disconnectedCallback() {
        this.unbind();
    }
    render() {
        return uhtml.html `<slot />`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
ClickOutside.TAG = "plus-click-outside";
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
