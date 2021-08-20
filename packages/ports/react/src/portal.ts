/* eslint-disable */
/* tslint:disable */
/* auto-generated react proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusPortal } from '@htmlplus/core/dist/components/plus-portal';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-portal'))
  customElements.define('plus-portal', PlusPortal);

export const Portal = /*@__PURE__*/ proxy<HTMLPlusPortalElement, JSX.PlusPortal>('plus-portal', ['disabled', 'strategy', 'target'], []);