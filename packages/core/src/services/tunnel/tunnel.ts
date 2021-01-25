
import { ComponentInterface, getElement } from '@stencil/core';
import { Props, SubscribeType, ConsumerRenderer, ConsumerType, ProviderType } from './tunnel.types';

export const createTunnel = <T extends { [key: string]: any }>(defaultState: T, consumerRender: ConsumerRenderer) => {

  const listeners: Map<any, Props> = new Map();

  const states: Map<any, T> = new Map();

  const targets: Map<any, { keys: Array<string>, connected: Function, disconnected: Function }> = new Map();

  const update = (props: Props, instance: ComponentInterface, scope?: ComponentInterface) => {

    if (scope) {

      const element = getElement(scope);

      if (getElement(instance).closest(element.nodeName) !== element) return;
    }

    const state = states.get(scope) || defaultState;

    [...props].forEach(fieldName => {

      (instance as any)[fieldName] = state[fieldName]
    });
  }

  const subscribe: SubscribeType = (instance: ComponentInterface, props: Props) => {

    if (!listeners.has(instance)) {

      const scope = (() => {

        const keys = Array.from(states.keys());

        for (let i = 0; i < keys.length; i++) {

          const key = keys[i];

          const parent = getElement(key);

          if (getElement(instance).closest(parent.nodeName) !== parent) continue;

          return key;
        }
      })();

      listeners.set(instance, props);

      update(props, instance, scope);
    }

    return () => {

      listeners.delete(instance);
    }
  }

  const Consumer: ConsumerType = ({ }, children) => {

    return consumerRender(subscribe, children[0] as any);
  }

  const Inject = () => (instance: any, key: string) => {

    const prototype = instance;

    const target = targets.get(instance);

    const keys = target ? [...target.keys, key] : [key];

    const connected = target ? target.connected : prototype.connectedCallback;

    const disconnected = target ? target.disconnected : prototype.disconnectedCallback;

    targets.set(
      instance,
      {
        keys,
        connected,
        disconnected
      }
    );

    prototype.connectedCallback = function () {

      subscribe(this, keys);

      if (!connected) return;

      return connected.call(this);
    }

    prototype.disconnectedCallback = function () {

      listeners.delete(this);

      if (!disconnected) return;

      disconnected.call(this);
    };
  }

  const Provider: ProviderType<T> = ({ state, scope, disabled }, children) => {

    if (disabled) return children;

    states.set(scope, state);

    listeners.forEach((a, b) => update(a, b, scope));

    return children;
  }

  return {
    Consumer,
    Inject,
    Provider
  }
}