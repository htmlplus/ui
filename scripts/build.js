import { rollup as htmlplus } from '@htmlplus/element/bundlers/index.js';

import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import glob from 'fast-glob';
import path from 'path';
import { defineConfig, rollup } from 'rollup';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { summary } from 'rollup-plugin-summary';
// import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';
import { fileURLToPath } from 'url';

import plugins from '../plus.config.js';

const join = (file) => path.join(fileURLToPath(import.meta.url), '../..', file);

const options = defineConfig({
  input: Object.fromEntries(
    glob
      .sync(['src/components/*/*.tsx'], { absolute: true })
      .map((file) => {
        const filename = path.basename(file, path.extname(file));
        return [[`${filename}`, file]];
      })
      .flat(1)
      .concat([
        ['animation/names/register', join('src/components/animation/assets/register.js')],
        ['config', join('src/config/index.ts')],
        ['index', join('src/components/index.ts')]
      ])
  ),
  output: [
    {
      format: 'esm',
      dir: 'dist',
      chunkFileNames: '[name].js',
      manualChunks(id) {
        const normalized = path.normalize(id).split(path.sep).join('/');

        if (normalized.includes('/src/components/')) return;

        if (normalized.includes('/src/config/')) return;

        if (normalized.includes('@popperjs')) return 'vendors/popperjs';

        if (normalized.includes('cropperjs')) return 'vendors/cropperjs';

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

    typescript({ useTsconfigDeclarationDir: true }),

    // terser({
    //   format: {
    //     comments: false
    //   }
    // }),

    summary()
  ]
});

(async () => {
  try {
    const time = Date.now();

    const bundle = await rollup(options);

    for (const output of options.output) await bundle.write(output);

    await bundle.close();

    console.log(`Build in ${Date.now() - time}ms`);
  } catch (error) {
    console.log(error);
  }
})();
