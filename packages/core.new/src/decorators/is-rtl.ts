export function IsRTL() {

    return function (target: Object, propertyKey: string) {

        const descriptor = {
            get() {

                const $host = this.$api?.host();

                const direction = getComputedStyle($host).getPropertyValue('direction');

                const isLTR = direction.toLowerCase() === 'rtl';

                return isLTR;
            },
            enumerable: true,
            configurable: true,
        };

        Object.defineProperty(target, propertyKey, descriptor);
    }
}