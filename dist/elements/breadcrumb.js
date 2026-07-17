import { h as QueryAll, P as PlusCore, a as jsx, b as Property, O as Overrides, V as Variant, S as State, c as Element } from "../core/index.js";
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
let PlusBreadcrumb = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.block = false;
    this.expanderText = "Show path";
    this.offset = 1;
    this.max = Infinity;
    this.separator = "";
    this.expand = false;
    this.observer = new MutationObserver(this.forceUpdate);
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
    const $clone = $node?.cloneNode(true);
    $clone?.removeAttribute("slot");
    return $clone?.outerHTML || this.separator;
  }
  initialize() {
    this.observer.observe(this.$host, {
      childList: true
    });
  }
  terminate() {
    this.observer.disconnect();
  }
  connectedCallback() {
    this.initialize();
  }
  disconnectedCallback() {
    this.terminate();
  }
  render() {
    const template = this.template;
    return /* @__PURE__ */ jsx("host", { "aria-label": "breadcrumb", value: this, children: this.items.map((item) => {
      switch (item.type) {
        case "item": {
          return /* @__PURE__ */ jsx("div", { part: "item", children: /* @__PURE__ */ jsx("slot", { name: item.slot }) }, item.key);
        }
        case "expander": {
          return /* @__PURE__ */ jsx("div", { "aria-disabled": "false", "aria-label": this.expanderText, part: "expander", role: "button", tabIndex: 0, onClick: () => {
            this.expand = true;
          }, onKeyDown: (event) => {
            if (event.key.match(/Enter| /)) {
              this.expand = true;
            }
          }, children: /* @__PURE__ */ jsx("slot", { name: "expander", children: /* @__PURE__ */ jsx("svg", { focusable: "false", viewBox: "0 0 24 24", "aria-hidden": "true", children: /* @__PURE__ */ jsx("path", { d: "M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" }) }) }) }, item.key);
        }
        case "separator": {
          return /* @__PURE__ */ jsx("div", { "aria-hidden": "true", part: "separator", dangerouslySetInnerHTML: {
            __html: template
          } }, item.key);
        }
        default:
          return null;
      }
    }) });
  }
};
PlusBreadcrumb.tag = "plus-breadcrumb";
PlusBreadcrumb.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], PlusBreadcrumb.prototype, "block", 2);
__decorateClass([
  Property({
    type: 1024
  })
], PlusBreadcrumb.prototype, "expanderText", 2);
__decorateClass([
  Property({
    type: 256
  })
], PlusBreadcrumb.prototype, "offset", 2);
__decorateClass([
  Property({
    type: 256
  })
], PlusBreadcrumb.prototype, "max", 2);
__decorateClass([
  Property({
    type: 1024
  })
], PlusBreadcrumb.prototype, "separator", 2);
__decorateClass([
  Property({
    type: 1
  }),
  Overrides()
], PlusBreadcrumb.prototype, "overrides", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 1
  }),
  Variant()
], PlusBreadcrumb.prototype, "variant", 2);
__decorateClass([
  State()
], PlusBreadcrumb.prototype, "expand", 2);
__decorateClass([
  QueryAll("[part=separator]")
], PlusBreadcrumb.prototype, "$separators", 2);
PlusBreadcrumb = __decorateClass([
  Element()
], PlusBreadcrumb);
export {
  PlusBreadcrumb
};
