/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusScrollIndicator as PlusScrollIndicatorCore } from '@htmlplus/core/dist/components/plus-scroll-indicator';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-scroll-indicator'))
  customElements.define('plus-scroll-indicator', PlusScrollIndicatorCore);

export const PlusScrollIndicator = /*@__PURE__*/ proxy<HTMLPlusScrollIndicatorElement, JSX.PlusScrollIndicator>('plus-scroll-indicator', {
  prefix: 'plus',
  props: ['disabled', 'source'],
  events: ['plusScroll'],
});