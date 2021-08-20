/* eslint-disable */
/* tslint:disable */
/* auto-generated react proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusTransition } from '@htmlplus/core/dist/components/plus-transition';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-transition'))
  customElements.define('plus-transition', PlusTransition);

export const Transition = /*@__PURE__*/ proxy<HTMLPlusTransitionElement, JSX.PlusTransition>('plus-transition', ['delay', 'direction', 'duration', 'name', 'repeat'], ['plusCancel', 'plusEnd', 'plusIteration', 'plusStart']);