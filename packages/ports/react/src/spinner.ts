/* eslint-disable */
/* tslint:disable */
/* auto-generated react proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusSpinner } from '@htmlplus/core/dist/components/plus-spinner';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-spinner'))
  customElements.define('plus-spinner', PlusSpinner);

export const Spinner = /*@__PURE__*/ proxy<HTMLPlusSpinnerElement, JSX.PlusSpinner>('plus-spinner', ['size', 'type'], []);