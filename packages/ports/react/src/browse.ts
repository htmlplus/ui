/* eslint-disable */
/* tslint:disable */
/* auto-generated react proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusBrowse } from '@htmlplus/core/dist/components/plus-browse';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-browse'))
  customElements.define('plus-browse', PlusBrowse);

export const Browse = /*@__PURE__*/ proxy<HTMLPlusBrowseElement, JSX.PlusBrowse>('plus-browse', ['accept', 'disabled', 'droppable', 'max', 'maxSize', 'min', 'minSize', 'multiple'], ['plusChange', 'plusError', 'plusSuccess']);