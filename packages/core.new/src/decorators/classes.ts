import * as Case from 'case';

const parse = (input, smart?: boolean) => {

    if (typeof input == 'undefined') return input;

    const classes = [];

    const type = Object.prototype.toString.call(input);

    switch (type) {

        case '[object Array]': {

            input.forEach((item) => classes.push(parse(item, smart)));

            break;
        }

        case '[object Object]': {

            const keys = Object.keys(input);

            for (const key of keys) {

                const value = input[key];

                const name = Case.kebab(key);

                const type = Object.prototype.toString.call(value);

                if (!smart) {

                    if (!value) continue;

                    classes.push(name);

                    continue;
                }

                switch (type) {

                    case '[object Boolean]': {

                        if (!value) continue;

                        classes.push(`${name}`);

                        break;
                    }

                    case '[object Number]': {

                        classes.push(`${name}-${value}`);

                        break;
                    }

                    case '[object String]': {

                        switch (value) {

                            case '':
                            case 'true':
                                classes.push(`${name}`);
                                break;

                            case 'false':
                                break;

                            default:
                                classes.push(`${name}-${value}`);
                                break;
                        }

                        break;
                    }
                }
            }

            break;
        }

        case '[object String]': {

            classes.push(input);

            break;
        }
    }

    return classes.join(' ');
}

export function Classes(smart?: boolean) {

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const fn = descriptor.get.bind(target);

        descriptor.get = () => parse(fn(), smart);

        return descriptor;
    }
}