import * as svelte from 'svelte/compiler';
import preprocess from 'svelte-preprocess';

export const component = async (context) => {

    if (context.skip) return;

    const lines = [
        context.script,
        context.markup,
        context.style,
    ];

    let source = lines.join('\n');

    // TODO
    if (!context.config.dev) {
        source = (await svelte.preprocess(
            source,
            preprocess(context.config.preprocess),
            {
                filename: context.filename,
            }
        )).code
    }

    const { js } = svelte.compile(source, {
        customElement: true,
        filename: context.filename,
    });

    // TODO: https://github.com/sveltejs/svelte/issues/3852
    js.code = ((code) => {

        const indexToken = code.indexOf('customElements.define(');
        const indexStart = code.indexOf(',', indexToken);
        const indexEnd = code.indexOf(')', indexToken);

        const textStart = code.slice(0, indexStart + 1);
        const textMiddle = code.slice(indexStart + 1, indexEnd);
        const textEnd = code.slice(indexEnd);

        let result = '';
        result += textStart;
        result += ' class extends '
        result += textMiddle;
        result += ` {
            static get observedAttributes() {
                return (super.observedAttributes || []).map(attr => attr.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase());
            }
            attributeChangedCallback(attrName, oldValue, newValue) {
                attrName = attrName.replace(/-([a-z])/g, (_, up) => up.toUpperCase());
                super.attributeChangedCallback(attrName, oldValue, newValue);
            }
        } `;
        result += textEnd;

        return result;

    })(js.code);

    context.code = js.code;

    // TODO: disabled unused css selector in svelte
    context.code = context.code.replace(/<style>.*<\/style>/, context.style);
}