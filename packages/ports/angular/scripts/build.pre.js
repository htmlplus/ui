const
  Case = require('case'),
  docs = require('@htmlplus/core/dist/json/docs.json'),
  fs = require('fs');

const lines = [
  '/* eslint-disable */',
  '/* tslint:disable */',
  '/* auto-generated react proxies */',
  'import { proxy } from \'./proxy\';',
  '',
  'import type { JSX } from \'@htmlplus/core\';',
  '',
  'export const log = () => proxy();'
];

for (let i = 0; i < docs.components.length; i++) {

  const component = docs.components[i];

  let content = '';

  lines.push(content);
}

const content = lines.join('\n');

fs.writeFileSync('./src/components.ts', content);