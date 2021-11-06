export const toNumber = (input) => {

    if (typeof input != 'string') return input;

    if (input == '') return input;

    if (isNaN(input)) return input;

    return parseFloat(input);
};