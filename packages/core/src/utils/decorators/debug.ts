
import debug from 'debug';
import * as Constants from '@app/constants';

// TODO
debug.enable('*');

export function Debug(namespace: string) {

    const warn = debug(`[${Constants.NAMESPACE}:${namespace}]`);

    warn.log = console.warn.bind(console);

    return function (instance: {} | any, key: PropertyKey) {

        const descriptor = {
            get(this: any) {
                return warn;
            },
            enumerable: true,
            configurable: true,
        }

        Object.defineProperty(instance, key, descriptor);
    }
}