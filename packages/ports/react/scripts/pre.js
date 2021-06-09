const docs = require('@htmlplus/core/dist/docs.json');
const fs = require('fs');

const lines = [
  '/* eslint-disable */',
  '/* tslint:disable */',
  '/* auto-generated react proxies */',
  'import { proxy } from \'./proxy\';',
  '',
  'import type { JSX } from \'@htmlplus/core\';',
  '',
];

for (let i = 0; i < docs.length; i++) {

  const { tag, events } = docs[i];

  const name = tag.match(/[a-z]+/gi)
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
    })
    .join('');

  lines.push(`export const ${name.replace('Plus', '')} = /*@__PURE__*/proxy<HTML${name}Element, JSX.${name}>('${tag}', [${events.map((event) => '\'plus' + event.name[0].toUpperCase() + event.name.slice(1) + '\'').join(', ')}]);`);
}

const content = lines.join('\n');

fs.writeFileSync('./src/components.ts', content);