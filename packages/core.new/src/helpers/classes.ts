import * as Helper from '@app/helpers';

export const classes = (input, smart?: boolean) => {

    if (typeof input == 'undefined') return input;

    const result = [];

    const type = Helper.typeOf(input);

    switch (type) {

        case 'array': {

            input.forEach((item) => result.push(classes(item, smart)));

            break;
        }

        case 'object': {

            const keys = Object.keys(input);

            for (const key of keys) {

                const value = input[key];

                const name = Helper.toKebabCase(key);

                const type = Helper.typeOf(value);

                if (!smart) {

                    if (!value) continue;

                    result.push(name);

                    continue;
                }

                switch (type) {

                    case 'boolean': {

                        if (!value) continue;

                        result.push(`${name}`);

                        break;
                    }

                    case 'number': {

                        result.push(`${name}-${value}`);

                        break;
                    }

                    case 'string': {

                        switch (value) {

                            case '':
                            case 'true':
                                result.push(`${name}`);
                                break;

                            case 'false':
                                break;

                            default:
                                result.push(`${name}-${value}`);
                                break;
                        }

                        break;
                    }
                }
            }

            break;
        }

        case 'string': {

            result.push(input);

            break;
        }
    }

    return result.join(' ');
}