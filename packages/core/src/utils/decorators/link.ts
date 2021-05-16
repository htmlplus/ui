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

    const children = new Map<LinkV2Instance, Set<LinkV2Property>>();

    const parents = new Map<LinkV2Instance, LinkV2Property>();

    const properties: Array<LinkV2Property> = [];

    const add = (source: LinkV2Property) => {

        properties.push(source);

        if (!children.has(source.instance))
            children.set(source.instance, new Set<LinkV2Property>());

        const siblings = children.get(source.instance);

        siblings.add(source);
    }

    const remove = (source: LinkV2Property) => {

        const index = properties.findIndex((property) => property === source);

        if (index === -1) return;

        properties.splice(index, 1);

        const siblings = children.get(source.instance);

        siblings.delete(source);

        if (!siblings.size) {

            children.delete(source.instance);

            parents.delete(source.instance);
        }
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

    const parent = (source: LinkV2Property) => {

        const cache = parents.get(source.instance);

        if (cache) return cache;

        let parent = source.element.parentElement;

        while (parent) {

            if (parent.shadowRoot) {

                const item = properties.find((prop) => prop.element === parent && prop.name === source.name);

                if (item) {

                    parents.set(source.instance, item);

                    return item;
                }
            }

            parent = parent.parentElement;
        }
    }

    const scope = (source: LinkV2Property) => {

        if (!source) return;

        let input = config.scope(source.instance);

        if (typeof input !== 'undefined') return input;

        return scope(parent(source)) ?? source.instance['$scope'] ?? (source.instance['$scope'] = Math.random());
    }

    const siblings = (source: LinkV2Property) => {

        return properties.filter((destination) => {

            if (source === destination) return false;

            if (source.name !== destination.name) return false;

            if (scope(source) !== scope(destination)) return false;

            return true;
        })
    }

    const connect = (source: LinkV2Property) => {

        add(source);

        // console.log(properties, siblings(source))

        if (source.type === 'observable') proxy(source);

        switch (source.type) {

            // TODO: inject haye az ghabl register shode bayad filter shavand va in action dakhele anha inject shavad
            case 'action':

                siblings(source)
                    .filter((destination) => destination.type === 'inject')
                    .forEach((destination) => map(source, destination));

                break;

            // update all `inject` or `observable` types from `source` based on `destination`
            case 'inject':

                siblings(source)
                    .filter((destination) => destination.type !== 'inject')
                    .forEach((destination) => map(destination, source));

                break;

            // update all `inject` types from `destination` based on `source`
            case 'observable':

                siblings(source)
                    .filter((destination) => destination.type === 'inject')
                    .forEach((destination) => {

                        map(source, destination);

                        proxy(source);
                    });

                break;
        }
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