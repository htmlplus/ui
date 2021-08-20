/* eslint-disable */
/* tslint:disable */
/* auto-generated react proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusDrawer } from '@htmlplus/core/dist/components/plus-drawer';
import { PlusDrawerToggler } from '@htmlplus/core/dist/components/plus-drawer-toggler';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-drawer'))
  customElements.define('plus-drawer', PlusDrawer);

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-drawer-toggler'))
  customElements.define('plus-drawer-toggler', PlusDrawerToggler);

const DrawerBase = /*@__PURE__*/ proxy<HTMLPlusDrawerElement, JSX.PlusDrawer>('plus-drawer', ['animation', 'backdrop', 'breakpoint', 'connector', 'flexible', 'mini', 'miniSize', 'open', 'persistent', 'placement', 'size', 'temporary'], ['plusClose', 'plusClosed', 'plusOpen', 'plusOpened']);
const DrawerToggler = /*@__PURE__*/ proxy<HTMLPlusDrawerTogglerElement, JSX.PlusDrawerToggler>('plus-drawer-toggler', ['connector'], []);
export const Drawer = /*@__PURE__*/ Object.assign(DrawerBase, {
  Toggler: DrawerToggler,
});