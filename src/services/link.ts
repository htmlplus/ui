import { request } from '@htmlplus/element/client/utils';

import { host } from '@app/helpers';

/**
 * Connect Flow
 *  - connect
 *  - prepare
 *  - register
 *  - attach or queue
 * Disconnect Flow
 *  - disconnect
 *  - detach
 *  - unregister
 * Reconnect Flow
 *  - disconnect
 *  - connect
 */

type CreateDecorator = {
  config: LinkConfig;
  options?: any;
  type: LinkPropertyType;
};
type LinkConfig = {
  crawl?: boolean;
  namespace?: (instance: LinkInstance) => string | undefined;
};
type LinkInstance = any;
type LinkPropertyType = 'ACTION' | 'INJECT' | 'OBSERVABLE';
type LinkProperty = {
  config?: LinkConfig;
  element?: HTMLElement;
  initialize?: any;
  instance?: LinkInstance;
  name?: PropertyKey;
  namespace?: LinkProperty | string;
  options?: any;
  type?: LinkPropertyType;
};

const properties: LinkProperty[] = [];

const attach = (property: LinkProperty): void => {
  switch (property.type) {
    case 'ACTION':
      getRelated(property, 'INJECT').forEach((to) => inject(property, to));
      break;
    case 'OBSERVABLE':
      getRelated(property, 'INJECT').forEach((to) => inject(property, to));
      // TODO
      let value = getValue(property);
      Object.defineProperty(property.instance, property.name, {
        enumerable: true,
        configurable: true,
        get() {
          return value;
        },
        set(input) {
          if (input === value) return;
          value = input;
          getRelated(property, 'INJECT').forEach((to) => inject(property, to));
        }
      });
      break;
    case 'INJECT':
      getRelated(property, 'ACTION', 'OBSERVABLE').forEach((to) => inject(to, property));
      break;
  }
};

const connect = (property: LinkProperty): void => {
  property = prepare(property);
  register(property);
  if (!property.config.crawl || property.namespace) return attach(property);
  queue(property);
};

const detach = (property: LinkProperty): void => {
  switch (property.type) {
    case 'ACTION':
      getRelated(property, 'INJECT').forEach((to) => setValue(to, to.initialize));
      break;
    case 'INJECT':
      setValue(property, property.initialize);
      break;
    case 'OBSERVABLE':
      // TODO
      Object.defineProperty(property.instance, property.name, {
        value: getValue(property),
        enumerable: true,
        configurable: true
      });
      getRelated(property, 'INJECT').forEach((to) => setValue(to, to.initialize));
      break;
  }
};

const disconnect = (property: LinkProperty): void => {
  property = properties.find((item) => {
    return item.instance == property.instance && item.name == property.name;
  });
  detach(property);
  unregister(property);
};

const findParent = (property: LinkProperty): LinkProperty | undefined => {
  let element = property.element?.parentElement;
  while (element) {
    if (element.shadowRoot) {
      const parent = properties.find((item) => {
        return item.element == element && item.name == property.name;
      });
      if (parent) return parent;
    }
    element = element.parentElement;
  }
};

const getRelated = (property: LinkProperty, ...types: LinkPropertyType[]): LinkProperty[] => {
  return properties.filter((item) => {
    if (typeof item.namespace == 'undefined') return;
    if (!types.includes(item.type)) return;
    if (item.name != property.name) return;
    if (item.namespace === property.namespace) return true;
    if (item.namespace === property) return true;
    if (item === property.namespace) return true;
  });
};

const getValue = (property: LinkProperty): any => {
  return property.instance[property.name];
};

const inject = (from: LinkProperty, to: LinkProperty): void => {
  let value = getValue(from);
  if (typeof value === 'function') value = value.bind(from.instance);
  setValue(to, value);
};

const prepare = (property: LinkProperty): LinkProperty => {
  const { config, instance, name } = property;

  const element = host(instance);

  const initialize = instance[name];

  const namespace = config?.namespace?.(instance);

  return Object.assign({}, property, { element, initialize, namespace });
};

// TODO
let timeout;
const unresolved = new Set<LinkProperty>();
const queue = (property: LinkProperty): void => {
  unresolved.add(property);
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    Array.from(unresolved).forEach((source) => {
      const parent = findParent(source);
      if (!parent) return;
      source.namespace = parent;
      unresolved.delete(source);
      attach(source);
    });
  }, 0);
};

const reconnect = (instance: LinkInstance): void => {
  properties
    .filter((property) => property.instance == instance)
    .forEach((property) => {
      disconnect(property);
      connect(property);
    });
};

const register = (property: LinkProperty): void => {
  properties.push(property);
};

const setValue = (property: LinkProperty, value: any): void => {
  property.instance[property.name] = value;
  /**
   * TODO
   * extra render should be removed. callback 'attributeChangedCallback' in '@Element'
   * should use the 'request' method inside itself to update properties.
   */
  if (property.type == 'INJECT' && property.options) request(property.instance);
  // .then(() => {
  //   // render(property.instance)
  // })
  // .catch(() => undefined);
};

const unregister = (property: LinkProperty): void => {
  const index = properties.findIndex((item) => item === property);
  properties.splice(index, 1);
};

const createDecorator = (parameters: CreateDecorator) => {
  return (target: any, name: PropertyKey) => {
    const { connectedCallback, disconnectedCallback } = target;
    target.connectedCallback = function () {
      connectedCallback?.call(this);
      connect({
        ...parameters,
        instance: this,
        name
      });
    };
    target.disconnectedCallback = function () {
      disconnectedCallback?.call(this);
      disconnect({
        instance: this,
        name
      });
    };
  };
};

export const createLink = (config?: LinkConfig) => {
  const Action = () => {
    return createDecorator({ config, type: 'ACTION' });
  };
  const Inject = (state?: boolean) => {
    return createDecorator({ config, type: 'INJECT', options: state });
  };
  const Observable = () => {
    return createDecorator({ config, type: 'OBSERVABLE' });
  };
  return {
    Action,
    Inject,
    Observable,
    reconnect
  };
};
