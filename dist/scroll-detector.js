import { _ as __decorate, m as on, o as off, P as Property, E as Event, W as Watch, B as Bind, a as Element } from './core/index.js';

/**
 * @stable
 */
let ScrollDetector = class ScrollDetector {
    constructor() {
        /**
         * Specifies the source of the scroll.
         */
        this.source = 'document';
    }
    get $source() {
        if (typeof this.source != 'string')
            return this.source;
        if (this.source == 'document')
            return document.documentElement;
        return document.querySelector(this.source);
    }
    bind() {
        if (this.disabled)
            return;
        if (!this.$source)
            return;
        on(this.$source, 'scroll', this.onScroll);
        this.onScroll();
    }
    unbind() {
        off(this.$source, 'scroll', this.onScroll);
    }
    watcher(next) {
        next ? this.unbind() : this.bind();
    }
    onScroll() {
        const { scrollTop, scrollLeft, scrollHeight, scrollWidth, clientHeight, clientWidth } = this.$source;
        const offset = this.vertical ? scrollTop : scrollLeft;
        const total = this.vertical ? scrollHeight : scrollWidth;
        const viewport = this.vertical ? clientHeight : clientWidth;
        const overflow = total - viewport;
        const progress = Math.round(offset / overflow * 100);
        if (this.offset == progress)
            return;
        this.offset = offset;
        const detail = {
            offset,
            overflow,
            progress,
            total,
            viewport
        };
        this.plusChange(detail);
    }
    loadedCallback() {
        this.bind();
    }
    disconnectedCallback() {
        this.unbind();
    }
    render() {
        return null;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
ScrollDetector.TAG = "plus-scroll-detector";
__decorate([
    Property({
        type: 2
    })
], ScrollDetector.prototype, "disabled", void 0);
__decorate([
    Property({
        type: 256
    })
], ScrollDetector.prototype, "source", void 0);
__decorate([
    Property({
        type: 2
    })
], ScrollDetector.prototype, "vertical", void 0);
__decorate([
    Event()
], ScrollDetector.prototype, "plusChange", void 0);
__decorate([
    Watch(['disabled', 'source'])
], ScrollDetector.prototype, "watcher", null);
__decorate([
    Bind()
], ScrollDetector.prototype, "onScroll", null);
ScrollDetector = __decorate([
    Element("plus-scroll-detector")
], ScrollDetector);

export { ScrollDetector };
