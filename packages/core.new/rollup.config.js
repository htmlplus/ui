import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { glob } from 'glob';
import path from 'path';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import { customElement } from './transformer/modules/index';

let compiler;

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
  input: glob.sync('./src/**/*.tsx'),
  output: [
    {
      format: 'es',
      dir: 'dist/esm',
      chunkFileNames: '[name].js',
      manualChunks(id) {

        const matcher = path.join('src/components/');

        if (id.includes(matcher) && id.endsWith('.tsx')) return path.basename(id);

        return 'core';
      },
    },
    // {
    //   format: 'cjs',
    //   dir: 'dist/cjs',
    //   exports: 'default',
    // },
    // {
    //   format: 'umd',
    //   dir: 'dist/umd',
    //   name: 'htmlplus',
    // },
  ],
  plugins: [
    {
      name: 'htmlplus',
      async buildStart() {
        compiler = await customElement({
          dev: false,
          prefix: 'plus',
          docs: './dist/json/docs.json',
          vscode: './dist/json/html.html-data.json',
          scss: {
            includePaths: ['./src/styles'],
          },
        });
      },
      async load(id) {

        if (!id.endsWith('.tsx')) return null;

        const { code } = await compiler.next(id);

        return code;
      },
      async buildEnd() {
        await compiler.finish();
      }
    },

    resolve({
      browser: true,
    }),

    commonjs(),

    typescript(),

    terser(),
  ],
};

export default config;
