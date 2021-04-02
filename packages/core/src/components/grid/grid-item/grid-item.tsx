import { Component, Host, Prop, h } from '@stencil/core';
import { GlobalConfig } from '@app/services';
import { GridItemAlignSelf, GridItemColumn, GridItemOffset, GridItemOrder } from './grid-item.types';

/**
 * Use as many hp-grid-items as you want inside a hp-grid to layout your content.
 * @group grid
 * @slot - The default slot
 */
@Component({
  tag: 'plus-grid-item',
  styleUrl: 'grid-item.scss',
  shadow: true,
})
export class GridItem {

  /**
   * Aligns the grid-item vertically in its container (grid).
   * It overrides the align-items property of its parent.
   */
  @Prop({ reflect: true })
  alignSelf?: GridItemAlignSelf = 'auto';

  /**
   * Aligns the grid-item vertically in its container (grid) for extra-small display sizes.
   * It also applies to larger breakpoints and display sizes while they are not specified.
   * (It overrides the align-items property of its parent just for extra-small breakpoints).
   */
  @Prop({ reflect: true })
  alignSelfXs?: GridItemAlignSelf;

  /**
   * Aligns the grid-item vertically in its container (grid) for small display sizes.
   * It also applies to larger breakpoints and display sizes while they are not specified.
   * (It overrides the align-items property of its parent just for small breakpoints).
   */
  @Prop({ reflect: true })
  alignSelfSm?: GridItemAlignSelf;

  /**
   * Aligns the grid-item vertically in its container (grid) for medium display sizes.
   * It also applies to larger breakpoints and display sizes while they are not specified.
   * (It overrides the align-items property of its parent just for medium breakpoints).
   */
  @Prop({ reflect: true })
  alignSelfMd?: GridItemAlignSelf;

  /**
   * Aligns the grid-item vertically in its container (grid) for large display sizes.
   * It also applies to larger breakpoints and display sizes while they are not specified.
   * (It overrides the align-items property of its parent just for large breakpoints).
   */
  @Prop({ reflect: true })
  alignSelfLg?: GridItemAlignSelf;

  /**
   * Aligns the grid-item vertically in its container (grid) for extra-large display sizes.
   * It also applies to larger breakpoints and display sizes while they are not specified.
   * (It overrides the align-items property of its parent just for extra-large breakpoints).
   */
  @Prop({ reflect: true })
  alignSelfXl?: GridItemAlignSelf;

  /**
   * Aligns the grid-item vertically in its container (grid) for extra-extra-large display sizes.
   * It also applies to larger breakpoints and display sizes while they are not specified.
   * (It overrides the align-items property of its parent just for extra-extra-large breakpoints).
   */
  @Prop({ reflect: true })
  alignSelfXxl?: GridItemAlignSelf;

  /**
   * Specifies the number of columns for extra-small viewports (portrait phones).
   * It also determines the number of columns for bigger display sizes when
   * other upper breakpoints (sm, md, lg, xl and xxl) are not specified.
   */
  @Prop({ reflect: true })
  xs?: GridItemColumn;

  /**
   * Specifies the number of columns for small viewports (landscape phones).
   * It also determines the number of columns for bigger display sizes when
   * other upper breakpoints (md, lg, xl and xxl) are not specified.
   */
  @Prop({ reflect: true })
  sm?: GridItemColumn;

  /**
   * Specifies the number of columns for medium viewports (tablets).
   * It also determines the number of columns for bigger display sizes when
   * other upper breakpoints (lg, xl and xxl) are not specified.
   */
  @Prop({ reflect: true })
  md?: GridItemColumn;

  /**
   * Specifies the number of columns for large viewports (desktop).
   * It also determines the number of columns for bigger display sizes when
   * the upper breakpoint (xl and xxl) is not specified.
   */
  @Prop({ reflect: true })
  lg?: GridItemColumn;

  /**
   * Specifies the number of columns for large viewports (large desktops).
   * It also determines the number of columns for bigger display sizes when
   * the upper breakpoint (xxl) is not specified.
   */
  @Prop({ reflect: true })
  xl?: GridItemColumn;

  /**
   * Specifies the number of columns for extra-extra-large viewports (larger desktops).
   */
  @Prop({ reflect: true })
  xxl?: GridItemColumn;

  /**
   * Hides the grid-item in extra-small display sizes (portrait phones).
   */
  @Prop({ reflect: true })
  hideXs?: boolean;

  /**
   * Hides the grid-item in small display sizes (landscape phones).
   */
  @Prop({ reflect: true })
  hideSm?: boolean;

