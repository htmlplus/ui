const getName = (key) => key.substr(2).toLowerCase();

const isEvent = (key) => key.match(/on[A-Z]\w+/g);

// TODO: next
export const sync = (node, prev) => (next = {}) => {


    /**
     * class
     */

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

    /**
     * style
     */
    if (prev.style || next.style)
        node.setAttribute('style', next.style || '');

    /**
     * remove prev events
     */
    for (const key in prev) {

        const value = prev[key];

        if (!isEvent(key)) continue;

        const name = getName(key);

        node.removeEventListener(name, value);
    }

    /**
     * attributes and events
     */
    for (const key in next) {

        const value = next[key];

        if (key == 'class' || key == 'style') continue;

        if (isEvent(key)) {

            const name = getName(key);

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