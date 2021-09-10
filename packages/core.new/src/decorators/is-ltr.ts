export function IsLTR() {

    return function (target: Object, propertyKey: string) {

        const descriptor = {
            get() {

                const element = this.$api?.host();

                const direction = getComputedStyle(element).getPropertyValue('direction');

                const isLTR = direction.toLowerCase() === 'ltr';

                return isLTR;
            },
            enumerable: true,
            configurable: true,
        };

        Object.defineProperty(target, propertyKey, descriptor);
    }
}