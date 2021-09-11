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
