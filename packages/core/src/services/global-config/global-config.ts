import * as Constants from '@app/constants';

export function GlobalConfig(namespace: string, initial = {}) {

    return function (instance: {} | any, name: PropertyKey) {

        name;

        const connected = instance.connectedCallback;

        instance.connectedCallback = function () {

            const config = window[Constants.GLOBAL_CONFIG_NAME] || {};

            const components = config.components || {};

            const component = components[namespace] || {};

            const keys = Object.keys(component);

            for (let i = 0; i < keys.length; i++) {

                const key = keys[i];

                const value = component[key];

                if (typeof value === 'undefined') continue;

                if (this[key] !== initial[key]) continue;

                this[key] = value;
            }

            connected && connected.bind(this)();
        }
    }
}