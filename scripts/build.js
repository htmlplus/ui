import { rollup as htmlplus } from '@htmlplus/element/bundlers/index.js';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import glob from 'fast-glob';
import path from 'path';
import { rollup } from 'rollup';
import postcss from 'rollup-plugin-postcss';
import { summary } from 'rollup-plugin-summary';
// import { terser } from 'rollup-plugin-terser';
import typescript from 'rollup-plugin-typescript2';

import plugins from '../plus.config.js';

/**
 * @type {import('rollup').RollupOptions}
 */
const options = {
  input: Object.fromEntries(
    glob
      .sync(['src/components/*/*.tsx'])
      .map((file) => {
        const filename = path.basename(file, path.extname(file));
        return [
          // [`components/${filename}/${filename}`, file],
          // [`components/${filename}/index`, file],
          [`${filename}`, file]
        ];
      })
      .flat(1)
      .concat([['config', 'src/config/index.ts']])
      .concat([['index', 'src/components/index.ts']])
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

        if (normalized.includes('cropperjs')) return 'vendors/cropperjs';

        if (normalized.includes('@popperjs')) return 'vendors/popperjs';

        return 'core/index';
      }
    }
  ],
  plugins: [
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
};

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
