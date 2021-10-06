import * as svelte from 'svelte/compiler';
import sveltePreprocess from 'svelte-preprocess';
import * as tasks from './tasks/index.js';

export const transformer = async (id, config) => {

  const context = {
    id,
    config,
  };

  tasks.parse(context);
  tasks.validate(context);
  tasks.extract(context);
  tasks.markup(context);
  tasks.script(context);
  tasks.style(context);
  tasks.component(context);

  const source = await svelte.preprocess(
    context.source,
    sveltePreprocess(config.preprocess),
    {
      filename: id,
    }
  );

  const result = svelte.compile(source.code, {
    filename: id,
    customElement: true,
  });

  result.dependencies = source.dependencies;

  return result;
};
