import { P as PlusCore, h as html, d as styles, a as Property, b as Element } from "./core/index.js";
const STYLE_IMPORTED = ":host,\n:host::before,\n:host::after {\n  box-sizing: border-box;\n}\n\n:host *,\n:host *::before,\n:host *::after {\n  box-sizing: border-box;\n}\n\n:host([hidden]) {\n  display: none !important;\n}\n\n:host {\n  display: block;\n}\n\n.root {\n  border-radius: inherit;\n  overflow: hidden;\n  position: relative;\n}\n\n::slotted(*) {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n}\n\n::slotted(*) {\n  margin: 0;\n}";
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
    type: 320
  })
], AspectRatio.prototype, "minHeight", 2);
__decorateClass([
  Property({
    type: 320
  })
], AspectRatio.prototype, "maxHeight", 2);
__decorateClass([
  Property({
    type: 320
  })
], AspectRatio.prototype, "value", 2);
AspectRatio = __decorateClass([
  Element()
], AspectRatio);
export {
  AspectRatio
};
