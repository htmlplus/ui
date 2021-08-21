/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusTabsPanels as PlusTabsPanelsCore } from '@htmlplus/core/dist/components/plus-tabs-panels';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-tabs-panels'))
  customElements.define('plus-tabs-panels', PlusTabsPanelsCore);

export const PlusTabsPanels = /*@__PURE__*/ proxy<HTMLPlusTabsPanelsElement, JSX.PlusTabsPanels>('plus-tabs-panels', {
  prefix: 'plus',
  props: ['connector'],
  events: [],
});