/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusAspectRatio as PlusAspectRatioCore } from '@htmlplus/core/dist/components/plus-aspect-ratio';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-aspect-ratio'))
  customElements.define('plus-aspect-ratio', PlusAspectRatioCore);

export const PlusAspectRatio = /*@__PURE__*/ proxy<HTMLPlusAspectRatioElement, JSX.PlusAspectRatio>('plus-aspect-ratio', {
  prefix: 'plus',
  props: ['value'],
  events: [],
});