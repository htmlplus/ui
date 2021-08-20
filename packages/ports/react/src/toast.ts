/* eslint-disable */
/* tslint:disable */
/* auto-generated react proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusToast } from '@htmlplus/core/dist/components/plus-toast';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-toast'))
  customElements.define('plus-toast', PlusToast);

export const Toast = /*@__PURE__*/ proxy<HTMLPlusToastElement, JSX.PlusToast>('plus-toast', ['animation', 'connector', 'duration', 'fullWidth', 'open', 'persistent', 'placement', 'reverse', 'type'], ['plusClose', 'plusClosed', 'plusOpen', 'plusOpened']);