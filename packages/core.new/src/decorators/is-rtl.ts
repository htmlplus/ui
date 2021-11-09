import { getComputedStyle } from '@app/helpers';

export function IsRTL() {

    return function (target: Object, propertyKey: PropertyKey) {

        const descriptor = {
            get() {

                const $host = this.$api?.host();

                const direction = getComputedStyle($host, 'direction');

                const isLTR = direction.toLowerCase() === 'rtl';

                return isLTR;
            }
        }

        Object.defineProperty(target, propertyKey, descriptor);
    }
}