export function Watch(...keys: Array<string>) {

    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        for (const key of keys) {

            Object.defineProperty(
                target,
                key,
                {
                    set(input) {

                        // TODO
                        console.log('Watch', key, this[key], input);

                        this[propertyKey](input, 'TODO', key);
                    },
                    enumerable: true,
                    configurable: true,
                }
            )
        }
    }
}
