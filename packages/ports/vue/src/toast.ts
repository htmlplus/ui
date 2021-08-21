/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusToast as PlusToastCore } from '@htmlplus/core/dist/components/plus-toast';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-toast'))
  customElements.define('plus-toast', PlusToastCore);

export const PlusToast = /*@__PURE__*/ proxy<HTMLPlusToastElement, JSX.PlusToast>('plus-toast', {
  prefix: 'plus',
  props: ['animation', 'connector', 'duration', 'fullWidth', 'open', 'persistent', 'placement', 'reverse', 'type'],
  events: ['plusClose', 'plusClosed', 'plusOpen', 'plusOpened'],
});