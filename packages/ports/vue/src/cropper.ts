/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusCropper as PlusCropperCore } from '@htmlplus/core/dist/components/plus-cropper';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-cropper'))
  customElements.define('plus-cropper', PlusCropperCore);

export const PlusCropper = /*@__PURE__*/ proxy<HTMLPlusCropperElement, JSX.PlusCropper>('plus-cropper', {
  prefix: 'plus',
  props: ['area', 'aspectRatio', 'backdrop', 'background', 'disabled', 'guides', 'indicator', 'mode', 'resizer', 'resizerShape', 'responsive', 'shape', 'src', 'value', 'view', 'zoomRatio', 'zoomable'],
  events: ['plusCrop', 'plusReady', 'plusZoom'],
});