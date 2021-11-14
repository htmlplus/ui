import { toKebabCase } from './to-kebab-case';
import { typeOf } from './type-of';

export const styles = (input) => {

    const type = typeOf(input);

    if (type == 'undefined')
        return input;

    if (type == 'array')
        return input.join('; ');

    if (type != 'object')
        return input;

    return Object
        .keys(input)
        .map((key) => `${toKebabCase(key)}: ${input[key]}`)
        .join('; ');
}