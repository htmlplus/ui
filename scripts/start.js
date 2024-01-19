import { htmlplus } from '@htmlplus/element/bundlers/vite.js';

import path from 'path';
import { createServer } from 'vite';

import plugins from '../htmlplus.config.js';

createServer({
  root: 'src',
  cacheDir: '../.cache',
  server: {
    open: true
  },
  resolve: {
    alias: [
      {
        find: /@\//,
        replacement: path.resolve('src') + '/'
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
