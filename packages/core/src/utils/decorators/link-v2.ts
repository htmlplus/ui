import { getElement } from '@stencil/core';

type LinkV2Instance = any;
type LinkV2PropertyName = string;
type LinkV2PropertyType = 'action' | 'inject' | 'observable';
type LinkV2Property = {
    type?: LinkV2PropertyType;
    name?: LinkV2PropertyName;
    instance?: LinkV2Instance;
    target?: LinkV2Target;
    value?: any;
    element?: HTMLElement;
}
type LinkV2Target = any;

export type LinkV2Config = {
    scope?: Function;
}

export const createLinkV2 = (config: LinkV2Config) => {

    const properties: Array<LinkV2Property> = [];

    const add = (source: LinkV2Property) => {

        const index = properties.findIndex((property) => property === source);

        if (index !== -1) return;

        properties.push(source);
    }

    const remove = (source: LinkV2Property) => {

        const index = properties.findIndex((property) => property === source);

        if (index === -1) return;

        properties.splice(index, 1);
    }

    const get = (source: LinkV2Property) => {
        return source.instance[source.name];
    }

    const set = (source: LinkV2Property, value: any) => {
        source.instance[source.name] = value;
    }

    const reset = (source: LinkV2Property) => {

        if (source.type === 'action') return;

        if (source.type !== 'observable') return set(source, source.value /* TODO */);

        Object.defineProperty(
            source.instance,
            source.name,
            {
                value: source.value, /* TODO */
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

                    siblings(source)
                        .filter((destination) => destination.type === 'inject')
                        .map((destination) => set(destination, value))
                }
            }
        )
    }

    // TODO
    const parent = (source: LinkV2Property) => {

        if (typeof scope(source) !== 'undefined') return;

        if (source['parent']) return source['parent'];

        let parent = source.element.parentElement;

        while (parent) {

            if (parent.shadowRoot) {

                const item = properties.find((prop) => prop.element === parent);

                if (item) {

                    source['parent'] = item;

                    return item;
                }
            }

            parent = parent.parentElement;
        }
    }

    const siblings = (source: LinkV2Property) => {

        return properties.filter((destination) => {

            if (source === destination) return false;

            if (source.name !== destination.name) return false;

            if (
                scope(source) &&
                scope(source) === scope(destination)
            ) return true;

            console.log(1, source)

            if (
                !scope(source) &&
                parent(source) === destination
            ) {

                console.log(2, destination)

                return true;
            }

            // if (
            //     !scope(destination) &&
            //     destination['parent'] === source
            // ) return true;

            return false;
        })
    }

    const connect = (source: LinkV2Property) => {

        add(source);
        console.log(3333333, siblings(source))
        if (source.type === 'observable') proxy(source);

        siblings(source)
            .forEach((destination) => {

                switch (source.type) {

                    // TODO: inject haye az ghabl register shode bayad filter shavand va in action dakhele anha inject shavad
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
    }

    const disconnect = (source: LinkV2Property) => {

        if (source.type !== 'action') reset(source);

        remove(source);

        if (source.type === 'inject') return;

        siblings(source)
            .filter((property) => property.type === 'inject')
            .forEach(reset);
    }

    const reconnect = (instance: LinkV2Instance) => {

        properties
            .filter((property) => property.instance === instance)
            .forEach((property) => {

                disconnect(property);

                connect(property);
            })
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
                element: getElement(this) // TODO
            }

            connect(property);
        }

        const disconnected = target.disconnectedCallback;

        target.disconnectedCallback = function () {

            disconnected && disconnected.bind(this)();

            // TODO
            const property = properties.find((property) => property.instance === this && property.name === name);

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