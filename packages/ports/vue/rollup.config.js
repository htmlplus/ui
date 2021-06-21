import pkg from './package.json';

export default {
  input: 'dist/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs'
    },
    {
      file: pkg.module,
      format: 'es'
    },
  ],
  external: ['path', 'node-sass', 'fs', 'util'],
};
