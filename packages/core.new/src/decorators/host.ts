export function Host() {

    return function (target: Object, propertyKey: PropertyKey) {

        const descriptor = {
            get() {
                return this.$api?.host();
            }
        }

        Object.defineProperty(target, propertyKey, descriptor);
    }
}