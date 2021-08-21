/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusTransition as PlusTransitionCore } from '@htmlplus/core/dist/components/plus-transition';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-transition'))
  customElements.define('plus-transition', PlusTransitionCore);

export const PlusTransition = /*@__PURE__*/ proxy<HTMLPlusTransitionElement, JSX.PlusTransition>('plus-transition', {
  prefix: 'plus',
  props: ['delay', 'direction', 'duration', 'name', 'repeat'],
  events: ['plusCancel', 'plusEnd', 'plusIteration', 'plusStart'],
});