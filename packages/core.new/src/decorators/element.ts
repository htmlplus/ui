export function Element() {

    return function (target: Object, propertyKey: string) {

        const descriptor = {
            get() {
                return this.$api?.host();
            },
            enumerable: true,
            configurable: true,
        };

        Object.defineProperty(target, propertyKey, descriptor);
    }
}