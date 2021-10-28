interface Options {
    // TODO: will be remove
    mutable?: boolean;
    reflect?: boolean;
}

export function Property(options?: Options) {

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

            if (!this.$api?.ready) return;

            this.$api?.property(propertyKey, input);
        }

        Object.defineProperty(target, propertyKey, descriptor);
    }
}