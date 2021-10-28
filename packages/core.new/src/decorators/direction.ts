export function Direction() {

    return function (target: Object, propertyKey: PropertyKey) {

        const descriptor = {
            get() {

                const $host = this.$api?.host();

                const direction = getComputedStyle($host).getPropertyValue('direction');

                return direction.toLowerCase();
            },
        };

        Object.defineProperty(target, propertyKey, descriptor);
    }
}