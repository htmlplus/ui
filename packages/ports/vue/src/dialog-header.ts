/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusDialogHeader as PlusDialogHeaderCore } from '@htmlplus/core/dist/components/plus-dialog-header';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-dialog-header'))
  customElements.define('plus-dialog-header', PlusDialogHeaderCore);

export const PlusDialogHeader = /*@__PURE__*/ proxy<HTMLPlusDialogHeaderElement, JSX.PlusDialogHeader>('plus-dialog-header', {
  prefix: 'plus',
  props: [],
  events: [],
});