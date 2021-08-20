/* eslint-disable */
/* tslint:disable */
/* auto-generated react proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusIntersection } from '@htmlplus/core/dist/components/plus-intersection';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-intersection'))
  customElements.define('plus-intersection', PlusIntersection);

export const Intersection = /*@__PURE__*/ proxy<HTMLPlusIntersectionElement, JSX.PlusIntersection>('plus-intersection', ['behavior', 'disabled', 'once', 'root', 'rootMargin', 'threshold'], ['plusChange']);