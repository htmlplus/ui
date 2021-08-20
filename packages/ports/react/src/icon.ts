/* eslint-disable */
/* tslint:disable */
/* auto-generated react proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusIcon } from '@htmlplus/core/dist/components/plus-icon';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-icon'))
  customElements.define('plus-icon', PlusIcon);

export const Icon = /*@__PURE__*/ proxy<HTMLPlusIconElement, JSX.PlusIcon>('plus-icon', ['color', 'flip', 'name', 'rotate', 'size'], []);