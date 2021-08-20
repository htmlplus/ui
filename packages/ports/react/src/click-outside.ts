/* eslint-disable */
/* tslint:disable */
/* auto-generated react proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusClickOutside } from '@htmlplus/core/dist/components/plus-click-outside';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-click-outside'))
  customElements.define('plus-click-outside', PlusClickOutside);

export const ClickOutside = /*@__PURE__*/ proxy<HTMLPlusClickOutsideElement, JSX.PlusClickOutside>('plus-click-outside', ['disabled', 'once'], ['plusClickOutside']);