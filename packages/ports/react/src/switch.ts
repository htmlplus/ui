/* eslint-disable */
/* tslint:disable */
/* auto-generated react proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusSwitch } from '@htmlplus/core/dist/components/plus-switch';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-switch'))
  customElements.define('plus-switch', PlusSwitch);

export const Switch = /*@__PURE__*/ proxy<HTMLPlusSwitchElement, JSX.PlusSwitch>('plus-switch', ['checked', 'disabled', 'inset', 'reverse'], ['plusChange']);