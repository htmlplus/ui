/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusTooltip as PlusTooltipCore } from '@htmlplus/core/dist/components/plus-tooltip';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-tooltip'))
  customElements.define('plus-tooltip', PlusTooltipCore);

export const PlusTooltip = /*@__PURE__*/ proxy<HTMLPlusTooltipElement, JSX.PlusTooltip>('plus-tooltip', {
  prefix: 'plus',
  props: ['animation', 'appendTo', 'arrow', 'delay', 'disabled', 'fixed', 'flip', 'placement', 'trigger'],
  events: [],
});