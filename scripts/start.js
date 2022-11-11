import { vite as htmlplus } from '@htmlplus/element/bundlers/index.js';
import path from 'path';
import { createServer } from 'vite';

import plugins from '../plus.config.js';

createServer({
  root: 'src',
  cacheDir: '../.cache',
  server: {
    open: true
  },
  resolve: {
    alias: [
      {
        find: '@app',
        replacement: path.resolve('src')
      }
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/styles/mixins/index.scss";
          @import "./src/styles/variables/index.scss";
          @import "./src/styles/reset.scss";
        `
      }
    }
  },
  esbuild: {
    target: 'ES2016'
  },
  plugins: [htmlplus(...plugins)]
})
  .then((server) => server.listen())
  .catch((error) => console.log(error));
