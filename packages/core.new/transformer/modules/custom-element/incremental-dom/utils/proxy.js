import { elementOpen, elementClose, patch, text } from 'incremental-dom';
import { toBoolean, sync } from '../../../../utils/index.js';

export const proxy = (Class, properties, style) => {

    let instance, update;

    const flush = () => {

        update && update(instance.attributes || {});

        patch(
            instance.$api.host().shadowRoot,
            () => {
                elementOpen('style');
                text(style);
                elementClose('style');
                instance.render && instance.render();
            }
        )
    }

    return class extends HTMLElement {

        constructor() {

            super();

            instance = new Class();

            instance.$api = {
                ready: true,
                host: () => this,
                property: (name, value) => {
                    console.log('api.property', name, value);
                    // if (host[name] === value) return;
                    // this.setAttribute(name, value);
                    flush();
                },
                state: (name, value) => {
                    console.log('api.state', name, value);
                    flush();
                },
            };

            for (const [key, type] of properties) {
                Object.defineProperty(this, key, {
                    get() {
                        return instance[key];
                    },
                    set(newValue) {
                        instance[key] = newValue;
                    },
                });
            }

            this.attachShadow({ mode: 'open' });
        }

        static get observedAttributes() {
            return properties
                .filter(([, type]) => type != 'method')
                .map(([key]) => key);
        }

        attributeChangedCallback(name, prev, next) {

            console.log('attributeChangedCallback', name, prev, next);

            const [, type] = properties.find(([key]) => key == name);

            switch (type) {

                case 'boolean':
                    instance[name] = toBoolean(next);

                case 'number':
                    instance[name] = parseFloat(next);

                default:
                    instance[name] = next;
            }
        }

        connectedCallback() {
            update = sync(this, {});
            instance.mount && instance.mount();
            flush();
        }

        disconnectedCallback() {
            instance.unmount && instance.unmount();
        }
    }
}