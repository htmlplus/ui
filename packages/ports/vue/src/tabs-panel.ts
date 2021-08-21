/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusTabsPanel as PlusTabsPanelCore } from '@htmlplus/core/dist/components/plus-tabs-panel';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-tabs-panel'))
  customElements.define('plus-tabs-panel', PlusTabsPanelCore);

export const PlusTabsPanel = /*@__PURE__*/ proxy<HTMLPlusTabsPanelElement, JSX.PlusTabsPanel>('plus-tabs-panel', {
  prefix: 'plus',
  props: ['value'],
  events: [],
});