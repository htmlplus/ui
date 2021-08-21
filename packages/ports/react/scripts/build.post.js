const
  fs = require('fs'),
  glob = require('glob'),
  path = require('path'),
  root = path.resolve(process.cwd());

// Remove prefix from events
(() => {

  const source = path.join(root, 'dist/types/components.d.ts');

  let content = fs.readFileSync(source, { encoding: 'utf8' });

  content = content.replace(/"(on)Plus([A-Z]\w+)"/g, '"$1$2"');

  fs.writeFileSync(source, content);
})();

// Replace JSX source
(() => {

  const pattern = path.join(root, 'dist/components/*.d.ts');

  const sources = glob.sync(pattern);

  for (const source of sources) {

    let content = fs.readFileSync(source, { encoding: 'utf8' });

    content = content.replace('import type { JSX } from \'@htmlplus/core\';', 'import type { JSX } from \'../types\';');

    fs.writeFileSync(source, content);
  }
})();