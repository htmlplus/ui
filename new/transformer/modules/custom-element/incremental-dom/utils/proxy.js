import { elementOpen, elementClose, patch, text } from 'incremental-dom';
import { toBoolean, updateAttribute, sync } from '../../../../utils/index.js';

/**
 * TODO
 * observedAttributes
 * constructor
 * attributeChangedCallback
 * connectedCallback
 */
export const proxy = (Class, properties, style) => {

    let instance, update;

    const flush = () => {

        update(instance.attributes || {});

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

    const getValue = (key, value) => {

        const [, type] = properties.find((property) => property[0] == key);

        switch (type) {

            case 'boolean':
                return toBoolean(value);

            case 'number':
                return parseFloat(value);

            default:
                return value;
        }
    }

    return class extends HTMLElement {

        constructor() {

            super();

            instance = new Class();

            instance.$api = {
                ready: false,
                host: () => this,
                property: (name, value, options = {}) => {

                    const raw = this.getAttribute(name);

                    const parsed = getValue(name, raw);

                    if (parsed === value) return;

                    if (options.reflect)
                        updateAttribute(this, name, value);

                    flush();
                },
                state: () => flush()
            };

            for (const [key] of properties) {

                Object.defineProperty(
                    this,
                    key,
                    {
                        get: () => instance[key],
                        set: (value) => { instance[key] = value }
                    }
                )
            }

            this.attachShadow({ mode: 'open' });
        }

        static get observedAttributes() {
            return properties
                .filter(([, type]) => type != 'method')
                .map(([key]) => key);
        }

        attributeChangedCallback(name, prev, next) {

            instance[name] = getValue(name, next);

            if (!instance.$api.ready) return;

            flush();
        }

        connectedCallback() {

            update = sync(this, {});

            flush();
            
            instance.mount && instance.mount();

            instance.$api.ready = true;
        }

        disconnectedCallback() {
            instance.unmount && instance.unmount();
        }
    }
}