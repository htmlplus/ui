import { _ as __decorate, P as PlusCore, r as request, h as html, k as attributes, b as Property, S as State, l as QueryAll, B as Bind, c as Element } from './core/index.js';

var css_248z = ":host,:host:after,:host:before{box-sizing:border-box}:host *,:host :after,:host :before{box-sizing:border-box}:host([hidden]){display:none!important}:host{align-items:center;display:inline-flex;flex-wrap:wrap;gap:.5em}:host([block]){display:flex}[part=expander],[part=separator]{align-items:center;display:flex;flex-shrink:0;justify-content:center;user-select:none}[part=expander]{background-color:#f5f5f5;border-radius:.25rem;color:currentColor;cursor:pointer}[part=expander]:focus{outline-color:currentColor}[part=separator]{color:currentColor}:dir(rtl)[part=expander],:dir(rtl)[part=separator]{transform:scaleX(-1)}[part=expander] ::slotted(*),[part=expander] svg{fill:currentColor;height:1em}";

const BREADCRUMB_EXPANDER_QUERY = '[slot=expander]';
const BREADCRUMB_SEPARATOR_QUERY = '[slot=separator]';

/**
 * @stable
 *
 * @part expander  - The expander element.
 * @part item      - The breadcrumb elements.
 * @part separator - The separator elements.
 *
 * @slot default   - The default slot.
 * @slot expander  - The expander slot.
 * @slot separator - The separator slot.
 */
let Breadcrumb = class Breadcrumb extends PlusCore {
    constructor() {
        super(...arguments);
        /**
         * Specifies the label for the expander button.
         */
        this.expanderText = 'Show path';
        /**
         * Specifies the position of the expander button.
         * The expander button is displayed when the number of items reached the maximum limit.
         */
        this.offset = 1;
        this.expand = false;
        this.observer = new MutationObserver(this.onChange);
    }
    get $children() {
        return Array.from(this.$host.children).filter($node => {
            return !$node.matches([BREADCRUMB_EXPANDER_QUERY, BREADCRUMB_SEPARATOR_QUERY].join(','));
        });
    }
    get items() {
        const $children = this.$children;
        const items = [];
        const { start, length } = (() => {
            if (this.expand)
                return {};
            if (typeof this.max !== 'number')
                return {};
            if ($children.length <= this.max)
                return {};
            let start, length;
            length = $children.length > this.max ? $children.length - this.max : $children.length;
            const mod = $children.length - length;
            start = this.offset;
            if (start >= 0) {
                start = $children.length < length + start ? mod : start;
            }
            else {
                start = mod + start + 1;
                start = start < 0 ? 0 : start;
            }
            return {
                start,
                length
            };
        })(); // TODO
        $children.forEach(($child, index) => {
            $child.setAttribute('slot', index.toString());
            if (start <= index && index < start + length)
                return;
            items.push({
                type: 'item',
                key: `${index}`,
                slot: `${index}`
            });
        });
        if (start !== undefined) {
            items.splice(start, 0, {
                type: 'expander',
                key: 'expander'
            });
        }
        if (this.template) {
            for (let i = items.length - 1; i > 0; i--) {
                items.splice(i, 0, {
                    type: 'separator',
                    key: `expander-${i}`
                });
            }
        }
        return items;
    }
    get template() {
        const $node = this.$host.querySelector(BREADCRUMB_SEPARATOR_QUERY);
        const $clone = $node === null || $node === void 0 ? void 0 : $node.cloneNode(true);
        $clone === null || $clone === void 0 ? void 0 : $clone.removeAttribute('slot');
        return ($clone === null || $clone === void 0 ? void 0 : $clone.outerHTML) || this.separator;
    }
    initialize() {
        this.observer.observe(this.$host, {
            childList: true
        });
    }
    terminate() {
        this.observer.disconnect();
    }
    onChange() {
        request(this);
    }
    connectedCallback() {
        this.initialize();
    }
    disconnectedCallback() {
        this.terminate();
    }
    // TODO: use 'dangerouslySetInnerHTML' instead
    updatedCallback() {
        const template = this.template;
        if (!template)
            return;
        this.$separators.forEach(element => {
            element.innerHTML = template;
        });
    }
    render() {
        return html `${attributes(this, [{
                "aria-label": "breadcrumb"
            }])}
        ${this.items.map(item => {
            switch (item.type) {
                case 'item':
                    {
                        return html `<div key=${item.key} part="item">
                  <slot name=${item.slot} />
                </div>`;
                    }
                case 'expander':
                    {
                        return html `<div aria-disabled="false" aria-label=${this.expanderText} key=${item.key} part="expander" role="button" tabindex=${0} onClick=${() => this.expand = true} onKeyDown=${event => event.key.match(/Enter| /) && (this.expand = true)}>
                  <slot name="expander">
                    <svg focusable="false" viewbox="0 0 24 24" aria-hidden="true">
                      <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                    </svg>
                  </slot>
                </div>`;
                    }
                case 'separator':
                    {
                        return html `<div key=${item.key} aria-hidden="true" part="separator" />`;
                    }
            }
        })}
      `;
    }
};
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
Breadcrumb.tag = "plus-breadcrumb";
// THIS IS AUTO-ADDED, DO NOT EDIT MANUALY
Breadcrumb.style = css_248z;
__decorate([
    Property({
        reflect: true,
        type: 2
    })
], Breadcrumb.prototype, "block", void 0);
__decorate([
    Property({
        type: 256
    })
], Breadcrumb.prototype, "expanderText", void 0);
__decorate([
    Property({
        type: 64
    })
], Breadcrumb.prototype, "offset", void 0);
__decorate([
    Property({
        type: 64
    })
], Breadcrumb.prototype, "max", void 0);
__decorate([
    Property({
        type: 256
    })
], Breadcrumb.prototype, "separator", void 0);
__decorate([
    State()
], Breadcrumb.prototype, "expand", void 0);
__decorate([
    QueryAll('[part=separator]')
], Breadcrumb.prototype, "$separators", void 0);
__decorate([
    Bind()
], Breadcrumb.prototype, "onChange", null);
Breadcrumb = __decorate([
    Element()
], Breadcrumb);

export { Breadcrumb };
