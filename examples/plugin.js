import { glob } from 'glob';

export const examples = () => ({
  name: 'examples',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (!req.url.includes('*')) return next();

      const file = req.url?.startsWith('/') ? req.url.slice(1) : req.url;

      const files = glob.sync(file);

      res.writeHead(200, { 'Content-Type': 'application/json' });

      res.end(JSON.stringify(files));
    });
  }
});
