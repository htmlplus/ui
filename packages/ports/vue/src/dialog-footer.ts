/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusDialogFooter as PlusDialogFooterCore } from '@htmlplus/core/dist/components/plus-dialog-footer';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-dialog-footer'))
  customElements.define('plus-dialog-footer', PlusDialogFooterCore);

export const PlusDialogFooter = /*@__PURE__*/ proxy<HTMLPlusDialogFooterElement, JSX.PlusDialogFooter>('plus-dialog-footer', {
  prefix: 'plus',
  props: [],
  events: [],
});