import typescript from '@rollup/plugin-typescript';
import { glob } from 'glob';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import { htmlplus } from './transformer/plugin/rollup';

export default {
  input: glob.sync('./src/components/*/*.tsx'),
  output: [
    {
      format: 'esm',
      dir: 'dist/esm',
    },
    {
      format: 'cjs',
      dir: 'dist/cjs',
      exports: 'default',
    },
    {
      format: 'umd',
      dir: 'dist/umd',
      name: 'htmlplus',
    },
  ],
  plugins: [
    htmlplus({
      prefix: 'plus',
      docs: {
        docs: 'json/docs.json',
        vscode: 'json/html.html-data.json',
      },
      preprocess: {
        scss: {
          includePaths: ['./src/styles'],
        },
      },
    }),

    resolve({
      browser: true,
    }),

    commonjs(),

    typescript(),

    terser(),
  ],
};
