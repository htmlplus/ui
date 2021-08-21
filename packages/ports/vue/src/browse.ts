/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusBrowse as PlusBrowseCore } from '@htmlplus/core/dist/components/plus-browse';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-browse'))
  customElements.define('plus-browse', PlusBrowseCore);

export const PlusBrowse = /*@__PURE__*/ proxy<HTMLPlusBrowseElement, JSX.PlusBrowse>('plus-browse', {
  prefix: 'plus',
  props: ['accept', 'disabled', 'droppable', 'max', 'maxSize', 'min', 'minSize', 'multiple'],
  events: ['plusChange', 'plusError', 'plusSuccess'],
});