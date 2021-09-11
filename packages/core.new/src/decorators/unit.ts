export function Unit() {

    return function (target: Object, propertyKey: string) {

        const descriptor = {
            set(input) {
                input;
            },
            get() {

            },
            enumerable: true,
            configurable: true,
        };

        Object.defineProperty(target, propertyKey, descriptor);
    }
}