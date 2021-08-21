/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusGrid as PlusGridCore } from '@htmlplus/core/dist/components/plus-grid';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-grid'))
  customElements.define('plus-grid', PlusGridCore);

export const PlusGrid = /*@__PURE__*/ proxy<HTMLPlusGridElement, JSX.PlusGrid>('plus-grid', {
  prefix: 'plus',
  props: ['alignContent', 'alignContentLg', 'alignContentMd', 'alignContentSm', 'alignContentXl', 'alignContentXs', 'alignContentXxl', 'alignItems', 'alignItemsLg', 'alignItemsMd', 'alignItemsSm', 'alignItemsXl', 'alignItemsXs', 'alignItemsXxl', 'gutter', 'gutterX', 'gutterY', 'justifyContent', 'justifyContentLg', 'justifyContentMd', 'justifyContentSm', 'justifyContentXl', 'justifyContentXs', 'justifyContentXxl', 'reverse', 'vertical', 'wrap', 'wrapLg', 'wrapMd', 'wrapSm', 'wrapXl', 'wrapXs', 'wrapXxl'],
  events: [],
});