import * as Constants from '@app/constants';

export function GlobalConfig(namespace: string, initial = {}) {

  return function (instance: {} | any, name: PropertyKey) {

    name;

    const connected = instance.connectedCallback;

    instance.connectedCallback = function () {

      const element = this.$api?.host();

      const config = window[Constants.GLOBAL_CONFIG_NAME] || {};

      const components = config.components || {};

      const component = components[namespace] || {};

      component.properties = component.properties || {};

      const result = {
        properties: component.properties,
        slots: {}
      };

      if (Object.keys(component.slots || {}).length) {

        const handler = {
          get: (target, property) => {

            target;

            let value = component.slots[property];

            if (typeof value === 'function') value = value(element);

            return value;
          }
        }

        result.slots = new Proxy(result.slots, handler);
      }

      this.config = result;

      const properties = component.properties;

      const keys = Object.keys(properties);

      for (let i = 0; i < keys.length; i++) {

        const key = keys[i];

        let value = properties[key];

        if (typeof value === 'undefined') continue;

        if (element[key] !== initial[key]) continue;

        if (typeof value === 'function') value = value(element);

        element[key] = value;
      }

      connected && connected.bind(this)();
    }
  }
}