import * as svelte from 'svelte/compiler';
import sveltePreprocess from 'svelte-preprocess';
import * as tasks from './tasks/index.js';

export const htmlplus = {
  name: 'htmlplus',
  setup(build) {
    build.onLoad({ filter: /\.tsx$/ }, async (args) => {

      const context = {
        id: args.path,
        config: {
          prefix: 'plus'
        }
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
        sveltePreprocess({
          scss: {
            includePaths: ['./src/styles'],
          },
        }),
        {
          filename: args.path
        }
      );

      const { js } = svelte.compile(
        source.code,
        {
          filename: args.path,
          customElement: true
        }
      );

      return {
        contents: js.code
      }
    })
  }
}