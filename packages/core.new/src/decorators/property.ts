interface Options {
    // TODO: will be remove
    mutable?: boolean;
    reflect?: boolean;
}

export function Property(options?: Options) {

    return function (target: Object, propertyKey: string) {

        let value;

        const descriptor = {
            set(input) {

                if (value === input) return;

                value = input;

                // TODO: propertyKey convert to camel case
                propertyKey;

                if (options?.reflect) {

                    const $host = this.$api?.host();

                    if (value === undefined) {
                        $host.removeAttribute(propertyKey);
                    }
                    else if (value === false) {
                        $host.removeAttribute(propertyKey);
                    }
                    else if (value === true) {
                        $host.setAttribute(propertyKey, '');
                    }
                    else {
                        $host.setAttribute(propertyKey, value);
                    }
                }

                this.$api?.property(propertyKey, input);
            },
            get() {
                return value;
            },
            enumerable: true,
            configurable: true,
        };

        Object.defineProperty(target, propertyKey, descriptor);
    }
}