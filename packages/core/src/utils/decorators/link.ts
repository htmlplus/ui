import { getElement } from '@stencil/core';

type LinkInstance = any;
type LinkPropertyName = string;
type LinkPropertyType = 'action' | 'inject' | 'observable';
type LinkProperty = {
    type?: LinkPropertyType;
    name?: LinkPropertyName;
    instance?: LinkInstance;
    target?: LinkTarget;
    value?: any;
    element?: HTMLElement;
}
type LinkTarget = any;

export type LinkConfig = {
    scope?: Function;
}

export const createLink = (config: LinkConfig) => {

    const children = new Map<LinkInstance, Set<LinkProperty>>();

    const parents = new Map<LinkInstance, LinkProperty>();

    const properties: Array<LinkProperty> = [];

    const add = (source: LinkProperty) => {

        properties.push(source);

        if (!children.has(source.instance))
            children.set(source.instance, new Set<LinkProperty>());

        const siblings = children.get(source.instance);

        siblings.add(source);
    }

    const remove = (source: LinkProperty) => {

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

    const get = (source: LinkProperty) => {
        return source.instance[source.name];
    }

    const set = (source: LinkProperty, value: any) => {
        source.instance[source.name] = value;
    }

    const reset = (source: LinkProperty) => {

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

    const map = (source: LinkProperty, destination: LinkProperty) => {

        let value = get(source);

        if (typeof value === 'function')
            value = value.bind(source.instance);

        set(destination, value);
    }

    const proxy = (source: LinkProperty) => {

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

    const parent = (source: LinkProperty) => {

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

    const scope = (source: LinkProperty) => {

        if (!source) return;

        let input = config.scope(source.instance);

        if (typeof input !== 'undefined') return input;

        return scope(parent(source)) ?? source.instance['$scope'] ?? (source.instance['$scope'] = Math.random());
    }

    const siblings = (source: LinkProperty) => {

        return properties.filter((destination) => {

            if (source === destination) return false;

            if (source.name !== destination.name) return false;

            if (scope(source) !== scope(destination)) return false;

            return true;
        })
    }

    const connect = (source: LinkProperty) => {

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

    const disconnect = (source: LinkProperty) => {

        if (source.type !== 'action') reset(source);

        remove(source);

        if (source.type === 'inject') return;

        siblings(source)
            .filter((property) => property.type === 'inject')
            .forEach(reset);
    }

    const reconnect = (instance: LinkInstance) => {

        properties
            .filter((property) => property.instance === instance)
            .forEach((property) => {

                disconnect(property);

                connect(property);
            })
    }

    const register = (type: LinkPropertyType) => () => (target: LinkTarget, name: LinkPropertyName) => {

        const connected = target.connectedCallback;

        target.connectedCallback = function () {

            connected && connected.bind(this)();

            const property: LinkProperty = {
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