import { P as PlusCore, h as html, a as Property, Q as Query, b as Element } from "./core/index.js";
const STYLE_IMPORTED = ":host,\n:host::before,\n:host::after {\n  box-sizing: border-box;\n}\n\n:host *,\n:host *::before,\n:host *::after {\n  box-sizing: border-box;\n}\n\n:host([hidden]) {\n  display: none !important;\n}\n\n:host {\n  --plus-grid--gutter-x: 0;\n  --plus-grid--gutter-y: 0;\n}\n\n:host {\n  display: block;\n}\n\ndiv {\n  display: flex;\n  height: 100%;\n  width: calc(var(--plus-grid--gutter-x) + 100%);\n  margin-left: calc(var(--plus-grid--gutter-x) * -1);\n  margin-bottom: calc(var(--plus-grid--gutter-y) * -1);\n}\n\n::slotted(*) {\n  padding-left: var(--plus-grid--gutter-x);\n  padding-bottom: var(--plus-grid--gutter-y);\n}\n\n[vertical] {\n  flex-direction: column;\n}\n\n[reverse] {\n  flex-direction: row-reverse;\n}\n\n[vertical][reverse] {\n  flex-direction: column-reverse;\n}\n\n[gutter-x=xs],\n[gutter=xs]:not([gutter-x]) {\n  --plus-grid--gutter-x: 0.25em;\n}\n\n[gutter-y=xs],\n[gutter=xs]:not([gutter-y]) {\n  --plus-grid--gutter-y: 0.25em;\n}\n\n[gutter-x=sm],\n[gutter=sm]:not([gutter-x]) {\n  --plus-grid--gutter-x: 0.5em;\n}\n\n[gutter-y=sm],\n[gutter=sm]:not([gutter-y]) {\n  --plus-grid--gutter-y: 0.5em;\n}\n\n[gutter-x=md],\n[gutter=md]:not([gutter-x]) {\n  --plus-grid--gutter-x: 1em;\n}\n\n[gutter-y=md],\n[gutter=md]:not([gutter-y]) {\n  --plus-grid--gutter-y: 1em;\n}\n\n[gutter-x=lg],\n[gutter=lg]:not([gutter-x]) {\n  --plus-grid--gutter-x: 1.75em;\n}\n\n[gutter-y=lg],\n[gutter=lg]:not([gutter-y]) {\n  --plus-grid--gutter-y: 1.75em;\n}\n\n[gutter-x=xl],\n[gutter=xl]:not([gutter-x]) {\n  --plus-grid--gutter-x: 4em;\n}\n\n[gutter-y=xl],\n[gutter=xl]:not([gutter-y]) {\n  --plus-grid--gutter-y: 4em;\n}\n\n[gutter-x=xxl],\n[gutter=xxl]:not([gutter-x]) {\n  --plus-grid--gutter-x: 8em;\n}\n\n[gutter-y=xxl],\n[gutter=xxl]:not([gutter-y]) {\n  --plus-grid--gutter-y: 8em;\n}\n\n[align-content=start] {\n  align-content: flex-start;\n}\n\n[align-content=center] {\n  align-content: center;\n}\n\n[align-content=end] {\n  align-content: flex-end;\n}\n\n[align-content=stretch] {\n  align-content: stretch;\n}\n\n[align-content=between] {\n  align-content: space-between;\n}\n\n[align-content=around] {\n  align-content: space-around;\n}\n\n[align-content=evenly] {\n  align-content: space-evenly;\n}\n\n[align-items=start] {\n  align-items: flex-start;\n}\n\n[align-items=center] {\n  align-items: center;\n}\n\n[align-items=end] {\n  align-items: flex-end;\n}\n\n[align-items=stretch] {\n  align-items: stretch;\n}\n\n[justify-content=start] {\n  justify-content: flex-start;\n}\n\n[justify-content=center] {\n  justify-content: center;\n}\n\n[justify-content=end] {\n  justify-content: flex-end;\n}\n\n[justify-content=between] {\n  justify-content: space-between;\n}\n\n[justify-content=around] {\n  justify-content: space-around;\n}\n\n[justify-content=evenly] {\n  justify-content: space-evenly;\n}\n\n[wrap=on] {\n  flex-wrap: wrap;\n}\n\n[wrap=off] {\n  flex-wrap: nowrap;\n}\n\n[wrap=reverse] {\n  flex-wrap: wrap-reverse;\n}\n\n[align-content-xs=start] {\n  align-content: flex-start;\n}\n\n[align-content-xs=center] {\n  align-content: center;\n}\n\n[align-content-xs=end] {\n  align-content: flex-end;\n}\n\n[align-content-xs=stretch] {\n  align-content: stretch;\n}\n\n[align-content-xs=between] {\n  align-content: space-between;\n}\n\n[align-content-xs=around] {\n  align-content: space-around;\n}\n\n[align-content-xs=evenly] {\n  align-content: space-evenly;\n}\n\n[align-items-xs=start] {\n  align-items: flex-start;\n}\n\n[align-items-xs=center] {\n  align-items: center;\n}\n\n[align-items-xs=end] {\n  align-items: flex-end;\n}\n\n[align-items-xs=stretch] {\n  align-items: stretch;\n}\n\n[justify-content-xs=start] {\n  justify-content: flex-start;\n}\n\n[justify-content-xs=center] {\n  justify-content: center;\n}\n\n[justify-content-xs=end] {\n  justify-content: flex-end;\n}\n\n[justify-content-xs=between] {\n  justify-content: space-between;\n}\n\n[justify-content-xs=around] {\n  justify-content: space-around;\n}\n\n[justify-content-xs=evenly] {\n  justify-content: space-evenly;\n}\n\n[wrap-xs=on] {\n  flex-wrap: wrap;\n}\n\n[wrap-xs=off] {\n  flex-wrap: nowrap;\n}\n\n[wrap-xs=reverse] {\n  flex-wrap: wrap-reverse;\n}\n\n@media (min-width: 576px) {\n  [align-content-sm=start] {\n    align-content: flex-start;\n  }\n  [align-content-sm=center] {\n    align-content: center;\n  }\n  [align-content-sm=end] {\n    align-content: flex-end;\n  }\n  [align-content-sm=stretch] {\n    align-content: stretch;\n  }\n  [align-content-sm=between] {\n    align-content: space-between;\n  }\n  [align-content-sm=around] {\n    align-content: space-around;\n  }\n  [align-content-sm=evenly] {\n    align-content: space-evenly;\n  }\n  [align-items-sm=start] {\n    align-items: flex-start;\n  }\n  [align-items-sm=center] {\n    align-items: center;\n  }\n  [align-items-sm=end] {\n    align-items: flex-end;\n  }\n  [align-items-sm=stretch] {\n    align-items: stretch;\n  }\n  [justify-content-sm=start] {\n    justify-content: flex-start;\n  }\n  [justify-content-sm=center] {\n    justify-content: center;\n  }\n  [justify-content-sm=end] {\n    justify-content: flex-end;\n  }\n  [justify-content-sm=between] {\n    justify-content: space-between;\n  }\n  [justify-content-sm=around] {\n    justify-content: space-around;\n  }\n  [justify-content-sm=evenly] {\n    justify-content: space-evenly;\n  }\n  [wrap-sm=on] {\n    flex-wrap: wrap;\n  }\n  [wrap-sm=off] {\n    flex-wrap: nowrap;\n  }\n  [wrap-sm=reverse] {\n    flex-wrap: wrap-reverse;\n  }\n}\n\n@media (min-width: 768px) {\n  [align-content-md=start] {\n    align-content: flex-start;\n  }\n  [align-content-md=center] {\n    align-content: center;\n  }\n  [align-content-md=end] {\n    align-content: flex-end;\n  }\n  [align-content-md=stretch] {\n    align-content: stretch;\n  }\n  [align-content-md=between] {\n    align-content: space-between;\n  }\n  [align-content-md=around] {\n    align-content: space-around;\n  }\n  [align-content-md=evenly] {\n    align-content: space-evenly;\n  }\n  [align-items-md=start] {\n    align-items: flex-start;\n  }\n  [align-items-md=center] {\n    align-items: center;\n  }\n  [align-items-md=end] {\n    align-items: flex-end;\n  }\n  [align-items-md=stretch] {\n    align-items: stretch;\n  }\n  [justify-content-md=start] {\n    justify-content: flex-start;\n  }\n  [justify-content-md=center] {\n    justify-content: center;\n  }\n  [justify-content-md=end] {\n    justify-content: flex-end;\n  }\n  [justify-content-md=between] {\n    justify-content: space-between;\n  }\n  [justify-content-md=around] {\n    justify-content: space-around;\n  }\n  [justify-content-md=evenly] {\n    justify-content: space-evenly;\n  }\n  [wrap-md=on] {\n    flex-wrap: wrap;\n  }\n  [wrap-md=off] {\n    flex-wrap: nowrap;\n  }\n  [wrap-md=reverse] {\n    flex-wrap: wrap-reverse;\n  }\n}\n\n@media (min-width: 992px) {\n  [align-content-lg=start] {\n    align-content: flex-start;\n  }\n  [align-content-lg=center] {\n    align-content: center;\n  }\n  [align-content-lg=end] {\n    align-content: flex-end;\n  }\n  [align-content-lg=stretch] {\n    align-content: stretch;\n  }\n  [align-content-lg=between] {\n    align-content: space-between;\n  }\n  [align-content-lg=around] {\n    align-content: space-around;\n  }\n  [align-content-lg=evenly] {\n    align-content: space-evenly;\n  }\n  [align-items-lg=start] {\n    align-items: flex-start;\n  }\n  [align-items-lg=center] {\n    align-items: center;\n  }\n  [align-items-lg=end] {\n    align-items: flex-end;\n  }\n  [align-items-lg=stretch] {\n    align-items: stretch;\n  }\n  [justify-content-lg=start] {\n    justify-content: flex-start;\n  }\n  [justify-content-lg=center] {\n    justify-content: center;\n  }\n  [justify-content-lg=end] {\n    justify-content: flex-end;\n  }\n  [justify-content-lg=between] {\n    justify-content: space-between;\n  }\n  [justify-content-lg=around] {\n    justify-content: space-around;\n  }\n  [justify-content-lg=evenly] {\n    justify-content: space-evenly;\n  }\n  [wrap-lg=on] {\n    flex-wrap: wrap;\n  }\n  [wrap-lg=off] {\n    flex-wrap: nowrap;\n  }\n  [wrap-lg=reverse] {\n    flex-wrap: wrap-reverse;\n  }\n}\n\n@media (min-width: 1200px) {\n  [align-content-xl=start] {\n    align-content: flex-start;\n  }\n  [align-content-xl=center] {\n    align-content: center;\n  }\n  [align-content-xl=end] {\n    align-content: flex-end;\n  }\n  [align-content-xl=stretch] {\n    align-content: stretch;\n  }\n  [align-content-xl=between] {\n    align-content: space-between;\n  }\n  [align-content-xl=around] {\n    align-content: space-around;\n  }\n  [align-content-xl=evenly] {\n    align-content: space-evenly;\n  }\n  [align-items-xl=start] {\n    align-items: flex-start;\n  }\n  [align-items-xl=center] {\n    align-items: center;\n  }\n  [align-items-xl=end] {\n    align-items: flex-end;\n  }\n  [align-items-xl=stretch] {\n    align-items: stretch;\n  }\n  [justify-content-xl=start] {\n    justify-content: flex-start;\n  }\n  [justify-content-xl=center] {\n    justify-content: center;\n  }\n  [justify-content-xl=end] {\n    justify-content: flex-end;\n  }\n  [justify-content-xl=between] {\n    justify-content: space-between;\n  }\n  [justify-content-xl=around] {\n    justify-content: space-around;\n  }\n  [justify-content-xl=evenly] {\n    justify-content: space-evenly;\n  }\n  [wrap-xl=on] {\n    flex-wrap: wrap;\n  }\n  [wrap-xl=off] {\n    flex-wrap: nowrap;\n  }\n  [wrap-xl=reverse] {\n    flex-wrap: wrap-reverse;\n  }\n}\n\n@media (min-width: 1400px) {\n  [align-content-xxl=start] {\n    align-content: flex-start;\n  }\n  [align-content-xxl=center] {\n    align-content: center;\n  }\n  [align-content-xxl=end] {\n    align-content: flex-end;\n  }\n  [align-content-xxl=stretch] {\n    align-content: stretch;\n  }\n  [align-content-xxl=between] {\n    align-content: space-between;\n  }\n  [align-content-xxl=around] {\n    align-content: space-around;\n  }\n  [align-content-xxl=evenly] {\n    align-content: space-evenly;\n  }\n  [align-items-xxl=start] {\n    align-items: flex-start;\n  }\n  [align-items-xxl=center] {\n    align-items: center;\n  }\n  [align-items-xxl=end] {\n    align-items: flex-end;\n  }\n  [align-items-xxl=stretch] {\n    align-items: stretch;\n  }\n  [justify-content-xxl=start] {\n    justify-content: flex-start;\n  }\n  [justify-content-xxl=center] {\n    justify-content: center;\n  }\n  [justify-content-xxl=end] {\n    justify-content: flex-end;\n  }\n  [justify-content-xxl=between] {\n    justify-content: space-between;\n  }\n  [justify-content-xxl=around] {\n    justify-content: space-around;\n  }\n  [justify-content-xxl=evenly] {\n    justify-content: space-evenly;\n  }\n  [wrap-xxl=on] {\n    flex-wrap: wrap;\n  }\n  [wrap-xxl=off] {\n    flex-wrap: nowrap;\n  }\n  [wrap-xxl=reverse] {\n    flex-wrap: wrap-reverse;\n  }\n}";
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
let Grid = class extends PlusCore {
  constructor() {
    super(...arguments);
    this.alignContent = "stretch";
    this.alignItems = "stretch";
    this.justifyContent = "start";
    this.wrap = "on";
  }
  // TODO: auto keys detect, support spread attribute <div {...attributes} />
  updatedCallback() {
    const keys = ["alignContent", "alignContentXs", "alignContentSm", "alignContentMd", "alignContentLg", "alignContentXl", "alignContentXxl", "alignItems", "alignItemsXs", "alignItemsSm", "alignItemsMd", "alignItemsLg", "alignItemsXl", "alignItemsXxl", "gutter", "gutterX", "gutterY", "justifyContent", "justifyContentXs", "justifyContentSm", "justifyContentMd", "justifyContentLg", "justifyContentXl", "justifyContentXxl", "reverse", "vertical", "wrap", "wrapXs", "wrapSm", "wrapMd", "wrapLg", "wrapXl", "wrapXxl"];
    for (const key of keys) {
      const name = key.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
      const value = this[key];
      if (value) this.$root.setAttribute(name, value);
      else this.$root.removeAttribute(name);
    }
  }
  render() {
    return html`<div>
        <slot />
      </div>`;
  }
};
Grid.tag = "plus-grid";
Grid.style = STYLE_IMPORTED;
__decorateClass([
  Property({
    type: 8
  })
], Grid.prototype, "alignContent", 2);
__decorateClass([
  Property({
    type: 8
  })
], Grid.prototype, "alignContentXs", 2);
__decorateClass([
  Property({
    type: 8
  })
], Grid.prototype, "alignContentSm", 2);
__decorateClass([
  Property({
    type: 8
  })
], Grid.prototype, "alignContentMd", 2);
__decorateClass([
  Property({
    type: 8
  })
], Grid.prototype, "alignContentLg", 2);
__decorateClass([
  Property({
    type: 8
  })
], Grid.prototype, "alignContentXl", 2);
__decorateClass([
  Property({
    type: 8
  })
], Grid.prototype, "alignContentXxl", 2);
__decorateClass([
  Property({
    type: 8
  })
], Grid.prototype, "alignItems", 2);
__decorateClass([
  Property({
    type: 8
  })
], Grid.prototype, "alignItemsXs", 2);
__decorateClass([
  Property({
    type: 8
  })
], Grid.prototype, "alignItemsSm", 2);
__decorateClass([
  Property({
    type: 8
  })
], Grid.prototype, "alignItemsMd", 2);
__decorateClass([
  Property({
    type: 8
  })
], Grid.prototype, "alignItemsLg", 2);
__decorateClass([
  Property({
    type: 8
  })
], Grid.prototype, "alignItemsXl", 2);
__decorateClass([
  Property({
    type: 8
  })
], Grid.prototype, "alignItemsXxl", 2);
__decorateClass([
  Property({
    type: 264
  })
], Grid.prototype, "gutter", 2);
__decorateClass([
  Property({
    type: 264
  })
], Grid.prototype, "gutterX", 2);
__decorateClass([
  Property({
    type: 264
  })
], Grid.prototype, "gutterY", 2);
__decorateClass([
  Property({
    type: 8
  })
], Grid.prototype, "justifyContent", 2);
__decorateClass([
  Property({
    type: 8
  })
], Grid.prototype, "justifyContentXs", 2);
__decorateClass([
  Property({
    type: 8
  })
], Grid.prototype, "justifyContentSm", 2);
__decorateClass([
  Property({
    type: 8
  })
], Grid.prototype, "justifyContentMd", 2);
__decorateClass([
  Property({
    type: 8
  })
], Grid.prototype, "justifyContentLg", 2);
__decorateClass([
  Property({
    type: 8
  })
], Grid.prototype, "justifyContentXl", 2);
__decorateClass([
  Property({
    type: 8
  })
], Grid.prototype, "justifyContentXxl", 2);
__decorateClass([
  Property({
    type: 2
  })
], Grid.prototype, "reverse", 2);
__decorateClass([
  Property({
    type: 2
  })
], Grid.prototype, "vertical", 2);
__decorateClass([
  Property({
    type: 8
  })
], Grid.prototype, "wrap", 2);
__decorateClass([
  Property({
    type: 8
  })
], Grid.prototype, "wrapXs", 2);
__decorateClass([
  Property({
    type: 8
  })
], Grid.prototype, "wrapSm", 2);
__decorateClass([
  Property({
    type: 8
  })
], Grid.prototype, "wrapMd", 2);
__decorateClass([
  Property({
    type: 8
  })
], Grid.prototype, "wrapLg", 2);
__decorateClass([
  Property({
    type: 8
  })
], Grid.prototype, "wrapXl", 2);
__decorateClass([
  Property({
    type: 8
  })
], Grid.prototype, "wrapXxl", 2);
__decorateClass([
  Query("div")
], Grid.prototype, "$root", 2);
Grid = __decorateClass([
  Element()
], Grid);
export {
  Grid
};
