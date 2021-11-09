export function Slots() {

    return function (target: Object, propertyKey: PropertyKey) {

        const descriptor = {
            get() {
                return this.$api?.slots();
            }
        }

        Object.defineProperty(target, propertyKey, descriptor);
    }
}