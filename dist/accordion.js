import { _ as __decorate, P as PlusCore, A as Animation, a as __awaiter, h as html, b as Property, E as Event, S as State, C as Consumer, Q as Query, M as Method, W as Watch, B as Bind, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]){display:none!important}:host{border:1px solid #d3d3d3;border-radius:.25rem;display:block;overflow-anchor:none}:host(:not(:first-of-type)){border-top:0}:host(:not(:first-of-type):not(:last-of-type)){border-radius:0}:host(:first-of-type:not(:last-of-type)){border-bottom-left-radius:0;border-bottom-right-radius:0}:host(:last-of-type:not(:first-of-type)){border-top-left-radius:0;border-top-right-radius:0}:host([disabled]){opacity:.5}:host([disabled])::part(header){cursor:auto}:host::part(header){align-items:center;border-radius:inherit;cursor:pointer;display:flex;overflow-anchor:none;padding:1rem;position:relative;user-select:none}:host::part(summary){align-items:center;display:flex;flex:1 1 auto}:host::part(icon){align-items:center;display:flex;flex:0 0 auto}:host::part(body){overflow:hidden;transition:all .2s ease-in-out}:host::part(content){display:block;padding:1rem}:host([state=collapsed])::part(body){display:none}:host(:not([state=collapsed]))::part(header){border-bottom-left-radius:0;border-bottom-right-radius:0}:host::part(svg){transition:all .2s ease-in-out}:host([state^=collap])::part(svg){rotate:90deg}:host([state^=expand])::part(svg){rotate:-90deg}";

/**
 * @stable
 *
 * @part body          - The body element.
 * @part content       - The content element.
 * @part summary       - The summary element.
 * @part svg           - The svg element.
 *
 * @slot default       - The default slot.
 * @slot icon          - The icon slot.
 * @slot icon-expand   - The expand icon slot.
 * @slot icon-collapse - The collapse icon slot.
 * @slot summary       - The summary slot.
 * @slot top           - The top slot.
 * @slot middle        - The middle slot.
 * @slot bottom        - The bottom slot.
 */
let Accordion = class Accordion extends PlusCore {
    constructor() {
        super(...arguments);
        this.animate = new Animation({
            key: 'state',
            source: () => this.$body,
            target: () => this.$host,
            states: {
                enter: 'expand',
                entering: 'expanding',
                entered: 'expanded',
                leave: 'collapse',
                leaving: 'collapsing',
                leaved: 'collapsed'
            },
            onEnter: () => {
                this.$body.style.height = '0';
            },
            onEntering: () => {
                this.opened = this.open = true;
                this.$body.style.height = this.$body.scrollHeight + 'px';
            },
            onEntered: silent => {
                this.$body.style.height = '';
                if (silent)
                    return;
                this.plusExpanded();
            },
            onLeave: () => {
                this.$body.style.height = this.$body.scrollHeight + 'px';
            },
            onLeaving: () => {
                this.opened = this.open = false;
                this.$body.style.height = '0';
            },
            onLeaved: silent => {
                this.$body.style.height = '';
                if (silent)
                    return;
                this.plusCollapsed();
            }
        });
        this.opened = false;
    }
    /**
     * Collapses the element.
     * @returns {Promise<boolean>} A Promise that resolves to `true` if the
     * operation was successful or `false` if it was canceled.
     */
    collapse() {
        return this.try(false, true);
    }
    /**
     * Expands the element.
     * @returns {Promise<boolean>} A Promise that resolves to `true` if the
     * operation was successful or `false` if it was canceled.
     */
    expand() {
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
    getId(key) {
        if (this.$host.id) {
            return this.$host.id + '-' + key;
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
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            // TODO
            if (this.disabled)
                return true;
            if (this.opened == open)
                return yield this.promise;
            if (!silent) {
                const event = open ? this.plusExpand : this.plusCollapse;
                const prevented = event.call(this).defaultPrevented;
                // TODO
                if (prevented)
                    return true;
            }
            this.opened = this.open = open;
            // TODO
            if (this.open) {
                (_a = this.accordions) === null || _a === void 0 ? void 0 : _a.open(this.$host);
            }
            const fn = this.open ? this.animate.enter : this.animate.leave;
            this.promise = fn.bind(this.animate)(silent);
            return yield this.promise;
        });
    }
    onClick() {
        this.try(!this.open, false);
    }
    onKeyDown(event) {
        switch (event.key) {
            case ' ':
            case 'Enter':
                event.preventDefault();
                this.try(!this.open, false);
                break;
        }
    }
    loadedCallback() {
        this.initialize();
    }
    disconnectedCallback() {
        this.terminate();
    }
    render() {
        return html `
        <slot name="top" />
        <div aria-controls=${this.getId('body')} aria-disabled=${!!this.disabled} aria-expanded=${!!this.open} id=${this.getId('header')} part="header" role="button" tabindex=${this.disabled ? -1 : 0} onClick=${this.onClick} onKeyDown=${this.onKeyDown}>
          <slot name="summary" part="summary">
            ${this.summary}
          </slot>
          <slot name="icon">
            <slot name=${`icon-${this.open ? 'collapse' : 'expand'}`}>
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" focusable="false" viewbox="0 0 16 16" part="svg">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
              </svg>
            </slot>
          </slot>
        </div>
        <slot name="middle" />
        <div part="body" role="region" aria-labelledby=${this.getId('header')} id=${this.getId('body')}>
          <slot part="content" />
        </div>
        <slot name="bottom" />
      `;
    }
};
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
Accordion.tag = "plus-accordion";
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
Accordion.style = css_248z;
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], Accordion.prototype, "disabled", void 0);
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], Accordion.prototype, "open", void 0);
__decorate([
    Property({
        type: 256
    })
], Accordion.prototype, "summary", void 0);
__decorate([
    Event({
        cancelable: true
    })
], Accordion.prototype, "plusCollapse", void 0);
__decorate([
    Event()
], Accordion.prototype, "plusCollapsed", void 0);
__decorate([
    Event({
        cancelable: true
    })
], Accordion.prototype, "plusExpand", void 0);
__decorate([
    Event()
], Accordion.prototype, "plusExpanded", void 0);
__decorate([
    State(),
    Consumer('accordions')
], Accordion.prototype, "accordions", void 0);
__decorate([
    Query('[part=body]')
], Accordion.prototype, "$body", void 0);
__decorate([
    Query('[part=header]')
], Accordion.prototype, "$header", void 0);
__decorate([
    Method()
], Accordion.prototype, "collapse", null);
__decorate([
    Method()
], Accordion.prototype, "expand", null);
__decorate([
    Method()
], Accordion.prototype, "toggle", null);
__decorate([
    Watch(['open'])
], Accordion.prototype, "watcher", null);
__decorate([
    Bind()
], Accordion.prototype, "onClick", null);
__decorate([
    Bind()
], Accordion.prototype, "onKeyDown", null);
Accordion = __decorate([
    Element()
], Accordion);

export { Accordion };
