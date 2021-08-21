/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusTabsBar as PlusTabsBarCore } from '@htmlplus/core/dist/components/plus-tabs-bar';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-tabs-bar'))
  customElements.define('plus-tabs-bar', PlusTabsBarCore);

export const PlusTabsBar = /*@__PURE__*/ proxy<HTMLPlusTabsBarElement, JSX.PlusTabsBar>('plus-tabs-bar', {
  prefix: 'plus',
  props: ['grow', 'justify', 'reverse'],
  events: [],
});