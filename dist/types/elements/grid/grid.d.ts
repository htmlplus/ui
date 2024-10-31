import { PlusCore } from '../../core';
import { GridAlignContent, GridAlignItems, GridGutter, GridJustifyContent, GridWrap } from './grid.types';
/**
 * @slot default - The default slot.
 */
export declare class Grid extends PlusCore {
    /**
     * Aligns contents vertically across all rows (It overrides alignItems).
     */
    alignContent?: GridAlignContent;
    /**
     * Aligns contents vertically across all rows for extra-small display sizes
     * (It overrides alignItemsXs).
     */
    alignContentXs?: GridAlignContent;
    /**
     * Aligns contents vertically across all rows for small display sizes
     * (It overrides alignItemsSm).
     */
    alignContentSm?: GridAlignContent;
    /**
     * Aligns contents vertically across all rows for medium display sizes
     * (It overrides alignItemsMd).
     */
    alignContentMd?: GridAlignContent;
    /**
     * Aligns contents vertically across all rows for large display sizes
     * (It overrides alignItemsLg).
     */
    alignContentLg?: GridAlignContent;
    /**
     * Aligns contents vertically across all rows for extra-large display sizes
     * (It overrides alignItemsXl).
     */
    alignContentXl?: GridAlignContent;
    /**
     * Aligns contents vertically across all rows for extra-extra-large display sizes
     * (It overrides alignItemsXXl).
     */
    alignContentXxl?: GridAlignContent;
    /**
     * Aligns contents vertically inside their own row.
     */
    alignItems?: GridAlignItems;
    /**
     * Aligns contents vertically inside their own row for extra-small display sizes.
     */
    alignItemsXs?: GridAlignItems;
    /**
     * Aligns contents vertically inside their own row for small display sizes.
     */
    alignItemsSm?: GridAlignItems;
    /**
     * Aligns contents vertically inside their own row for medium display sizes.
     */
    alignItemsMd?: GridAlignItems;
    /**
     * Aligns contents vertically inside their own row for large display sizes.
     */
    alignItemsLg?: GridAlignItems;
    /**
     * Aligns contents vertically inside their own row for extra-large display sizes.
     */
    alignItemsXl?: GridAlignItems;
    /**
     * Aligns contents vertically inside their own row for extra-extra-large display sizes.
     */
    alignItemsXxl?: GridAlignItems;
    /**
     * Adds a gap between contents to make space between them vertically and horizontally.
     */
    gutter?: GridGutter;
    /**
     * Adds a gap between contents to make space between them horizontally.
     */
    gutterX?: GridGutter;
    /**
     * Adds a gap between contents to make space between them vertically.
     */
    gutterY?: GridGutter;
    /**
     * Justifies contents horizontally.
     */
    justifyContent?: GridJustifyContent;
    /**
     * Justifies contents horizontally for extra-small display sizes.
     */
    justifyContentXs?: GridJustifyContent;
    /**
     * Justifies contents horizontally for small display sizes.
     */
    justifyContentSm?: GridJustifyContent;
    /**
     * Justifies contents horizontally for medium display sizes.
     */
    justifyContentMd?: GridJustifyContent;
    /**
     * Justifies contents horizontally for large display sizes.
     */
    justifyContentLg?: GridJustifyContent;
    /**
     * Justifies contents horizontally for extra-large display sizes.
     */
    justifyContentXl?: GridJustifyContent;
    /**
     * Justifies contents horizontally for extra-extra-large display sizes.
     */
    justifyContentXxl?: GridJustifyContent;
    /**
     * Reverses the flow of contents from left-to-right to right-to-left, or vice-versa.
     */
    reverse?: boolean;
    /**
     * Changes the flow of contents from left-to-right to top-to-down.
     */
    vertical?: boolean;
    /**
     * Controls allowing the container to wrap the content or not if the cumulative width
     * size of contents is more than the twelve-column width.
     */
    wrap?: GridWrap;
    /**
     * Controls allowing the container to wrap the content or not if the cumulative width
     * size of contents is more than the twelve-column width for extra-small screen devices.
     */
    wrapXs?: GridWrap;
    /**
     * Controls allowing the container to wrap the content or not if the cumulative width
     * size of contents is more than the twelve-column width for small screen devices.
     */
    wrapSm?: GridWrap;
    /**
     * Controls allowing the container to wrap the content or not if the cumulative width
     * size of contents is more than the twelve-column width for medium screen devices.
     */
    wrapMd?: GridWrap;
    /**
     * Controls allowing the container to wrap the content or not if the cumulative width
     * size of contents is more than the twelve-column width for large screen devices.
     */
    wrapLg?: GridWrap;
    /**
     * Controls allowing the container to wrap the content or not if the cumulative width
     * size of contents is more than the twelve-column width for extra-large screen devices.
     */
    wrapXl?: GridWrap;
    /**
     * Controls allowing the container to wrap the content or not if the cumulative width
     * size of contents is more than the twelve-column width for extra-extra-large screen devices.
     */
    wrapXxl?: GridWrap;
    $root: HTMLElement;
    updatedCallback(): void;
    render(): any;
}

