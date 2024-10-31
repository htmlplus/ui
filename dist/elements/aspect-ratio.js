import { P as PlusCore, h as html, s as styles, a as Property, E as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{display:block}.root{border-radius:inherit;overflow:hidden;position:relative}::slotted(*){position:absolute;inset:0;width:100%;height:100%;box-sizing:border-box}::slotted(*){margin:0}";
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
let AspectRatio = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.minHeight = void 0;
    this.maxHeight = void 0;
    this.value = 1;
  }
  get ratio() {
    if (typeof this.value === "number") return this.value;
    let [valueA, valueB] = `${this.value}`.split("/").map((item) => isNaN(item) ? NaN : parseFloat(item));
    valueB = valueB ?? 1;
    if (!isNaN(valueA + valueB)) return valueA / valueB;
  }
  get style() {
    const ratio = this.ratio;
    if (!ratio) return;
    const minHeight = isNaN(this.minHeight) ? this.minHeight : `${this.minHeight}px`;
    const maxHeight = isNaN(this.maxHeight) ? this.maxHeight : `${this.maxHeight}px`;
    const paddingTop = minHeight || maxHeight ? `clamp(${minHeight || 0}, ${100 / ratio}%, ${maxHeight || "9999px"})` : `${100 / ratio}%`;
    return {
      paddingTop
    };
  }
  render() {
    return html`<div class="root" style=${styles(this.style)}>
        <slot />
      </div>`;
  }
};
AspectRatio.tag = "plus-aspect-ratio";
AspectRatio.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    type: 640
  })
], AspectRatio.prototype, "minHeight", 2);
__decorateClass([
  Property({
    type: 640
  })
], AspectRatio.prototype, "maxHeight", 2);
__decorateClass([
  Property({
    type: 640
  })
], AspectRatio.prototype, "value", 2);
AspectRatio = __decorateClass([
  Element()
], AspectRatio);
export {
  AspectRatio
};
