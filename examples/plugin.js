import fs from 'fs';
import { glob } from 'glob';
import path from 'path';

import { API_DETAILS, API_LIST } from './config';

export const examples = () => ({
  name: 'examples',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      next();

      const url = req.url?.startsWith('/') ? req.url : '/' + req.url;

      if (url.startsWith(API_DETAILS)) {
        const filePath = path.resolve(process.cwd(), url.replace(API_DETAILS, '') + '.html');

        let content = fs.readFileSync(filePath, 'utf-8');

        res.writeHead(200, { 'Content-Type': 'text/html' });

        res.end(content);

        return;
      }

      if (url.startsWith(API_LIST)) {
        const pattern = 'src/elements/*/examples/*.html';

        const files = glob.sync(pattern).map((file) => file.replace('.html', ''));

        res.writeHead(200, { 'Content-Type': 'application/json' });

        res.end(JSON.stringify(files));

        return;
      }
    });
  }
});
