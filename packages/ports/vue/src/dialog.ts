/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusDialog as PlusDialogCore } from '@htmlplus/core/dist/components/plus-dialog';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-dialog'))
  customElements.define('plus-dialog', PlusDialogCore);

export const PlusDialog = /*@__PURE__*/ proxy<HTMLPlusDialogElement, JSX.PlusDialog>('plus-dialog', {
  prefix: 'plus',
  props: ['animation', 'backdrop', 'connector', 'fullHeight', 'fullWidth', 'fullscreen', 'keyboard', 'open', 'persistent', 'placement', 'portal', 'portalStrategy', 'portalTarget', 'scrollable', 'size', 'sticky'],
  events: ['plusClose', 'plusClosed', 'plusOpen', 'plusOpened'],
});