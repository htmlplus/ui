import { Q as Query, P as PlusCore, j as jsxs, b as jsx, c as Property, O as Overrides, V as Variant, e as Event, S as State, M as Method, B as Bind, d as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{cursor:pointer}input[type=file]{opacity:0;width:0px;height:0px;overflow:hidden}:host([disabled]){opacity:.5}";
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
let PlusBrowse = class extends PlusCore {
  get attributes() {
    const attributes = {};
    if (this.disabled) return attributes;
    attributes.onClick = this.onClick;
    if (!this.droppable) return attributes;
    attributes.dragging = this.dragging;
    attributes.onDragLeave = this.onDragLeave;
    attributes.onDragOver = this.onDragOver;
    attributes.onDrop = this.onDrop;
    return attributes;
  }
  get types() {
    return (this.accept || "").split(",").map((type) => type.trim());
  }
  browse() {
    this.$input.click();
  }
  do(files) {
    const length = files?.length ?? 0;
    const detail = {
      files: []
    };
    if (this.min !== void 0 && this.min > length) {
      detail.error = {
        type: "min",
        message: `A minimum of "${this.min}" file(s) must be selected`
      };
    }
    if (this.max !== void 0 && this.max < length) {
      detail.error = {
        type: "max",
        message: `A maximum of "${this.max}" file(s) must be selected.`
      };
    }
    for (let i = 0; i < length; i++) {
      const file = files?.[i];
      if (!file) continue;
      const value = {
        errors: [],
        file
      };
      for (const type of this.types) {
        const isMime = /\//.exec(type);
        const isPattern = /\/*/.exec(type);
        if (!isMime && value.file.name.endsWith(type)) break;
        if (isMime && !isPattern && value.file.type === type) break;
        if (isMime && isPattern && value.file.type.startsWith(type.slice(0, -1))) break;
        value.errors.push({
          type: "accept",
          message: `Only file(s) with the extensions "${this.accept}" are accepted.`
        });
      }
      if (this.minSize !== void 0 && this.minSize > value.file.size) {
        value.errors.push({
          type: "min",
          message: `The minimum file size allowed is "${this.minSize}" bytes.`
        });
      }
      if (this.maxSize !== void 0 && this.maxSize < value.file.size) {
        value.errors.push({
          type: "min",
          message: `The maximum file size allowed is "${this.maxSize}" bytes.`
        });
      }
      detail.files.push(value);
    }
    const error = detail.error || detail.files.some((file) => file.errors.length);
    const filtered = detail.files.filter((file) => !error || file.errors.length);
    const data = Object.assign({}, detail, {
      files: filtered
    });
    error ? this.plusError(data) : this.plusSuccess(data);
    this.plusChange(detail);
  }
  onClick() {
    this.$input.click();
  }
  onChange(event) {
    const target = event.target;
    const files = target.files;
    if (!files || !files.length) return;
    this.do(files);
  }
  onDragLeave() {
    clearTimeout(this.timeout);
    this.timeout = window.setTimeout(() => {
      this.dragging = false;
    }, 50);
  }
  onDragOver(event) {
    clearTimeout(this.timeout);
    event.preventDefault();
    this.dragging = true;
  }
  onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    this.dragging = false;
    this.do(event.dataTransfer?.files);
  }
  render() {
    return /* @__PURE__ */ jsxs("host", { value: this, ...this.attributes, children: [
      /* @__PURE__ */ jsx("slot", {}),
      /* @__PURE__ */ jsx("input", { accept: this.accept, multiple: this.multiple, type: "file", onChange: this.onChange, onClick: (event) => event.stopPropagation() })
    ] });
  }
};
PlusBrowse.tag = "plus-browse";
PlusBrowse.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    type: 512
  })
], PlusBrowse.prototype, "accept", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], PlusBrowse.prototype, "disabled", 2);
__decorateClass([
  Property({
    type: 4
  })
], PlusBrowse.prototype, "droppable", 2);
__decorateClass([
  Property({
    type: 128
  })
], PlusBrowse.prototype, "min", 2);
__decorateClass([
  Property({
    type: 128
  })
], PlusBrowse.prototype, "max", 2);
__decorateClass([
  Property({
    type: 128
  })
], PlusBrowse.prototype, "minSize", 2);
__decorateClass([
  Property({
    type: 128
  })
], PlusBrowse.prototype, "maxSize", 2);
__decorateClass([
  Property({
    type: 4
  })
], PlusBrowse.prototype, "multiple", 2);
__decorateClass([
  Property({
    type: 0
  }),
  Overrides()
], PlusBrowse.prototype, "overrides", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 0
  }),
  Variant()
], PlusBrowse.prototype, "variant", 2);
__decorateClass([
  Event()
], PlusBrowse.prototype, "plusChange", 2);
__decorateClass([
  Event()
], PlusBrowse.prototype, "plusError", 2);
__decorateClass([
  Event()
], PlusBrowse.prototype, "plusSuccess", 2);
__decorateClass([
  Query("input")
], PlusBrowse.prototype, "$input", 2);
__decorateClass([
  State()
], PlusBrowse.prototype, "dragging", 2);
__decorateClass([
  Method()
], PlusBrowse.prototype, "browse", 1);
__decorateClass([
  Bind()
], PlusBrowse.prototype, "onClick", 1);
__decorateClass([
  Bind()
], PlusBrowse.prototype, "onChange", 1);
__decorateClass([
  Bind()
], PlusBrowse.prototype, "onDragLeave", 1);
__decorateClass([
  Bind()
], PlusBrowse.prototype, "onDragOver", 1);
__decorateClass([
  Bind()
], PlusBrowse.prototype, "onDrop", 1);
PlusBrowse = __decorateClass([
  Element()
], PlusBrowse);
export {
  PlusBrowse
};
