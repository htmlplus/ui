import { _ as __decorate, p as query, u as uhtml, P as Property, a as Element } from './core/index.js';

var css_248z = "*,:after,:before{box-sizing:border-box}:host,:host:after,:host:before{box-sizing:border-box}:host([hidden]:not([hidden=false])){display:none}:host{--plus-grid--gutter-x:0;--plus-grid--gutter-y:0}:host{display:block}div{display:flex;height:100%;margin-bottom:calc(var(--plus-grid--gutter-y)*-1);margin-left:calc(var(--plus-grid--gutter-x)*-1);width:calc(var(--plus-grid--gutter-x) + 100%)}::slotted(*){padding-bottom:var(--plus-grid--gutter-y);padding-left:var(--plus-grid--gutter-x)}[vertical]:not([vertical=false]){flex-direction:column}[reverse]:not([reverse=false]){flex-direction:row-reverse}[vertical]:not([vertical=false])[reverse]:not([reverse=false]){flex-direction:column-reverse}[gutter-x=xs],[gutter=xs]:not([gutter-x]){--plus-grid--gutter-x:0.25em}[gutter-y=xs],[gutter=xs]:not([gutter-y]){--plus-grid--gutter-y:0.25em}[gutter-x=sm],[gutter=sm]:not([gutter-x]){--plus-grid--gutter-x:0.5em}[gutter-y=sm],[gutter=sm]:not([gutter-y]){--plus-grid--gutter-y:0.5em}[gutter-x=md],[gutter=md]:not([gutter-x]){--plus-grid--gutter-x:1em}[gutter-y=md],[gutter=md]:not([gutter-y]){--plus-grid--gutter-y:1em}[gutter-x=lg],[gutter=lg]:not([gutter-x]){--plus-grid--gutter-x:1.75em}[gutter-y=lg],[gutter=lg]:not([gutter-y]){--plus-grid--gutter-y:1.75em}[gutter-x=xl],[gutter=xl]:not([gutter-x]){--plus-grid--gutter-x:4em}[gutter-y=xl],[gutter=xl]:not([gutter-y]){--plus-grid--gutter-y:4em}[gutter-x=xxl],[gutter=xxl]:not([gutter-x]){--plus-grid--gutter-x:8em}[gutter-y=xxl],[gutter=xxl]:not([gutter-y]){--plus-grid--gutter-y:8em}[align-content=start]{align-content:flex-start}[align-content=center]{align-content:center}[align-content=end]{align-content:flex-end}[align-content=stretch]{align-content:stretch}[align-content=between]{align-content:space-between}[align-content=around]{align-content:space-around}[align-content=evenly]{align-content:space-evenly}[align-items=start]{align-items:flex-start}[align-items=center]{align-items:center}[align-items=end]{align-items:flex-end}[align-items=stretch]{align-items:stretch}[justify-content=start]{justify-content:flex-start}[justify-content=center]{justify-content:center}[justify-content=end]{justify-content:flex-end}[justify-content=between]{justify-content:space-between}[justify-content=around]{justify-content:space-around}[justify-content=evenly]{justify-content:space-evenly}[wrap=on]{flex-wrap:wrap}[wrap=off]{flex-wrap:nowrap}[wrap=reverse]{flex-wrap:wrap-reverse}[align-content-xs=start]{align-content:flex-start}[align-content-xs=center]{align-content:center}[align-content-xs=end]{align-content:flex-end}[align-content-xs=stretch]{align-content:stretch}[align-content-xs=between]{align-content:space-between}[align-content-xs=around]{align-content:space-around}[align-content-xs=evenly]{align-content:space-evenly}[align-items-xs=start]{align-items:flex-start}[align-items-xs=center]{align-items:center}[align-items-xs=end]{align-items:flex-end}[align-items-xs=stretch]{align-items:stretch}[justify-content-xs=start]{justify-content:flex-start}[justify-content-xs=center]{justify-content:center}[justify-content-xs=end]{justify-content:flex-end}[justify-content-xs=between]{justify-content:space-between}[justify-content-xs=around]{justify-content:space-around}[justify-content-xs=evenly]{justify-content:space-evenly}[wrap-xs=on]{flex-wrap:wrap}[wrap-xs=off]{flex-wrap:nowrap}[wrap-xs=reverse]{flex-wrap:wrap-reverse}@media (min-width:576px){[align-content-sm=start]{align-content:flex-start}[align-content-sm=center]{align-content:center}[align-content-sm=end]{align-content:flex-end}[align-content-sm=stretch]{align-content:stretch}[align-content-sm=between]{align-content:space-between}[align-content-sm=around]{align-content:space-around}[align-content-sm=evenly]{align-content:space-evenly}[align-items-sm=start]{align-items:flex-start}[align-items-sm=center]{align-items:center}[align-items-sm=end]{align-items:flex-end}[align-items-sm=stretch]{align-items:stretch}[justify-content-sm=start]{justify-content:flex-start}[justify-content-sm=center]{justify-content:center}[justify-content-sm=end]{justify-content:flex-end}[justify-content-sm=between]{justify-content:space-between}[justify-content-sm=around]{justify-content:space-around}[justify-content-sm=evenly]{justify-content:space-evenly}[wrap-sm=on]{flex-wrap:wrap}[wrap-sm=off]{flex-wrap:nowrap}[wrap-sm=reverse]{flex-wrap:wrap-reverse}}@media (min-width:768px){[align-content-md=start]{align-content:flex-start}[align-content-md=center]{align-content:center}[align-content-md=end]{align-content:flex-end}[align-content-md=stretch]{align-content:stretch}[align-content-md=between]{align-content:space-between}[align-content-md=around]{align-content:space-around}[align-content-md=evenly]{align-content:space-evenly}[align-items-md=start]{align-items:flex-start}[align-items-md=center]{align-items:center}[align-items-md=end]{align-items:flex-end}[align-items-md=stretch]{align-items:stretch}[justify-content-md=start]{justify-content:flex-start}[justify-content-md=center]{justify-content:center}[justify-content-md=end]{justify-content:flex-end}[justify-content-md=between]{justify-content:space-between}[justify-content-md=around]{justify-content:space-around}[justify-content-md=evenly]{justify-content:space-evenly}[wrap-md=on]{flex-wrap:wrap}[wrap-md=off]{flex-wrap:nowrap}[wrap-md=reverse]{flex-wrap:wrap-reverse}}@media (min-width:992px){[align-content-lg=start]{align-content:flex-start}[align-content-lg=center]{align-content:center}[align-content-lg=end]{align-content:flex-end}[align-content-lg=stretch]{align-content:stretch}[align-content-lg=between]{align-content:space-between}[align-content-lg=around]{align-content:space-around}[align-content-lg=evenly]{align-content:space-evenly}[align-items-lg=start]{align-items:flex-start}[align-items-lg=center]{align-items:center}[align-items-lg=end]{align-items:flex-end}[align-items-lg=stretch]{align-items:stretch}[justify-content-lg=start]{justify-content:flex-start}[justify-content-lg=center]{justify-content:center}[justify-content-lg=end]{justify-content:flex-end}[justify-content-lg=between]{justify-content:space-between}[justify-content-lg=around]{justify-content:space-around}[justify-content-lg=evenly]{justify-content:space-evenly}[wrap-lg=on]{flex-wrap:wrap}[wrap-lg=off]{flex-wrap:nowrap}[wrap-lg=reverse]{flex-wrap:wrap-reverse}}@media (min-width:1200px){[align-content-xl=start]{align-content:flex-start}[align-content-xl=center]{align-content:center}[align-content-xl=end]{align-content:flex-end}[align-content-xl=stretch]{align-content:stretch}[align-content-xl=between]{align-content:space-between}[align-content-xl=around]{align-content:space-around}[align-content-xl=evenly]{align-content:space-evenly}[align-items-xl=start]{align-items:flex-start}[align-items-xl=center]{align-items:center}[align-items-xl=end]{align-items:flex-end}[align-items-xl=stretch]{align-items:stretch}[justify-content-xl=start]{justify-content:flex-start}[justify-content-xl=center]{justify-content:center}[justify-content-xl=end]{justify-content:flex-end}[justify-content-xl=between]{justify-content:space-between}[justify-content-xl=around]{justify-content:space-around}[justify-content-xl=evenly]{justify-content:space-evenly}[wrap-xl=on]{flex-wrap:wrap}[wrap-xl=off]{flex-wrap:nowrap}[wrap-xl=reverse]{flex-wrap:wrap-reverse}}@media (min-width:1400px){[align-content-xxl=start]{align-content:flex-start}[align-content-xxl=center]{align-content:center}[align-content-xxl=end]{align-content:flex-end}[align-content-xxl=stretch]{align-content:stretch}[align-content-xxl=between]{align-content:space-between}[align-content-xxl=around]{align-content:space-around}[align-content-xxl=evenly]{align-content:space-evenly}[align-items-xxl=start]{align-items:flex-start}[align-items-xxl=center]{align-items:center}[align-items-xxl=end]{align-items:flex-end}[align-items-xxl=stretch]{align-items:stretch}[justify-content-xxl=start]{justify-content:flex-start}[justify-content-xxl=center]{justify-content:center}[justify-content-xxl=end]{justify-content:flex-end}[justify-content-xxl=between]{justify-content:space-between}[justify-content-xxl=around]{justify-content:space-around}[justify-content-xxl=evenly]{justify-content:space-evenly}[wrap-xxl=on]{flex-wrap:wrap}[wrap-xxl=off]{flex-wrap:nowrap}[wrap-xxl=reverse]{flex-wrap:wrap-reverse}}";

