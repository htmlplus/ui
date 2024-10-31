import { P as PlusCore, h as html, d as attributes, a as Property, c as Event, Q as Query, e as State, M as Method, B as Bind, E as Element } from "../core/index.js";
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
let Browse = class extends PlusCore {
  get attributes() {
    const attributes2 = {};
    if (this.disabled) return attributes2;
    attributes2["onClick"] = this.onClick;
    if (!this.droppable) return attributes2;
    attributes2["dragging"] = this.dragging;
    attributes2["onDragLeave"] = this.onDragLeave;
    attributes2["onDragOver"] = this.onDragOver;
    attributes2["onDrop"] = this.onDrop;
    return attributes2;
  }
  get types() {
    return (this.accept || "").split(",").map((type) => type.trim());
  }
  browse() {
    this.$input.click();
  }
  do(files) {
    const detail = {
      error: void 0,
      files: []
    };
    if (this.min > files.length) detail.error = {
      type: "min",
      message: `A minimum of "${this.min}" file(s) must be selected`
    };
    if (this.max < files.length) detail.error = {
      type: "max",
      message: `A maximum of "${this.max}" file(s) must be selected.`
    };
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
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
      if (this.minSize > value.file.size) value.errors.push({
        type: "min",
        message: `The minimum file size allowed is "${this.minSize}" bytes.`
      });
      if (this.maxSize < value.file.size) value.errors.push({
        type: "min",
        message: `The maximum file size allowed is "${this.maxSize}" bytes.`
      });
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
    const files = event.target.files;
    if (!files.length) return;
    this.do(files);
  }
  onDragLeave() {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
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
    this.do(event.dataTransfer.files);
  }
  render() {
    return html`${attributes(this, [this.attributes])}
        <slot />
        <input accept=${this.accept} multiple=${this.multiple} type="file" onChange=${this.onChange} onClick=${(event) => event.stopPropagation()} />
      `;
  }
};
Browse.tag = "plus-browse";
Browse.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    type: 512
  })
], Browse.prototype, "accept", 2);
__decorateClass([
  Property({
    reflect: true,
    type: 4
  })
], Browse.prototype, "disabled", 2);
__decorateClass([
  Property({
    type: 4
  })
], Browse.prototype, "droppable", 2);
__decorateClass([
  Property({
    type: 128
  })
], Browse.prototype, "min", 2);
__decorateClass([
  Property({
    type: 128
  })
], Browse.prototype, "max", 2);
__decorateClass([
  Property({
    type: 128
  })
], Browse.prototype, "minSize", 2);
__decorateClass([
  Property({
    type: 128
  })
], Browse.prototype, "maxSize", 2);
__decorateClass([
  Property({
    type: 4
  })
], Browse.prototype, "multiple", 2);
__decorateClass([
  Event()
], Browse.prototype, "plusChange", 2);
__decorateClass([
  Event()
], Browse.prototype, "plusError", 2);
__decorateClass([
  Event()
], Browse.prototype, "plusSuccess", 2);
__decorateClass([
  Query("input")
], Browse.prototype, "$input", 2);
__decorateClass([
  State()
], Browse.prototype, "dragging", 2);
__decorateClass([
  Method()
], Browse.prototype, "browse", 1);
__decorateClass([
  Bind()
], Browse.prototype, "onClick", 1);
__decorateClass([
  Bind()
], Browse.prototype, "onChange", 1);
__decorateClass([
  Bind()
], Browse.prototype, "onDragLeave", 1);
__decorateClass([
  Bind()
], Browse.prototype, "onDragOver", 1);
__decorateClass([
  Bind()
], Browse.prototype, "onDrop", 1);
Browse = __decorateClass([
  Element()
], Browse);
export {
  Browse
};
