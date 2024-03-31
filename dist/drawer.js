import { _ as __decorate, P as PlusCore, A as Animation, m as Scrollbar, o as on, k as off, n as toAxis, l as classes, t as toUnit, a as __awaiter, h as html, e as styles, b as Property, E as Event, S as State, q as Breakpoint, Q as Query, d as Provider, M as Method, W as Watch, B as Bind, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]){display:none!important}:host{display:block;overflow:hidden;position:relative;z-index:1000}[part=backdrop]{height:100%;left:0;position:fixed;top:0;transition:inherit;width:100%;z-index:1}[part=backdrop] *{background-color:#000;height:100%;opacity:.5;width:100%}[part=root]{height:100%;position:relative;transition:inherit;z-index:1}.left,.right{width:var(--plus-drawer-size)}.bottom,.top{height:var(--plus-drawer-size)}.left.reverse,.right{margin:0 var(--plus-drawer-offset,0) 0 0}.left,.right.reverse{margin:0 0 0 var(--plus-drawer-offset,0)}.bottom.reverse,.top{margin:var(--plus-drawer-offset,0) 0 0 0}.bottom,.top.reverse{margin:0 0 var(--plus-drawer-offset,0) 0}:host([floated]){bottom:0;left:0;position:fixed;right:0;top:0}:host([animation]){transition:.3s}:host([animation][state=closed]){display:none}:host([animation][state=opened][state-mini=closed]){overflow:visible}:host([animation][state=closing]),:host([animation][state=open]){padding:.000001px}:host([animation][state=closing]) [part=backdrop],:host([animation][state=open]) [part=backdrop]{opacity:0}";

/**
 * @slot default - The default slot.
 */
let Drawer = class Drawer extends PlusCore {
    constructor() {
        super(...arguments);
        /**
         * Sets the minimum width size of the drawer.
         */
        this.miniSize = 80;
        /**
         * Determine the width of the drawer.
         */
        this.size = 280;
        this.animate = {
            main: new Animation({
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
                    this.floated && Scrollbar.remove(this);
                    // remove outside click listener
                    on(this.$root, 'outside', this.onClickOutside, true);
                    // update state
                    this.open = this.opened = true;
                },
                onEntering: () => {
                    // this.opened = this.open = true;
                },
                onEntered: silent => {
                    if (silent)
                        return;
                    this.plusOpened();
                },
                onLeave: () => { },
                onLeaving: () => {
                    // this.opened = this.open = false;
                },
                onLeaved: silent => {
                    // reset document's scroll
                    Scrollbar.reset(this);
                    // remove outside click listener
                    off(this.$root, 'outside', this.onClickOutside, true);
                    // update state
                    this.open = this.opened = false;
                    if (silent)
                        return;
                    this.plusClosed();
                }
            }),
            mini: new Animation({
                key: 'state-mini',
                source: () => this.$host,
                target: () => this.$host,
                states: {
                    enter: 'open',
                    entering: 'opening',
                    entered: 'opened',
                    leave: 'close',
                    leaving: 'closing',
                    leaved: 'closed'
                }
            })
        };
        this.opened = false;
    }
    /**
     * TODO
     */
    get floated() {
        if (!this.floating)
            return false;
        if (this.floating === true)
            return true;
        const breakpoint = this.floating.split('-').at(1);
        const breakpoints = ['xs', 'sm', 'md', 'lg', 'xl']; // TODO
        return breakpoints.indexOf(this.breakpoint) <= breakpoints.indexOf(breakpoint);
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
        const placement = toAxis(this.placement || 'start', this.isRTL);
        return classes([{
                [placement]: true,
                reverse: this.flexible
            }], true);
    }
    get hasBackdrop() {
        return this.backdrop && this.floated;
    }
    get style() {
        const size = toUnit(this.size);
        const miniSize = toUnit(this.miniSize);
        const offset = `calc(${this.open ? this.mini ? `-${size} + ${miniSize}` : '0px' : `-${size}`})`;
        return {
            '--plus-drawer-size': size,
            '--plus-drawer-offset': offset
        };
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
            case 'breakpoint':
                if (!this.floated) {
                    this.try(false, false);
                }
                break;
            case 'open':
                // TODO: problem with `false` and `undefined`
                if (!next == !prev)
                    break;
                this.try(next, true);
                break;
            case 'mini':
                // TODO: problem with `false` and `undefined`
                if (!next == !prev)
                    break;
                this.animate.mini[next ? 'enter' : 'leave']();
                break;
        }
    }
    initialize() {
        this.opened = !!this.open;
        this.animate.main.initialize(this.open ? 'entered' : 'leaved');
        this.animate.mini.initialize(this.mini ? 'entered' : 'leaved');
    }
    terminate() {
        var _a, _b;
        (_a = this.animate.main) === null || _a === void 0 ? void 0 : _a.dispose();
        (_b = this.animate.mini) === null || _b === void 0 ? void 0 : _b.dispose();
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
            const fn = this.open ? this.animate.main.enter : this.animate.main.leave;
            this.promise = fn.bind(this.animate.main)(silent);
            return yield this.promise;
        });
    }
    onClickOutside() {
        // TODO
        if (!this.opened)
            return;
        if (!this.floated)
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
        return html `
        ${this.hasBackdrop ? html `<div part="backdrop">
            <div />
          </div>` : null}
        <div class=${this.classes} part="root" style=${styles(this.style)}>
          <slot />
        </div>
      `;
    }
};
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
Drawer.tag = "plus-drawer";
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
Drawer.style = css_248z;
__decorate([
    Property({
        reflect: true,
        type: 258
    })
], Drawer.prototype, "animation", void 0);
__decorate([
    Property({
        type: 2
    })
], Drawer.prototype, "backdrop", void 0);
__decorate([
    Property({
        type: 256
    })
], Drawer.prototype, "connector", void 0);
__decorate([
    Property({
        type: 10
    })
], Drawer.prototype, "floating", void 0);
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], Drawer.prototype, "mini", void 0);
__decorate([
    Property({
        type: 320
    })
], Drawer.prototype, "miniSize", void 0);
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], Drawer.prototype, "open", void 0);
__decorate([
    Property({
        type: 2
    })
], Drawer.prototype, "persistent", void 0);
__decorate([
    Property({
        type: 8
    })
], Drawer.prototype, "placement", void 0);
__decorate([
    Property({
        type: 2
    })
], Drawer.prototype, "flexible", void 0);
__decorate([
    Property({
        type: 320
    })
], Drawer.prototype, "size", void 0);
__decorate([
    Property({
        reflect: true,
        type: 0
    })
], Drawer.prototype, "floated", null);
__decorate([
    Event({
        cancelable: true
    })
], Drawer.prototype, "plusClose", void 0);
__decorate([
    Event()
], Drawer.prototype, "plusClosed", void 0);
__decorate([
    Event({
        cancelable: true
    })
], Drawer.prototype, "plusOpen", void 0);
__decorate([
    Event()
], Drawer.prototype, "plusOpened", void 0);
__decorate([
    State(),
    Breakpoint()
], Drawer.prototype, "breakpoint", void 0);
__decorate([
    Query('[part=root]')
], Drawer.prototype, "$root", void 0);
__decorate([
    Provider('drawer.connector')
], Drawer.prototype, "state", null);
__decorate([
    Method()
], Drawer.prototype, "hide", null);
__decorate([
    Method()
], Drawer.prototype, "show", null);
__decorate([
    Method()
], Drawer.prototype, "toggle", null);
__decorate([
    Watch(['breakpoint', 'mini', 'open'])
], Drawer.prototype, "watcher", null);
__decorate([
    Bind()
], Drawer.prototype, "onClickOutside", null);
Drawer = __decorate([
    Element()
], Drawer);

export { Drawer };
