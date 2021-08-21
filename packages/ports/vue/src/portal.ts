/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusPortal as PlusPortalCore } from '@htmlplus/core/dist/components/plus-portal';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-portal'))
  customElements.define('plus-portal', PlusPortalCore);

export const PlusPortal = /*@__PURE__*/ proxy<HTMLPlusPortalElement, JSX.PlusPortal>('plus-portal', {
  prefix: 'plus',
  props: ['disabled', 'strategy', 'target'],
  events: [],
});