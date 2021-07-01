const
  Case = require('case'),
  docs = require('@htmlplus/core/dist/docs.json'),
  fs = require('fs');

const groupBy = (array, key) => array.reduce((result, item) => { (result[item[key]] = result[item[key]] || []).push(item); return result; }, {});

const groups = groupBy(docs.components, 'group');

const lines = [
  '/* eslint-disable */',
  '/* tslint:disable */',
  '/* auto-generated react proxies */',
  'import { proxy } from \'./proxy.old\';',
  '',
  'import type { JSX } from \'@htmlplus/core\';',
  '',
];

for (let i = 0; i < docs.components.length; i++) {

  const component = docs.components[i];

  let content = '';

  content += 'export';
  content += ' ';
  content += 'const';
  content += ' ';
  content += Case.pascal(component.key);
  content += ' ';
  content += '=';
  content += ' ';
  content += '/*@__PURE__*/';
  content += ' ';
  content += 'proxy';
  content += '<';
  content += `JSX.${Case.pascal(component.tag)}`;
  content += '>';
  content += '(';
  content += '\'';
  content += component.tag;
  content += '\'';
  content += ',';
  content += ' ';
  content += '{';
  content += '\n';
  content += ' ';
  content += ' ';
  content += 'props';
  content += ':';
  content += ' ';
  content += '[';
  component.properties.map((property, index, properties) => {
    content += '\'';
    content += Case.camel(property.name);
    content += '\'';
    if (properties.length - 1 === index) return;
    content += ',';
    content += ' ';
  });
  content += `]`;
  content += `,`;
  content += '\n';
  content += ' ';
  content += ' ';
  content += 'events';
  content += ':';
  content += ' ';
  content += '[';
  component.events.map((event, index, events) => {
    content += '\'';
    content += event.name;
    content += '\'';
    if (events.length - 1 === index) return;
    content += ',';
    content += ' ';
  });
  content += `]`;
  content += `,`;
  content += '\n';
  content += '}';
  content += `)`;
  content += `;`;

  lines.push(content);
}

const content = lines.join('\n');

fs.writeFileSync('./src/components.ts', content);