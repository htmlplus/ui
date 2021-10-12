import * as Case from 'case';

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

                if (options?.reflect) {

                    const $host = this.$api?.host();

                    // TODO
                    const attribute = Case.kebab(propertyKey);

                    if (value === undefined) {
                        $host.removeAttribute(attribute);
                    }
                    else if (value === false) {
                        $host.removeAttribute(attribute);
                    }
                    else if (value === true) {
                        $host.setAttribute(attribute, '');
                    }
                    else {
                        $host.setAttribute(attribute, value);
                    }
                }

                this.$api?.property(propertyKey, input);

                for (const watcher of this.$watchers || []) {

                    const { key, handler } = watcher;

                    if (key != propertyKey && key != '*') continue;

                    handler.bind(this)(input, prev, propertyKey);

                    // TODO
                    console.log('watcher', input, prev, propertyKey)
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