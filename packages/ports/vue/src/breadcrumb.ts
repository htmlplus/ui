/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusBreadcrumb as PlusBreadcrumbCore } from '@htmlplus/core/dist/components/plus-breadcrumb';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-breadcrumb'))
  customElements.define('plus-breadcrumb', PlusBreadcrumbCore);

export const PlusBreadcrumb = /*@__PURE__*/ proxy<HTMLPlusBreadcrumbElement, JSX.PlusBreadcrumb>('plus-breadcrumb', {
  prefix: 'plus',
  props: ['expanderText', 'max', 'offset', 'separator'],
  events: [],
});