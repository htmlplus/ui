type Instance = any;
type Target = any;
type PropertyName = string;
type PropertyType = 'action' | 'inject' | 'observable';
interface Property {
    type?: PropertyType;
    name?: PropertyName;
    instance?: Instance;
    target?: Target;
    value?: any;
}

export interface LinkV2Config {
    scope?: Function;
}

export const createLinkV2 = (config: LinkV2Config) => {

    config;

    const properties: Array<Property> = [];

    const get = (source: Property) => {
        return source.instance[source.name];
    }

    const set = (source: Property, value: any) => {
        source.instance[source.name] = value;
    }

    const map = (source: Property, destination: Property) => {

        let value = get(source);

        if (typeof value === 'function')
            value = value.bind(source.instance);

        set(destination, value);
    }

    const proxy = (source: Property) => {

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

    const filter = (source: Property) => {

        return properties.filter((destination) => {

            if (destination.name !== source.name) return false;

            if (destination.instance['connector'] !== source.instance['connector']) return false;

            return true;
        })
    }

    const connect = (source: Property) => {

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
        })

        properties.push(source);
    }

    const disconnect = (source: Property) => {

        const index = properties.findIndex((property) => property === source);

        properties.splice(index, 1);
    }

    const reconnect = (instance: Instance) => {

        properties.forEach((property) => {

            if (property.instance !== instance) return;

            disconnect(property);

            connect(property);
        });
    }

    const register = (type: PropertyType) => () => (target: Target, name: PropertyName) => {

        const connected = target.connectedCallback;

        target.connectedCallback = function () {

            connected && connected.bind(this)();

            const property: Property = {
                type,
                name,
                target,
                instance: this,
                value: this[name],
            }

            connect(property);
        }

        const disconnected = target.disconnectedCallback;

        target.disconnectedCallback = function () {

            disconnected && disconnected.bind(this)();

            const property: Property = {
                type,
                name,
                target,
                instance: this,
            }

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