/* eslint-disable */
/* tslint:disable */
/* auto-generated react proxies */
import { proxy } from './proxy';
import type { JSX } from '@htmlplus/core';

import { PlusCropper } from '@htmlplus/core/dist/components/plus-cropper';

if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('plus-cropper'))
  customElements.define('plus-cropper', PlusCropper);

export const Cropper = /*@__PURE__*/ proxy<HTMLPlusCropperElement, JSX.PlusCropper>('plus-cropper', ['area', 'aspectRatio', 'backdrop', 'background', 'disabled', 'guides', 'indicator', 'mode', 'resizer', 'resizerShape', 'responsive', 'shape', 'src', 'value', 'view', 'zoomRatio', 'zoomable'], ['plusCrop', 'plusReady', 'plusZoom']);