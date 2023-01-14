import { Element, Property, query } from '@htmlplus/element';

import { GridAlignContent, GridAlignItems, GridGutter, GridJustifyContent, GridWrap } from './grid.types';

/**
 * @slot default - The default slot.
 */
@Element()
export class Grid {
  /**
   * Aligns contents vertically across all rows (It overrides alignItems).
   */
  @Property()
  alignContent?: GridAlignContent = 'stretch';

  /**
   * Aligns contents vertically across all rows for extra-small display sizes
   * (It overrides alignItemsXs).
   */
  @Property()
  alignContentXs?: GridAlignContent;

  /**
   * Aligns contents vertically across all rows for small display sizes
   * (It overrides alignItemsSm).
   */
  @Property()
  alignContentSm?: GridAlignContent;

  /**
   * Aligns contents vertically across all rows for medium display sizes
   * (It overrides alignItemsMd).
   */
  @Property()
  alignContentMd?: GridAlignContent;

  /**
   * Aligns contents vertically across all rows for large display sizes
   * (It overrides alignItemsLg).
   */
  @Property()
  alignContentLg?: GridAlignContent;

  /**
   * Aligns contents vertically across all rows for extra-large display sizes
   * (It overrides alignItemsXl).
   */
  @Property()
  alignContentXl?: GridAlignContent;

  /**
   * Aligns contents vertically across all rows for extra-extra-large display sizes
   * (It overrides alignItemsXXl).
   */
  @Property()
  alignContentXxl?: GridAlignContent;

  /**
   * Aligns contents vertically inside their own row.
   */
  @Property()
  alignItems?: GridAlignItems = 'stretch';

  /**
   * Aligns contents vertically inside their own row for extra-small display sizes.
   */
  @Property()
  alignItemsXs?: GridAlignItems;

  /**
   * Aligns contents vertically inside their own row for small display sizes.
   */
  @Property()
  alignItemsSm?: GridAlignItems;

  /**
   * Aligns contents vertically inside their own row for medium display sizes.
   */
  @Property()
  alignItemsMd?: GridAlignItems;

  /**
   * Aligns contents vertically inside their own row for large display sizes.
   */
  @Property()
  alignItemsLg?: GridAlignItems;

  /**
   * Aligns contents vertically inside their own row for extra-large display sizes.
   */
  @Property()
  alignItemsXl?: GridAlignItems;

  /**
   * Aligns contents vertically inside their own row for extra-extra-large display sizes.
   */
  @Property()
  alignItemsXxl?: GridAlignItems;

  /**
   * Adds a gap between contents to make space between them vertically and horizontally.
   */
  @Property()
  gutter?: GridGutter;

  /**
   * Adds a gap between contents to make space between them horizontally.
   */
  @Property()
  gutterX?: GridGutter;

  /**
   * Adds a gap between contents to make space between them vertically.
   */
  @Property()
  gutterY?: GridGutter;

  /**
   * Justifies contents horizontally.
   */
  @Property()
  justifyContent?: GridJustifyContent = 'start';

  /**
   * Justifies contents horizontally for extra-small display sizes.
   */
  @Property()
  justifyContentXs?: GridJustifyContent;

  /**
   * Justifies contents horizontally for small display sizes.
   */
  @Property()
  justifyContentSm?: GridJustifyContent;

  /**
   * Justifies contents horizontally for medium display sizes.
   */
  @Property()
  justifyContentMd?: GridJustifyContent;

  /**
   * Justifies contents horizontally for large display sizes.
   */
  @Property()
  justifyContentLg?: GridJustifyContent;

  /**
   * Justifies contents horizontally for extra-large display sizes.
   */
  @Property()
  justifyContentXl?: GridJustifyContent;

  /**
   * Justifies contents horizontally for extra-extra-large display sizes.
   */
  @Property()
  justifyContentXxl?: GridJustifyContent;

  /**
   * Reverses the flow of contents from left-to-right to right-to-left, or vice-versa.
   */
  @Property()
  reverse?: boolean;

  /**
   * Changes the flow of contents from left-to-right to top-to-down.
   */
  @Property()
  vertical?: boolean;

  /**
   * Controls allowing the container to wrap the content or not if the cumulative width
   * size of contents is more than the twelve-column width.
   */
  @Property()
  wrap?: GridWrap = 'on';

  /**
   * Controls allowing the container to wrap the content or not if the cumulative width
   * size of contents is more than the twelve-column width for extra-small screen devices.
   */
  @Property()
  wrapXs?: GridWrap;

  /**
   * Controls allowing the container to wrap the content or not if the cumulative width
   * size of contents is more than the twelve-column width for small screen devices.
   */
  @Property()
  wrapSm?: GridWrap;

  /**
   * Controls allowing the container to wrap the content or not if the cumulative width
   * size of contents is more than the twelve-column width for medium screen devices.
   */
  @Property()
  wrapMd?: GridWrap;

  /**
   * Controls allowing the container to wrap the content or not if the cumulative width
   * size of contents is more than the twelve-column width for large screen devices.
   */
  @Property()
  wrapLg?: GridWrap;

  /**
   * Controls allowing the container to wrap the content or not if the cumulative width
   * size of contents is more than the twelve-column width for extra-large screen devices.
   */
  @Property()
  wrapXl?: GridWrap;

  /**
   * Controls allowing the container to wrap the content or not if the cumulative width
   * size of contents is more than the twelve-column width for extra-extra-large screen devices.
   */
  @Property()
  wrapXxl?: GridWrap;

  // TODO: auto keys detect, support spread attribute <div {...attributes} />
  updatedCallback() {
    const keys = [
      'alignContent',
      'alignContentXs',
      'alignContentSm',
      'alignContentMd',
      'alignContentLg',
      'alignContentXl',
      'alignContentXxl',
      'alignItems',
      'alignItemsXs',
      'alignItemsSm',
      'alignItemsMd',
      'alignItemsLg',
      'alignItemsXl',
      'alignItemsXxl',
      'gutter',
      'gutterX',
      'gutterY',
      'justifyContent',
      'justifyContentXs',
      'justifyContentSm',
      'justifyContentMd',
      'justifyContentLg',
      'justifyContentXl',
      'justifyContentXxl',
      'reverse',
      'vertical',
      'wrap',
      'wrapXs',
      'wrapSm',
      'wrapMd',
      'wrapLg',
      'wrapXl',
      'wrapXxl'
    ];

    const div = query(this, 'div');

    for (const key of keys) {
      const name = key.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
      const value = this[key];
      if (value) div.setAttribute(name, value);
      else div.removeAttribute(name);
    }
  }

  render() {
    return (
      <div>
        <slot />
      </div>
    );
  }
}
