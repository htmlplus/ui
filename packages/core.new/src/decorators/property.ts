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

                value = input;

                this.$api?.property(propertyKey, input);

                if (!options?.reflect) return;

                const element = this.$api?.host();
                
                // TODO: propertyKey convert to camel case
                element.setAttribute(propertyKey, input);
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