import { _ as __decorate, P as Property, E as Event, A as Attributes, W as Watch, B as Bind, e as createLink, h as host, t as toAxis, i as isRTL, d as classes, f as Animation, j as Scrollbar, C as ClickOutside, o as off, k as Portal, l as on, u as uhtml, a as Element } from './core/index.js';

var css_248z = "*,:after,:before{box-sizing:border-box}:host,:host:after,:host:before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none}:host([animation]:not([animation=false])[state=closing]),:host([animation]:not([animation=false])[state=opening]){transition:all .5s ease-out}:host([animation]:not([animation=false])[state=closing]) .dialog,:host([animation]:not([animation=false])[state=opening]) .dialog{overflow:hidden}:host([animation]:not([animation=false])[state=closing]) ::slotted(*),:host([animation]:not([animation=false])[state=opening]) ::slotted(*){transition:all .5s ease-out}:host([animation=fade][state=closing]),:host([animation=fade][state=open]){opacity:0}:host([animation=fade][state=closing]) ::slotted(*),:host([animation=fade][state=open]) ::slotted(*){transform:translateY(-50px)}:host([animation=fade][state=closing]) .y-bottom ::slotted(*),:host([animation=fade][state=open]) .y-bottom ::slotted(*){transform:translateY(50px)}:host([animation=fade][state=closing]) .x-right ::slotted(*),:host([animation=fade][state=open]) .x-right ::slotted(*){transform:translate(50px)}:host([animation=fade][state=closing]) .x-left ::slotted(*),:host([animation=fade][state=open]) .x-left ::slotted(*){transform:translate(-50px)}:host([animation=fade][state=close]),:host([animation=fade][state=opening]){opacity:1}:host([animation=fade][state=close]) ::slotted(*),:host([animation=fade][state=opening]) ::slotted(*){transform:translate(0)}:host{display:block;height:100%;left:0;outline:0;overflow:hidden;position:fixed;top:0;width:100%;z-index:1000}.backdrop{left:0;position:fixed;top:0;z-index:1}.backdrop,.backdrop *{height:100%;width:100%}.backdrop *{background-color:#000;opacity:.5}.dialog{height:100%;left:0;overflow-x:hidden;overflow-y:auto;position:fixed;top:0;width:100%;z-index:1}.table{display:table;height:100%;margin:auto;position:relative}.cell{display:table-cell}.scrollable ::slotted(*){overflow-x:hidden;overflow-y:auto}.x-right .table{margin-right:0}.x-left .table{margin-left:0}.y-top .cell{vertical-align:top}.y-center .cell{vertical-align:middle}.y-bottom .cell{vertical-align:bottom}.full-height ::slotted(*){min-height:calc(100vh - 1rem)}.full-height.sticky ::slotted(*){min-height:100vh}.cell{padding:.5rem}.scrollable ::slotted(*){max-height:calc(100vh - 1rem)}.fullscreen .cell{padding:0}.fullscreen ::slotted(*){border:0;border-radius:0}.fullscreen .cell{max-width:none}.fullscreen ::slotted(*){min-height:100vh}@media (min-width:576px){.full-height ::slotted(*){min-height:calc(100vh - 3.5rem)}.full-height.sticky ::slotted(*){min-height:100vh}.cell{padding:1.75rem}.scrollable ::slotted(*){max-height:calc(100vh - 3.5rem)}.cell{max-width:500px}.size-sm .cell{max-width:300px}}@media (max-width:575.98px){.fullscreen-sm-down .cell{padding:0}.fullscreen-sm-down ::slotted(*){border:0;border-radius:0}.fullscreen-sm-down .cell{max-width:none}.fullscreen-sm-down ::slotted(*){min-height:100vh}}@media (max-width:767.98px){.fullscreen-md-down .cell{padding:0}.fullscreen-md-down ::slotted(*){border:0;border-radius:0}.fullscreen-md-down .cell{max-width:none}.fullscreen-md-down ::slotted(*){min-height:100vh}}@media (min-width:992px){.size-lg .cell,.size-xl .cell{max-width:800px}}@media (max-width:991.98px){.fullscreen-lg-down .cell{padding:0}.fullscreen-lg-down ::slotted(*){border:0;border-radius:0}.fullscreen-lg-down .cell{max-width:none}.fullscreen-lg-down ::slotted(*){min-height:100vh}}@media (min-width:1200px){.size-xl .cell{max-width:1140px}}@media (max-width:1199.98px){.fullscreen-xl-down .cell{padding:0}.fullscreen-xl-down ::slotted(*){border:0;border-radius:0}.fullscreen-xl-down .cell{max-width:none}.fullscreen-xl-down ::slotted(*){min-height:100vh}}@media (max-width:1399.98px){.fullscreen-xxl-down .cell{padding:0}.fullscreen-xxl-down ::slotted(*){border:0;border-radius:0}.fullscreen-xxl-down .cell{max-width:none}.fullscreen-xxl-down ::slotted(*){min-height:100vh}}:host([state=closed]){display:none}.cell{width:100vw}::slotted(*){pointer-events:auto}.full-width .cell{max-width:none!important}.sticky .cell{padding:0}.sticky ::slotted(*){border:0;border-radius:0}";

