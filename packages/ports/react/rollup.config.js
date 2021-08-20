import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import glob from 'glob';

export default {
  input: glob.sync('src/*.ts'),
  output: [
    {
      dir: 'dist/components',
      format: 'esm'
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve(),
    commonjs(),
    typescript(),
    copy({
      targets: [
        {
          src: './node_modules/@htmlplus/core/dist/externals',
          dest: './dist'
        },
        {
          src: './node_modules/@htmlplus/core/dist/json',
          dest: './dist'
        },
        {
          src: './node_modules/@htmlplus/core/dist/types',
          dest: './dist'
        }
      ]
    })
  ]
};
