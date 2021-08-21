/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusDrawerToggler as PlusDrawerTogglerCore } from '@htmlplus/core/dist/components/plus-drawer-toggler';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-drawer-toggler'))
  customElements.define('plus-drawer-toggler', PlusDrawerTogglerCore);

export const PlusDrawerToggler = /*@__PURE__*/ proxy<HTMLPlusDrawerTogglerElement, JSX.PlusDrawerToggler>('plus-drawer-toggler', {
  prefix: 'plus',
  props: ['connector'],
  events: [],
});