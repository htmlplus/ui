import { _ as __decorate, p as query, h as host, u as uhtml, P as Property, A as Attributes, M as Method, W as Watch, B as Bind, a as Element } from './core/index.js';
import { offset, flip, shift, arrow, computePosition } from '@floating-ui/dom';

var css_248z = "*,:after,:before{box-sizing:border-box}:host,:host:after,:host:before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none}:host{background-color:#000;border-radius:4px;color:#fff;display:none;font-size:90%;font-weight:700;left:0;padding:5px;position:absolute;top:0;width:max-content}[part=arrow]{height:0;position:absolute;width:0}:host([placement-computed^=top]){transform:translateY(-6px)}:host([placement-computed^=top]) [part=arrow]{border-color:#000 transparent transparent;border-style:solid;border-width:6px 6px 0;bottom:-6px}:host([placement-computed^=right]){transform:translateX(6px)}:host([placement-computed^=right]) [part=arrow]{border-color:transparent #000 transparent transparent;border-style:solid;border-width:6px 6px 6px 0;left:-6px}:host([placement-computed^=bottom]){transform:translateY(6px)}:host([placement-computed^=bottom]) [part=arrow]{border-color:transparent transparent #000;border-style:solid;border-width:0 6px 6px;top:-6px}:host([placement-computed^=left]){transform:translateX(-6px)}:host([placement-computed^=left]) [part=arrow]{border-color:transparent transparent transparent #000;border-style:solid;border-width:6px 0 6px 6px;right:-6px}";

/**
 * @dependencies @floating-ui/dom
 * @thirdParty
 */
let Tooltip = class Tooltip {
    constructor() {
        /**
         * TODO
         */
        this.offset = [5, 0];
        /**
         * TODO
         */
        this.source = 'previous';
        /**
         * TODO
         */
        this.trigger = ['focus', 'hover'];
    }
    get attributes() {
        return {
            role: 'tooltip'
        };
    }
    get options() {
        const padding = [this.offset].flat();
        return {
            middleware: [offset(padding[0] || 0), flip(), shift({
                    padding: padding[1] || 0
                }), this.arrow && arrow({
                    element: this.$arrow
                })],
            placement: this.placement,
            strategy: this.fixed ? 'fixed' : 'absolute'
        };
    }
    get $arrow() {
        return query(this, '[part=arrow]');
    }
    get $source() {
        switch (this.source) {
            case 'next':
                return host(this).nextElementSibling;
            case 'parent':
                return host(this).parentElement;
            case 'previous':
                return host(this).previousElementSibling;
        }
        return typeof this.source == 'string' ? document.querySelector(this.source) : this.source;
    }
    get $tooltip() {
        return host(this);
    }
    /**
     * TODO
     */
    hide() { }
    /**
     * TODO
     */
    show() { }
    events(all) {
        return [['click', 'click', this.onShow], ['click', 'blur', this.onHide], ['focus', 'focus', this.onShow], ['focus', 'blur', this.onHide], ['hover', 'mouseenter', this.onShow], ['hover', 'mouseleave', this.onHide]].filter((row) => all || [this.trigger].flat().includes(row[0])).map((row) => row.slice(1));
    }
    bind() {
        clearTimeout(this.timeout);
        if (!this.$activator)
            return;
        this.events(false).forEach(parameters => {
            this.$activator.addEventListener.apply(this.$activator, parameters);
        });
    }
    unbind() {
        clearTimeout(this.timeout);
        if (!this.$activator)
            return;
        this.events(true).forEach(parameters => {
            this.$activator.removeEventListener.apply(this.$activator, parameters);
        });
    }
    update() {
        computePosition(this.$activator, this.$tooltip, this.options).then(data => {
            const { x, y, placement, middlewareData } = data;
            Object.assign(this.$tooltip.style, {
                left: `${x}px`,
                top: `${y}px`
            });
            if (!this.arrow)
                return;
            const { x: arrowX, y: arrowY } = middlewareData.arrow;
            Object.assign(this.$arrow.style, {
                left: arrowX == null ? '' : `${arrowX}px`,
                top: arrowY == null ? '' : `${arrowY}px`
            });
            this.$tooltip.setAttribute('placement-computed', placement);
        });
    }
    watcher(next, prev, key) {
        switch (key) {
            case 'disabled':
                next ? this.unbind() : this.bind();
                break;
            case 'source':
                this.unbind();
                this.$activator = this.$source;
                this.bind();
                break;
            case 'trigger':
                this.unbind();
                this.bind();
                break;
        }
    }
    onHide() {
        var _a;
        clearTimeout(this.timeout);
        const delay = ((_a = this.delay) === null || _a === void 0 ? void 0 : _a[1]) || this.delay || 0;
        this.timeout = setTimeout(() => {
            this.$tooltip.style.display = '';
        }, delay);
    }
    onShow() {
        var _a;
        clearTimeout(this.timeout);
        const delay = ((_a = this.delay) === null || _a === void 0 ? void 0 : _a[0]) || this.delay || 0;
        this.timeout = setTimeout(() => {
            this.$tooltip.style.display = 'block';
            this.update();
        }, delay);
    }
    connectedCallback() {
        if (this.disabled)
            return;
        // TODO
        this.$activator = this.$source;
        this.bind();
    }
    disconnectedCallback() {
        this.unbind();
    }
    render() {
        return uhtml.html `<slot />${this.arrow && uhtml.html `<div part="arrow"></div>`}`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Tooltip.TAG = "plus-tooltip";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Tooltip.STYLES = css_248z;
__decorate([
    Property({
        type: 2
    })
], Tooltip.prototype, "arrow", void 0);
__decorate([
    Property({
        type: 65
    })
], Tooltip.prototype, "delay", void 0);
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], Tooltip.prototype, "disabled", void 0);
__decorate([
    Property({
        type: 2
    })
], Tooltip.prototype, "fixed", void 0);
__decorate([
    Property({
        type: 65
    })
], Tooltip.prototype, "offset", void 0);
__decorate([
    Property({
        type: 8
    })
], Tooltip.prototype, "placement", void 0);
__decorate([
    Property({
        type: 264
    })
], Tooltip.prototype, "source", void 0);
__decorate([
    Property({
        type: 9
    })
], Tooltip.prototype, "trigger", void 0);
__decorate([
    Attributes()
], Tooltip.prototype, "attributes", null);
__decorate([
    Method()
], Tooltip.prototype, "hide", null);
__decorate([
    Method()
], Tooltip.prototype, "show", null);
__decorate([
    Watch(['disabled', 'source', 'trigger'])
], Tooltip.prototype, "watcher", null);
__decorate([
    Bind()
], Tooltip.prototype, "onHide", null);
__decorate([
    Bind()
], Tooltip.prototype, "onShow", null);
Tooltip = __decorate([
    Element("plus-tooltip")
], Tooltip);

export { Tooltip };
