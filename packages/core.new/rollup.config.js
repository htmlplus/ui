import resolve from 'rollup-plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
// import { terser } from 'rollup-plugin-terser';
import { htmlplus } from './transformer/rollup.plugin';

import svelte from 'rollup-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

const production = !process.env.ROLLUP_WATCH;

export default {
  // input: './src/components/index.ts',
  input: [
    './src/components/browse/browse.tsx',
    './src/components/sticky/sticky.tsx',
  ],
  output: {
    format: 'esm',
    name: 'app',
    // file: 'public/dist/bundle.js',
    dir: 'dist',
  },
  plugins: [
    htmlplus({
      prefix: 'plus',
      docs: {
        docs: 'json/docs.json',
        vscode: 'json/html.html-data.json',
      },
    }),
    svelte({
      dev: !production,
      customElement: true,
      extensions: ['.tsx'],
      preprocess: sveltePreprocess({
        sourceMap: !production,
        scss: {
          includePaths: [
            'src/styles'
          ],
          injectGlobalPaths: [
            'src/styles/mixins/index.scss',
            'src/styles/variables/index.scss'
          ]
        }
      })
    }),
    resolve(),
    commonjs(),
    typescript({
      sourceMap: !production,
      inlineSources: !production
    }),
    // production && terser()
  ]
};