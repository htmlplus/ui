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

    context.code = js.code;
}