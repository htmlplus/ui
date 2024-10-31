import { PlusCore } from '../../core';
import { GridItemAlignSelf, GridItemColumn, GridItemOffset, GridItemOrder } from './grid-item.types';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class GridItem extends PlusCore {
    /**
     * Aligns the grid-item vertically in its container (grid).
     * It overrides the align-items property of its parent.
     */
    alignSelf?: GridItemAlignSelf;
    /**
     * Aligns the grid-item vertically in its container (grid) for extra-small display sizes.
     * It also applies to larger breakpoints and display sizes while they are not specified.
     * (It overrides the align-items property of its parent just for extra-small breakpoints).
     */
    alignSelfXs?: GridItemAlignSelf;
    /**
     * Aligns the grid-item vertically in its container (grid) for small display sizes.
     * It also applies to larger breakpoints and display sizes while they are not specified.
     * (It overrides the align-items property of its parent just for small breakpoints).
     */
    alignSelfSm?: GridItemAlignSelf;
    /**
     * Aligns the grid-item vertically in its container (grid) for medium display sizes.
     * It also applies to larger breakpoints and display sizes while they are not specified.
     * (It overrides the align-items property of its parent just for medium breakpoints).
     */
    alignSelfMd?: GridItemAlignSelf;
    /**
     * Aligns the grid-item vertically in its container (grid) for large display sizes.
     * It also applies to larger breakpoints and display sizes while they are not specified.
     * (It overrides the align-items property of its parent just for large breakpoints).
     */
    alignSelfLg?: GridItemAlignSelf;
    /**
     * Aligns the grid-item vertically in its container (grid) for extra-large display sizes.
     * It also applies to larger breakpoints and display sizes while they are not specified.
     * (It overrides the align-items property of its parent just for extra-large breakpoints).
     */
    alignSelfXl?: GridItemAlignSelf;
    /**
     * Aligns the grid-item vertically in its container (grid) for extra-extra-large display sizes.
     * It also applies to larger breakpoints and display sizes while they are not specified.
     * (It overrides the align-items property of its parent just for extra-extra-large breakpoints).
     */
    alignSelfXxl?: GridItemAlignSelf;
    /**
     * Specifies the number of columns for extra-small viewports (portrait phones).
     * It also determines the number of columns for bigger display sizes when
     * other upper breakpoints (sm, md, lg, xl and xxl) are not specified.
     */
    xs?: GridItemColumn;
    /**
     * Specifies the number of columns for small viewports (landscape phones).
     * It also determines the number of columns for bigger display sizes when
     * other upper breakpoints (md, lg, xl and xxl) are not specified.
     */
    sm?: GridItemColumn;
    /**
     * Specifies the number of columns for medium viewports (tablets).
     * It also determines the number of columns for bigger display sizes when
     * other upper breakpoints (lg, xl and xxl) are not specified.
     */
    md?: GridItemColumn;
    /**
     * Specifies the number of columns for large viewports (desktop).
     * It also determines the number of columns for bigger display sizes when
     * the upper breakpoint (xl and xxl) is not specified.
     */
    lg?: GridItemColumn;
    /**
     * Specifies the number of columns for large viewports (large desktops).
     * It also determines the number of columns for bigger display sizes when
     * the upper breakpoint (xxl) is not specified.
     */
    xl?: GridItemColumn;
    /**
     * Specifies the number of columns for extra-extra-large viewports (larger desktops).
     */
    xxl?: GridItemColumn;
    /**
     * Hides the grid-item in extra-small display sizes (portrait phones).
     */
    hideXs?: boolean;
    /**
     * Hides the grid-item in small display sizes (landscape phones).
     */
    hideSm?: boolean;
    /**
     * Hides the grid-item in medium display sizes (tablets).
     */
    hideMd?: boolean;
    /**
     * Hides the grid-item in large display sizes (desktop).
     */
    hideLg?: boolean;
    /**
     * Hides the grid-item in extra-large display sizes (large desktops).
     */
    hideXl?: boolean;
    /**
     * Hides the grid-item in extra-extra-large display sizes (larger desktops).
     */
    hideXxl?: boolean;
    /**
     * Hides the grid-item in all display sizes.
     */
    hide?: boolean;
    /**
     * Hides the grid-item in small and larger display sizes.
     */
    hideSmUp?: boolean;
    /**
     * Hides the grid-item in medium and larger display sizes.
     */
    hideMdUp?: boolean;
    /**
     * Hides the grid-item in large and larger display sizes.
     */
    hideLgUp?: boolean;
    /**
     * Hides the grid-item in large and larger display sizes.
     */
    hideXlUp?: boolean;
    /**
     * Hides the grid-item in small and smaller display sizes.
     */
    hideSmDown?: boolean;
    /**
     * Hides the grid-item in medium and smaller display sizes.
     */
    hideMdDown?: boolean;
    /**
     * Hides the grid-item in large and smaller display sizes.
     */
    hideLgDown?: boolean;
    /**
     * Hides the grid-item in large and smaller display sizes.
     */
    hideXlDown?: boolean;
    /**
     * Hides the grid-item in large and smaller display sizes.
     */
    hideXxlDown?: boolean;
    /**
     * Adds an offset space before the grid-item for extra-small display sizes.
     * It also applies to larger breakpoints and display sizes while they are not specified.
     */
    offsetXs?: GridItemOffset;
    /**
     * Adds an offset space before the grid-item for small display sizes.
     * It also applies to larger breakpoints and display sizes while they are not specified.
     */
    offsetSm?: GridItemOffset;
    /**
     * Adds an offset space before the grid-item for medium display sizes.
     * It also applies to larger breakpoints and display sizes while they are not specified.
     */
    offsetMd?: GridItemOffset;
    /**
     * Adds an offset space before the grid-item for large display sizes.
     * It also applies to the larger breakpoint (xl) while that is not specified.
     */
    offsetLg?: GridItemOffset;
    /**
     * Adds an offset space before the grid-item for extra-large display sizes.
     */
    offsetXl?: GridItemOffset;
    /**
     * Adds an offset space before the grid-item for extra-extra-large display sizes.
     */
    offsetXxl?: GridItemOffset;
    /**
     * Overrides the default order of the grid-item for extra-small display sizes.
     * It also applies to larger breakpoints and display sizes while they are not specified.
     */
    orderXs?: GridItemOrder;
    /**
     * Overrides the default order of the grid-item for small display sizes.
     * It also applies to larger breakpoints and display sizes while they are not specified.
     */
    orderSm?: GridItemOrder;
    /**
     * Overrides the default order of the grid-item for medium display sizes.
     * It also applies to larger breakpoints and display sizes while they are not specified.
     */
    orderMd?: GridItemOrder;
    /**
     * Overrides the default order of the grid-item for large display sizes.
     * It also applies to the larger breakpoint (xl) while that is not specified.
     */
    orderLg?: GridItemOrder;
    /**
     * Overrides the default order of the grid-item for extra-large display sizes.
     */
    orderXl?: GridItemOrder;
    /**
     * Overrides the default order of the grid-item for extra-extra-large display sizes.
     */
    orderXxl?: GridItemOrder;
    render(): any;
}

