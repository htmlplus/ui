/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusTabsTab as PlusTabsTabCore } from '@htmlplus/core/dist/components/plus-tabs-tab';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-tabs-tab'))
  customElements.define('plus-tabs-tab', PlusTabsTabCore);

export const PlusTabsTab = /*@__PURE__*/ proxy<HTMLPlusTabsTabElement, JSX.PlusTabsTab>('plus-tabs-tab', {
  prefix: 'plus',
  props: ['disabled', 'value'],
  events: [],
});