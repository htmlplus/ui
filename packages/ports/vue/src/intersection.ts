/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusIntersection as PlusIntersectionCore } from '@htmlplus/core/dist/components/plus-intersection';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-intersection'))
  customElements.define('plus-intersection', PlusIntersectionCore);

export const PlusIntersection = /*@__PURE__*/ proxy<HTMLPlusIntersectionElement, JSX.PlusIntersection>('plus-intersection', {
  prefix: 'plus',
  props: ['behavior', 'disabled', 'once', 'root', 'rootMargin', 'threshold'],
  events: ['plusChange'],
});