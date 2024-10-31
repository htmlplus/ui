import { P as PlusCore, h as html, a as Property, Q as Query, E as Element } from "../core/index.js";
const STYLE_IMPORTED = ":host,:host::before,:host::after{box-sizing:border-box}:host *,:host *::before,:host *::after{box-sizing:border-box}:host([hidden]){display:none !important}:host{--plus-grid--gutter-x: 0;--plus-grid--gutter-y: 0}:host{display:block}div{display:flex;height:100%;width:calc(var(--plus-grid--gutter-x) + 100%);margin-left:calc(var(--plus-grid--gutter-x)*-1);margin-bottom:calc(var(--plus-grid--gutter-y)*-1)}::slotted(*){padding-left:var(--plus-grid--gutter-x);padding-bottom:var(--plus-grid--gutter-y)}[vertical]{flex-direction:column}[reverse]{flex-direction:row-reverse}[vertical][reverse]{flex-direction:column-reverse}[gutter-x=xs],[gutter=xs]:not([gutter-x]){--plus-grid--gutter-x: 0.25em}[gutter-y=xs],[gutter=xs]:not([gutter-y]){--plus-grid--gutter-y: 0.25em}[gutter-x=sm],[gutter=sm]:not([gutter-x]){--plus-grid--gutter-x: 0.5em}[gutter-y=sm],[gutter=sm]:not([gutter-y]){--plus-grid--gutter-y: 0.5em}[gutter-x=md],[gutter=md]:not([gutter-x]){--plus-grid--gutter-x: 1em}[gutter-y=md],[gutter=md]:not([gutter-y]){--plus-grid--gutter-y: 1em}[gutter-x=lg],[gutter=lg]:not([gutter-x]){--plus-grid--gutter-x: 1.75em}[gutter-y=lg],[gutter=lg]:not([gutter-y]){--plus-grid--gutter-y: 1.75em}[gutter-x=xl],[gutter=xl]:not([gutter-x]){--plus-grid--gutter-x: 4em}[gutter-y=xl],[gutter=xl]:not([gutter-y]){--plus-grid--gutter-y: 4em}[gutter-x=xxl],[gutter=xxl]:not([gutter-x]){--plus-grid--gutter-x: 8em}[gutter-y=xxl],[gutter=xxl]:not([gutter-y]){--plus-grid--gutter-y: 8em}[align-content=start]{align-content:flex-start}[align-content=center]{align-content:center}[align-content=end]{align-content:flex-end}[align-content=stretch]{align-content:stretch}[align-content=between]{align-content:space-between}[align-content=around]{align-content:space-around}[align-content=evenly]{align-content:space-evenly}[align-items=start]{align-items:flex-start}[align-items=center]{align-items:center}[align-items=end]{align-items:flex-end}[align-items=stretch]{align-items:stretch}[justify-content=start]{justify-content:flex-start}[justify-content=center]{justify-content:center}[justify-content=end]{justify-content:flex-end}[justify-content=between]{justify-content:space-between}[justify-content=around]{justify-content:space-around}[justify-content=evenly]{justify-content:space-evenly}[wrap=on]{flex-wrap:wrap}[wrap=off]{flex-wrap:nowrap}[wrap=reverse]{flex-wrap:wrap-reverse}[align-content-xs=start]{align-content:flex-start}[align-content-xs=center]{align-content:center}[align-content-xs=end]{align-content:flex-end}[align-content-xs=stretch]{align-content:stretch}[align-content-xs=between]{align-content:space-between}[align-content-xs=around]{align-content:space-around}[align-content-xs=evenly]{align-content:space-evenly}[align-items-xs=start]{align-items:flex-start}[align-items-xs=center]{align-items:center}[align-items-xs=end]{align-items:flex-end}[align-items-xs=stretch]{align-items:stretch}[justify-content-xs=start]{justify-content:flex-start}[justify-content-xs=center]{justify-content:center}[justify-content-xs=end]{justify-content:flex-end}[justify-content-xs=between]{justify-content:space-between}[justify-content-xs=around]{justify-content:space-around}[justify-content-xs=evenly]{justify-content:space-evenly}[wrap-xs=on]{flex-wrap:wrap}[wrap-xs=off]{flex-wrap:nowrap}[wrap-xs=reverse]{flex-wrap:wrap-reverse}@media(min-width: 576px){[align-content-sm=start]{align-content:flex-start}[align-content-sm=center]{align-content:center}[align-content-sm=end]{align-content:flex-end}[align-content-sm=stretch]{align-content:stretch}[align-content-sm=between]{align-content:space-between}[align-content-sm=around]{align-content:space-around}[align-content-sm=evenly]{align-content:space-evenly}[align-items-sm=start]{align-items:flex-start}[align-items-sm=center]{align-items:center}[align-items-sm=end]{align-items:flex-end}[align-items-sm=stretch]{align-items:stretch}[justify-content-sm=start]{justify-content:flex-start}[justify-content-sm=center]{justify-content:center}[justify-content-sm=end]{justify-content:flex-end}[justify-content-sm=between]{justify-content:space-between}[justify-content-sm=around]{justify-content:space-around}[justify-content-sm=evenly]{justify-content:space-evenly}[wrap-sm=on]{flex-wrap:wrap}[wrap-sm=off]{flex-wrap:nowrap}[wrap-sm=reverse]{flex-wrap:wrap-reverse}}@media(min-width: 768px){[align-content-md=start]{align-content:flex-start}[align-content-md=center]{align-content:center}[align-content-md=end]{align-content:flex-end}[align-content-md=stretch]{align-content:stretch}[align-content-md=between]{align-content:space-between}[align-content-md=around]{align-content:space-around}[align-content-md=evenly]{align-content:space-evenly}[align-items-md=start]{align-items:flex-start}[align-items-md=center]{align-items:center}[align-items-md=end]{align-items:flex-end}[align-items-md=stretch]{align-items:stretch}[justify-content-md=start]{justify-content:flex-start}[justify-content-md=center]{justify-content:center}[justify-content-md=end]{justify-content:flex-end}[justify-content-md=between]{justify-content:space-between}[justify-content-md=around]{justify-content:space-around}[justify-content-md=evenly]{justify-content:space-evenly}[wrap-md=on]{flex-wrap:wrap}[wrap-md=off]{flex-wrap:nowrap}[wrap-md=reverse]{flex-wrap:wrap-reverse}}@media(min-width: 992px){[align-content-lg=start]{align-content:flex-start}[align-content-lg=center]{align-content:center}[align-content-lg=end]{align-content:flex-end}[align-content-lg=stretch]{align-content:stretch}[align-content-lg=between]{align-content:space-between}[align-content-lg=around]{align-content:space-around}[align-content-lg=evenly]{align-content:space-evenly}[align-items-lg=start]{align-items:flex-start}[align-items-lg=center]{align-items:center}[align-items-lg=end]{align-items:flex-end}[align-items-lg=stretch]{align-items:stretch}[justify-content-lg=start]{justify-content:flex-start}[justify-content-lg=center]{justify-content:center}[justify-content-lg=end]{justify-content:flex-end}[justify-content-lg=between]{justify-content:space-between}[justify-content-lg=around]{justify-content:space-around}[justify-content-lg=evenly]{justify-content:space-evenly}[wrap-lg=on]{flex-wrap:wrap}[wrap-lg=off]{flex-wrap:nowrap}[wrap-lg=reverse]{flex-wrap:wrap-reverse}}@media(min-width: 1200px){[align-content-xl=start]{align-content:flex-start}[align-content-xl=center]{align-content:center}[align-content-xl=end]{align-content:flex-end}[align-content-xl=stretch]{align-content:stretch}[align-content-xl=between]{align-content:space-between}[align-content-xl=around]{align-content:space-around}[align-content-xl=evenly]{align-content:space-evenly}[align-items-xl=start]{align-items:flex-start}[align-items-xl=center]{align-items:center}[align-items-xl=end]{align-items:flex-end}[align-items-xl=stretch]{align-items:stretch}[justify-content-xl=start]{justify-content:flex-start}[justify-content-xl=center]{justify-content:center}[justify-content-xl=end]{justify-content:flex-end}[justify-content-xl=between]{justify-content:space-between}[justify-content-xl=around]{justify-content:space-around}[justify-content-xl=evenly]{justify-content:space-evenly}[wrap-xl=on]{flex-wrap:wrap}[wrap-xl=off]{flex-wrap:nowrap}[wrap-xl=reverse]{flex-wrap:wrap-reverse}}@media(min-width: 1400px){[align-content-xxl=start]{align-content:flex-start}[align-content-xxl=center]{align-content:center}[align-content-xxl=end]{align-content:flex-end}[align-content-xxl=stretch]{align-content:stretch}[align-content-xxl=between]{align-content:space-between}[align-content-xxl=around]{align-content:space-around}[align-content-xxl=evenly]{align-content:space-evenly}[align-items-xxl=start]{align-items:flex-start}[align-items-xxl=center]{align-items:center}[align-items-xxl=end]{align-items:flex-end}[align-items-xxl=stretch]{align-items:stretch}[justify-content-xxl=start]{justify-content:flex-start}[justify-content-xxl=center]{justify-content:center}[justify-content-xxl=end]{justify-content:flex-end}[justify-content-xxl=between]{justify-content:space-between}[justify-content-xxl=around]{justify-content:space-around}[justify-content-xxl=evenly]{justify-content:space-evenly}[wrap-xxl=on]{flex-wrap:wrap}[wrap-xxl=off]{flex-wrap:nowrap}[wrap-xxl=reverse]{flex-wrap:wrap-reverse}}";
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
    type: 16
  })
], Grid.prototype, "alignContent", 2);
__decorateClass([
  Property({
    type: 16
  })
], Grid.prototype, "alignContentXs", 2);
__decorateClass([
  Property({
    type: 16
  })
], Grid.prototype, "alignContentSm", 2);
__decorateClass([
  Property({
    type: 16
  })
], Grid.prototype, "alignContentMd", 2);
__decorateClass([
  Property({
    type: 16
  })
], Grid.prototype, "alignContentLg", 2);
__decorateClass([
  Property({
    type: 16
  })
], Grid.prototype, "alignContentXl", 2);
__decorateClass([
  Property({
    type: 16
  })
], Grid.prototype, "alignContentXxl", 2);
__decorateClass([
  Property({
    type: 16
  })
], Grid.prototype, "alignItems", 2);
__decorateClass([
  Property({
    type: 16
  })
], Grid.prototype, "alignItemsXs", 2);
__decorateClass([
  Property({
    type: 16
  })
], Grid.prototype, "alignItemsSm", 2);
__decorateClass([
  Property({
    type: 16
  })
], Grid.prototype, "alignItemsMd", 2);
__decorateClass([
  Property({
    type: 16
  })
], Grid.prototype, "alignItemsLg", 2);
__decorateClass([
  Property({
    type: 16
  })
], Grid.prototype, "alignItemsXl", 2);
__decorateClass([
  Property({
    type: 16
  })
], Grid.prototype, "alignItemsXxl", 2);
__decorateClass([
  Property({
    type: 528
  })
], Grid.prototype, "gutter", 2);
__decorateClass([
  Property({
    type: 528
  })
], Grid.prototype, "gutterX", 2);
__decorateClass([
  Property({
    type: 528
  })
], Grid.prototype, "gutterY", 2);
__decorateClass([
  Property({
    type: 16
  })
], Grid.prototype, "justifyContent", 2);
__decorateClass([
  Property({
    type: 16
  })
], Grid.prototype, "justifyContentXs", 2);
__decorateClass([
  Property({
    type: 16
  })
], Grid.prototype, "justifyContentSm", 2);
__decorateClass([
  Property({
    type: 16
  })
], Grid.prototype, "justifyContentMd", 2);
__decorateClass([
  Property({
    type: 16
  })
], Grid.prototype, "justifyContentLg", 2);
__decorateClass([
  Property({
    type: 16
  })
], Grid.prototype, "justifyContentXl", 2);
__decorateClass([
  Property({
    type: 16
  })
], Grid.prototype, "justifyContentXxl", 2);
__decorateClass([
  Property({
    type: 4
  })
], Grid.prototype, "reverse", 2);
__decorateClass([
  Property({
    type: 4
  })
], Grid.prototype, "vertical", 2);
__decorateClass([
  Property({
    type: 16
  })
], Grid.prototype, "wrap", 2);
__decorateClass([
  Property({
    type: 16
  })
], Grid.prototype, "wrapXs", 2);
__decorateClass([
  Property({
    type: 16
  })
], Grid.prototype, "wrapSm", 2);
__decorateClass([
  Property({
    type: 16
  })
], Grid.prototype, "wrapMd", 2);
__decorateClass([
  Property({
    type: 16
  })
], Grid.prototype, "wrapLg", 2);
__decorateClass([
  Property({
    type: 16
  })
], Grid.prototype, "wrapXl", 2);
__decorateClass([
  Property({
    type: 16
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
