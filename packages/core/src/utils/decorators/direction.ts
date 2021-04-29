import { Helper } from '@app/utils';

export function Direction() {

    return function (instance: {} | any, key: PropertyKey) {

        const descriptor = {
            get(this: any) {
                return Helper.direction(this);
            },
            enumerable: true,
            configurable: true,
        }

        Object.defineProperty(instance, key, descriptor);
    }
}