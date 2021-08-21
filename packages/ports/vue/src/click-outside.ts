/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusClickOutside as PlusClickOutsideCore } from '@htmlplus/core/dist/components/plus-click-outside';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-click-outside'))
  customElements.define('plus-click-outside', PlusClickOutsideCore);

export const PlusClickOutside = /*@__PURE__*/ proxy<HTMLPlusClickOutsideElement, JSX.PlusClickOutside>('plus-click-outside', {
  prefix: 'plus',
  props: ['disabled', 'once'],
  events: ['plusClickOutside'],
});