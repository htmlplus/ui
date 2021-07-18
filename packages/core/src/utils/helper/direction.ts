import { getElement } from '@stencil/core';

export const direction = (instance?) => {

  const element = instance ? getElement(instance) : window.document.body;

  const direction = getComputedStyle(element).getPropertyValue('direction');

  return direction;
}