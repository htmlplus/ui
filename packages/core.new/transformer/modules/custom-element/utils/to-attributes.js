const getName = (key) => key.substr(2).toLowerCase();

const isEvent = (key) => key.match(/on[A-Z]\w+/g);

export const toAttributes = (node, attributes = {}) => {

    const events = {};

    const bind = (key, handler) => {

        const name = getName(key);

        node.addEventListener(name, handler);

        events[key] = handler;
    }

    const destroy = () => {
        Object.keys(events).forEach((key) => unbind(key));
    }

    const unbind = (key) => {

        const name = getName(key);

        const handler = events[key];

        node.removeEventListener(name, handler);

        delete events[key];
    }

    const update = (attributes) => {

        Object.keys(events).forEach((key) => unbind(key));

        const keys = Object.keys(attributes);

        node.getAttributeNames()
            .filter((key) => !keys.includes(key))
            .forEach((key) => node.removeAttribute(key));

        keys.forEach((key) => {

            const value = attributes[key];

            const isUndefined = (typeof value === 'undefined');

            if (isEvent(key))
                return bind(key, value);

            if (node.hasAttribute(key)) {

                if (node.getAttribute(key) === value) return;

                if (isUndefined)
                    node.removeAttribute(key);
                else
                    node.setAttribute(key, value);

                return;
            }

            if (!isUndefined)
                node.setAttribute(key, value);
        })
    }

    Object.keys(attributes)
        .forEach((key) => {

            const value = attributes[key];

            if (isEvent(key))
                return bind(key, value);

            if (typeof value === 'undefined') return;

            node.setAttribute(key, value);
        });

    return {
        update,
        destroy
    }
}