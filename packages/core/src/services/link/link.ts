import { forceUpdate, getElement } from '@stencil/core';

type LinkScope = string;

type LinkInstance = any;
interface LinkInstanceConfig extends LinkConfig {
    element: any;
    property: PropertyKey;
    originalState: any;
    localState: any;
    group: string;
}

export interface LinkConfig {
    scope?: LinkScope;
}

export const createLink = <T>(initial: Required<T>) => {

    const instances = new Map<LinkInstance, LinkInstanceConfig>();

    const getGroup = (instance: LinkInstance, scope: LinkScope) => {

        const isProperty = scope.match(/\[*\]/);

        if (isProperty) {

            const property = scope.replace('[', '').replace(']', '');

            return instance[property];
        }

        return scope;
    }

    const getSiblings = (instance: LinkInstance, self: boolean) => {

        const { group } = instances.get(instance);

        const result = new Map<LinkInstance, LinkInstanceConfig>();

        instances.forEach((config, item) => {

            if (!self && instance === item) return;

            if (config.group !== group) return;

            result.set(item, config);
        });

        return result;
    }

    const getState = (instances: Map<LinkInstance, LinkInstanceConfig>) => {

        const configs = Array.from(instances.values());

        const original = configs.map((config) => config.originalState);

        const local = configs.map((config) => config.localState);

        return Object.assign({}, initial, ...original, ...local);
    }

    const getParent = (instance: LinkInstance) => {

        const element = getElement(instance);

        const items = Array.from(instances);

        let parent = element.parentElement;

        while (parent) {

            if (parent.shadowRoot) {

                const item = items.find(([, itemConfig]) => itemConfig.element === parent);

                if (item) return item[0];
            }

            parent = parent.parentElement;
        }
    }

    const update = (instance: LinkInstance, self: boolean) => {

        // instance siblings
        const instances = getSiblings(instance, self);

        // initial state
        const state = getState(instances);

        // for each instance
        instances.forEach((config, item) => {

            // remove old proxy
            delete item[config.property];

            // set new proxy
            item[config.property] = new Proxy(
                state,
                {
                    set: (target, property, value) => {

                        target;

                        // TODO
                        if (config.localState[property] === value) return true;

                        config.localState[property] = value;

                        requestAnimationFrame(() => update(item, true));

                        return true;
                    }
                }
            );

            // rerender current instance
            requestAnimationFrame(() => forceUpdate(item));
        });
    }

    const bind = (instance: LinkInstance, config: Partial<LinkInstanceConfig>) => {

        // create main config
        const options = {
            ...config,
            element: getElement(instance),
            originalState: instance[config.property],
            localState: {},
            group: getGroup(instance, config.scope),
        } as LinkInstanceConfig;

        // bind instance
        instances.set(instance, options);

        // update by instance
        update(instance, true);

        // TODO
        ensure(instance);
    }

    const unbind = (instance: LinkInstance) => {

        // load instance
        const { property, originalState } = instances.get(instance);

        // remove proxy
        delete instance[property];

        // reset property value
        instance[property] = originalState;

        // update by instance
        update(instance, false);

        // unbind instance
        instances.delete(instance);
    }

    // TODO
    const rebind = (instance: LinkInstance) => {

        const siblings = getSiblings(instance, true);

        siblings
            .forEach((config, instance) => config.group = getGroup(instance, config.scope));

        Array.from(siblings.keys())
            .forEach((instance) => ensure(instance));

        Array.from(siblings.keys())
            .forEach((instance) => update(instance, true));
    }

    const ensure = (instance: LinkInstance) => {

        if (instances.get(instance).group) return;

        const parent = getParent(instance);

        if (!parent) return;

        const config = instances.get(parent)

        config.group = config.group ?? Math.random().toString();

        instances.get(instance).group = config.group;

        update(instance, true);
    }

    const Inject = (config: LinkConfig) => (instance: LinkInstance, property: PropertyKey) => {

        // store componentDidLoad function
        const load = instance.componentDidLoad;

        instance.componentDidLoad = function () {

            // TODO
            ensure(this);

            // call original componentDidLoad function
            load && load.bind(this)();
        }

        // store connectedCallback function
        const connected = instance.connectedCallback;

        // set new connectedCallback function
        instance.connectedCallback = function () {

            // bind current instance
            bind(this, { ...config, property });

            // call original connectedCallback function
            connected && connected.bind(this)();
        }

        // store disconnectedCallback function
        const disconnected = instance.disconnectedCallback;

        // set new disconnectedCallback function
        instance.disconnectedCallback = function () {

            // unbind current instance
            unbind(this);

            // call original disconnectedCallback function
            disconnected && disconnected.bind(this)();
        }
    }

    return {
        Inject,
        rebind
    }
}