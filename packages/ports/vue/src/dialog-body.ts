/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusDialogBody as PlusDialogBodyCore } from '@htmlplus/core/dist/components/plus-dialog-body';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-dialog-body'))
  customElements.define('plus-dialog-body', PlusDialogBodyCore);

export const PlusDialogBody = /*@__PURE__*/ proxy<HTMLPlusDialogBodyElement, JSX.PlusDialogBody>('plus-dialog-body', {
  prefix: 'plus',
  props: ['scrollable'],
  events: [],
});