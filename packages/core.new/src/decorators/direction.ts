import { getComputedStyle } from '@app/helpers';

export function Direction() {

    return function (target: Object, propertyKey: PropertyKey) {

        const descriptor = {
            get() {

                const $host = this.$api?.host();

                const direction = getComputedStyle($host, 'direction');

                return direction.toLowerCase();
            }
        }

        Object.defineProperty(target, propertyKey, descriptor);
    }
}