type LinkV2Instance = any;
type LinkV2PropertyName = string;
type LinkV2PropertyType = 'action' | 'inject' | 'observable';
type LinkV2Property = {
    type?: LinkV2PropertyType;
    name?: LinkV2PropertyName;
    instance?: LinkV2Instance;
    target?: LinkV2Target;
    value?: any;
}
type LinkV2Target = any;

export type LinkV2Config = {
    scope?: Function;
}

export const createLinkV2 = (config: LinkV2Config) => {

    const properties: Array<LinkV2Property> = [];

    const add = (source: LinkV2Property) => {
        properties.push(source);
    }

    const get = (source: LinkV2Property) => {
        return source.instance[source.name];
    }

    const set = (source: LinkV2Property, value: any) => {
        source.instance[source.name] = value;
    }

    const reset = (source: LinkV2Property) => {

        const value = get(source);

        if (source.type === 'action') return;

        if (source.type !== 'observable') return set(source, source.value /* value */);

        Object.defineProperty(
            source.instance,
            source.name,
            {
                value,
                enumerable: true,
                configurable: true,
            }
        )
    }

    const scope = (source: LinkV2Property) => {
        return config.scope(source.instance);
    }

    const map = (source: LinkV2Property, destination: LinkV2Property) => {

        let value = get(source);

        if (typeof value === 'function')
            value = value.bind(source.instance);

        set(destination, value);
    }

    const proxy = (source: LinkV2Property) => {

        let value = get(source);

        Object.defineProperty(
            source.instance,
            source.name,
            {
                enumerable: true,
                configurable: true,
                get() {
                    return value;
                },
                set(input) {

                    if (input === value) return;

                    value = input;

                    filter(source)
                        .filter((destination) => destination.type === 'inject')
                        .map((destination) => set(destination, value))
                }
            }
        )
    }

    const filter = (source: LinkV2Property) => {

        return properties.filter((destination) => {

            if (destination.name !== source.name) return false;

            if (scope(source) !== scope(destination)) return false;

            return true;
        })
    }

    const connect = (source: LinkV2Property) => {

        filter(source).forEach((destination) => {

            switch (source.type) {

                // inject haye az ghabl register shode bayad filter shavand va in action dakhele anha inject shavad
                case 'action':

                    if (destination.type !== 'inject') return;

                    map(source, destination);

                    break;

                // update all `inject` or `observable` types from `source` based on `destination`
                case 'inject':

                    if (destination.type === 'inject') return;

                    map(destination, source);

                    break;

                // update all `inject` types from `destination` based on `source`
                case 'observable':

                    if (destination.type !== 'inject') return;

                    map(source, destination);

                    proxy(source);

                    break;
            }
        });

        if (source.type === 'observable') proxy(source);

        properties.push(source);

        console.log(1, properties)
    }

    const disconnect = (source: LinkV2Property) => {

        if (source.type !== 'action') reset(source);

        filter(source).forEach((destination) => {

            if (source === destination) return;

            if (source.type === 'inject') return;

            if (destination.type !== 'inject') return;

            reset(destination);
        });

        const index = properties.findIndex((property) => property === source);

        if (index !== -1) properties.splice(index, 1);
    }

    const reconnect = (instance: LinkV2Instance) => {

        properties.forEach((property) => {

            if (property.instance !== instance) return;

            disconnect(property);

            connect(property);
        });
    }

    const register = (type: LinkV2PropertyType) => () => (target: LinkV2Target, name: LinkV2PropertyName) => {

        const connected = target.connectedCallback;

        target.connectedCallback = function () {

            connected && connected.bind(this)();

            const property: LinkV2Property = {
                type,
                name,
                target,
                instance: this,
                value: this[name],
            }

            // add(property);

            connect(property);
        }

        const disconnected = target.disconnectedCallback;

        target.disconnectedCallback = function () {

            disconnected && disconnected.bind(this)();

            const property: LinkV2Property = properties.find((property) => property.instance === this && property.name === name);

            disconnect(property);
        }
    }

    const Action = register('action');

    const Inject = register('inject');

    const Observable = register('observable');

    return {
        Action,
        Inject,
        Observable,
        reconnect,
    }
}