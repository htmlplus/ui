import { getElement } from '@stencil/core';

export const slots = (instance): { [slot: string]: any } => {

    const element = getElement(instance);

    const result = {};

    const items = Array.from(element.childNodes);

    for (let i = 0; i < items.length; i++) {

        const item = items[i];

        const slot = item['slot'];

        if (slot !== undefined && slot !== '') {

            result[slot] = item;
        }
        else if (!item.nodeValue || item.nodeValue.trim()) {

            result['default'] = item;
        }
    }

    return result;
};