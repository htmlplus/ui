/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusDivider as PlusDividerCore } from '@htmlplus/core/dist/components/plus-divider';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-divider'))
  customElements.define('plus-divider', PlusDividerCore);

export const PlusDivider = /*@__PURE__*/ proxy<HTMLPlusDividerElement, JSX.PlusDivider>('plus-divider', {
  prefix: 'plus',
  props: ['size', 'type', 'vertical'],
  events: [],
});