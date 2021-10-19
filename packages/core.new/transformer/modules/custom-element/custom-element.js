import * as svelte from 'svelte/compiler';
import sveltePreprocess from 'svelte-preprocess';
import * as plugins from './plugins/index.js';

export const customElement = async (id, config) => {

    const context = {
        id,
        config,
    };

    plugins.parse(context);
    plugins.validate(context);
    plugins.extract(context);
    plugins.markup(context);
    plugins.script(context);
    plugins.style(context);
    plugins.component(context);

    // TODO
    if (context.config.docs)
        plugins.docs(context);

    const source = await svelte.preprocess(
        context.source,
        sveltePreprocess(context.config.preprocess),
        {
            filename: context.id,
        }
    );

    const result = svelte.compile(source.code, {
        filename: context.id,
        customElement: true,
    });

    result.dependencies = source.dependencies;

    return result;
}