import { getElement } from '@stencil/core';

export function Slots() {

  return function (instance: {} | any, key: PropertyKey) {

    const descriptor = {
      get(this: any) {

        const result = {};

        const element = getElement(this);

        const nodes = Array.from(element.childNodes);

        for (let i = 0; i < nodes.length; i++) {

          const item = nodes[i];

          const slot = item['slot'] || 'default';

          result[slot] = result[slot] || [];

          result[slot].push(item);
        }

        return result;
      },
      enumerable: true,
      configurable: true,
    }

    Object.defineProperty(instance, key, descriptor);
  }
}