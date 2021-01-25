import { getElement } from '@stencil/core';

export const isRTL = (instance) => {
    return getComputedStyle(getElement(instance)).getPropertyValue('direction') === 'rtl';
}