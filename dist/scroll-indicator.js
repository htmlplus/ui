import { _ as __decorate, o as on, e as off, u as uhtml, P as Property, E as Event, d as Attributes, W as Watch, B as Bind, b as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{--plus-scroll-indicator-color:#a6a6a6;--plus-scroll-indicator-background-color:#e9e9e9;--plus-scroll-indicator-size:0.5em}:host{background-color:var(--plus-scroll-indicator-background-color);display:block;height:var(--plus-scroll-indicator-size);width:100%}.indicator{background-color:var(--plus-scroll-indicator-color);height:100%;width:0}";

/**
 * @part indicator - Indicator element.
 */
let ScrollIndicator = class ScrollIndicator {
    constructor() {
        /**
         * Specifies the source of the scroll.
         */
        this.source = 'document';
    }
    get $source() {
        if (typeof this.source !== 'string')
            return this.source;
        if (this.source === 'document')
            return document;
        return document.querySelector(this.source);
    }
    get attributes() {
        return {
        // 'role': 'TODO'
        };
    }
    get progress() {
        var _a;
        // TODO: any type not valid
        let $source = this.$source;
        if (!$source)
            return 0;
        $source = (_a = this.$source['documentElement']) !== null && _a !== void 0 ? _a : $source;
        const { scrollTop, scrollLeft, scrollHeight, scrollWidth, clientHeight, clientWidth } = $source;
        const offset = this.vertical ? scrollLeft : scrollTop;
        const overflow = this.vertical ? scrollWidth - clientWidth : scrollHeight - clientHeight;
        return Math.round(offset / overflow * 100);
    }
    /**
     * Internal Methods
     */
    bind() {
        if (this.disabled)
            return;
        on(this.$source, 'scroll', this.onScroll);
        this.onScroll();
    }
    unbind() {
        off(this.$source, 'scroll', this.onScroll);
    }
    /**
     * Watchers
     */
    watcher(next) {
        next ? this.unbind() : this.bind();
    }
    /**
     * Events handler
     */
    onScroll() {
        const progress = this.progress;
        const property = this.vertical ? 'height' : 'width';
        this.$indicator.style[property] = `${progress}%`;
        this.plusScroll(progress);
    }
    /**
     * Lifecycles
     */
    loadedCallback() {
        this.bind();
    }
    disconnectedCallback() {
        this.unbind();
    }
    render() {
        return uhtml.html `<div class="indicator" part="indicator" ref=${$element => this.$indicator = $element} />`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
ScrollIndicator.TAG = "plus-scroll-indicator";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
ScrollIndicator.STYLES = css_248z;
__decorate([
    Property({
        type: 2
    })
], ScrollIndicator.prototype, "disabled", void 0);
__decorate([
    Property({
        type: 256
    })
], ScrollIndicator.prototype, "source", void 0);
__decorate([
    Event()
], ScrollIndicator.prototype, "plusScroll", void 0);
__decorate([
    Attributes()
], ScrollIndicator.prototype, "attributes", null);
__decorate([
    Watch(['disabled', 'source'])
], ScrollIndicator.prototype, "watcher", null);
__decorate([
    Bind()
], ScrollIndicator.prototype, "onScroll", null);
ScrollIndicator = __decorate([
    Element()
], ScrollIndicator);

export { ScrollIndicator };
