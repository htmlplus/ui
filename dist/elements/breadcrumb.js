import { P as PlusCore, h as html, d as attributes, a as Property, e as State, u as QueryAll, B as Bind, E as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{display:inline-flex;align-items:center;flex-wrap:wrap;gap:.5em}:host([block]){display:flex}[part=expander],[part=separator]{display:flex;align-items:center;justify-content:center;user-select:none;flex-shrink:0}[part=expander]{background-color:#f5f5f5;border-radius:.25rem;color:currentColor;cursor:pointer}[part=expander]:focus{outline-color:currentColor}[part=separator]{color:currentColor}:dir(rtl)[part=expander],:dir(rtl)[part=separator]{transform:scaleX(-1)}[part=expander] svg,[part=expander] ::slotted(*){fill:currentColor;height:1em}";
const BREADCRUMB_EXPANDER_QUERY = "[slot=expander]";
const BREADCRUMB_SEPARATOR_QUERY = "[slot=separator]";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
let Breadcrumb = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.expanderText = "Show path";
    this.offset = 1;
    this.expand = false;
    this.observer = new MutationObserver(this.onChange);
  }
  get $children() {
    return Array.from(this.$host.children).filter(($node) => {
      return !$node.matches([BREADCRUMB_EXPANDER_QUERY, BREADCRUMB_SEPARATOR_QUERY].join(","));
    });
  }
  get items() {
    const $children = this.$children;
    const items = [];
    const {
      start,
      length
    } = (() => {
      if (this.expand) return {};
      if (typeof this.max !== "number") return {};
      if ($children.length <= this.max) return {};
      let start2, length2;
      length2 = $children.length > this.max ? $children.length - this.max : $children.length;
      const mod = $children.length - length2;
      start2 = this.offset;
      if (start2 >= 0) {
        start2 = $children.length < length2 + start2 ? mod : start2;
      } else {
        start2 = mod + start2 + 1;
        start2 = start2 < 0 ? 0 : start2;
      }
      return {
        start: start2,
        length: length2
      };
    })();
    $children.forEach(($child, index) => {
      $child.setAttribute("slot", index.toString());
      if (start <= index && index < start + length) return;
      items.push({
        type: "item",
        key: `${index}`,
        slot: `${index}`
      });
    });
    if (start !== void 0) {
      items.splice(start, 0, {
        type: "expander",
        key: "expander"
      });
    }
    if (this.template) {
      for (let i = items.length - 1; i > 0; i--) {
        items.splice(i, 0, {
          type: "separator",
          key: `expander-${i}`
        });
      }
    }
    return items;
  }
  get template() {
    const $node = this.$host.querySelector(BREADCRUMB_SEPARATOR_QUERY);
    const $clone = $node == null ? void 0 : $node.cloneNode(true);
    $clone == null ? void 0 : $clone.removeAttribute("slot");
    return ($clone == null ? void 0 : $clone.outerHTML) || this.separator;
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
    this.tick = Math.random();
  }
  connectedCallback() {
    this.initialize();
  }
  disconnectedCallback() {
    this.terminate();
  }
  render() {
    const template = this.template;
    return html`${attributes(this, [{
      "aria-label": "breadcrumb"
    }])}
        ${this.items.map((item) => {
      switch (item.type) {
        case "item": {
          return html`<div key=${item.key} part="item">
                  <slot name=${item.slot} />
                </div>`;
        }
        case "expander": {
          return html`<div aria-disabled="false" aria-label=${this.expanderText} key=${item.key} part="expander" role="button" tabindex=${0} onClick=${() => this.expand = true} onKeyDown=${(event) => event.key.match(/Enter| /) && (this.expand = true)}>
                  <slot name="expander">
                    <svg focusable="false" viewbox="0 0 24 24" aria-hidden="true">
                      <path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                    </svg>
                  </slot>
                </div>`;
        }
        case "separator": {
          return html`<div key=${item.key} aria-hidden="true" part="separator" .innerHTML=${template} />`;
        }
      }
    })}
      `;
  }
};
Breadcrumb.tag = "plus-breadcrumb";
Breadcrumb.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], Breadcrumb.prototype, "block", 2);
__decorateClass([
  Property({
    type: 512
  })
], Breadcrumb.prototype, "expanderText", 2);
__decorateClass([
  Property({
    type: 128
  })
], Breadcrumb.prototype, "offset", 2);
__decorateClass([
  Property({
    type: 128
  })
], Breadcrumb.prototype, "max", 2);
__decorateClass([
  Property({
    type: 512
  })
], Breadcrumb.prototype, "separator", 2);
__decorateClass([
  State()
], Breadcrumb.prototype, "expand", 2);
__decorateClass([
  State()
], Breadcrumb.prototype, "tick", 2);
__decorateClass([
  QueryAll("[part=separator]")
], Breadcrumb.prototype, "$separators", 2);
__decorateClass([
  Bind()
], Breadcrumb.prototype, "onChange", 1);
Breadcrumb = __decorateClass([
  Element()
], Breadcrumb);
export {
  Breadcrumb
};
