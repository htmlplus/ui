export function Styles() {

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const fn = descriptor.get.bind(target);

        descriptor.get = function () {

            const input: any = fn();

            if (typeof input == 'undefined') return input;

            const type = Object.prototype.toString.call(input);

            if (type === '[object Array]')
                return input.join('; ');

            if (type !== '[object Object]')
                return input;

            let styles = [];

            const keys = Object.keys(input);

            for (const key of keys) {

                const name = key.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(x => x.toLowerCase()).join('-');

                styles.push(`${name}: ${input[key]}`);
            }

            return styles.join(';');
        }

        return descriptor;
    }
}