var Dialog_1;
const { Action, Observable, reconnect } = createLink({
    crawl: false,
    namespace: ({ connector }) => connector ? `Dialog:${connector}` : undefined
});
/**
 * @part backdrop - Backdrop element.
 * @slot default - The default slot.
 */
let Dialog = Dialog_1 = class Dialog {
    constructor() {
        /**
         * Activate the dialog's backdrop to show or not.
         */
        this.backdrop = true;
        /**
         * Closes the dialog when `escape` key is pressed.
         */
        this.keyboard = true;
        /**
         * Specifies where to show the dialog box by choosing two values, one for horizontal and another for vertical.
         * Horizontal has a range of `left`, `center`, `right`, `start`, `end`, and vertical values are `top`, `center` and `bottom`.
         */
        this.placement = 'top';
        /**
         * Specifies the position of the dialog.
         * @experimental
         */
        this.portalStrategy = 'append';
        /**
         * Specifies the position of the dialog relative to the target.
         * @experimental
         */
        this.portalTarget = 'body';
    }
    get $host() {
        return host(this);
    }
    get attributes() {
        const attributes = {
            tabindex: -1
        };
        if (this.isOpen) {
            attributes['role'] = 'dialog';
            attributes['aria-modal'] = 'true';
        }
        else {
            attributes['aria-hidden'] = 'true';
        }
        return attributes;
    }
    get classes() {
        let placement = this.placement || '';
        if (placement.match(/^(top|bottom)$/))
            placement = `-${placement}`;
        let [x, y] = placement.split('-');
        x = x || 'center';
        y = y || 'center';
        x = toAxis(x, isRTL(this));
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
        const instances = Dialog_1.instances;
        const last = instances.length - 1;
        return instances[last] === this;
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
     * External Methods
     */
    hide() {
        this.tryHide(true, false);
    }
    show() {
        this.tryShow(true, false);
    }
    toggle() {
        this.isOpen ? this.hide() : this.show();
    }
    /**
     * Internal Methods
     */
    broadcast(value) {
        this.tunnel = value;
    }
    initialize() {
        this.animate = new Animation({
            key: 'state',
            source: () => this.$host,
            target: () => this.$host,
            state: this.open ? 'entered' : 'leaved',
            states: {
                enter: 'open',
                entering: 'opening',
                entered: 'opened',
                leave: 'close',
                leaving: 'closing',
                leaved: 'closed'
            }
        });
        if (!this.open)
            return;
        this.tryShow(false, true);
    }
    terminate() {
        var _a;
        this.onHide();
        (_a = this.animate) === null || _a === void 0 ? void 0 : _a.dispose();
    }
    tryHide(animation, silent) {
        if (!this.isOpen)
            return;
        if (!silent && this.plusClose().defaultPrevented)
            return;
        if (!animation)
            return this.onHide();
        this.animate.leave({
            onLeave: () => {
                // TODO: experimantal new link
                this.broadcast(false);
            },
            onLeaved: () => {
                var _a;
                // TODO: experimantal portal
                (_a = this.portalInstance) === null || _a === void 0 ? void 0 : _a.revert();
                this.onHide();
                if (silent)
                    return;
                this.plusClosed();
            }
        });
    }
    tryShow(animation, silent) {
        if (this.isOpen)
            return;
        if (!silent && this.plusOpen().defaultPrevented)
            return;
        if (!animation)
            return this.onShow();
        this.animate.enter({
            onEnter: () => {
                this.onShow();
            },
            onEntered: () => {
                if (silent)
                    return;
                this.plusOpened();
            }
        });
    }
    /**
     * Watchers
     */
    watcher(next, prev, name) {
        switch (name) {
            case 'connector':
                reconnect(this);
                break;
            case 'open':
                next && !this.isOpen && this.tryShow(true, true);
                !next && this.isOpen && this.tryHide(true, true);
                break;
        }
    }
    /**
     * Events handler
     */
    onHide() {
        // reset document's scroll
        Scrollbar.reset(this);
        // remove outside click listener
        ClickOutside.off(this.$cell);
        // remove keydown listener
        off(document, 'keydown', this.onEscape, true);
        // reset z-index
        this.$host.style.zIndex = null;
        // update state
        this.open = this.isOpen = false;
        // unregister dialog's instance
        Dialog_1.instances = Dialog_1.instances.filter(instance => instance !== this);
        // TODO: experimantal new link
        this.broadcast(false);
    }
    onShow() {
        // TODO: experimantal portal
        this.portalInstance = this.portal && new Portal({
            source: this.$host,
            target: this.portalTarget,
            strategy: this.portalStrategy
        });
        // remove document's scroll
        Scrollbar.remove(this);
        // remove outside click listener
        ClickOutside.on(this.$cell, this.onClickOutside, false);
        // add keydown listener
        on(document, 'keydown', this.onEscape, true);
        // set z-index
        this.$host.style.zIndex = this.zIndex;
        // update state
        this.open = this.isOpen = true;
        // register dialog's instance
        Dialog_1.instances.push(this);
        // TODO: experimantal new link
        this.broadcast(true);
    }
    onEscape(event) {
        if (!this.isOpen || !this.isCurrent)
            return;
        if (!this.keyboard || event.key !== 'Escape')
            return;
        event.preventDefault();
        this.tryHide(true, false);
    }
    onClickOutside() {
        if (!this.isOpen || !this.isCurrent || this.persistent)
            return;
        this.tryHide(true, false);
    }
    /**
     * Lifecycles
     */
    // TODO: it's can not be `connectedCallback`, because ClickOutside incompatible
    connectedCallback() {
        this.initialize();
    }
    disconnectedCallback() {
        this.terminate();
    }
    render() {
        return uhtml.html `${this.backdrop && uhtml.html `<div class="backdrop" part="backdrop">
            <div />
          </div>`}<div class=${this.classes}>
          <div class="table">
            <div class="cell" ref=${$element => this.$cell = $element}>
              <slot />
            </div>
          </div>
        </div>`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Dialog.TAG = "plus-dialog";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Dialog.STYLES = css_248z;
Dialog.instances = [];
__decorate([
    Property({
        reflect: true,
        type: 256
    })
], Dialog.prototype, "animation", void 0);
__decorate([
    Property({
        type: 2
    })
], Dialog.prototype, "backdrop", void 0);
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
], Dialog.prototype, "portal", void 0);
__decorate([
    Property({
        type: 0
    })
], Dialog.prototype, "portalStrategy", void 0);
__decorate([
    Property({
        type: 0
    })
], Dialog.prototype, "portalTarget", void 0);
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
    Observable()
], Dialog.prototype, "tunnel", void 0);
__decorate([
    Attributes()
], Dialog.prototype, "attributes", null);
__decorate([
    Action()
], Dialog.prototype, "toggle", null);
__decorate([
    Watch(['connector', 'open'])
], Dialog.prototype, "watcher", null);
__decorate([
    Bind()
], Dialog.prototype, "onEscape", null);
__decorate([
    Bind()
], Dialog.prototype, "onClickOutside", null);
Dialog = Dialog_1 = __decorate([
    Element("plus-dialog")
], Dialog);

export { Dialog };
