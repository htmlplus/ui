import { isEvent, getEventName } from '../../../../utils/index.js';

// TODO: next
export const sync = (node, prev) => (next = {}) => {

    const prevClass = (prev.class || '').split(' ');
    const nextClass = (next.class || '').split(' ');

    const newClass = (node.className || '')
        .split(' ')
        .filter((key) => !prevClass.includes(key) && !nextClass.includes(key))
        .concat(nextClass)
        .filter((key) => key)
        .join(' ');

    if (newClass)
        node.className = newClass;
    else
        node.removeAttribute('class');

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

        if (key == 'class' || key == 'style') continue;

        if (isEvent(key)) {

            const name = getEventName(key);

            node.addEventListener(name, value);

            continue;
        }

        if (value === undefined) {
            node.removeAttribute(key);
        }
        else if (value === false) {
            node.removeAttribute(key);
        }
        else if (value === true) {
            node.setAttribute(key, '');
        }
        else {
            node.setAttribute(key, value);
        }
    }

    prev = { ...next };
};