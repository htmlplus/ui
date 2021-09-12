import resolve from 'rollup-plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
// import { terser } from 'rollup-plugin-terser';
import { htmlplus } from './transformer/rollup.plugin';

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
    dir: 'public/dist',
  },
  plugins: [
    htmlplus({
      prefix: 'plus',
      docs: {
        docs: 'json/docs.json',
        vscode: 'json/html.html-data.json',
      },
      scss: {
        includePaths: [
          'src/styles'
        ],
        injectGlobalPaths: [
          'src/styles/mixins/index.scss',
          'src/styles/variables/index.scss'
        ]
      },
      outputs: [
        {
          type: 'type',
          dist: 'types',
        },
        {
          type: 'docs',
          dist: 'json/docs.json',
        },
        {
          type: 'vscode',
          dist: 'json/html.html-data.json',
        },
      ]
    }),
    typescript(),
    resolve(),
    commonjs(),
    // terser(),
  ]
};