import resolve from 'rollup-plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
// import { terser } from 'rollup-plugin-terser';
import { HTMLPLUS } from './transformer/rollup.plugin';

export default {
  input: './src/components/index.ts',
  // input: [
  //   './src/components/aspect-ratio/aspect-ratio.tsx',
  //   './src/components/scroll-indicator/scroll-indicator.tsx',
  //   './src/components/sticky/sticky.tsx',
  // ],
  output: {
    format: 'esm',
    name: 'app',
    file: 'public/dist/bundle.js',
    // dir: 'public/dist',
  },
  plugins: [
    HTMLPLUS({
      prefix: 'plus', // TODO
    }),
    typescript(),
    resolve(),
    commonjs(),
    // terser(),
  ]
};