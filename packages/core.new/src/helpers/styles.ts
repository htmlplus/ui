import { typeOf } from './type-of';

export const styles = (input) => {

    const type = typeOf(input);

    if (type == 'undefined')
        return input;

    if (type === 'array')
        return input.join('; ');

    if (type !== 'object')
        return input;

    let styles = [];

    const keys = Object.keys(input);

    for (const key of keys) {

        // TODO
        const name = key
            .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
            .map(x => x.toLowerCase())
            .join('-');

        styles.push(`${name}: ${input[key]}`);
    }

    return styles.join(';');
}