export interface GridItemAttributes {
  /**
  * Aligns the grid-item vertically in its container (grid).
  * It overrides the align-items property of its parent.
  */
  "align-self"?: GridItemAlignSelf;
  /**
  * Aligns the grid-item vertically in its container (grid) for extra-small display sizes.
  * It also applies to larger breakpoints and display sizes while they are not specified.
  * (It overrides the align-items property of its parent just for extra-small breakpoints).
  */
  "align-self-xs"?: GridItemAlignSelf;
  /**
  * Aligns the grid-item vertically in its container (grid) for small display sizes.
  * It also applies to larger breakpoints and display sizes while they are not specified.
  * (It overrides the align-items property of its parent just for small breakpoints).
  */
  "align-self-sm"?: GridItemAlignSelf;
  /**
  * Aligns the grid-item vertically in its container (grid) for medium display sizes.
  * It also applies to larger breakpoints and display sizes while they are not specified.
  * (It overrides the align-items property of its parent just for medium breakpoints).
  */
  "align-self-md"?: GridItemAlignSelf;
  /**
  * Aligns the grid-item vertically in its container (grid) for large display sizes.
  * It also applies to larger breakpoints and display sizes while they are not specified.
  * (It overrides the align-items property of its parent just for large breakpoints).
  */
  "align-self-lg"?: GridItemAlignSelf;
  /**
  * Aligns the grid-item vertically in its container (grid) for extra-large display sizes.
  * It also applies to larger breakpoints and display sizes while they are not specified.
  * (It overrides the align-items property of its parent just for extra-large breakpoints).
  */
  "align-self-xl"?: GridItemAlignSelf;
  /**
  * Aligns the grid-item vertically in its container (grid) for extra-extra-large display sizes.
  * It also applies to larger breakpoints and display sizes while they are not specified.
  * (It overrides the align-items property of its parent just for extra-extra-large breakpoints).
  */
  "align-self-xxl"?: GridItemAlignSelf;
  /**
  * Specifies the number of columns for extra-small viewports (portrait phones).
  * It also determines the number of columns for bigger display sizes when
  * other upper breakpoints (sm, md, lg, xl and xxl) are not specified.
  */
  "xs"?: GridItemColumn;
  /**
  * Specifies the number of columns for small viewports (landscape phones).
  * It also determines the number of columns for bigger display sizes when
  * other upper breakpoints (md, lg, xl and xxl) are not specified.
  */
  "sm"?: GridItemColumn;
  /**
  * Specifies the number of columns for medium viewports (tablets).
  * It also determines the number of columns for bigger display sizes when
  * other upper breakpoints (lg, xl and xxl) are not specified.
  */
  "md"?: GridItemColumn;
  /**
  * Specifies the number of columns for large viewports (desktop).
  * It also determines the number of columns for bigger display sizes when
  * the upper breakpoint (xl and xxl) is not specified.
  */
  "lg"?: GridItemColumn;
  /**
  * Specifies the number of columns for large viewports (large desktops).
  * It also determines the number of columns for bigger display sizes when
  * the upper breakpoint (xxl) is not specified.
  */
  "xl"?: GridItemColumn;
  /**
  * Specifies the number of columns for extra-extra-large viewports (larger desktops).
  */
  "xxl"?: GridItemColumn;
  /**
  * Hides the grid-item in extra-small display sizes (portrait phones).
  */
  "hide-xs"?: boolean;
  /**
  * Hides the grid-item in small display sizes (landscape phones).
  */
  "hide-sm"?: boolean;
  /**
  * Hides the grid-item in medium display sizes (tablets).
  */
  "hide-md"?: boolean;
  /**
  * Hides the grid-item in large display sizes (desktop).
  */
  "hide-lg"?: boolean;
  /**
  * Hides the grid-item in extra-large display sizes (large desktops).
  */
  "hide-xl"?: boolean;
  /**
  * Hides the grid-item in extra-extra-large display sizes (larger desktops).
  */
  "hide-xxl"?: boolean;
  /**
  * Hides the grid-item in all display sizes.
  */
  "hide"?: boolean;
  /**
  * Hides the grid-item in small and larger display sizes.
  */
  "hide-sm-up"?: boolean;
  /**
  * Hides the grid-item in medium and larger display sizes.
  */
  "hide-md-up"?: boolean;
  /**
  * Hides the grid-item in large and larger display sizes.
  */
  "hide-lg-up"?: boolean;
  /**
  * Hides the grid-item in large and larger display sizes.
  */
  "hide-xl-up"?: boolean;
  /**
  * Hides the grid-item in small and smaller display sizes.
  */
  "hide-sm-down"?: boolean;
  /**
  * Hides the grid-item in medium and smaller display sizes.
  */
  "hide-md-down"?: boolean;
  /**
  * Hides the grid-item in large and smaller display sizes.
  */
  "hide-lg-down"?: boolean;
  /**
  * Hides the grid-item in large and smaller display sizes.
  */
  "hide-xl-down"?: boolean;
  /**
  * Hides the grid-item in large and smaller display sizes.
  */
  "hide-xxl-down"?: boolean;
  /**
  * Adds an offset space before the grid-item for extra-small display sizes.
  * It also applies to larger breakpoints and display sizes while they are not specified.
  */
  "offset-xs"?: GridItemOffset;
  /**
  * Adds an offset space before the grid-item for small display sizes.
  * It also applies to larger breakpoints and display sizes while they are not specified.
  */
  "offset-sm"?: GridItemOffset;
  /**
  * Adds an offset space before the grid-item for medium display sizes.
  * It also applies to larger breakpoints and display sizes while they are not specified.
  */
  "offset-md"?: GridItemOffset;
  /**
  * Adds an offset space before the grid-item for large display sizes.
  * It also applies to the larger breakpoint (xl) while that is not specified.
  */
  "offset-lg"?: GridItemOffset;
  /**
  * Adds an offset space before the grid-item for extra-large display sizes.
  */
  "offset-xl"?: GridItemOffset;
  /**
  * Adds an offset space before the grid-item for extra-extra-large display sizes.
  */
  "offset-xxl"?: GridItemOffset;
  /**
  * Overrides the default order of the grid-item for extra-small display sizes.
  * It also applies to larger breakpoints and display sizes while they are not specified.
  */
  "order-xs"?: GridItemOrder;
  /**
  * Overrides the default order of the grid-item for small display sizes.
  * It also applies to larger breakpoints and display sizes while they are not specified.
  */
  "order-sm"?: GridItemOrder;
  /**
  * Overrides the default order of the grid-item for medium display sizes.
  * It also applies to larger breakpoints and display sizes while they are not specified.
  */
  "order-md"?: GridItemOrder;
  /**
  * Overrides the default order of the grid-item for large display sizes.
  * It also applies to the larger breakpoint (xl) while that is not specified.
  */
  "order-lg"?: GridItemOrder;
  /**
  * Overrides the default order of the grid-item for extra-large display sizes.
  */
  "order-xl"?: GridItemOrder;
  /**
  * Overrides the default order of the grid-item for extra-extra-large display sizes.
  */
  "order-xxl"?: GridItemOrder;
}
export interface GridItemEvents {}
export interface GridItemMethods {}
export interface GridItemProperties {
  /**
  * Aligns the grid-item vertically in its container (grid).
  * It overrides the align-items property of its parent.
  */
  alignSelf?: GridItemAlignSelf;
  /**
  * Aligns the grid-item vertically in its container (grid) for extra-small display sizes.
  * It also applies to larger breakpoints and display sizes while they are not specified.
  * (It overrides the align-items property of its parent just for extra-small breakpoints).
  */
  alignSelfXs?: GridItemAlignSelf;
  /**
  * Aligns the grid-item vertically in its container (grid) for small display sizes.
  * It also applies to larger breakpoints and display sizes while they are not specified.
  * (It overrides the align-items property of its parent just for small breakpoints).
  */
  alignSelfSm?: GridItemAlignSelf;
  /**
  * Aligns the grid-item vertically in its container (grid) for medium display sizes.
  * It also applies to larger breakpoints and display sizes while they are not specified.
  * (It overrides the align-items property of its parent just for medium breakpoints).
  */
  alignSelfMd?: GridItemAlignSelf;
  /**
  * Aligns the grid-item vertically in its container (grid) for large display sizes.
  * It also applies to larger breakpoints and display sizes while they are not specified.
  * (It overrides the align-items property of its parent just for large breakpoints).
  */
  alignSelfLg?: GridItemAlignSelf;
  /**
  * Aligns the grid-item vertically in its container (grid) for extra-large display sizes.
  * It also applies to larger breakpoints and display sizes while they are not specified.
  * (It overrides the align-items property of its parent just for extra-large breakpoints).
  */
  alignSelfXl?: GridItemAlignSelf;
  /**
  * Aligns the grid-item vertically in its container (grid) for extra-extra-large display sizes.
  * It also applies to larger breakpoints and display sizes while they are not specified.
  * (It overrides the align-items property of its parent just for extra-extra-large breakpoints).
  */
  alignSelfXxl?: GridItemAlignSelf;
  /**
  * Specifies the number of columns for extra-small viewports (portrait phones).
  * It also determines the number of columns for bigger display sizes when
  * other upper breakpoints (sm, md, lg, xl and xxl) are not specified.
  */
  xs?: GridItemColumn;
  /**
  * Specifies the number of columns for small viewports (landscape phones).
  * It also determines the number of columns for bigger display sizes when
  * other upper breakpoints (md, lg, xl and xxl) are not specified.
  */
  sm?: GridItemColumn;
  /**
  * Specifies the number of columns for medium viewports (tablets).
  * It also determines the number of columns for bigger display sizes when
  * other upper breakpoints (lg, xl and xxl) are not specified.
  */
  md?: GridItemColumn;
  /**
  * Specifies the number of columns for large viewports (desktop).
  * It also determines the number of columns for bigger display sizes when
  * the upper breakpoint (xl and xxl) is not specified.
  */
  lg?: GridItemColumn;
  /**
  * Specifies the number of columns for large viewports (large desktops).
  * It also determines the number of columns for bigger display sizes when
  * the upper breakpoint (xxl) is not specified.
  */
  xl?: GridItemColumn;
  /**
  * Specifies the number of columns for extra-extra-large viewports (larger desktops).
  */
  xxl?: GridItemColumn;
  /**
  * Hides the grid-item in extra-small display sizes (portrait phones).
  */
  hideXs?: boolean;
  /**
  * Hides the grid-item in small display sizes (landscape phones).
  */
  hideSm?: boolean;
  /**
  * Hides the grid-item in medium display sizes (tablets).
  */
  hideMd?: boolean;
  /**
  * Hides the grid-item in large display sizes (desktop).
  */
  hideLg?: boolean;
  /**
  * Hides the grid-item in extra-large display sizes (large desktops).
  */
  hideXl?: boolean;
  /**
  * Hides the grid-item in extra-extra-large display sizes (larger desktops).
  */
  hideXxl?: boolean;
  /**
  * Hides the grid-item in all display sizes.
  */
  hide?: boolean;
  /**
  * Hides the grid-item in small and larger display sizes.
  */
  hideSmUp?: boolean;
  /**
  * Hides the grid-item in medium and larger display sizes.
  */
  hideMdUp?: boolean;
  /**
  * Hides the grid-item in large and larger display sizes.
  */
  hideLgUp?: boolean;
  /**
  * Hides the grid-item in large and larger display sizes.
  */
  hideXlUp?: boolean;
  /**
  * Hides the grid-item in small and smaller display sizes.
  */
  hideSmDown?: boolean;
  /**
  * Hides the grid-item in medium and smaller display sizes.
  */
  hideMdDown?: boolean;
  /**
  * Hides the grid-item in large and smaller display sizes.
  */
  hideLgDown?: boolean;
  /**
  * Hides the grid-item in large and smaller display sizes.
  */
  hideXlDown?: boolean;
  /**
  * Hides the grid-item in large and smaller display sizes.
  */
  hideXxlDown?: boolean;
  /**
  * Adds an offset space before the grid-item for extra-small display sizes.
  * It also applies to larger breakpoints and display sizes while they are not specified.
  */
  offsetXs?: GridItemOffset;
  /**
  * Adds an offset space before the grid-item for small display sizes.
  * It also applies to larger breakpoints and display sizes while they are not specified.
  */
  offsetSm?: GridItemOffset;
  /**
  * Adds an offset space before the grid-item for medium display sizes.
  * It also applies to larger breakpoints and display sizes while they are not specified.
  */
  offsetMd?: GridItemOffset;
  /**
  * Adds an offset space before the grid-item for large display sizes.
  * It also applies to the larger breakpoint (xl) while that is not specified.
  */
  offsetLg?: GridItemOffset;
  /**
  * Adds an offset space before the grid-item for extra-large display sizes.
  */
  offsetXl?: GridItemOffset;
  /**
  * Adds an offset space before the grid-item for extra-extra-large display sizes.
  */
  offsetXxl?: GridItemOffset;
  /**
  * Overrides the default order of the grid-item for extra-small display sizes.
  * It also applies to larger breakpoints and display sizes while they are not specified.
  */
  orderXs?: GridItemOrder;
  /**
  * Overrides the default order of the grid-item for small display sizes.
  * It also applies to larger breakpoints and display sizes while they are not specified.
  */
  orderSm?: GridItemOrder;
  /**
  * Overrides the default order of the grid-item for medium display sizes.
  * It also applies to larger breakpoints and display sizes while they are not specified.
  */
  orderMd?: GridItemOrder;
  /**
  * Overrides the default order of the grid-item for large display sizes.
  * It also applies to the larger breakpoint (xl) while that is not specified.
  */
  orderLg?: GridItemOrder;
  /**
  * Overrides the default order of the grid-item for extra-large display sizes.
  */
  orderXl?: GridItemOrder;
  /**
  * Overrides the default order of the grid-item for extra-extra-large display sizes.
  */
  orderXxl?: GridItemOrder;
}
export interface GridItemJSX extends GridItemEvents, GridItemProperties {}
declare global {
  interface HTMLPlusGridItemElement extends HTMLElement, GridItemMethods, GridItemProperties {}
  var HTMLPlusGridItemElement: {
    prototype: HTMLPlusGridItemElement;
    new (): HTMLPlusGridItemElement;
  };
  interface HTMLElementTagNameMap {
    "plus-grid-item": HTMLPlusGridItemElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-grid-item": GridItemEvents & GridItemAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type GridItemElement = globalThis.HTMLPlusGridItemElement;