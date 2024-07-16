import { _ as __decorate, b as Property, E as Event, Q as Query, d as Provider, M as Method, W as Watch, B as Bind, P as PlusCore, A as Animation, p as Scrollbar, o as on, m as off, q as toAxis, n as classes, a as __awaiter, h as html, k as attributes, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]){display:none!important}:host([animation][state=closing]),:host([animation][state=opening]){transition:all .5s ease-out}:host([animation][state=closing]) .dialog,:host([animation][state=opening]) .dialog{overflow:hidden}:host([animation][state=closing]) ::slotted(*),:host([animation][state=opening]) ::slotted(*){transition:all .5s ease-out}:host([animation][state=closing]),:host([animation][state=open]){opacity:0}:host([animation][state=closing]) ::slotted(*),:host([animation][state=open]) ::slotted(*){transform:translateY(-50px)}:host([animation][state=closing]) .y-bottom ::slotted(*),:host([animation][state=open]) .y-bottom ::slotted(*){transform:translateY(50px)}:host([animation][state=closing]) .x-right ::slotted(*),:host([animation][state=open]) .x-right ::slotted(*){transform:translate(50px)}:host([animation][state=closing]) .x-left ::slotted(*),:host([animation][state=open]) .x-left ::slotted(*){transform:translate(-50px)}:host([animation][state=close]),:host([animation][state=opening]){opacity:1}:host([animation][state=close]) ::slotted(*),:host([animation][state=opening]) ::slotted(*){transform:translate(0)}:host{display:block;height:100%;left:0;outline:0;overflow:hidden;position:fixed;top:0;width:100%;z-index:1000}.backdrop{left:0;position:fixed;top:0;z-index:1}.backdrop,.backdrop *{height:100%;width:100%}.backdrop *{background-color:#000;opacity:.5}.dialog{height:100%;left:0;overflow-x:hidden;overflow-y:auto;position:fixed;top:0;width:100%;z-index:1}.table{display:table;height:100%;margin:auto;position:relative}.cell{display:table-cell}.scrollable ::slotted(*){overflow-x:hidden;overflow-y:auto}.x-right .table{margin-right:0}.x-left .table{margin-left:0}.y-top .cell{vertical-align:top}.y-center .cell{vertical-align:middle}.y-bottom .cell{vertical-align:bottom}.full-height ::slotted(*){min-height:calc(100vh - 1rem)}.full-height.sticky ::slotted(*){min-height:100vh}.cell{padding:.5rem}.scrollable ::slotted(*){max-height:calc(100vh - 1rem)}.fullscreen .cell{padding:0}.fullscreen ::slotted(*){border:0;border-radius:0}.fullscreen .cell{max-width:none}.fullscreen ::slotted(*){min-height:100vh}@media (min-width:576px){.full-height ::slotted(*){min-height:calc(100vh - 3.5rem)}.full-height.sticky ::slotted(*){min-height:100vh}.cell{padding:1.75rem}.scrollable ::slotted(*){max-height:calc(100vh - 3.5rem)}.cell{max-width:500px}.size-sm .cell{max-width:300px}}@media (max-width:575.98px){.fullscreen-sm-down .cell{padding:0}.fullscreen-sm-down ::slotted(*){border:0;border-radius:0}.fullscreen-sm-down .cell{max-width:none}.fullscreen-sm-down ::slotted(*){min-height:100vh}}@media (max-width:767.98px){.fullscreen-md-down .cell{padding:0}.fullscreen-md-down ::slotted(*){border:0;border-radius:0}.fullscreen-md-down .cell{max-width:none}.fullscreen-md-down ::slotted(*){min-height:100vh}}@media (min-width:992px){.size-lg .cell,.size-xl .cell{max-width:800px}}@media (max-width:991.98px){.fullscreen-lg-down .cell{padding:0}.fullscreen-lg-down ::slotted(*){border:0;border-radius:0}.fullscreen-lg-down .cell{max-width:none}.fullscreen-lg-down ::slotted(*){min-height:100vh}}@media (min-width:1200px){.size-xl .cell{max-width:1140px}}@media (max-width:1199.98px){.fullscreen-xl-down .cell{padding:0}.fullscreen-xl-down ::slotted(*){border:0;border-radius:0}.fullscreen-xl-down .cell{max-width:none}.fullscreen-xl-down ::slotted(*){min-height:100vh}}@media (max-width:1399.98px){.fullscreen-xxl-down .cell{padding:0}.fullscreen-xxl-down ::slotted(*){border:0;border-radius:0}.fullscreen-xxl-down .cell{max-width:none}.fullscreen-xxl-down ::slotted(*){min-height:100vh}}:host([state=closed]){display:none}.cell{width:100vw}::slotted(*){pointer-events:auto}.full-width .cell{max-width:none!important}.sticky .cell{padding:0}.sticky ::slotted(*){border:0;border-radius:0}";

var Dialog_1;
/**
 * @part backdrop - Backdrop element.
 *
 * @slot default - The default slot.
 */
let Dialog = Dialog_1 = class Dialog extends PlusCore {
    constructor() {
        super(...arguments);
        /**
         * Specifies where to show the dialog box by choosing two values, one for horizontal and another for vertical.
         * Horizontal has a range of `left`, `center`, `right`, `start`, `end`, and vertical values are `top`, `center` and `bottom`.
         */
        this.placement = 'top';
        this.animate = new Animation({
            key: 'state',
            source: () => this.$host,
            target: () => this.$host,
            states: {
                enter: 'open',
                entering: 'opening',
                entered: 'opened',
                leave: 'close',
                leaving: 'closing',
                leaved: 'closed'
            },
            onEnter: () => {
                // remove document's scroll
                Scrollbar.remove(this);
                // add keydown listener
                on(document, 'keydown', this.onEscape, true);
                // remove outside click listener
                on(this.$cell, 'outside', this.onClickOutside, true);
                // set z-index
                this.$host.style.zIndex = this.zIndex;
                // update state
                this.open = this.opened = true;
                // register dialog's instance
                Dialog_1.instances.push(this);
            },
            onEntering: () => {
                this.opened = this.open = true;
            },
            onEntered: silent => {
                if (silent)
                    return;
                this.plusOpened();
            },
            onLeave: () => { },
            onLeaving: () => {
                this.opened = this.open = false;
            },
            onLeaved: silent => {
                // reset document's scroll
                Scrollbar.reset(this);
                // remove keydown listener
                off(document, 'keydown', this.onEscape, true);
                // remove outside click listener
                off(this.$cell, 'outside', this.onClickOutside, true);
                // reset z-index
                this.$host.style.zIndex = null;
                // update state
                this.open = this.opened = false;
                // unregister dialog's instance
                Dialog_1.instances = Dialog_1.instances.filter(instance => instance !== this);
                if (silent)
                    return;
                this.plusClosed();
            }
        });
        this.opened = false;
    }
    get state() {
        return {
            open: this.opened,
            toggle: () => {
                this.try(!this.open, false);
            }
        };
    }
    get classes() {
        let placement = this.placement || '';
        if (placement.match(/^(top|bottom)$/))
            placement = `-${placement}`;
        let [x, y] = placement.split('-');
        x = x || 'center';
        y = y || 'center';
        x = toAxis(x, this.isRTL);
        return classes(['dialog', {
                x,
                y,
                size: this.size,
                sticky: this.sticky,
                fullWidth: this.fullWidth,
                fullHeight: this.fullHeight,
                fullscreen: this.fullscreen,
                scrollable: this.scrollable
            }], true);
    }
    get isCurrent() {
        return Dialog_1.instances.at(-1) === this;
    }
    get zIndex() {
        if (Dialog_1.instances.length < 1)
            return;
        const [instance] = Dialog_1.instances.slice(-1);
        if (!instance)
            return;
        const zIndex = window.getComputedStyle(instance.$host).getPropertyValue('z-index');
        return `${parseInt(zIndex) + 1}`;
    }
    /**
     * Hides the element.
     * @returns {Promise<boolean>} A Promise that resolves to `true` if the
     * operation was successful or `false` if it was canceled.
     */
    hide() {
        return this.try(false, true);
    }
    /**
     * Shows the element.
     * @returns {Promise<boolean>} A Promise that resolves to `true` if the
     * operation was successful or `false` if it was canceled.
     */
    show() {
        return this.try(true, true);
    }
    /**
     * Toggles between `collapse` and `expand` state.
     * @returns {Promise<boolean>} A Promise that resolves to `true` if the
     * operation was successful or `false` if it was canceled.
     */
    toggle() {
        return this.try(!this.open, true);
    }
    watcher(next, prev, name) {
        switch (name) {
            case 'open':
                // TODO: problem with `false` and `undefined`
                if (!next == !prev)
                    break;
                this.try(next, true);
                break;
        }
    }
    initialize() {
        this.animate.initialize((this.opened = !!this.open) ? 'entered' : 'leaved');
    }
    terminate() {
        var _a;
        (_a = this.animate) === null || _a === void 0 ? void 0 : _a.dispose();
    }
    try(open, silent) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.opened == open)
                return yield this.promise;
            if (!silent) {
                const event = open ? this.plusOpen : this.plusClose;
                const prevented = event.call(this).defaultPrevented;
                // TODO
                if (prevented)
                    return true;
            }
            this.opened = this.open = open;
            const fn = this.open ? this.animate.enter : this.animate.leave;
            this.promise = fn.bind(this.animate)(silent);
            return yield this.promise;
        });
    }
    onEscape(event) {
        // TODO
        if (!this.opened)
            return;
        if (!this.isCurrent)
            return;
        if (!this.keyboard || event.key !== 'Escape')
            return;
        event.preventDefault();
        this.try(false, false);
    }
    onClickOutside() {
        // TODO
        if (!this.opened)
            return;
        if (!this.isCurrent)
            return;
        if (this.persistent)
            return;
        this.try(false, false);
    }
    loadedCallback() {
        this.initialize();
    }
    disconnectedCallback() {
        this.terminate();
    }
    render() {
        return html `${attributes(this, [{
                "aria-hidden": this.opened ? null : 'true'
            }, {
                "aria-modal": this.opened ? 'true' : null
            }, {
                "tabindex": -1
            }, {
                "role": this.opened ? 'dialog' : null
            }])}
        ${!this.transparent && html `<div class="backdrop" part="backdrop">
            <div />
          </div>`}
        <div class=${this.classes}>
          <div class="table">
            <div class="cell">
              <slot />
            </div>
          </div>
        </div>
      `;
    }
};
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
Dialog.tag = "plus-dialog";
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
Dialog.style = css_248z;
Dialog.instances = [];
__decorate([
    Property({
        reflect: true,
        type: 258
    })
], Dialog.prototype, "animation", void 0);
__decorate([
    Property({
        type: 256
    })
], Dialog.prototype, "connector", void 0);
__decorate([
    Property({
        type: 2
    })
], Dialog.prototype, "fullHeight", void 0);
__decorate([
    Property({
        type: 2
    })
], Dialog.prototype, "fullWidth", void 0);
__decorate([
    Property({
        type: 10
    })
], Dialog.prototype, "fullscreen", void 0);
__decorate([
    Property({
        type: 2
    })
], Dialog.prototype, "keyboard", void 0);
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], Dialog.prototype, "open", void 0);
__decorate([
    Property({
        type: 2
    })
], Dialog.prototype, "persistent", void 0);
__decorate([
    Property({
        type: 8
    })
], Dialog.prototype, "placement", void 0);
__decorate([
    Property({
        type: 2
    })
], Dialog.prototype, "scrollable", void 0);
__decorate([
    Property({
        type: 8
    })
], Dialog.prototype, "size", void 0);
__decorate([
    Property({
        type: 2
    })
], Dialog.prototype, "sticky", void 0);
__decorate([
    Property({
        type: 2
    })
], Dialog.prototype, "transparent", void 0);
__decorate([
    Event({
        cancelable: true
    })
], Dialog.prototype, "plusClose", void 0);
__decorate([
    Event()
], Dialog.prototype, "plusClosed", void 0);
__decorate([
    Event({
        cancelable: true
    })
], Dialog.prototype, "plusOpen", void 0);
__decorate([
    Event()
], Dialog.prototype, "plusOpened", void 0);
__decorate([
    Query('slot')
], Dialog.prototype, "$cell", void 0);
__decorate([
    Provider('dialog.connector')
], Dialog.prototype, "state", null);
__decorate([
    Method()
], Dialog.prototype, "hide", null);
__decorate([
    Method()
], Dialog.prototype, "show", null);
__decorate([
    Method()
], Dialog.prototype, "toggle", null);
__decorate([
    Watch(['open'])
], Dialog.prototype, "watcher", null);
__decorate([
    Bind()
], Dialog.prototype, "onEscape", null);
__decorate([
    Bind()
], Dialog.prototype, "onClickOutside", null);
Dialog = Dialog_1 = __decorate([
    Element()
], Dialog);

export { Dialog };
