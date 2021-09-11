export function State() {

    return function (target: Object, propertyKey: string) {

        let value;

        const descriptor = {
            set(input) {

                value = input;

                this.$api?.state(propertyKey, input);
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