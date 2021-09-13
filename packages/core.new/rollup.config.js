import resolve from 'rollup-plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import commonjs from 'rollup-plugin-commonjs';
// import { terser } from 'rollup-plugin-terser';
import { htmlplus } from './transformer/rollup.plugin';
import { config } from './config';

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
    htmlplus(config),
    typescript(),
    resolve(),
    commonjs(),
    // terser(),
  ]
};