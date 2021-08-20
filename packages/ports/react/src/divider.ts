/* eslint-disable */
/* tslint:disable */
/* auto-generated react proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusDivider } from '@htmlplus/core/dist/components/plus-divider';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-divider'))
  customElements.define('plus-divider', PlusDivider);

export const Divider = /*@__PURE__*/ proxy<HTMLPlusDividerElement, JSX.PlusDivider>('plus-divider', ['size', 'type', 'vertical'], []);