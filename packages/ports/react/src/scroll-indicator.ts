/* eslint-disable */
/* tslint:disable */
/* auto-generated react proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusScrollIndicator } from '@htmlplus/core/dist/components/plus-scroll-indicator';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-scroll-indicator'))
  customElements.define('plus-scroll-indicator', PlusScrollIndicator);

export const ScrollIndicator = /*@__PURE__*/ proxy<HTMLPlusScrollIndicatorElement, JSX.PlusScrollIndicator>('plus-scroll-indicator', ['disabled', 'source'], ['plusScroll']);