/**
 * @slot default - The default slot.
 */
let Grid = class Grid {
    constructor() {
        /**
         * Aligns contents vertically across all rows (It overrides alignItems).
         */
        this.alignContent = 'stretch';
        /**
         * Aligns contents vertically inside their own row.
         */
        this.alignItems = 'stretch';
        /**
         * Justifies contents horizontally.
         */
        this.justifyContent = 'start';
        /**
         * Controls allowing the container to wrap the content or not if the cumulative width
         * size of contents is more than the twelve-column width.
         */
        this.wrap = 'on';
    }
    // TODO: auto keys detect, support spread attribute <div {...attributes} />
    updatedCallback() {
        const keys = ['alignContent', 'alignContentXs', 'alignContentSm', 'alignContentMd', 'alignContentLg', 'alignContentXl', 'alignContentXxl', 'alignItems', 'alignItemsXs', 'alignItemsSm', 'alignItemsMd', 'alignItemsLg', 'alignItemsXl', 'alignItemsXxl', 'gutter', 'gutterX', 'gutterY', 'justifyContent', 'justifyContentXs', 'justifyContentSm', 'justifyContentMd', 'justifyContentLg', 'justifyContentXl', 'justifyContentXxl', 'reverse', 'vertical', 'wrap', 'wrapXs', 'wrapSm', 'wrapMd', 'wrapLg', 'wrapXl', 'wrapXxl'];
        const div = query(this, 'div');
        for (const key of keys) {
            const name = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
            const value = this[key];
            if (value)
                div.setAttribute(name, value);
            else
                div.removeAttribute(name);
        }
    }
    render() {
        return uhtml.html `<div>
        <slot />
      </div>`;
    }
};
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Grid.TAG = "plus-grid";
// THIS PROPERTY IS AUTO-ADDED, DO NOT EDIT MANUALY
Grid.STYLES = css_248z;
__decorate([
    Property({
        type: 8
    })
], Grid.prototype, "alignContent", void 0);
__decorate([
    Property({
        type: 8
    })
], Grid.prototype, "alignContentXs", void 0);
__decorate([
    Property({
        type: 8
    })
], Grid.prototype, "alignContentSm", void 0);
__decorate([
    Property({
        type: 8
    })
], Grid.prototype, "alignContentMd", void 0);
__decorate([
    Property({
        type: 8
    })
], Grid.prototype, "alignContentLg", void 0);
__decorate([
    Property({
        type: 8
    })
], Grid.prototype, "alignContentXl", void 0);
__decorate([
    Property({
        type: 8
    })
], Grid.prototype, "alignContentXxl", void 0);
__decorate([
    Property({
        type: 8
    })
], Grid.prototype, "alignItems", void 0);
__decorate([
    Property({
        type: 8
    })
], Grid.prototype, "alignItemsXs", void 0);
__decorate([
    Property({
        type: 8
    })
], Grid.prototype, "alignItemsSm", void 0);
__decorate([
    Property({
        type: 8
    })
], Grid.prototype, "alignItemsMd", void 0);
__decorate([
    Property({
        type: 8
    })
], Grid.prototype, "alignItemsLg", void 0);
__decorate([
    Property({
        type: 8
    })
], Grid.prototype, "alignItemsXl", void 0);
__decorate([
    Property({
        type: 8
    })
], Grid.prototype, "alignItemsXxl", void 0);
__decorate([
    Property({
        type: 264
    })
], Grid.prototype, "gutter", void 0);
__decorate([
    Property({
        type: 264
    })
], Grid.prototype, "gutterX", void 0);
__decorate([
    Property({
        type: 264
    })
], Grid.prototype, "gutterY", void 0);
__decorate([
    Property({
        type: 8
    })
], Grid.prototype, "justifyContent", void 0);
__decorate([
    Property({
        type: 8
    })
], Grid.prototype, "justifyContentXs", void 0);
__decorate([
    Property({
        type: 8
    })
], Grid.prototype, "justifyContentSm", void 0);
__decorate([
    Property({
        type: 8
    })
], Grid.prototype, "justifyContentMd", void 0);
__decorate([
    Property({
        type: 8
    })
], Grid.prototype, "justifyContentLg", void 0);
__decorate([
    Property({
        type: 8
    })
], Grid.prototype, "justifyContentXl", void 0);
__decorate([
    Property({
        type: 8
    })
], Grid.prototype, "justifyContentXxl", void 0);
__decorate([
    Property({
        type: 2
    })
], Grid.prototype, "reverse", void 0);
__decorate([
    Property({
        type: 2
    })
], Grid.prototype, "vertical", void 0);
__decorate([
    Property({
        type: 8
    })
], Grid.prototype, "wrap", void 0);
__decorate([
    Property({
        type: 8
    })
], Grid.prototype, "wrapXs", void 0);
__decorate([
    Property({
        type: 8
    })
], Grid.prototype, "wrapSm", void 0);
__decorate([
    Property({
        type: 8
    })
], Grid.prototype, "wrapMd", void 0);
__decorate([
    Property({
        type: 8
    })
], Grid.prototype, "wrapLg", void 0);
__decorate([
    Property({
        type: 8
    })
], Grid.prototype, "wrapXl", void 0);
__decorate([
    Property({
        type: 8
    })
], Grid.prototype, "wrapXxl", void 0);
Grid = __decorate([
    Element("plus-grid")
], Grid);

export { Grid };
