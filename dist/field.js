import { r as Slots, P as PlusCore, u as query, h as html, m as classes, a as Property, S as State, B as Bind, b as Element } from "./core/index.js";
const STYLE_IMPORTED = `:host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}::slotted(input[type=range]){margin:0;font-family:inherit;font-size:inherit;line-height:inherit}global :host input[type=range]::-moz-focus-inner{padding:0;border-style:none}::slotted(input[type=range]){width:100%;height:1.5rem;padding:0;appearance:none;background-color:rgba(0,0,0,0)}::slotted(input[type=range]:focus){outline:0}::slotted(input[type=range]:disabled){pointer-events:none}global :host input[type=range]::-moz-focus-outer{border:0}global :host input[type=range]::-moz-range-track{width:100%;height:.5rem;color:rgba(0,0,0,0);cursor:pointer;background-color:var(--bs-secondary-bg);border-color:rgba(0,0,0,0);border-radius:1rem;box-shadow:var(--bs-box-shadow-inset)}global :host input[type=range]::-webkit-slider-runnable-track{width:100%;height:.5rem;color:rgba(0,0,0,0);cursor:pointer;background-color:var(--bs-secondary-bg);border-color:rgba(0,0,0,0);border-radius:1rem;box-shadow:var(--bs-box-shadow-inset)}global :host input[type=range]::-moz-range-thumb{width:1rem;height:1rem;appearance:none;background-color:#0d6efd;background-image:var(--bs-gradient);border:0;border-radius:1rem;box-shadow:0 .1rem .25rem rgba(0,0,0,.1);transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}global :host input[type=range]::-moz-range-thumb:active{background-color:#b6d4fe;background-image:var(--bs-gradient)}global :host input[type=range]:focus::-moz-range-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}global :host input[type=range]:disabled::-moz-range-thumb{background-color:var(--bs-secondary-color)}@media(prefers-reduced-motion: reduce){global :host input[type=range]::-moz-range-thumb{transition:none}}global :host input[type=range]::-webkit-slider-thumb{width:1rem;height:1rem;margin-top:-0.25rem;appearance:none;background-color:#0d6efd;background-image:var(--bs-gradient);border:0;border-radius:1rem;box-shadow:0 .1rem .25rem rgba(0,0,0,.1);transition:background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out}global :host input[type=range]::-webkit-slider-thumb:active{background-color:#b6d4fe;background-image:var(--bs-gradient)}global :host input[type=range]:focus::-webkit-slider-thumb{box-shadow:0 0 0 1px #fff,0 0 0 .25rem rgba(13,110,253,.25)}global :host input[type=range]:disabled::-webkit-slider-thumb{background-color:var(--bs-secondary-color)}@media(prefers-reduced-motion: reduce){global :host input[type=range]::-webkit-slider-thumb{transition:none}}::slotted(select){margin:0;font-family:inherit;font-size:inherit;line-height:inherit;text-transform:none;word-wrap:normal}::slotted(select:disabled){opacity:1}::slotted(select){display:block;width:100%;padding:.375rem 2.25rem .375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:var(--bs-body-color);appearance:none;background-color:var(--bs-body-bg);background-image:var(--bs-form-select-bg-img),var(--bs-form-select-bg-icon, none);background-repeat:no-repeat;background-position:right .75rem center;background-size:16px 12px;border:var(--bs-border-width) solid var(--bs-border-color);border-radius:var(--bs-border-radius);box-shadow:var(--bs-box-shadow-inset);transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){::slotted(select){transition:none}}::slotted(select:focus){border-color:#86b7fe;outline:0;box-shadow:var(--bs-box-shadow-inset),0 0 0 .25rem rgba(13,110,253,.25)}::slotted(select[multiple]),::slotted(select[size]:not([size="1"])){padding-right:.75rem;background-image:none}::slotted(select:disabled){background-color:var(--bs-secondary-bg)}global :host select:-moz-focusring{color:rgba(0,0,0,0);text-shadow:0 0 0 var(--bs-body-color)}:host([size=sm]) ::slotted(select){padding:.25rem 2.25rem .25rem .5rem;font-size:.875rem;border-radius:var(--bs-border-radius-sm)}:host([size=lg]) ::slotted(select){padding:.5rem 2.25rem .5rem 1rem;font-size:1.25rem;border-radius:var(--bs-border-radius-lg)}@media(prefers-color-scheme: light){::slotted(select){background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e")}}@media(prefers-color-scheme: dark){::slotted(select){background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23dee2e6' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m2 5 6 6 6-6'/%3e%3c/svg%3e")}}::slotted(textarea){margin:0;font-family:inherit;font-size:inherit;line-height:inherit;resize:vertical}global :host input[type=range]::-moz-focus-inner{padding:0;border-style:none}::slotted(textarea){display:block;width:100%;padding:.375rem .75rem;font-size:1rem;font-weight:400;line-height:1.5;color:var(--bs-body-color);appearance:none;background-color:var(--bs-body-bg);background-clip:padding-box;border:var(--bs-border-width) solid var(--bs-border-color);border-radius:var(--bs-border-radius);box-shadow:var(--bs-box-shadow-inset);transition:border-color .15s ease-in-out,box-shadow .15s ease-in-out}@media(prefers-reduced-motion: reduce){::slotted(textarea){transition:none}}::slotted(textarea:focus){color:var(--bs-body-color);background-color:var(--bs-body-bg);border-color:#86b7fe;outline:0;box-shadow:var(--bs-box-shadow-inset),0 0 0 .25rem rgba(13,110,253,.25)}::slotted(textarea)::placeholder{color:var(--bs-secondary-color);opacity:1}::slotted(textarea:disabled){background-color:var(--bs-secondary-bg);opacity:1}:host([size=sm]) ::slotted(textarea){padding:.25rem .5rem;font-size:.875rem;border-radius:var(--bs-border-radius-sm);min-height:add(1.5em, add(0.5rem, calc(var(--bs-border-width) * 2), false))}:host([size=md]) ::slotted(textarea){min-height:add(1.5em, add(0.75rem, calc(var(--bs-border-width) * 2), false))}:host([size=lg]) ::slotted(textarea){padding:.5rem 1rem;font-size:1.25rem;border-radius:var(--bs-border-radius-lg);min-height:add(1.5em, add(1rem, calc(var(--bs-border-width) * 2), false))}:host{display:grid;align-items:center;grid-template:"header header . " "before control after" "footer footer footer";grid-template-columns:auto 1fr auto;grid-template-rows:auto auto auto;--plus-field-offset-start: this-offset-start;--plus-field-offset-end: this-offset-end}[part=before]{grid-area:before;display:flex;flex-wrap:nowrap;align-self:stretch;align-items:center}[part=header]{grid-area:header;display:flex;flex-wrap:nowrap;justify-content:space-between}[part=start]{display:flex;flex-wrap:nowrap;align-items:center;position:absolute;top:50%;transform:translate(0, -50%);left:0}[part=label]{grid-area:header;margin-bottom:.5rem}[part=control]{grid-area:control;display:flex;flex-wrap:nowrap;align-items:center;position:relative}[part=input]{flex-grow:1}[part~=details]{grid-area:footer;display:block;margin-top:.25rem;font-size:.875em}[part~=hint]{color:rgba(33,37,41,.75)}[part=end]{display:flex;flex-wrap:nowrap;align-items:center;position:absolute;top:50%;transform:translate(0, -50%);right:0}[part=footer]{grid-area:footer;display:flex;flex-wrap:nowrap;justify-content:space-between}[part=after]{grid-area:after;display:flex;flex-wrap:nowrap;align-self:stretch;align-items:center}::slotted(:where(this-tiles)){border-radius:0}.after,::slotted([slot=before]){border-end-end-radius:0;border-start-end-radius:0}.before,::slotted([slot=after]){border-end-start-radius:0;border-start-start-radius:0}`;
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
