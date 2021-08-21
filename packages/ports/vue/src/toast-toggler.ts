/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusToastToggler as PlusToastTogglerCore } from '@htmlplus/core/dist/components/plus-toast-toggler';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-toast-toggler'))
  customElements.define('plus-toast-toggler', PlusToastTogglerCore);

export const PlusToastToggler = /*@__PURE__*/ proxy<HTMLPlusToastTogglerElement, JSX.PlusToastToggler>('plus-toast-toggler', {
  prefix: 'plus',
  props: ['connector'],
  events: [],
});