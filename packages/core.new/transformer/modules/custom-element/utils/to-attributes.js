export const toAttributes = (node, attributes = {}) => {

    const keys = Object.keys(attributes);

    // TODO
    const isEvent = (key) => {
        return key.indexOf('on') === 0 && key[2] === key[2].toUpperCase();
    }

    const getName = (key) => key.substr(2).toLowerCase();

    const events = (key) => isEvent(key);
    const others = (key) => !isEvent(key);

    // TODO 
    // const apply = (key) => node[key] = attributes[key];
    const apply = (key) => {

        console.log(123, key)

        const value = attributes[key];

        if (typeof value === 'undefined') return;

        return node.setAttribute(key, value);
    }

    const setup = (key) => {

        const name = getName(key);

        const handler = attributes[key];

        return node.addEventListener(name, handler);
    }

    const teardown = (key) => {

        const name = getName(key);

        const handler = attributes[key];

        return node.removeEventListener(name, handler);
    }

    const update = (attrs) => {

        const keys = Object.keys(attrs);

        keys.filter(events).map(teardown);

        keys.filter(events).map(setup);

        keys.filter(others).map(apply);
    }

    const destroy = () => {
        keys.filter(events).map(teardown)
    }

    keys.filter(events).map(setup);
    keys.filter(others).map(apply);

    return {
        update,
        destroy
    }
}