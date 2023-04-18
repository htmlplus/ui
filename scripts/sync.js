import fs from 'fs';
import path from 'path';

import nodes from '../node_modules/@tabler/icons/tabler-nodes.json' assert { type: 'json' };

for (const key of Object.keys(nodes)) {
  const directory = path.join('src/components/icon2/assets/names');

  if (!fs.existsSync(directory)) fs.mkdirSync(directory, { recursive: true }); 

  const file = path.join(directory, `${key}.js`);

  const content = [
    "import { register } from '../register.js';",
    '',
    `register('${key}', ${JSON.stringify(nodes[key])});`
  ].join('\n');

  fs.writeFileSync(file, content, 'utf8');
} 
