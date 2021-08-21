/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusSpinner as PlusSpinnerCore } from '@htmlplus/core/dist/components/plus-spinner';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-spinner'))
  customElements.define('plus-spinner', PlusSpinnerCore);

export const PlusSpinner = /*@__PURE__*/ proxy<HTMLPlusSpinnerElement, JSX.PlusSpinner>('plus-spinner', {
  prefix: 'plus',
  props: ['size', 'type'],
  events: [],
});