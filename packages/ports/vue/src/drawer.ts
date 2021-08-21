/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusDrawer as PlusDrawerCore } from '@htmlplus/core/dist/components/plus-drawer';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-drawer'))
  customElements.define('plus-drawer', PlusDrawerCore);

export const PlusDrawer = /*@__PURE__*/ proxy<HTMLPlusDrawerElement, JSX.PlusDrawer>('plus-drawer', {
  prefix: 'plus',
  props: ['animation', 'backdrop', 'breakpoint', 'connector', 'flexible', 'mini', 'miniSize', 'open', 'persistent', 'placement', 'size', 'temporary'],
  events: ['plusClose', 'plusClosed', 'plusOpen', 'plusOpened'],
});