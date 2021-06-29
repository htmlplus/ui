const
  fs = require('fs'),
  path = require('path'),
  root = path.resolve(process.cwd());

// Replace JSX source
(() => {

  const source = path.join(root, 'dist/react/components.d.ts');

  let content = fs.readFileSync(source, { encoding: 'utf8' });

  content = content.replace('import type { JSX } from \'@htmlplus/core\';', 'import type { JSX } from \'../types\';');

  // TODO: content = content.replace(/@htmlplus\/core\/dist\//g, '../');

  fs.writeFileSync(source, content);
})();

// Remove prefix from events
(() => {

  const source = path.join(root, 'dist/types/components.d.ts');

  let content = fs.readFileSync(source, { encoding: 'utf8' });

  content = content.replace(/"(on)Plus([A-Z]\w+)"/g, '"$1$2"');

  fs.writeFileSync(source, content);
})();