/* eslint-disable */
/* tslint:disable */
/* auto-generated react proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusBreadcrumb } from '@htmlplus/core/dist/components/plus-breadcrumb';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-breadcrumb'))
  customElements.define('plus-breadcrumb', PlusBreadcrumb);

export const Breadcrumb = /*@__PURE__*/ proxy<HTMLPlusBreadcrumbElement, JSX.PlusBreadcrumb>('plus-breadcrumb', ['expanderText', 'max', 'offset', 'separator'], []);