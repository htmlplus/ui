/* eslint-disable */
/* tslint:disable */
/* auto-generated react proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusTooltip } from '@htmlplus/core/dist/components/plus-tooltip';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-tooltip'))
  customElements.define('plus-tooltip', PlusTooltip);

export const Tooltip = /*@__PURE__*/ proxy<HTMLPlusTooltipElement, JSX.PlusTooltip>('plus-tooltip', ['animation', 'appendTo', 'arrow', 'delay', 'disabled', 'fixed', 'flip', 'placement', 'trigger'], []);