import resolve from 'rollup-plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
// import { terser } from 'rollup-plugin-terser';
import { HTMLPLUS } from './transformer/rollup.plugin';
import { HTMLPLUSDOCS } from './transformer/rollup.plugin.docs';

export default {
  input: './src/components/index.ts',
  output: {
    format: 'esm',
    name: 'app',
    file: 'public/dist/bundle.js',
    // dir: 'public/dist',
  },
  plugins: [
    HTMLPLUSDOCS({
      prefix: 'plus',
      docs: 'dist/json/docs.json',
      vscode: 'dist/json/html.html-data.json',
    }),
    // HTMLPLUS({
    //   prefix: 'plus', // TODO
    //   scss: {
    //     includePaths: [
    //       'src/styles'
    //     ],
    //     injectGlobalPaths: [
    //       'src/styles/mixins/index.scss',
    //       'src/styles/variables/index.scss'
    //     ]
    //   }
    // }),
    typescript(),
    resolve(),
    commonjs(),
    // terser(),
  ]
};