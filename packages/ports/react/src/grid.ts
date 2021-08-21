/* eslint-disable */
/* tslint:disable */
/* auto-generated react proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusGrid } from '@htmlplus/core/dist/components/plus-grid';
import { PlusGridItem } from '@htmlplus/core/dist/components/plus-grid-item';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-grid'))
  customElements.define('plus-grid', PlusGrid);

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-grid-item'))
  customElements.define('plus-grid-item', PlusGridItem);

const GridBase = /*@__PURE__*/ proxy<HTMLPlusGridElement, JSX.PlusGrid>('plus-grid', ['alignContent', 'alignContentLg', 'alignContentMd', 'alignContentSm', 'alignContentXl', 'alignContentXs', 'alignContentXxl', 'alignItems', 'alignItemsLg', 'alignItemsMd', 'alignItemsSm', 'alignItemsXl', 'alignItemsXs', 'alignItemsXxl', 'gutter', 'gutterX', 'gutterY', 'justifyContent', 'justifyContentLg', 'justifyContentMd', 'justifyContentSm', 'justifyContentXl', 'justifyContentXs', 'justifyContentXxl', 'reverse', 'vertical', 'wrap', 'wrapLg', 'wrapMd', 'wrapSm', 'wrapXl', 'wrapXs', 'wrapXxl'], []);
const GridItem = /*@__PURE__*/ proxy<HTMLPlusGridItemElement, JSX.PlusGridItem>('plus-grid-item', ['alignSelf', 'alignSelfLg', 'alignSelfMd', 'alignSelfSm', 'alignSelfXl', 'alignSelfXs', 'alignSelfXxl', 'hide', 'hideLg', 'hideLgDown', 'hideLgUp', 'hideMd', 'hideMdDown', 'hideMdUp', 'hideSm', 'hideSmDown', 'hideSmUp', 'hideXl', 'hideXlDown', 'hideXlUp', 'hideXs', 'hideXxl', 'hideXxlDown', 'lg', 'md', 'offsetLg', 'offsetMd', 'offsetSm', 'offsetXl', 'offsetXs', 'offsetXxl', 'orderLg', 'orderMd', 'orderSm', 'orderXl', 'orderXs', 'orderXxl', 'sm', 'xl', 'xs', 'xxl'], []);

export const Grid = /*@__PURE__*/ Object.assign(GridBase, {
  Item: GridItem,
});