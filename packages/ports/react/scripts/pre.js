const
  docs = require('@htmlplus/core/dist/docs.json'),
  fs = require('fs');

// TODO
const toPascal = (string) => string.match(/[a-z]+/gi).map((word) => word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()).join('');

const groupBy = (array, key) => array.reduce((result, item) => { (result[item[key]] = result[item[key]] || []).push(item); return result; }, {});

const groups = groupBy(docs, 'group');

const lines = [
  '/* eslint-disable */',
  '/* tslint:disable */',
  '/* auto-generated react proxies */',
  'import { proxy } from \'./proxy\';',
  '',
  'import type { JSX } from \'@htmlplus/core\';',
];

const aaa = (component, isExternal) => {

  const { events, group, key, tag } = component;

  let content = '';

  content += isExternal ? '' : 'export ';
  content += 'const ';
  content += isExternal ? '_' : '';
  content += toPascal(key);
  content += ' =';
  content += ' /*@__PURE__*/ ';
  content += 'proxy';
  content += '<';
  content += `HTML${toPascal(tag)}Element`;
  content += ', ';
  content += `JSX.${toPascal(tag)}`;
  content += '>';
  content += '(';
  content += `'${tag}'`;
  content += `, `;
  content += `[`;
  content += events.map((event) => `'plus${toPascal(event.name)}'`).join(', ');
  content += `]`;
  content += `)`;
  content += `;`;

  return content;
}

for (let i = 0; i < docs.length; i++) {

  const component = docs[i];

  if (!component.main) continue;

  const subComponents = component.group && groups[component.group];

  lines.push('');
  lines.push('/*');
  lines.push(` * ${component.title}`);
  lines.push(' */');
  lines.push(aaa(component, !!subComponents));

  if (!subComponents) continue;

  const name = toPascal(component.tag);

  // const content = (subComponents || []).slice(1).map((subComponent) => `${toPascal(subComponent.tag).replace('Plus', '').replace(name.replace('Plus', ''), '')}: typeof _${toPascal(subComponent.tag).replace('Plus', '')};`).join(' ');

  // lines.push(`type ${name.replace('Plus', '')}Type = typeof _${name.replace('Plus', '')} & { ${content} }`);
}

const content = lines.join('\n');

fs.writeFileSync('./src/components.ts', content);