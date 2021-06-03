import { Component, ComponentInterface, Host, Prop, h } from '@stencil/core';
import { GlobalConfig } from '@app/utils';
import { GridAlignContent, GridAlignItems, GridGutter, GridJustifyContent, GridWrap } from './grid.types';

/**
 * @group grid
 * @slot default - The default slot.
 */
@Component({
  tag: 'plus-grid',
  styleUrl: 'grid.scss',
  shadow: true,
})
export class Grid implements ComponentInterface {

  /**
   * Aligns contents vertically across all rows (It overrides alignItems).
   */
  @Prop()
  alignContent?: GridAlignContent = 'stretch';

  /**
   * Aligns contents vertically across all rows for extra-small display sizes
   * (It overrides alignItemsXs).
   */
  @Prop()
  alignContentXs?: GridAlignContent;

  /**
   * Aligns contents vertically across all rows for small display sizes
   * (It overrides alignItemsSm).
   */
  @Prop()
  alignContentSm?: GridAlignContent;

  /**
   * Aligns contents vertically across all rows for medium display sizes
   * (It overrides alignItemsMd).
   */
  @Prop()
  alignContentMd?: GridAlignContent;

  /**
   * Aligns contents vertically across all rows for large display sizes
   * (It overrides alignItemsLg).
   */
  @Prop()
  alignContentLg?: GridAlignContent;

  /**
   * Aligns contents vertically across all rows for extra-large display sizes
   * (It overrides alignItemsXl).
   */
  @Prop()
  alignContentXl?: GridAlignContent;

  /**
   * Aligns contents vertically across all rows for extra-extra-large display sizes
   * (It overrides alignItemsXXl).
   */
  @Prop()
  alignContentXxl?: GridAlignContent;

  /**
   * Aligns contents vertically inside their own row.
   */
  @Prop()
  alignItems?: GridAlignItems = 'stretch';

  /**
   * Aligns contents vertically inside their own row for extra-small display sizes.
   */
  @Prop()
  alignItemsXs?: GridAlignItems;

  /**
   * Aligns contents vertically inside their own row for small display sizes.
   */
  @Prop()
  alignItemsSm?: GridAlignItems;

  /**
   * Aligns contents vertically inside their own row for medium display sizes.
   */
  @Prop()
  alignItemsMd?: GridAlignItems;

  /**
   * Aligns contents vertically inside their own row for large display sizes.
   */
  @Prop()
  alignItemsLg?: GridAlignItems;

  /**
   * Aligns contents vertically inside their own row for extra-large display sizes.
   */
  @Prop()
  alignItemsXl?: GridAlignItems;

  /**
   * Aligns contents vertically inside their own row for extra-extra-large display sizes.
   */
  @Prop()
  alignItemsXxl?: GridAlignItems;

  /**
   * Adds a gap between contents to make space between them vertically and horizontally.
   */
  @Prop()
  gutter?: GridGutter;

  /**
   * Adds a gap between contents to make space between them horizontally.
   */
  @Prop()
  gutterX?: GridGutter;

  /**
   * Adds a gap between contents to make space between them vertically.
   */
  @Prop()
  gutterY?: GridGutter;

  /**
   * Justifies contents horizontally.
   */
  @Prop()
  justifyContent?: GridJustifyContent = 'start';

  /**
   * Justifies contents horizontally for extra-small display sizes.
   */
  @Prop()
  justifyContentXs?: GridJustifyContent;

  /**
   * Justifies contents horizontally for small display sizes.
   */
  @Prop()
  justifyContentSm?: GridJustifyContent;

  /**
   * Justifies contents horizontally for medium display sizes.
   */
  @Prop()
  justifyContentMd?: GridJustifyContent;

  /**
   * Justifies contents horizontally for large display sizes.
   */
  @Prop()
  justifyContentLg?: GridJustifyContent;

  /**
   * Justifies contents horizontally for extra-large display sizes.
   */
  @Prop()
  justifyContentXl?: GridJustifyContent;

  /**
   * Justifies contents horizontally for extra-extra-large display sizes.
   */
  @Prop()
  justifyContentXxl?: GridJustifyContent;

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
  wrap?: GridWrap = 'on';

  /**
   * Controls allowing the container to wrap the content or not if the cumulative width
   * size of contents is more than the twelve-column width for extra-small screen devices.
   */
  @Prop()
  wrapXs?: GridWrap;

  /**
   * Controls allowing the container to wrap the content or not if the cumulative width
   * size of contents is more than the twelve-column width for small screen devices.
   */
  @Prop()
  wrapSm?: GridWrap;

  /**
   * Controls allowing the container to wrap the content or not if the cumulative width
   * size of contents is more than the twelve-column width for medium screen devices.
   */
  @Prop()
  wrapMd?: GridWrap;

  /**
   * Controls allowing the container to wrap the content or not if the cumulative width
   * size of contents is more than the twelve-column width for large screen devices.
   */
  @Prop()
  wrapLg?: GridWrap;

  /**
   * Controls allowing the container to wrap the content or not if the cumulative width
   * size of contents is more than the twelve-column width for extra-large screen devices.
   */
  @Prop()
  wrapXl?: GridWrap;

  /**
   * Controls allowing the container to wrap the content or not if the cumulative width
   * size of contents is more than the twelve-column width for extra-extra-large screen devices.
   */
  @Prop()
  wrapXxl?: GridWrap;

  @GlobalConfig('grid', {
    alignContent: 'stretch',
    alignItems: 'stretch',
    justifyContent: 'start',
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
      <Host>
        <div {...this.attributes}>
          <slot />
        </div>
      </Host>
    )
  }
}
