export function Direction() {

    return function (target: Object, propertyKey: string) {

        const descriptor = {
            get() {

                const $host = this.$api?.host();

                const direction = getComputedStyle($host).getPropertyValue('direction');

                return direction.toLowerCase();
            },
            enumerable: true,
            configurable: true,
        };

        Object.defineProperty(target, propertyKey, descriptor);
    }
}