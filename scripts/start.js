import compiler from '@htmlplus/element/compiler';
import glob from 'glob';
import path from 'path';
import { createServer } from 'vite';
import plugins from '../plus.config.js';

const { start, next, finish } = compiler(...plugins);

createServer({
  root: 'public',
  cacheDir: '../.cache',
  server: {
    open: true,
  },
  resolve: {
    alias: [
      {
        find: '@app',
        replacement: path.resolve('src'),
      },
    ],
  },
  plugins: [
    {
      name: 'htmlplus',
      async buildStart() {
        await start();
      },
      async load(id) {
        if (id.endsWith('bundle.ts'))
          return glob
            .sync(path.resolve('./src/**/*.tsx'))
            .map((file) => `import '${file}';`)
            .join('\n');

        if (!id.endsWith('.tsx')) return null;

        const { script } = await next(id);

        return script;
      },
      async buildEnd() {
        await finish();
      },
    },
  ],
})
  .then((server) => server.listen())
  .catch((error) => console.log(error));
