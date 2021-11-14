import * as CONSTANTS from '@app/constants';
import * as Helpers from '@app/helpers';

export function GlobalConfig(namespace: string, initial = {}) {

  return function (target: any, propertyKey: PropertyKey) {

    const connected = target.mount;

    target.mount = function () {

      const $host = Helpers.host(this);

      const config = window[CONSTANTS.GLOBAL_CONFIG_NAME] || {};

      const components = config.components || {};

      const component = components[namespace] || {};

      component.properties = component.properties || {};

      const result = {
        properties: component.properties,
        slots: {}
      };

      if (Object.keys(component.slots || {}).length) {

        const handler = {
          get: (arg0, property) => {

            let value = component.slots[property];

            if (typeof value === 'function') value = value($host);

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

        if ($host[key] !== initial[key]) continue;

        if (typeof value === 'function') value = value($host);

        $host[key] = value;
      }

      connected && connected.bind(this)();
    }
  }
}