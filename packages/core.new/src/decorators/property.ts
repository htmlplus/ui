interface Options {
    // TODO: will be remove
    mutable?: boolean;
    reflect?: boolean;
}

export function Property(options?: Options) {

    return function (target: Object, propertyKey: string) {

        let value;

        const descriptor = {
            set(input) {

                if (value === input) return;

                const prev = value;

                value = input;

                if (!this.$api?.ready) return;

                this.$api?.property(propertyKey, input);

                for (const watcher of this.$watchers || []) {

                    const { key, handler } = watcher;

                    if (key != propertyKey && key != '*') continue;

                    handler.bind(this)(input, prev, propertyKey);
                }
            },
            get() {
                return value;
            },
            enumerable: true,
            configurable: true,
        };

        Object.defineProperty(target, propertyKey, descriptor);
    }
}