export interface GridAttributes {
  /**
  * Aligns contents vertically across all rows (It overrides alignItems).
  */
  "align-content"?: GridAlignContent;
  /**
  * Aligns contents vertically across all rows for extra-small display sizes
  * (It overrides alignItemsXs).
  */
  "align-content-xs"?: GridAlignContent;
  /**
  * Aligns contents vertically across all rows for small display sizes
  * (It overrides alignItemsSm).
  */
  "align-content-sm"?: GridAlignContent;
  /**
  * Aligns contents vertically across all rows for medium display sizes
  * (It overrides alignItemsMd).
  */
  "align-content-md"?: GridAlignContent;
  /**
  * Aligns contents vertically across all rows for large display sizes
  * (It overrides alignItemsLg).
  */
  "align-content-lg"?: GridAlignContent;
  /**
  * Aligns contents vertically across all rows for extra-large display sizes
  * (It overrides alignItemsXl).
  */
  "align-content-xl"?: GridAlignContent;
  /**
  * Aligns contents vertically across all rows for extra-extra-large display sizes
  * (It overrides alignItemsXXl).
  */
  "align-content-xxl"?: GridAlignContent;
  /**
  * Aligns contents vertically inside their own row.
  */
  "align-items"?: GridAlignItems;
  /**
  * Aligns contents vertically inside their own row for extra-small display sizes.
  */
  "align-items-xs"?: GridAlignItems;
  /**
  * Aligns contents vertically inside their own row for small display sizes.
  */
  "align-items-sm"?: GridAlignItems;
  /**
  * Aligns contents vertically inside their own row for medium display sizes.
  */
  "align-items-md"?: GridAlignItems;
  /**
  * Aligns contents vertically inside their own row for large display sizes.
  */
  "align-items-lg"?: GridAlignItems;
  /**
  * Aligns contents vertically inside their own row for extra-large display sizes.
  */
  "align-items-xl"?: GridAlignItems;
  /**
  * Aligns contents vertically inside their own row for extra-extra-large display sizes.
  */
  "align-items-xxl"?: GridAlignItems;
  /**
  * Adds a gap between contents to make space between them vertically and horizontally.
  */
  "gutter"?: GridGutter;
  /**
  * Adds a gap between contents to make space between them horizontally.
  */
  "gutter-x"?: GridGutter;
  /**
  * Adds a gap between contents to make space between them vertically.
  */
  "gutter-y"?: GridGutter;
  /**
  * Justifies contents horizontally.
  */
  "justify-content"?: GridJustifyContent;
  /**
  * Justifies contents horizontally for extra-small display sizes.
  */
  "justify-content-xs"?: GridJustifyContent;
  /**
  * Justifies contents horizontally for small display sizes.
  */
  "justify-content-sm"?: GridJustifyContent;
  /**
  * Justifies contents horizontally for medium display sizes.
  */
  "justify-content-md"?: GridJustifyContent;
  /**
  * Justifies contents horizontally for large display sizes.
  */
  "justify-content-lg"?: GridJustifyContent;
  /**
  * Justifies contents horizontally for extra-large display sizes.
  */
  "justify-content-xl"?: GridJustifyContent;
  /**
  * Justifies contents horizontally for extra-extra-large display sizes.
  */
  "justify-content-xxl"?: GridJustifyContent;
  /**
  * Reverses the flow of contents from left-to-right to right-to-left, or vice-versa.
  */
  "reverse"?: boolean;
  /**
  * Changes the flow of contents from left-to-right to top-to-down.
  */
  "vertical"?: boolean;
  /**
  * Controls allowing the container to wrap the content or not if the cumulative width
  * size of contents is more than the twelve-column width.
  */
  "wrap"?: GridWrap;
  /**
  * Controls allowing the container to wrap the content or not if the cumulative width
  * size of contents is more than the twelve-column width for extra-small screen devices.
  */
  "wrap-xs"?: GridWrap;
  /**
  * Controls allowing the container to wrap the content or not if the cumulative width
  * size of contents is more than the twelve-column width for small screen devices.
  */
  "wrap-sm"?: GridWrap;
  /**
  * Controls allowing the container to wrap the content or not if the cumulative width
  * size of contents is more than the twelve-column width for medium screen devices.
  */
  "wrap-md"?: GridWrap;
  /**
  * Controls allowing the container to wrap the content or not if the cumulative width
  * size of contents is more than the twelve-column width for large screen devices.
  */
  "wrap-lg"?: GridWrap;
  /**
  * Controls allowing the container to wrap the content or not if the cumulative width
  * size of contents is more than the twelve-column width for extra-large screen devices.
  */
  "wrap-xl"?: GridWrap;
  /**
  * Controls allowing the container to wrap the content or not if the cumulative width
  * size of contents is more than the twelve-column width for extra-extra-large screen devices.
  */
  "wrap-xxl"?: GridWrap;
}
export interface GridEvents {}
export interface GridMethods {}
export interface GridProperties {
  /**
  * Aligns contents vertically across all rows (It overrides alignItems).
  */
  alignContent?: GridAlignContent;
  /**
  * Aligns contents vertically across all rows for extra-small display sizes
  * (It overrides alignItemsXs).
  */
  alignContentXs?: GridAlignContent;
  /**
  * Aligns contents vertically across all rows for small display sizes
  * (It overrides alignItemsSm).
  */
  alignContentSm?: GridAlignContent;
  /**
  * Aligns contents vertically across all rows for medium display sizes
  * (It overrides alignItemsMd).
  */
  alignContentMd?: GridAlignContent;
  /**
  * Aligns contents vertically across all rows for large display sizes
  * (It overrides alignItemsLg).
  */
  alignContentLg?: GridAlignContent;
  /**
  * Aligns contents vertically across all rows for extra-large display sizes
  * (It overrides alignItemsXl).
  */
  alignContentXl?: GridAlignContent;
  /**
  * Aligns contents vertically across all rows for extra-extra-large display sizes
  * (It overrides alignItemsXXl).
  */
  alignContentXxl?: GridAlignContent;
  /**
  * Aligns contents vertically inside their own row.
  */
  alignItems?: GridAlignItems;
  /**
  * Aligns contents vertically inside their own row for extra-small display sizes.
  */
  alignItemsXs?: GridAlignItems;
  /**
  * Aligns contents vertically inside their own row for small display sizes.
  */
  alignItemsSm?: GridAlignItems;
  /**
  * Aligns contents vertically inside their own row for medium display sizes.
  */
  alignItemsMd?: GridAlignItems;
  /**
  * Aligns contents vertically inside their own row for large display sizes.
  */
  alignItemsLg?: GridAlignItems;
  /**
  * Aligns contents vertically inside their own row for extra-large display sizes.
  */
  alignItemsXl?: GridAlignItems;
  /**
  * Aligns contents vertically inside their own row for extra-extra-large display sizes.
  */
  alignItemsXxl?: GridAlignItems;
  /**
  * Adds a gap between contents to make space between them vertically and horizontally.
  */
  gutter?: GridGutter;
  /**
  * Adds a gap between contents to make space between them horizontally.
  */
  gutterX?: GridGutter;
  /**
  * Adds a gap between contents to make space between them vertically.
  */
  gutterY?: GridGutter;
  /**
  * Justifies contents horizontally.
  */
  justifyContent?: GridJustifyContent;
  /**
  * Justifies contents horizontally for extra-small display sizes.
  */
  justifyContentXs?: GridJustifyContent;
  /**
  * Justifies contents horizontally for small display sizes.
  */
  justifyContentSm?: GridJustifyContent;
  /**
  * Justifies contents horizontally for medium display sizes.
  */
  justifyContentMd?: GridJustifyContent;
  /**
  * Justifies contents horizontally for large display sizes.
  */
  justifyContentLg?: GridJustifyContent;
  /**
  * Justifies contents horizontally for extra-large display sizes.
  */
  justifyContentXl?: GridJustifyContent;
  /**
  * Justifies contents horizontally for extra-extra-large display sizes.
  */
  justifyContentXxl?: GridJustifyContent;
  /**
  * Reverses the flow of contents from left-to-right to right-to-left, or vice-versa.
  */
  reverse?: boolean;
  /**
  * Changes the flow of contents from left-to-right to top-to-down.
  */
  vertical?: boolean;
  /**
  * Controls allowing the container to wrap the content or not if the cumulative width
  * size of contents is more than the twelve-column width.
  */
  wrap?: GridWrap;
  /**
  * Controls allowing the container to wrap the content or not if the cumulative width
  * size of contents is more than the twelve-column width for extra-small screen devices.
  */
  wrapXs?: GridWrap;
  /**
  * Controls allowing the container to wrap the content or not if the cumulative width
  * size of contents is more than the twelve-column width for small screen devices.
  */
  wrapSm?: GridWrap;
  /**
  * Controls allowing the container to wrap the content or not if the cumulative width
  * size of contents is more than the twelve-column width for medium screen devices.
  */
  wrapMd?: GridWrap;
  /**
  * Controls allowing the container to wrap the content or not if the cumulative width
  * size of contents is more than the twelve-column width for large screen devices.
  */
  wrapLg?: GridWrap;
  /**
  * Controls allowing the container to wrap the content or not if the cumulative width
  * size of contents is more than the twelve-column width for extra-large screen devices.
  */
  wrapXl?: GridWrap;
  /**
  * Controls allowing the container to wrap the content or not if the cumulative width
  * size of contents is more than the twelve-column width for extra-extra-large screen devices.
  */
  wrapXxl?: GridWrap;
}
export interface GridJSX extends GridEvents, GridProperties {}
declare global {
  interface HTMLPlusGridElement extends HTMLElement, GridMethods, GridProperties {}
  var HTMLPlusGridElement: {
    prototype: HTMLPlusGridElement;
    new (): HTMLPlusGridElement;
  };
  interface HTMLElementTagNameMap {
    "plus-grid": HTMLPlusGridElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-grid": GridEvents & GridAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type GridElement = globalThis.HTMLPlusGridElement;