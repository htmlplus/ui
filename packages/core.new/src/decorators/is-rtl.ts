export function IsRTL() {

    return function (target: Object, propertyKey: PropertyKey) {

        const descriptor = {
            configurable: true,
            get() {

                const $host = this.$api?.host();

                const direction = getComputedStyle($host).getPropertyValue('direction');

                const isLTR = direction.toLowerCase() === 'rtl';

                return isLTR;
            },
        };

        Object.defineProperty(target, propertyKey, descriptor);
    }
}