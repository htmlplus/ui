import { elementOpen, elementClose, patch, text } from 'incremental-dom';

const toBoolean = (input) => {

    if (input === '') return true;

    if (input === 'true') return true;

    if (input === true) return true;

    if (input === 'false') return false;

    if (input === false) return false;

    return input;
};

const parse = (value, type) => {

    switch (type) {

        case 'boolean':
            return toBoolean(value);

        case 'number':
            return parseFloat(value);

        default:
            return value;
    }
}

export const proxy = (Class, properties) => {

    let instance;
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
                    this.setAttribute(name, value);
                    this.render();
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

            instance[name] = parse(next, type);
        }

        connectedCallback() {
            instance.mount && instance.mount();
            this.render();
        }

        disconnectedCallback() {
            instance.unmount && instance.unmount();
        }

        render() {
            patch(
                this.shadowRoot,
                () => {
                    elementOpen('style');
                    text(Class.style);
                    elementClose('style');
                    instance.render && instance.render();
                }
            )
        }
    }
}