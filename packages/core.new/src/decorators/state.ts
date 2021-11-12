import * as Helpers from '@app/helpers';

export function State() {

    return function (target: Object, propertyKey: PropertyKey) {

        let value;

        const descriptor = Object.getOwnPropertyDescriptor(target, propertyKey) || {};

        const set = descriptor.set;

        descriptor.configurable = true;

        descriptor.get = function () {
            return value;
        }

        descriptor.set = function (input) {

            set && set.bind(this)(input);

            if (input === value) return;

            value = input;

            const api = Helpers.api(this);

            if (!api.ready) return;

            api.state(propertyKey, input);
        }

        Object.defineProperty(target, propertyKey, descriptor);
    }
}