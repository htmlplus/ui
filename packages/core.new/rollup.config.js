import multi from '@rollup/plugin-multi-entry';
import typescript from '@rollup/plugin-typescript';
import { glob } from 'glob';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import serve from 'rollup-plugin-serve'
import svelte from 'rollup-plugin-svelte';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';
import { htmlplus } from './transformer/rollup.plugin';

const dev = !!process.env.ROLLUP_WATCH;

export default {
  // input: glob.sync('./src/components/*/*.tsx').slice(0, 1),
  input: [
    './src/components/aspect-ratio/aspect-ratio.tsx',
    './src/components/browse/browse.tsx',
  ],
  output: [
    dev && {
      format: 'esm',
      dir: 'public/build',
      sourcemap: true,
    },
    !dev && {
      format: 'esm',
      dir: 'dist/esm',
    },
    // !dev && {
    //   format: 'cjs',
    //   dir: 'dist/cjs',
    //   exports: 'default'
    // },
    // !dev && {
    //   format: 'umd',
    //   dir: 'dist/umd',
    //   name: 'htmlplus',
    // }
  ],
  plugins: [

    // Merge all files as one
    dev && multi({
      exports: false,
      entryFileName: 'bundle.js'
    }),

    // Convert .tsx files to svelte syntax
    htmlplus({
      prefix: 'plus',
      docs: dev && {
        docs: 'json/docs.json',
        vscode: 'json/html.html-data.json',
      },
    }),

    // Parse converted files
    svelte({
      dev: dev,
      customElement: true,
      extensions: ['.svelte', '.tsx'],
      preprocess: sveltePreprocess({
        sourceMap: dev,
        scss: {
          includePaths: [
            './src/styles'
          ]
        }
      })
    }),

    resolve({
      browser: true
    }),
    commonjs(),

    // Transpile all ts fies
    typescript({
      sourceMap: dev,
      inlineSources: dev,
      // declaration: !dev,
      // declarationDir: 'dist/types',
    }),

    // Serve in development mode
    dev && serve({
      open: true,
      contentBase: 'public',
    }),

    // Minify all files in production
    // !dev && terser()
  ]
}