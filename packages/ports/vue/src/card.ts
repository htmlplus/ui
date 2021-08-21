/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusCard as PlusCardCore } from '@htmlplus/core/dist/components/plus-card';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-card'))
  customElements.define('plus-card', PlusCardCore);

export const PlusCard = /*@__PURE__*/ proxy<HTMLPlusCardElement, JSX.PlusCard>('plus-card', {
  prefix: 'plus',
  props: ['elevation', 'flat', 'outlined', 'tile'],
  events: [],
});