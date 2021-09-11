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