import { Element, Property } from '@htmlplus/element';

import { PlusBase } from '@app/core';

import {
  GridItemAlignSelf,
  GridItemColumn,
  GridItemOffset,
  GridItemOrder
} from './grid-item.types';

/**
 * @slot default - The default slot.
 */
@Element()
export class GridItem extends PlusBase {
  /**
   * Aligns the grid-item vertically in its container (grid).
   * It overrides the align-items property of its parent.
   */
  @Property({ reflect: true })
  alignSelf?: GridItemAlignSelf = 'auto';

  /**
   * Aligns the grid-item vertically in its container (grid) for extra-small display sizes.
   * It also applies to larger breakpoints and display sizes while they are not specified.
   * (It overrides the align-items property of its parent just for extra-small breakpoints).
   */
  @Property({ reflect: true })
  alignSelfXs?: GridItemAlignSelf;

  /**
   * Aligns the grid-item vertically in its container (grid) for small display sizes.
   * It also applies to larger breakpoints and display sizes while they are not specified.
   * (It overrides the align-items property of its parent just for small breakpoints).
   */
  @Property({ reflect: true })
  alignSelfSm?: GridItemAlignSelf;

  /**
   * Aligns the grid-item vertically in its container (grid) for medium display sizes.
   * It also applies to larger breakpoints and display sizes while they are not specified.
   * (It overrides the align-items property of its parent just for medium breakpoints).
   */
  @Property({ reflect: true })
  alignSelfMd?: GridItemAlignSelf;

  /**
   * Aligns the grid-item vertically in its container (grid) for large display sizes.
   * It also applies to larger breakpoints and display sizes while they are not specified.
   * (It overrides the align-items property of its parent just for large breakpoints).
   */
  @Property({ reflect: true })
  alignSelfLg?: GridItemAlignSelf;

  /**
   * Aligns the grid-item vertically in its container (grid) for extra-large display sizes.
   * It also applies to larger breakpoints and display sizes while they are not specified.
   * (It overrides the align-items property of its parent just for extra-large breakpoints).
   */
  @Property({ reflect: true })
  alignSelfXl?: GridItemAlignSelf;

  /**
   * Aligns the grid-item vertically in its container (grid) for extra-extra-large display sizes.
   * It also applies to larger breakpoints and display sizes while they are not specified.
   * (It overrides the align-items property of its parent just for extra-extra-large breakpoints).
   */
  @Property({ reflect: true })
  alignSelfXxl?: GridItemAlignSelf;

  /**
   * Specifies the number of columns for extra-small viewports (portrait phones).
   * It also determines the number of columns for bigger display sizes when
   * other upper breakpoints (sm, md, lg, xl and xxl) are not specified.
   */
  @Property({ reflect: true })
  xs?: GridItemColumn;

  /**
   * Specifies the number of columns for small viewports (landscape phones).
   * It also determines the number of columns for bigger display sizes when
   * other upper breakpoints (md, lg, xl and xxl) are not specified.
   */
  @Property({ reflect: true })
  sm?: GridItemColumn;

  /**
   * Specifies the number of columns for medium viewports (tablets).
   * It also determines the number of columns for bigger display sizes when
   * other upper breakpoints (lg, xl and xxl) are not specified.
   */
  @Property({ reflect: true })
  md?: GridItemColumn;

  /**
   * Specifies the number of columns for large viewports (desktop).
   * It also determines the number of columns for bigger display sizes when
   * the upper breakpoint (xl and xxl) is not specified.
   */
  @Property({ reflect: true })
  lg?: GridItemColumn;

  /**
   * Specifies the number of columns for large viewports (large desktops).
   * It also determines the number of columns for bigger display sizes when
   * the upper breakpoint (xxl) is not specified.
   */
  @Property({ reflect: true })
  xl?: GridItemColumn;

  /**
   * Specifies the number of columns for extra-extra-large viewports (larger desktops).
   */
  @Property({ reflect: true })
  xxl?: GridItemColumn;

  /**
   * Hides the grid-item in extra-small display sizes (portrait phones).
   */
  @Property({ reflect: true })
  hideXs?: boolean;

  /**
   * Hides the grid-item in small display sizes (landscape phones).
   */
  @Property({ reflect: true })
  hideSm?: boolean;

  /**
   * Hides the grid-item in medium display sizes (tablets).
   */
  @Property({ reflect: true })
  hideMd?: boolean;