  /**
   * Hides the grid-item in medium display sizes (tablets).
   */
  @Prop({ reflect: true })
  hideMd?: boolean;

  /**
   * Hides the grid-item in large display sizes (desktop).
   */
  @Prop({ reflect: true })
  hideLg?: boolean;

  /**
   * Hides the grid-item in extra-large display sizes (large desktops).
   */
  @Prop({ reflect: true })
  hideXl?: boolean;

  /**
   * Hides the grid-item in extra-extra-large display sizes (larger desktops).
   */
  @Prop({ reflect: true })
  hideXxl?: boolean;

  /**
   * Hides the grid-item in all display sizes.
   */
  @Prop({ reflect: true })
  hide?: boolean;

  /**
   * Hides the grid-item in small and larger display sizes.
   */
  @Prop({ reflect: true })
  hideSmUp?: boolean;

  /**
   * Hides the grid-item in medium and larger display sizes.
   */
  @Prop({ reflect: true })
  hideMdUp?: boolean;

  /**
   * Hides the grid-item in large and larger display sizes.
   */
  @Prop({ reflect: true })
  hideLgUp?: boolean;

  /**
   * Hides the grid-item in large and larger display sizes.
   */
  @Prop({ reflect: true })
  hideXlUp?: boolean;

  /**
   * Hides the grid-item in small and smaller display sizes.
   */
  @Prop({ reflect: true })
  hideSmDown?: boolean;

  /**
   * Hides the grid-item in medium and smaller display sizes.
   */
  @Prop({ reflect: true })
  hideMdDown?: boolean;

  /**
   * Hides the grid-item in large and smaller display sizes.
   */
  @Prop({ reflect: true })
  hideLgDown?: boolean;

  /**
   * Hides the grid-item in large and smaller display sizes.
   */
  @Prop({ reflect: true })
  hideXlDown?: boolean;

  /**
   * Hides the grid-item in large and smaller display sizes.
   */
  @Prop({ reflect: true })
  hideXxlDown?: boolean;

  /**
   * Adds an offset space before the grid-item for extra-small display sizes.
   * It also applies to larger breakpoints and display sizes while they are not specified.
   */
  @Prop({ reflect: true })
  offsetXs?: GridItemOffset;

  /**
   * Adds an offset space before the grid-item for small display sizes.
   * It also applies to larger breakpoints and display sizes while they are not specified.
   */
  @Prop({ reflect: true })
  offsetSm?: GridItemOffset;

  /**
   * Adds an offset space before the grid-item for medium display sizes.
   * It also applies to larger breakpoints and display sizes while they are not specified.
   */
  @Prop({ reflect: true })
  offsetMd?: GridItemOffset;

  /**
   * Adds an offset space before the grid-item for large display sizes.
   * It also applies to the larger breakpoint (xl) while that is not specified.
   */
  @Prop({ reflect: true })
  offsetLg?: GridItemOffset;

  /**
   * Adds an offset space before the grid-item for extra-large display sizes.
   */
  @Prop({ reflect: true })
  offsetXl?: GridItemOffset;

  /**
   * Adds an offset space before the grid-item for extra-extra-large display sizes.
   */
  @Prop({ reflect: true })
  offsetXxl?: GridItemOffset;

  /**
   * Overrides the default order of the grid-item for extra-small display sizes.
   * It also applies to larger breakpoints and display sizes while they are not specified.
   */
  @Prop({ reflect: true })
  orderXs?: GridItemOrder;

  /**
   * Overrides the default order of the grid-item for small display sizes.
   * It also applies to larger breakpoints and display sizes while they are not specified.
   */
  @Prop({ reflect: true })
  orderSm?: GridItemOrder;

  /**
   * Overrides the default order of the grid-item for medium display sizes.
   * It also applies to larger breakpoints and display sizes while they are not specified.
   */
  @Prop({ reflect: true })
  orderMd?: GridItemOrder;

  /**
   * Overrides the default order of the grid-item for large display sizes.
   * It also applies to the larger breakpoint (xl) while that is not specified.
   */
  @Prop({ reflect: true })
  orderLg?: GridItemOrder;

  /**
   * Overrides the default order of the grid-item for extra-large display sizes.
   */
  @Prop({ reflect: true })
  orderXl?: GridItemOrder;

  /**
   * Overrides the default order of the grid-item for extra-extra-large display sizes.
   */
  @Prop({ reflect: true })
  orderXxl?: GridItemOrder;

  @GlobalConfig('gridItem', {
    alignSelf: 'auto'
  })
  config?;

  render() {
    return (
      <Host>
        <slot />
      </Host>
    )
  }
}
