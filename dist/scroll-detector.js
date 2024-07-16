import { _ as __decorate, P as PlusCore, o as on, m as off, b as Property, E as Event, W as Watch, B as Bind, c as Element } from './core/index.js';

/**
 * @stable
 */
let ScrollDetector = class ScrollDetector extends PlusCore {
    constructor() {
        super(...arguments);
        /**
         * Specifies the reference of the scroll.
         */
        this.reference = 'document';
    }
    get $reference() {
        if (typeof this.reference != 'string')
            return this.reference;
        if (this.reference == 'document')
            return document;
        return document.querySelector(this.reference);
    }
    watcher(next) {
        next ? this.terminate() : this.initialize();
    }
    initialize() {
        if (this.disabled)
            return;
        if (!this.$reference)
            return;
        on(this.$reference, 'scroll', this.onScroll);
        this.onScroll();
    }
    terminate() {
        // TODO
        try {
            off(this.$reference, 'scroll', this.onScroll);
        }
        catch (_a) { }
    }
    onScroll() {
        const { scrollTop, scrollLeft, scrollHeight, scrollWidth, clientHeight, clientWidth } = this.$reference.documentElement || this.$reference;
        const offset = this.vertical ? scrollTop : scrollLeft;
        const total = this.vertical ? scrollHeight : scrollWidth;
        const viewport = this.vertical ? clientHeight : clientWidth;
        const overflow = total - viewport;
        const progress = overflow ? Math.round(offset / overflow * 100) : 0;
        if (this.offset == progress)
            return;
        this.offset = offset;
        this.plusChange({
            offset,
            overflow,
            progress,
            total,
            viewport
        });
    }
    connectedCallback() {
        this.initialize();
    }
    disconnectedCallback() {
        this.terminate();
    }
    render() {
        return null;
    }
};
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
ScrollDetector.tag = "plus-scroll-detector";
__decorate([
    Property({
        type: 2
    })
], ScrollDetector.prototype, "disabled", void 0);
__decorate([
    Property({
        type: 264
    })
], ScrollDetector.prototype, "reference", void 0);
__decorate([
    Property({
        type: 2
    })
], ScrollDetector.prototype, "vertical", void 0);
__decorate([
    Event()
], ScrollDetector.prototype, "plusChange", void 0);
__decorate([
    Watch(['disabled', 'reference'])
], ScrollDetector.prototype, "watcher", null);
__decorate([
    Bind()
], ScrollDetector.prototype, "onScroll", null);
ScrollDetector = __decorate([
    Element()
], ScrollDetector);

export { ScrollDetector };
