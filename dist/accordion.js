import { _ as __decorate, A as Animation2, a as __awaiter, h as html, P as Property, E as Event, H as Host, Q as Query, M as Method, W as Watch, B as Bind, b as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none!important}:host{background-color:#fff;border:1px solid #d3d3d3;border-radius:.25rem;display:block;overflow-anchor:none}:host(:not(:first-of-type)){border-top:0}:host(:not(:first-of-type,:last-of-type)){border-radius:0}:host(:not(:only-of-type):first-of-type){border-bottom-left-radius:0;border-bottom-right-radius:0}:host(:not(:only-of-type):last-of-type){border-top-left-radius:0;border-top-right-radius:0}:host([disabled]:not([disabled=false])){opacity:.5}:host([disabled]:not([disabled=false])) .header{cursor:auto}.header{border-radius:inherit;cursor:pointer;overflow-anchor:none;padding:1rem;position:relative;user-select:none}.header,.summary{align-items:center;display:flex}.summary{flex:1 1 auto}.icon{align-items:center;display:flex;flex:0 0 auto}.body{overflow:hidden;transition:all .2s ease-in-out}.content{display:block;padding:1rem}:host([state=collapsed]) .body{display:none}:host(:not([state=collapsed])) .header{border-bottom-left-radius:0;border-bottom-right-radius:0}svg{transition:all .2s ease-in-out}:host([state^=collap]) svg{transform:rotate(90deg)}:host([state^=expand]) svg{transform:rotate(-90deg)}";

/**
 * @part body          - The body element.
 * @part content       - The content element.
 * @part summary       - The summary element.
 * @part svg           - The svg element.
 * @slot default       - The default slot.
 * @slot icon          - The icon slot.
 * @slot icon-expand   - The expand icon slot.
 * @slot icon-collapse - The collapse icon slot.
 * @slot summary       - The summary slot.
 */
let Accordion = class Accordion {
    constructor() {
        this.animate = new Animation2({
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
    hide() {
        return __awaiter(this, void 0, void 0, function* () {
            this.try(false, true);
        });
    }
    show() {
        return __awaiter(this, void 0, void 0, function* () {
            this.try(true, true);
        });
    }
    toggle() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.open ? this.hide() : this.show();
        });
    }
    watcher(next, prev, name) {
        // TODO: problem with `false` and `undefined`
        if (!next == !prev)
            return;
        switch (name) {
            case 'open':
                this.try(next, true);
                break;
        }
    }
    bind() {
        this.animate.initialize((this.opened = this.open) ? 'entered' : 'leaved');
    }
    unbind() {
        var _a;
        (_a = this.animate) === null || _a === void 0 ? void 0 : _a.dispose();
    }
    try(open, silent) {
        if (this.disabled)
            return;
        if (this.opened == open)
            return;
        const event = open ? this.plusExpand : this.plusCollapse;
        if (!silent && event.call(this).defaultPrevented)
            return;
        this.opened = this.open = open;
        if (this.open) {
            this.animate.enter(silent);
        }
        else {
            this.animate.leave(silent);
        }
    }
    onClick() {
        this.try(!this.open);
    }
    onKeyDown(event) {
        switch (event.key) {
            case ' ':
            case 'Enter':
                event.preventDefault();
                this.try(!this.open);
                break;
        }
    }
    loadedCallback() {
        this.bind();
    }
    disconnectedCallback() {
        this.unbind();
    }
    render() {
        return html `
        <div aria-disabled=${!!this.disabled} aria-expanded=${!!this.open} class="header" part="header" role="button" tabindex=${this.disabled ? -1 : 0} onClick=${this.onClick} onKeyDown=${this.onKeyDown}>
          <slot class="summary" name="summary" part="summary">
            ${this.summary}
          </slot>
          <slot class="icon" name="icon">
            <slot name=${`icon-${this.open ? 'collapse' : 'expand'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewbox="0 0 16 16" part="svg">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
              </svg>
            </slot>
          </slot>
        </div>
        <div class="body" part="body">
          <slot class="content" part="content"></slot>
        </div>
      `;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Accordion.TAG = "plus-accordion";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Accordion.STYLES = css_248z;
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
    Host()
], Accordion.prototype, "$host", void 0);
__decorate([
    Query('.body')
], Accordion.prototype, "$body", void 0);
__decorate([
    Query('.header')
], Accordion.prototype, "$header", void 0);
__decorate([
    Method()
], Accordion.prototype, "hide", null);
__decorate([
    Method()
], Accordion.prototype, "show", null);
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
