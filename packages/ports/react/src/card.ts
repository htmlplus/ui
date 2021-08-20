/* eslint-disable */
/* tslint:disable */
/* auto-generated react proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusCard } from '@htmlplus/core/dist/components/plus-card';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-card'))
  customElements.define('plus-card', PlusCard);

export const Card = /*@__PURE__*/ proxy<HTMLPlusCardElement, JSX.PlusCard>('plus-card', ['elevation', 'flat', 'outlined', 'tile'], []);