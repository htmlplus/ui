import { htmlplus } from '@htmlplus/element/bundlers/rollup.js';

import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import glob from 'fast-glob';
import fs from 'fs';
import path from 'path';
import { defineConfig, rollup } from 'rollup';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { summary } from 'rollup-plugin-summary';
import typescript from 'rollup-plugin-typescript2';
import ttypescript from 'ttypescript';
import { fileURLToPath } from 'url';

import plugins from '../htmlplus.config.js';

const join = (file) => path.join(fileURLToPath(import.meta.url), '../..', file);

const options = defineConfig({
  input: Object.fromEntries(
    glob
      .sync(['src/elements/*/*.tsx'], { absolute: true })
      .map((file) => [[path.basename(file, path.extname(file)), file]])
      .flat(1)
      .concat([
        ['config', join('src/config/index.ts')],
        ['index', join('src/elements/index.ts')]
      ])
  ),
  output: [
    {
      format: 'esm',
      dir: 'dist',
      chunkFileNames: '[name].js',
      manualChunks(id) {
        const normalized = path.normalize(id).split(path.sep).join('/');

        if (normalized.includes('/src/elements/')) return;

        if (normalized.includes('/src/config/')) return;

        if (normalized.includes('signature_pad')) return 'vendors/signature_pad';

        return 'core/index';
      }
    }
  ],
  plugins: [
    peerDepsExternal(),

    postcss({
      inject: false,
      minimize: true,
      use: {
        sass: {
          includePaths: ['node_modules'],
          data: `
            @import "./src/styles/mixins/index.scss";
            @import "./src/styles/variables/index.scss";
            @import "./src/styles/reset.scss";
          `
        }
      }
    }),

    htmlplus(...plugins),

    resolve({
      browser: true
    }),

    commonjs(),

    typescript({
      typescript: ttypescript,
      useTsconfigDeclarationDir: true,
      tsconfigDefaults: {
        compilerOptions: {
          plugins: [
            { transform: 'typescript-transform-paths' },
            { transform: 'typescript-transform-paths', afterDeclarations: true }
          ]
        }
      }
    }),

    summary()
  ]
});

(async () => {
  try {
    const time = Date.now();

    const bundle = await rollup(options);

    for (const output of options.output) await bundle.write(output);

    await bundle.close();

    // TODO
    (() => {
      const source = join('dist/json/document.json');

      const document = JSON.parse(fs.readFileSync(source, 'utf8'));

      for (const module of bundle.cache.modules) {
        if (module.id.endsWith('.scss')) {
          for (const element of document.elements) {
            if (module.id.endsWith(`${element.key}.scss`)) {
              for (const style of element.styles) {
                style.initializer = module.code
                  ?.split(style.name)
                  ?.at(1)
                  ?.split(':')
                  ?.filter((section) => !!section)
                  ?.at(0)
                  ?.split(/;|}/)
                  ?.at(0);
              }
            }
          }
        }
      }

      fs.writeFileSync(source, JSON.stringify(document, null, 2), 'utf8');
    })();

    console.log(`Build in ${Date.now() - time}ms`);
  } catch (error) {
    console.log(error);
  }
})();
