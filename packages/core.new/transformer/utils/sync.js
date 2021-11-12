import { getEventName } from './get-event-name.js';
import { isEvent } from './is-event.js';
import { setAttribute } from './set-attribute.js';

export const sync = (node, prev) => (next = {}) => {

    const prevClass = (prev.class || '').split(' ');
    const nextClass = (next.class || '').split(' ');

    const newClass = (node.className || '')
        .split(' ')
        .filter((key) => !prevClass.includes(key) && !nextClass.includes(key))
        .concat(nextClass)
        .filter((key) => key)
        .join(' ');

    setAttribute(node, 'class', newClass);

    if (prev.style || next.style)
        node.setAttribute('style', next.style || '');

    for (const key in prev) {

        const value = prev[key];

        if (!isEvent(key)) continue;

        const name = getEventName(key);

        node.removeEventListener(name, value);
    }

    for (const key in next) {

        const value = next[key];

        if (['class', 'style'].includes(key)) continue;

        if (isEvent(key)) {

            const name = getEventName(key);

            node.addEventListener(name, value);

            continue;
        }

        setAttribute(node, key, value);
    }

    prev = { ...next };
};