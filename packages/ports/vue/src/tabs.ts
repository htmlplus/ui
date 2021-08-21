/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusTabs as PlusTabsCore } from '@htmlplus/core/dist/components/plus-tabs';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-tabs'))
  customElements.define('plus-tabs', PlusTabsCore);

export const PlusTabs = /*@__PURE__*/ proxy<HTMLPlusTabsElement, JSX.PlusTabs>('plus-tabs', {
  prefix: 'plus',
  props: ['connector', 'value', 'vertical'],
  events: ['plusChange'],
});