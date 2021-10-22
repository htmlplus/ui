import * as svelte from 'svelte/compiler';
import preprocess from 'svelte-preprocess';

export const component = async (context) => {

    const { config, filename, markup, script, style } = context;

    const lines = [
        script,
        markup,
        style,
    ];

    let source = lines.join('\n');

    // TODO
    if (!config.dev) {
        source = (await svelte.preprocess(
            source,
            preprocess(config.preprocess),
            {
                filename,
            }
        )).code
    }

    const { js } = svelte.compile(source, {
        filename,
        customElement: true,
    });

    context.code = js.code;
}