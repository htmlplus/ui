import { _ as __decorate, P as PlusCore, t as toUnit, h as html, k as attributes, e as styles, b as Property, E as Event, Q as Query, S as State, j as Style, W as Watch, B as Bind, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]){display:none!important}:host{display:block;position:sticky;will-change:auto}.sizer-wrapper{pointer-events:none;position:relative;visibility:hidden}.sizer{position:absolute}";

/**
 * @stable
 *
 * @slot default - The default slot.
 * @slot normal  - Activated when the state becomes `normal`. To enable, set the `watcher` property to `true`.
 * @slot stick   - Activated when the state becomes `stick`. To enable, set the `watcher` property to `true`.
 */
let Sticky = class Sticky extends PlusCore {
    constructor() {
        super(...arguments);
        /**
         * Specifies the space from top.
         */
        this.top = 0;
    }
    get style() {
        var _a;
        return {
            'top': toUnit(this.top),
            'z-index': (_a = this.zIndex) !== null && _a !== void 0 ? _a : undefined
        };
    }
    get sizer() {
        const top = toUnit(this.top);
        if (!top)
            return;
        return {
            top: `calc((${top} + 1px) * -1)`
        };
    }
    watchers(next, prev, key) {
        switch (key) {
            case 'disabled':
                next ? this.terminate() : this.initialize();
                break;
            case 'watcher':
                next ? this.initialize() : this.terminate();
                break;
        }
    }
    initialize() {
        if (!this.watcher)
            return;
        // TODO
        // if (this.disabled) return;
        this.observer = new IntersectionObserver(this.onIntersecting, {
            threshold: [1]
        });
        this.observer.observe(this.$sizer);
    }
    terminate() {
        // TODO: immediately rerenders after remove `watcher` attribute
        requestAnimationFrame(() => {
            var _a;
            this.state = undefined;
            (_a = this.observer) === null || _a === void 0 ? void 0 : _a.disconnect();
        });
    }
    onIntersecting(entries) {
        const [entry] = entries;
        this.state = entry.intersectionRatio < 1 ? 'stick' : 'normal';
        this.plusChange(this.state);
    }
    loadedCallback() {
        this.initialize();
    }
    disconnectedCallback() {
        this.terminate();
    }
    render() {
        return html `${attributes(this, [{
                "state": this.watcher ? this.state : null
            }])}
        <div class="sizer-wrapper">
          <div class="sizer" style=${styles(this.sizer)}></div>
        </div>
        <slot />
        ${this.state && html `<div class=${this.state}>
            <slot name=${this.state} />
          </div>`}
      `;
    }
};
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
Sticky.tag = "plus-sticky";
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
Sticky.style = css_248z;
__decorate([
    Property({
        type: 320
    })
], Sticky.prototype, "top", void 0);
__decorate([
    Property({
        type: 2
    })
], Sticky.prototype, "watcher", void 0);
__decorate([
    Property({
        type: 64
    })
], Sticky.prototype, "zIndex", void 0);
__decorate([
    Event()
], Sticky.prototype, "plusChange", void 0);
__decorate([
    Query('.sizer')
], Sticky.prototype, "$sizer", void 0);
__decorate([
    State()
], Sticky.prototype, "state", void 0);
__decorate([
    Style()
], Sticky.prototype, "style", null);
__decorate([
    Watch(['disabled', 'watcher'])
], Sticky.prototype, "watchers", null);
__decorate([
    Bind()
], Sticky.prototype, "onIntersecting", null);
Sticky = __decorate([
    Element()
], Sticky);

export { Sticky };
