import resolve from 'rollup-plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
import { glob } from 'glob';
// import { terser } from 'rollup-plugin-terser';
import { htmlplus } from './transformer/rollup.plugin';


import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';
import multi from '@rollup/plugin-multi-entry';

export default {
  input: glob.sync('./src/components/*/*.tsx'),
  output: {
    format: 'esm',
    // file: 'public/dist/bundle.js',
    dir: 'dist',
  },
  plugins: [
    // multi({
    //   exports: false,
    //   entryFileName: 'hp.js'
    // }),
    htmlplus({
      prefix: 'plus',
      docs: {
        docs: 'json/docs.json',
        vscode: 'json/html.html-data.json',
      },
    }),
    svelte({
      dev: false,
      customElement: true,
      extensions: ['.tsx'],
      preprocess: sveltePreprocess({
        sourceMap: false,
        scss: {
          includePaths: [
            './src/styles'
          ]
        }
      })
    }),
    resolve(),
    commonjs(),
    typescript({
      sourceMap: false,
      inlineSources: false
    }),
    // terser()
  ]
};