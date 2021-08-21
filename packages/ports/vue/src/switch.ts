/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusSwitch as PlusSwitchCore } from '@htmlplus/core/dist/components/plus-switch';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-switch'))
  customElements.define('plus-switch', PlusSwitchCore);

export const PlusSwitch = /*@__PURE__*/ proxy<HTMLPlusSwitchElement, JSX.PlusSwitch>('plus-switch', {
  prefix: 'plus',
  props: ['checked', 'disabled', 'inset', 'reverse'],
  events: ['plusChange'],
  model: {
    prop: 'checked',
    event: 'plusChange'
  },
});