  /**
   * Hides the grid-item in large display sizes (desktop).
   */
  @Property({ reflect: true })
  hideLg?: boolean;

  /**
   * Hides the grid-item in extra-large display sizes (large desktops).
   */
  @Property({ reflect: true })
  hideXl?: boolean;

  /**
   * Hides the grid-item in extra-extra-large display sizes (larger desktops).
   */
  @Property({ reflect: true })
  hideXxl?: boolean;

  /**
   * Hides the grid-item in all display sizes.
   */
  @Property({ reflect: true })
  hide?: boolean;

  /**
   * Hides the grid-item in small and larger display sizes.
   */
  @Property({ reflect: true })
  hideSmUp?: boolean;

  /**
   * Hides the grid-item in medium and larger display sizes.
   */
  @Property({ reflect: true })
  hideMdUp?: boolean;

  /**
   * Hides the grid-item in large and larger display sizes.
   */
  @Property({ reflect: true })
  hideLgUp?: boolean;

  /**
   * Hides the grid-item in large and larger display sizes.
   */
  @Property({ reflect: true })
  hideXlUp?: boolean;

  /**
   * Hides the grid-item in small and smaller display sizes.
   */
  @Property({ reflect: true })
  hideSmDown?: boolean;

  /**
   * Hides the grid-item in medium and smaller display sizes.
   */
  @Property({ reflect: true })
  hideMdDown?: boolean;

  /**
   * Hides the grid-item in large and smaller display sizes.
   */
  @Property({ reflect: true })
  hideLgDown?: boolean;

  /**
   * Hides the grid-item in large and smaller display sizes.
   */
  @Property({ reflect: true })
  hideXlDown?: boolean;

  /**
   * Hides the grid-item in large and smaller display sizes.
   */
  @Property({ reflect: true })
  hideXxlDown?: boolean;

  /**
   * Adds an offset space before the grid-item for extra-small display sizes.
   * It also applies to larger breakpoints and display sizes while they are not specified.
   */
  @Property({ reflect: true })
  offsetXs?: GridItemOffset;

  /**
   * Adds an offset space before the grid-item for small display sizes.
   * It also applies to larger breakpoints and display sizes while they are not specified.
   */
  @Property({ reflect: true })
  offsetSm?: GridItemOffset;

  /**
   * Adds an offset space before the grid-item for medium display sizes.
   * It also applies to larger breakpoints and display sizes while they are not specified.
   */
  @Property({ reflect: true })
  offsetMd?: GridItemOffset;

  /**
   * Adds an offset space before the grid-item for large display sizes.
   * It also applies to the larger breakpoint (xl) while that is not specified.
   */
  @Property({ reflect: true })
  offsetLg?: GridItemOffset;

  /**
   * Adds an offset space before the grid-item for extra-large display sizes.
   */
  @Property({ reflect: true })
  offsetXl?: GridItemOffset;

  /**
   * Adds an offset space before the grid-item for extra-extra-large display sizes.
   */
  @Property({ reflect: true })
  offsetXxl?: GridItemOffset;

  /**
   * Overrides the default order of the grid-item for extra-small display sizes.
   * It also applies to larger breakpoints and display sizes while they are not specified.
   */
  @Property({ reflect: true })
  orderXs?: GridItemOrder;

  /**
   * Overrides the default order of the grid-item for small display sizes.
   * It also applies to larger breakpoints and display sizes while they are not specified.
   */
  @Property({ reflect: true })
  orderSm?: GridItemOrder;

  /**
   * Overrides the default order of the grid-item for medium display sizes.
   * It also applies to larger breakpoints and display sizes while they are not specified.
   */
  @Property({ reflect: true })
  orderMd?: GridItemOrder;

  /**
   * Overrides the default order of the grid-item for large display sizes.
   * It also applies to the larger breakpoint (xl) while that is not specified.
   */
  @Property({ reflect: true })
  orderLg?: GridItemOrder;

  /**
   * Overrides the default order of the grid-item for extra-large display sizes.
   */
  @Property({ reflect: true })
  orderXl?: GridItemOrder;

  /**
   * Overrides the default order of the grid-item for extra-extra-large display sizes.
   */
  @Property({ reflect: true })
  orderXxl?: GridItemOrder;

  render() {
    return <slot />;
  }
}
