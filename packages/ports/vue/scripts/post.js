const fs = require('fs');

(() => {

  const source = './dist/vue/components.d.ts';

  let content = fs.readFileSync(source, { encoding: 'utf8' });

  content = content.replace('import type { JSX } from \'@htmlplus/core\';', 'import type { JSX } from \'../types\';');

  content = content.replace(/@htmlplus\/core\/dist\//g, '../');

  fs.writeFileSync(source, content);
})();

(() => {

  const source = './dist/types/components.d.ts';

  let content = fs.readFileSync(source, { encoding: 'utf8' });

  content = content.replace(/"(on)Plus([A-Z]\w+)"/g, '"$1$2"');

  fs.writeFileSync(source, content);
})();