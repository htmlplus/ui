export const toAttributes = (node, attributes) => {

    const keys = Object.keys(attributes = {});

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
        return node.setAttribute(key, attributes[key]);
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

export const toBoolean = (input) => input + '' === 'true' || input + '' === '';

export const toClass = (input) => {

    const type = Object.prototype.toString.call(input);

    if (type === '[object Array]')
        return input.join(' ');

    if (type !== '[object Object]')
        return input;

    let result = '';

    const keys = Object.keys(input);

    for (const key of keys) {

        const value = input[key];

        if (!value) continue;

        result += key + ' ';
    }

    return result;
};

export const toStyle = (input) => {

    const type = Object.prototype.toString.call(input);

    if (type === '[object Array]')
        return input.join('; ');

    if (type !== '[object Object]')
        return input; let result = '';

    const keys = Object.keys(input);

    for (const key of keys) {

        const name = key.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(x => x.toLowerCase()).join('-');

        result += name + ': ' + input[key] + '; ';
    }

    return result;
};
