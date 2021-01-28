import { Component, Prop, h } from '@stencil/core';
import { GlobalConfig } from '@app/services';
import { AlignContents, AlignItems, Gutters, Justifies, Wraps } from './grid.types';

/**
 * TODO: HTML+ grid is extremely flexible and powerful.
 * All you need is to use one of the best flexbox-based grid systems ever in the world
 * to build simple to complex responsive layouts, just using two main components:
 * hp-grid (as a container) & hp-grid-item.
 * Use these components to align content in any form & shape and for all screen sizes
 * with 12 available column sizes and 5 default breakpoints.
 * @group grid
 * @slot - The default slot
 * @examples default, auto-sizing, gutters, gutters-x, gutters-y, align-items, align-content, align-self, justify, reverse, wrap, offset, order, hide, vertical
 */
@Component({
  tag: 'plus-grid',
  styleUrl: 'grid.scss',
  shadow: true,
})
export class Grid {

  /**
   * Aligns contents vertically across all rows (It overrides alignItems).
   */
  @Prop()
  alignContent?: AlignContents = 'stretch';

  /**
   * Aligns contents vertically across all rows for extra-small display sizes
   * (It overrides alignItemsXs).
   */
  @Prop()
  alignContentXs?: AlignContents;

  /**
   * Aligns contents vertically across all rows for small display sizes
   * (It overrides alignItemsSm).
   */
  @Prop()
  alignContentSm?: AlignContents;

  /**
   * Aligns contents vertically across all rows for medium display sizes
   * (It overrides alignItemsMd).
   */
  @Prop()
  alignContentMd?: AlignContents;

  /**
   * Aligns contents vertically across all rows for large display sizes
   * (It overrides alignItemsLg).
   */
  @Prop()
  alignContentLg?: AlignContents;

  /**
   * Aligns contents vertically across all rows for extra-large display sizes
   * (It overrides alignItemsXl).
   */
  @Prop()
  alignContentXl?: AlignContents;

  /**
   * Aligns contents vertically inside their own row.
   */
  @Prop()
  alignItems?: AlignItems = 'stretch';

  /**
   * Aligns contents vertically inside their own row for extra-small display sizes.
   */
  @Prop()
  alignItemsXs?: AlignItems;

  /**
   * Aligns contents vertically inside their own row for small display sizes.
   */
  @Prop()
  alignItemsSm?: AlignItems;

  /**
   * Aligns contents vertically inside their own row for medium display sizes.
   */
  @Prop()
  alignItemsMd?: AlignItems;

  /**
   * Aligns contents vertically inside their own row for large display sizes.
   */
  @Prop()
  alignItemsLg?: AlignItems;

  /**
   * Aligns contents vertically inside their own row for extra-large display sizes.
   */
  @Prop()
  alignItemsXl?: AlignItems;

  /**
   * Adds a gap between contents to make space between them vertically and horizontally.
   */
  @Prop()
  gutter?: Gutters;

  /**
   * Adds a gap between contents to make space between them horizontally.
   */
  @Prop()
  gutterX?: Gutters;

  /**
   * Adds a gap between contents to make space between them vertically.
   */
  @Prop()
  gutterY?: Gutters;

  /**
   * Justifies contents horizontally.
   */
  @Prop()
  justify?: Justifies = 'start';

  /**
   * Justifies contents horizontally for extra-small display sizes.
   */
  @Prop()
  justifyXs?: Justifies;

  /**
   * Justifies contents horizontally for small display sizes.
   */
  @Prop()
  justifySm?: Justifies;

  /**
   * Justifies contents horizontally for medium display sizes.
   */
  @Prop()
  justifyMd?: Justifies;

  /**
   * Justifies contents horizontally for large display sizes.
   */
  @Prop()
  justifyLg?: Justifies;

  /**
   * Justifies contents horizontally for extra-large display sizes.
   */
  @Prop()
  justifyXl?: Justifies;

  /**
   * Reverses the flow of contents from left-to-right to right-to-left, or vice-versa.
   */
  @Prop()
  reverse?: boolean;

  /**
   * Changes the flow of contents from left-to-right to top-to-down.
   */
  @Prop()
  vertical?: boolean;

  /**
   * Controls allowing the container to wrap the content or not if the cumulative width
   * size of contents is more than the twelve-column width.
   */
  @Prop()
  wrap?: Wraps = 'on';

  /**
   * Controls allowing the container to wrap the content or not if the cumulative width
   * size of contents is more than the twelve-column width for extra-small screen devices.
   */
  @Prop()
  wrapXs?: Wraps;

  /**
   * Controls allowing the container to wrap the content or not if the cumulative width
   * size of contents is more than the twelve-column width for small screen devices.
   */
  @Prop()
  wrapSm?: Wraps;

  /**
   * Controls allowing the container to wrap the content or not if the cumulative width
   * size of contents is more than the twelve-column width for medium screen devices.
   */
  @Prop()
  wrapMd?: Wraps;

  /**
   * Controls allowing the container to wrap the content or not if the cumulative width
   * size of contents is more than the twelve-column width for large screen devices.
   */
  @Prop()
  wrapLg?: Wraps;

  /**
   * Controls allowing the container to wrap the content or not if the cumulative width
   * size of contents is more than the twelve-column width for extra-large screen devices.
   */
  @Prop()
  wrapXl?: Wraps;

  @GlobalConfig('grid', {
    alignContent: 'stretch',
    alignItems: 'stretch',
    justify: 'start',
    wrap: 'on',
  })
  config?;

  get attributes() {

    const result: any = {};

    for (var property in this) {

      const key = property.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();

      result[key] = this[property];
    }

    return result;
  }

  render() {
    return (
      <div {...this.attributes}>
        <slot />
      </div>
    );
  }
}
