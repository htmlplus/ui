import { _ as __decorate, P as PlusBase, o as on, k as off, a as __awaiter, h as html, e as attributes, f as host, b as Property, M as Method, Q as Query, S as State, W as Watch, B as Bind, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{background-color:#000;border-radius:4px;color:#fff;font-size:90%;font-weight:700;padding:4px 8px;position:absolute;width:max-content}:host([fixed]:not([fixed=false])){position:fixed}:host([state=hide]){display:none}:host([state=show]){display:block}[part=arrow]{display:none;height:0;position:absolute;width:0}:host([arrow]:not([arrow=false])) [part=arrow]{display:block}:host([arrow]:not([arrow=false])):host([placement-computed^=top]){transform:translateY(-6px)}:host([arrow]:not([arrow=false])):host([placement-computed^=top]) [part=arrow]{border-color:#000 transparent transparent;border-style:solid;border-width:6px 6px 0;bottom:-6px;transform:translateX(-50%)}:host([arrow]:not([arrow=false])):host([placement-computed^=right]){transform:translateX(6px)}:host([arrow]:not([arrow=false])):host([placement-computed^=right]) [part=arrow]{border-color:transparent #000 transparent transparent;border-style:solid;border-width:6px 6px 6px 0;left:-6px;transform:translateY(-50%)}:host([arrow]:not([arrow=false])):host([placement-computed^=bottom]){transform:translateY(6px)}:host([arrow]:not([arrow=false])):host([placement-computed^=bottom]) [part=arrow]{border-color:transparent transparent #000;border-style:solid;border-width:0 6px 6px;top:-6px;transform:translateX(-50%)}:host([arrow]:not([arrow=false])):host([placement-computed^=left]){transform:translateX(-6px)}:host([arrow]:not([arrow=false])):host([placement-computed^=left]) [part=arrow]{border-color:transparent transparent transparent #000;border-style:solid;border-width:6px 0 6px 6px;right:-6px;transform:translateY(-50%)}";

let FloatingCore;
/**
 * @dependencies @floating-ui/dom
 * @thirdParty
 */
let Tooltip = class Tooltip extends PlusBase {
    constructor() {
        super(...arguments);
        /**
         * TODO
         */
        this.offset = [0, 10];
        /**
         * Specifies the element to which the tooltip will be attached.
         * Use `next` to attach to the next sibling.
         * Use `parent` to attach to the parent.
         * Use `previous` to attach to the previous sibling.
         * Use a string to find an element to attach to that.
         * Use an element to attach to that.
         */
        this.reference = 'previous';
        /**
         * Specifies the activation method.
         */
        this.trigger = ['focus', 'hover'];
        /**
         * TODO
         */
        this.z = 'auto';
        this.state = 'hide';
    }
    /**
     * Hides the component.
     */
    hide() {
        var _a;
        if (this.state == 'hide')
            return;
        clearTimeout(this.timeout);
        const delay = ((_a = this.delay) === null || _a === void 0 ? void 0 : _a[1]) || this.delay || 0;
        this.timeout = setTimeout(() => {
            this.state = 'hide';
            this.observe(false);
        }, delay);
    }
    /**
     * Shows the component.
     */
    show() {
        var _a;
        if (this.state == 'show')
            return;
        clearTimeout(this.timeout);
        const delay = ((_a = this.delay) === null || _a === void 0 ? void 0 : _a[0]) || this.delay || 0;
        this.timeout = setTimeout(() => {
            this.state = 'show';
            this.observe(true);
        }, delay);
    }
    /**
     * Updates the component's position.
     */
    update() {
        this.$host.removeAttribute('placement-computed');
        FloatingCore.computePosition(this.$activator, this.$host, this.options).then(data => {
            const { x, y, placement, middlewareData } = data;
            // console.log(1, middlewareData.hide);
            this.$host.setAttribute('placement-computed', placement);
            Object.assign(this.$host.style, {
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
        });
    }
    get $reference() {
        if (typeof this.reference != 'string')
            return this.reference;
        switch (this.reference) {
            case 'next':
                return this.$host.nextElementSibling;
            case 'parent':
                return this.$host.parentElement;
            case 'previous':
                return this.$host.previousElementSibling;
        }
        return document.querySelector(this.reference);
    }
    get options() {
        const PLACEMENT = {
            'top': 'top',
            'top-left': this.isRTL ? 'top-end' : 'top-start',
            'top-right': this.isRTL ? 'top-start' : 'top-end',
            'top-start': 'top-start',
            'top-end': 'top-end',
            'right': 'right',
            'right-top': 'right-start',
            'right-bottom': 'right-end',
            'bottom': 'bottom',
            'bottom-left': this.isRTL ? 'bottom-end' : 'bottom-start',
            'bottom-right': this.isRTL ? 'bottom-start' : 'bottom-end',
            'bottom-start': 'bottom-start',
            'bottom-end': 'bottom-end',
            'left': 'left',
            'left-top': 'left-start',
            'left-bottom': 'left-end',
            'start': this.isRTL ? 'right' : 'left',
            'start-top': this.isRTL ? 'right-start' : 'left-start',
            'start-bottom': this.isRTL ? 'right-end' : 'left-end',
            'end': this.isRTL ? 'left' : 'right',
            'end-top': this.isRTL ? 'left-start' : 'right-start',
            'end-bottom': this.isRTL ? 'left-end' : 'right-end'
        };
        const padding = [this.offset].flat();
        return {
            middleware: [FloatingCore.offset({
                    crossAxis: padding[0] || 0,
                    mainAxis: padding[1] || 0
                }), FloatingCore.flip(), this.arrow && FloatingCore.arrow({
                    element: this.$arrow
                })
                // FloatingCore.hide()
            ],
            placement: PLACEMENT[this.placement],
            strategy: this.fixed ? 'fixed' : 'absolute'
        };
    }
    watcher(next, prev, key) {
        switch (key) {
            case 'disabled':
                next ? this.unbind() : this.bind();
                break;
            case 'fixed':
            case 'offset':
            case 'placement':
                if (this.state == 'hide')
                    break;
                this.update();
                break;
            case 'reference':
            case 'trigger':
                this.unbind();
                this.bind();
                break;
        }
    }
    bind() {
        // TODO
        if (this.disabled)
            return;
        // TODO
        this.$activator = this.$reference;
        clearTimeout(this.timeout);
        if (!this.$activator)
            return;
        this.events(false).forEach(([type, handler]) => {
            on(this.$activator, type, handler);
        });
        // TODO
        // this.state = 'show';
        // this.observe(true);
        // this.$activator.addEventListener('mousemove', (event: any) => {
        //   const virtualEl = {
        //     getBoundingClientRect() {
        //       return {
        //         width: 0,
        //         height: 0,
        //         x: event.clientX,
        //         y: event.clientY,
        //         left: event.clientX,
        //         right: event.clientX,
        //         top: event.clientY,
        //         bottom: event.clientY
        //       };
        //     }
        //   };
        //   FloatingCore.computePosition(virtualEl, this.$host, this.options).then(({ x, y }) => {
        //     Object.assign(this.$host.style, {
        //       top: `${y}px`,
        //       left: `${x}px`
        //     });
        //   });
        // });
    }
    unbind() {
        clearTimeout(this.timeout);
        if (!this.$activator)
            return;
        this.events(true).forEach(([type, handler]) => {
            off(this.$activator, type, handler);
        });
    }
    events(all) {
        return [['click', 'click', this.onShow], ['click', 'blur', this.onHide], ['click', 'outside', this.onHide], ['focus', 'focus', this.onShow], ['focus', 'blur', this.onHide], ['hover', 'mouseenter', this.onShow], ['hover', 'mouseleave', this.onHide]].filter((row) => all || [this.trigger].flat().includes(row[0])).map((row) => row.slice(1));
    }
    observe(active) {
        var _a;
        (_a = this.cleanup) === null || _a === void 0 ? void 0 : _a.call(this);
        if (!active)
            return;
        this.cleanup = FloatingCore.autoUpdate(this.$activator, this.$host, this.update.bind(this));
    }
    onHide() {
        this.hide();
    }
    onShow() {
        this.show();
    }
    connectCallback() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                FloatingCore = yield import('@floating-ui/dom');
            }
            catch (_a) {
                throw new Error("The `tooltip` component depends on an external package, but it doesn't seem to be installed. Running `npm install @floating-ui/dom` will fix this problem.");
            }
        });
    }
    connectedCallback() {
        this.bind();
    }
    disconnectedCallback() {
        this.unbind();
    }
    render() {
        return html `${attributes(host(this), [{
                "role": "tooltip"
            }, {
                "state": this.state
            }])}
        <slot />
        <div part="arrow"></div>
      `;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Tooltip.TAG = "plus-tooltip";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Tooltip.STYLES = css_248z;
__decorate([
    Property({
        reflect: true,
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
        reflect: true,
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
], Tooltip.prototype, "reference", void 0);
__decorate([
    Property({
        type: 9
    })
], Tooltip.prototype, "trigger", void 0);
__decorate([
    Property({
        type: 8
    })
], Tooltip.prototype, "z", void 0);
__decorate([
    Method()
], Tooltip.prototype, "hide", null);
__decorate([
    Method()
], Tooltip.prototype, "show", null);
__decorate([
    Method()
], Tooltip.prototype, "update", null);
__decorate([
    Query('[part=arrow]')
], Tooltip.prototype, "$arrow", void 0);
__decorate([
    State()
], Tooltip.prototype, "state", void 0);
__decorate([
    Watch()
], Tooltip.prototype, "watcher", null);
__decorate([
    Bind()
], Tooltip.prototype, "onHide", null);
__decorate([
    Bind()
], Tooltip.prototype, "onShow", null);
Tooltip = __decorate([
    Element()
], Tooltip);

export { Tooltip };
