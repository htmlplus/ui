import { htmlplus } from '@htmlplus/element/bundlers/vite.js';
import glob from 'fast-glob';
import fs from 'fs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import { defineConfig } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts';

import { examples } from './src/examples.plugin.js';
import plugins from './htmlplus.config.js';

export default defineConfig({
  cacheDir: '.cache',
  server: {
    open: 'src/index.html'
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: ['node_modules'],
        outputStyle: 'compressed',
        additionalData: [
          '@import "./src/styles/mixins/index.scss";',
          '@import "./src/styles/variables/index.scss";',
          '@import "./src/styles/reset.scss";'
        ].join('\n')
      }
    }
  },
  plugins: [
    examples(),
    htmlplus(...plugins),
    peerDepsExternal(),
    dts({
      outDir: 'dist/types',
      resolvers: [
        /**
         * This resolver generates `.d.ts` files for each `.tsx` file.
         * While this approach is somewhat of a workaround and temporary,
         * we are actively seeking a more robust solution.
         */
        {
          name: 'attach-dynamic-typing',
          supports: (id) => id.endsWith('.tsx'),
          transform({ root, id, code, program }) {
            const sourceFile = program.getSourceFile(id)!;

            let output = '';

            program.emit(sourceFile, (fileName, contents) => {
              output =
                contents + code.split('THE FOLLOWING TYPES HAVE BEEN ADDED AUTOMATICALLY').pop() ||
                '';
            });

            return [
              {
                content: output,
                path: path.relative(root, id.replace(/\.tsx?$/, '.d.ts'))
              }
            ];
          }
        }
      ]
    }),
    {
      name: 'TODO',
      writeBundle(options, bundle) {
        const source = 'dist/json/document.json';

        const document = JSON.parse(fs.readFileSync(source, 'utf8'));

        for (const element of document.elements) {
          const module = bundle[element.key + '.js'];

          if (!module) continue;

          for (const key in module['modules']) {
            if (!key.includes('.scss')) continue;

            const code = module['modules'][key].code;

            if (!code) continue;

            for (const style of element.styles) {
              style.initializer = code
                ?.split(style.name)
                ?.at(1)
                ?.split(':')
                ?.filter((section) => !!section)
                ?.at(0)
                ?.split(/;|}/)
                ?.at(0)
                ?.trim();
            }
          }
        }

        fs.writeFileSync(source, JSON.stringify(document, null, 2), 'utf8');
      }
    }
  ],
  build: {
    emptyOutDir: false,
    minify: false,
    lib: {
      formats: ['es'],
      entry: Object.fromEntries(
        glob
          .sync(['src/elements/*/*.tsx'], { absolute: true })
          .map((file) => [path.basename(file, path.extname(file)), file])
          .concat([
            ['config', 'src/config/index.ts'],
            ['index', 'src/elements/index.ts']
          ])
      )
    },
    rollupOptions: {
      output: {
        dir: 'dist',
        chunkFileNames: `[name].js`,
        manualChunks(id) {
          const normalized = path.normalize(id).split(path.sep).join('/');

          if (normalized.includes('/src/elements/')) {
            return normalized.split('/src/elements/')[1].split('/')[0];
          }

          if (normalized.includes('signature_pad')) return 'vendors/signature_pad';

          return 'core/index';
        }
      }
    }
  }
});
