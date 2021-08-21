/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusDialogToggler as PlusDialogTogglerCore } from '@htmlplus/core/dist/components/plus-dialog-toggler';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-dialog-toggler'))
  customElements.define('plus-dialog-toggler', PlusDialogTogglerCore);

export const PlusDialogToggler = /*@__PURE__*/ proxy<HTMLPlusDialogTogglerElement, JSX.PlusDialogToggler>('plus-dialog-toggler', {
  prefix: 'plus',
  props: ['connector'],
  events: [],
});