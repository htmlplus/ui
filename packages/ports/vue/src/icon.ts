/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusIcon as PlusIconCore } from '@htmlplus/core/dist/components/plus-icon';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-icon'))
  customElements.define('plus-icon', PlusIconCore);

export const PlusIcon = /*@__PURE__*/ proxy<HTMLPlusIconElement, JSX.PlusIcon>('plus-icon', {
  prefix: 'plus',
  props: ['color', 'flip', 'name', 'rotate', 'size'],
  events: [],
});