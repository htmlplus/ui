import { getElement } from '@stencil/core';

type LinkInstance = any;
type LinkTarget = any;
type LinkPropertyName = string;
type LinkPropertyType = 'action' | 'inject' | 'observable';
type LinkProperty = {
    element?: HTMLElement;
    instance?: LinkInstance;
    name?: LinkPropertyName;
    type?: LinkPropertyType;
    value?: any;
}

export type LinkConfig = {
    scope?: Function;
}

export const createLink = (config: LinkConfig) => {

    let disconnecting = false;

    const children = new Map<LinkInstance, Set<LinkProperty>>();

    const parents = new Map<LinkInstance, LinkProperty>();

    const properties: Array<LinkProperty> = [];

    const find = (source: LinkProperty) => {
        return properties.find((destination) => destination.instance === source.instance && destination.name === source.name);
    }

    const register = (source: LinkProperty) => {

        properties.push(source);

        if (!children.has(source.instance))
            children.set(source.instance, new Set<LinkProperty>());

        const siblings = children.get(source.instance);

        siblings.add(source);
    }

    const unregister = (source: LinkProperty) => {

        source = find(source);

        const index = properties.findIndex((property) => property === source);

        if (index === -1) return;

        properties.splice(index, 1);

        const siblings = children.get(source.instance);

        siblings.delete(source);

        if (siblings.size) return;

        children.delete(source.instance);

        parents.delete(source.instance);
    }

    const get = (source: LinkProperty) => {
        return source.instance[source.name];
    }

    const set = (source: LinkProperty, value: any) => {
        source.instance[source.name] = value;
    }

    const reset = (source: LinkProperty) => {

        if (source.type === 'action') return;

        if (source.type === 'inject') return set(source, source.value /* TODO */);

        Object.defineProperty(
            source.instance,
            source.name,
            {
                value: get(source), /* TODO */
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

                    siblings(source, ['inject'])
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

                const item = properties.find((property) => property.element === parent && property.name === source.name);

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

        // TODO
        if (disconnecting) return source['$scope-prev'];

        let input = config.scope(source.instance);

        if (typeof input !== 'undefined') return input;

        return scope(parent(source)) ?? source['$scope-auto'] ?? (source['$scope-auto'] = Math.random());
    }

    const siblings = (source: LinkProperty, types: Array<LinkPropertyType>) => {

        return properties.filter((destination) => {

            if (!types.includes(destination.type)) return false;

            if (source === destination) return false;

            if (source.name !== destination.name) return false;

            if (scope(source) !== scope(destination)) return false;

            return true;
        })
    }

    const connect = (source: LinkProperty) => {

        // TODO
        source['$scope-prev'] = scope(source);

        register(source);

        switch (source.type) {

            case 'action':

                siblings(source, ['inject'])
                    .forEach((destination) => map(source, destination));

                break;

            case 'observable':

                proxy(source);

                siblings(source, ['inject'])
                    .forEach((destination) => map(source, destination));

                break;

            case 'inject':

                siblings(source, ['action', 'observable'])
                    .forEach((destination) => map(destination, source));

                break;
        }
    }

    const disconnect = (source: LinkProperty) => {

        reset(source);

        if (source.type === 'inject') return unregister(source);

        siblings(source, ['inject']).forEach(reset);

        unregister(source);
    }

    const reconnect = (instance: LinkInstance) => {

        const p = properties.filter((property) => property.instance === instance);

        disconnecting = true;

        p.forEach(disconnect);

        disconnecting = false;

        p.forEach(connect);
    }

    const link = (type: LinkPropertyType) => () => (target: LinkTarget, name: LinkPropertyName) => {

        const connected = target.connectedCallback;

        target.connectedCallback = function () {

            connected && connected.bind(this)();

            const property: LinkProperty = {
                element: getElement(this),
                instance: this,
                name,
                type,
                value: this[name],
            }

            if (find(property)) console.error('TODO: Error log');

            connect(property);
        }

        const disconnected = target.disconnectedCallback;

        target.disconnectedCallback = function () {

            disconnected && disconnected.bind(this)();

            const property = find({ instance: this, name });

            if (!property) console.error('TODO: Error log');

            disconnect(property);
        }
    }

    const Action = link('action');

    const Inject = link('inject');

    const Observable = link('observable');

    return {
        Action,
        Inject,
        Observable,
        reconnect,
    }
}