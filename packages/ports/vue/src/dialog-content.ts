/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusDialogContent as PlusDialogContentCore } from '@htmlplus/core/dist/components/plus-dialog-content';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-dialog-content'))
  customElements.define('plus-dialog-content', PlusDialogContentCore);

export const PlusDialogContent = /*@__PURE__*/ proxy<HTMLPlusDialogContentElement, JSX.PlusDialogContent>('plus-dialog-content', {
  prefix: 'plus',
  props: ['scrollable'],
  events: [],
});