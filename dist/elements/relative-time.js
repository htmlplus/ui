import { P as PlusCore, h as html, c as Property, V as Variant, O as Overrides, S as State, d as Element } from "../core/index.js";
const RELATIVE_TIME_UNITS = [
  {
    name: "second",
    value: 1e3
  },
  {
    name: "minute",
    value: 60 * 1e3
  },
  {
    name: "hour",
    value: 60 * 60 * 1e3
  },
  {
    name: "day",
    value: 24 * 60 * 60 * 1e3
  },
  {
    name: "week",
    value: 7 * 24 * 60 * 60 * 1e3
  },
  {
    name: "month",
    value: 30 * 24 * 60 * 60 * 1e3
  },
  {
    name: "year",
    value: 365 * 24 * 60 * 60 * 1e3
  }
];
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
let RelativeTime = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.format = "long";
    this.numeric = "auto";
    this.sync = false;
    this.value = /* @__PURE__ */ new Date();
    this.parts = [];
  }
  get isValid() {
    return this.parsed instanceof Date;
  }
  get lang() {
    return `${this.$host.lang || window.document.documentElement.lang || window.navigator.language}`.toLowerCase();
  }
  get parsed() {
    return new Date(this.value);
  }
  refresh() {
    clearTimeout(this.timeout);
    if (!this.isValid) return;
    const difference = this.parsed.getTime() - Date.now();
    const unit = RELATIVE_TIME_UNITS.findLast((unit2, index) => {
      return Math.floor(Math.abs(difference) / unit2.value) || !index;
    });
    const formatter = new Intl.RelativeTimeFormat(this.lang, {
      numeric: this.numeric,
      style: this.format
    });
    this.parts = formatter.formatToParts(Math.ceil(difference / unit.value), unit.name);
    if (!this.sync) return;
    const interval = (difference > 0 ? 0 : unit.value) + difference % unit.value;
    this.timeout = window.setTimeout(() => {
      this.forceUpdate();
    }, interval);
  }
  disconnectedCallback() {
    clearTimeout(this.timeout);
  }
  updateCallback() {
    this.refresh();
  }
  render() {
    if (!this.isValid || !this.parts.length) return "Invalid date";
    return html`<time dateTime=${this.parsed.toISOString()}>
				${this.parts.map((part) => html`<span part=${part.type}>${part.value}</span>`)}
			</time>`;
  }
};
RelativeTime.tag = "plus-relative-time";
__decorateClass([
  Property({
    type: 16
  })
], RelativeTime.prototype, "format", 2);
__decorateClass([
  Property({
    type: 16
  })
], RelativeTime.prototype, "numeric", 2);
__decorateClass([
  Property({
    type: 4
  })
], RelativeTime.prototype, "sync", 2);
__decorateClass([
  Property({
    type: 520
  })
], RelativeTime.prototype, "value", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 0
  }),
  Variant()
], RelativeTime.prototype, "variant", 2);
__decorateClass([
  Property({
    type: 0
  }),
  Overrides()
], RelativeTime.prototype, "overrides", 2);
__decorateClass([
  State()
], RelativeTime.prototype, "parts", 2);
RelativeTime = __decorateClass([
  Element()
], RelativeTime);
export {
  RelativeTime
};
