/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusSticky as PlusStickyCore } from '@htmlplus/core/dist/components/plus-sticky';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-sticky'))
  customElements.define('plus-sticky', PlusStickyCore);

export const PlusSticky = /*@__PURE__*/ proxy<HTMLPlusStickyElement, JSX.PlusSticky>('plus-sticky', {
  prefix: 'plus',
  props: ['disabled', 'top', 'watcher', 'zIndex'],
  events: ['plusChange'],
});