import { _ as __decorate, P as PlusCore, h as html, f as attributes, b as Property, E as Event, S as State, W as Watch, B as Bind, c as Element } from './core/index.js';

/**
 * @stable
 *
 * @slot default - The default slot.
 */
let Intersection = class Intersection extends PlusCore {
    get disconnected() {
        return this.once && this.isIntersecting;
    }
    get options() {
        return {
            root: this.root,
            rootMargin: this.rootMargin,
            threshold: this.threshold
        };
    }
    watcher(next, prev, name) {
        switch (name) {
            case 'disabled':
                if (next)
                    this.terminate();
                else if (!this.disconnected)
                    this.initialize();
                break;
            case 'once':
                if (next || this.disabled)
                    break;
                this.terminate();
                this.initialize();
                break;
            case 'root':
            case 'rootMargin':
            case 'threshold':
                if (this.disabled || this.disconnected)
                    break;
                this.terminate();
                this.initialize();
                break;
        }
    }
    initialize() {
        this.observer = new IntersectionObserver(this.onIntersecting, this.options);
        this.observer.observe(this.$host);
    }
    terminate() {
        var _a;
        (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
        delete this.observer;
    }
    onIntersecting(entries) {
        const [entry] = entries;
        this.isIntersecting = entry.isIntersecting;
        this.plusChange(entry);
        if (!this.isIntersecting || !this.once)
            return;
        this.terminate();
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
        return html `${attributes(this, [{
                "state": this.isIntersecting ? 'in' : 'out'
            }])}
        <slot />
      `;
    }
};
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
Intersection.tag = "plus-intersection";
__decorate([
    Property({
        type: 2
    })
], Intersection.prototype, "disabled", void 0);
__decorate([
    Property({
        type: 2
    })
], Intersection.prototype, "once", void 0);
__decorate([
    Property({
        type: 0
    })
], Intersection.prototype, "root", void 0);
__decorate([
    Property({
        type: 256
    })
], Intersection.prototype, "rootMargin", void 0);
__decorate([
    Property({
        type: 65
    })
], Intersection.prototype, "threshold", void 0);
__decorate([
    Event()
], Intersection.prototype, "plusChange", void 0);
__decorate([
    State()
], Intersection.prototype, "isIntersecting", void 0);
__decorate([
    Watch(['behavior', 'disabled', 'once', 'root', 'rootMargin', 'threshold'])
], Intersection.prototype, "watcher", null);
__decorate([
    Bind()
], Intersection.prototype, "onIntersecting", null);
Intersection = __decorate([
    Element()
], Intersection);

export { Intersection };
