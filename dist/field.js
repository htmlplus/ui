import { r as Slots, P as PlusCore, u as query, h as html, m as classes, a as Property, S as State, B as Bind, b as Element } from "./core/index.js";
const GLOBAL_STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host [list]:not([type=date]):not([type=datetime-local]):not([type=month]):not([type=week]):not([type=time])::-webkit-calendar-picker-indicator{display:none !important}:host ::-moz-focus-inner{padding:0;border-style:none}:host ::-webkit-datetime-edit-fields-wrapper,:host ::-webkit-datetime-edit-text,:host ::-webkit-datetime-edit-minute,:host ::-webkit-datetime-edit-hour-field,:host ::-webkit-datetime-edit-day-field,:host ::-webkit-datetime-edit-month-field,:host ::-webkit-datetime-edit-year-field{padding:0}:host ::-webkit-inner-spin-button{height:auto}:host [type=search]{-webkit-appearance:textfield;outline-offset:-2px}:host ::-webkit-file-upload-button{font:inherit;-webkit-appearance:button}:host ::-webkit-search-decoration{-webkit-appearance:none}:host ::-webkit-color-swatch-wrapper{padding:0}:host ::file-selector-button{font:inherit;-webkit-appearance:button}:host ::-webkit-date-and-time-value{min-width:85px;margin:0}@media(prefers-reduced-motion: reduce){:host *,:host *::file-selector-button,:host *::-moz-range-thumb,:host *::-webkit-file-upload-button,:host *::-webkit-slider-thumb{transition:none}}";
const STYLE_IMPORTED = `:host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}::slotted([type=color]:not(:disabled):not([readonly])){cursor:pointer}::slotted([type=file]){overflow:hidden}::slotted([type=file]:not(:disabled):not([readonly])){cursor:pointer}::slotted(select){margin:0;font-family:inherit;font-size:inherit;line-height:inherit;text-transform:none;word-wrap:normal}::slotted(select:disabled){opacity:1}::slotted(select){--bs-form-select-bg-img: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e");display:block;width:100%;padding:.375rem 2.25rem .375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:var(--bs-body-color);appearance:none;background-color:var(--bs-body-bg);background-image:var(--bs-form-select-bg-img),var(--bs-form-select-bg-icon, none);background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px;border:var(--bs-border-width) solid var(--bs-border-color);border-radius:var(--bs-border-radius);transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){::slotted(select){transition:none}}::slotted(select:focus){border-color:tint-color(#0d6efd, 50%);outline:0;box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}::slotted(select[multiple]),::slotted(select[size]:not([size="1"])){padding-right:.75rem;background-image:none}::slotted(select:disabled){background-color:var(--bs-secondary-bg)}global :host select:-moz-focusring{color:rgba(0,0,0,0);text-shadow:0 0 0 var(--bs-body-color)}:host([size=sm]) ::slotted(select){padding:.25rem 2.25rem .25rem .5rem;font-size:.875rem;border-radius:var(--bs-border-radius-sm)}:host([size=lg]) ::slotted(select){padding:.5rem 2.25rem .5rem 1rem;font-size:1.25rem;border-radius:var(--bs-border-radius-lg)}::slotted(textarea){resize:vertical}:host([size=sm]) ::slotted(textarea){min-height:calc(1.5em + .5rem + 2px)}:host([size=md]) ::slotted(textarea){min-height:calc(1.5em + .75rem + 2px)}:host([size=lg]) ::slotted(textarea){min-height:calc(1.5em + 1rem + 2px)}:host{display:grid;align-items:center;grid-template:"header header . " "before control after" "footer footer footer";grid-template-columns:auto 1fr auto;grid-template-rows:auto auto auto;--plus-field-offset-start: this-offset-start;--plus-field-offset-end: this-offset-end}[part=before]{grid-area:before;display:flex;flex-wrap:nowrap;align-self:stretch;align-items:center}[part=header]{grid-area:header;display:flex;flex-wrap:nowrap;justify-content:space-between}[part=start]{display:flex;flex-wrap:nowrap;align-items:center;position:absolute;top:50%;transform:translate(0, -50%);left:0}[part=label]{grid-area:header;margin-bottom:.5rem}[part=control]{grid-area:control;display:flex;flex-wrap:nowrap;align-items:center;position:relative}[part=input]{flex-grow:1}[part~=details]{grid-area:footer;display:block;margin-top:.25rem;font-size:.875em}[part~=hint]{color:rgba(33,37,41,.75)}[part=end]{display:flex;flex-wrap:nowrap;align-items:center;position:absolute;top:50%;transform:translate(0, -50%);right:0}[part=footer]{grid-area:footer;display:flex;flex-wrap:nowrap;justify-content:space-between}[part=after]{grid-area:after;display:flex;flex-wrap:nowrap;align-self:stretch;align-items:center}::slotted(:where(this-tiles)){border-radius:0}.after,::slotted([slot=before]){border-end-end-radius:0;border-start-end-radius:0}.before,::slotted([slot=after]){border-end-start-radius:0;border-start-start-radius:0}`;
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
let Field = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.size = "md";
  }
  get state() {
    var _a, _b;
    return (_b = (_a = [["error", "invalid"], ["success", "valid"]]) == null ? void 0 : _a.find(([key]) => this.has(key))) == null ? void 0 : _b.pop();
  }
  get details() {
    if (this.has("error")) return "details error";
    if (this.has("success")) return "details success";
    return "details hint";
  }
  get hasHeader() {
    return this.has("label") || this.has("up");
  }
  get hasFooter() {
    return this.has("error") || this.has("success") || this.has("hint") || this.has("down");
  }
  get offset() {
    var _a, _b;
    return {
      start: `${((_a = this.$part("start")) == null ? void 0 : _a.offsetWidth) || 0}px`,
      end: `${((_b = this.$part("end")) == null ? void 0 : _b.offsetWidth) || 0}px`
    };
  }
  get tiles() {
    const children = Array.from(this.$host.children);
    const before = children.map((child, index) => child.getAttribute("slot") == "before" ? index + 1 : 0).filter((index) => !!index);
    const after = children.map((child, index) => child.getAttribute("slot") == "after" ? index + 1 : 0).filter((index) => !!index);
    const result = [...before.slice(1), ...after.slice(0, -1)].map((item) => `:nth-child(${item})`).join(",");
    return result;
  }
  get type() {
    var _a;
    if (this.$input instanceof HTMLInputElement) return this.$input.type;
    return (_a = this.$input) == null ? void 0 : _a.nodeName.toLowerCase();
  }
  $part(key) {
    return query(this, `[part=${key}]`);
  }
  $slot(key) {
    if (key) {
      return query(this, `slot[name=${key}]`);
    } else {
      return query(this, "slot:not([name])");
    }
  }
  has(key) {
    key = key.replace(/-./g, (x) => x[1].toUpperCase());
    const has = !!this[key] || !!this.slots[key] || null;
    return has;
  }
  refresh() {
    this.tick = Math.random();
  }
  onInputChange() {
    this.refresh();
    this.$input = this.$slot().assignedElements().at(0);
  }
  connectedCallback() {
    this.observer = new MutationObserver(this.refresh);
  }
  loadedCallback() {
    var _a;
    (_a = this.observer) == null ? void 0 : _a.observe(this.$host, {
      childList: true
    });
  }
  disconnectedCallback() {
    var _a;
    (_a = this.observer) == null ? void 0 : _a.disconnect();
  }
  render() {
    return html`
        ${this.hasHeader && html`
            ${this.has("up") ? html`<div part="header">
                  <label part="label">
                    <slot name="label">${this.label}</slot>
                  </label>
                  <slot name="up" part="up">${this.up}</slot>
                </div>` : html`<label part="label">
                  <slot name="label">${this.label}</slot>
                </label>`}
          `}
        ${this.has("before") && html`<slot name="before" part="before" />`}
        <slot name="control" part="control" class=${classes(["before", "after"].filter(this.has.bind(this)))}>
          ${this.has("start") && html`<div part="start">
              <slot name="start" />
            </div>`}
          <slot part="input" onSlotChange=${this.onInputChange} />
          ${this.has("end") && html`<div part="end">
              <slot name="end" />
            </div>`}
        </slot>
        ${this.has("after") && html`<slot name="after" part="after" />`}
        ${this.hasFooter && html`
            ${this.has("down") ? html`<div part="footer">
                  <slot name=${this.details} part=${this.details}>
                    ${this[this.details]}
                  </slot>
                  <slot name="down" part="down">${this.down}</slot>
                </div>` : html`<slot name=${this.details} part=${this.details}>
                  ${this[this.details]}
                </slot>`}
          `}
      `;
  }
};
Field.tag = "plus-field";
Field.globalStyle = GLOBAL_STYLE_IMPORTED;
Field.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    reflect: true,
    type: 2
  })
], Field.prototype, "dense", 2);
__decorateClass([
  Property({
    type: 256
  })
], Field.prototype, "down", 2);
__decorateClass([
  Property({
    type: 258
  })
], Field.prototype, "error", 2);
__decorateClass([
  Property({
    type: 256
  })
], Field.prototype, "for", 2);
__decorateClass([
  Property({
    type: 256
  })
], Field.prototype, "hint", 2);
__decorateClass([
  Property({
    type: 256
  })
], Field.prototype, "label", 2);
__decorateClass([
  Property({
    type: 2
  })
], Field.prototype, "loading", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 2
  })
], Field.prototype, "plain", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 8
  })
], Field.prototype, "size", 2);
__decorateClass([
  Property({
    type: 258
  })
], Field.prototype, "success", 2);
__decorateClass([
  Property({
    type: 256
  })
], Field.prototype, "up", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 0
  })
], Field.prototype, "state", 1);
__decorateClass([
  State()
], Field.prototype, "tick", 2);
__decorateClass([
  Slots()
], Field.prototype, "slots", 2);
__decorateClass([
  Bind()
], Field.prototype, "onInputChange", 1);
Field = __decorateClass([
  Element()
], Field);
export {
  Field
};
