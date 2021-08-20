/* eslint-disable */
/* tslint:disable */
/* auto-generated react proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusSticky } from '@htmlplus/core/dist/components/plus-sticky';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-sticky'))
  customElements.define('plus-sticky', PlusSticky);

export const Sticky = /*@__PURE__*/ proxy<HTMLPlusStickyElement, JSX.PlusSticky>('plus-sticky', ['disabled', 'top', 'watcher', 'zIndex'], ['plusChange']);