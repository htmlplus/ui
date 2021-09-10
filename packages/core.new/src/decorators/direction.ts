export function Direction() {

    return function (target: Object, propertyKey: string) {

        const descriptor = {
            get() {

                const element = this.$api?.host();

                const direction = getComputedStyle(element).getPropertyValue('direction');

                return direction.toLowerCase();
            },
            enumerable: true,
            configurable: true,
        };

        Object.defineProperty(target, propertyKey, descriptor);
    }
}