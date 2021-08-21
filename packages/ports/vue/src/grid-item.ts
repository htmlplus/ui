/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusGridItem as PlusGridItemCore } from '@htmlplus/core/dist/components/plus-grid-item';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-grid-item'))
  customElements.define('plus-grid-item', PlusGridItemCore);

export const PlusGridItem = /*@__PURE__*/ proxy<HTMLPlusGridItemElement, JSX.PlusGridItem>('plus-grid-item', {
  prefix: 'plus',
  props: ['alignSelf', 'alignSelfLg', 'alignSelfMd', 'alignSelfSm', 'alignSelfXl', 'alignSelfXs', 'alignSelfXxl', 'hide', 'hideLg', 'hideLgDown', 'hideLgUp', 'hideMd', 'hideMdDown', 'hideMdUp', 'hideSm', 'hideSmDown', 'hideSmUp', 'hideXl', 'hideXlDown', 'hideXlUp', 'hideXs', 'hideXxl', 'hideXxlDown', 'lg', 'md', 'offsetLg', 'offsetMd', 'offsetSm', 'offsetXl', 'offsetXs', 'offsetXxl', 'orderLg', 'orderMd', 'orderSm', 'orderXl', 'orderXs', 'orderXxl', 'sm', 'xl', 'xs', 'xxl'],
  events: [],
});