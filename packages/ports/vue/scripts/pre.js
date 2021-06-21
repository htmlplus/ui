const
  Case = require('case'),
  docs = require('@htmlplus/core/dist/docs.json'),
  fs = require('fs');

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

for (let i = 0; i < docs.length; i++) {

  const component = docs[i];

  if (!component.main) continue;

  const children = component.group ? (groups[component.group] || []).slice(1) : [];

  const hasChildren = component.group && children && children.length;

  lines.push('');
  lines.push('/*');
  lines.push(` * ${component.title}`);
  lines.push(' */');

  [component, ...children].forEach((child, index) => {

    let content = '';

    content += hasChildren ? '' : 'export ';
    content += 'const';
    content += ' ';
    content += Case.pascal(child.key);
    if (index === 0)
      content += hasChildren ? 'Base' : '';
    content += ' ';
    content += '=';
    content += ' ';
    content += '/*@__PURE__*/';
    content += ' ';
    content += 'proxy';
    content += '<';
    content += `HTML${Case.pascal(child.tag)}Element`;
    content += ',';
    content += ' ';
    content += `JSX.${Case.pascal(child.tag)}`;
    content += '>';
    content += '(';
    content += '\'';
    content += child.tag;
    content += '\'';
    content += ',';
    content += ' ';
    content += '[';
    child.properties.map((property, index, properties) => {
      content += '\'';
      content += Case.camel(property.name);
      content += '\'';
      if (properties.length - 1 === index) return;
      content += ',';
      content += ' ';
    });
    content += `]`;
    content += ',';
    content += ' ';
    content += '[';
    child.events.map((event, index, events) => {
      content += '\'';
      content += 'plus';
      content += Case.pascal(event.name);
      content += '\'';
      if (events.length - 1 === index) return;
      content += ',';
      content += ' ';
    });
    content += `]`;
    content += `)`;
    content += `;`;

    lines.push(content);
  });

  if (!hasChildren) continue;

  (() => {

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
    content += 'Object.assign(';
    content += Case.pascal(component.key);
    content += 'Base';
    content += ',';
    content += ' ';
    content += '{';
    children.forEach((child) => {
      content += '\n';
      content += ' ';
      content += ' ';
      content += Case.pascal(child.key.replace(component.key, ''));
      content += ':';
      content += ' ';
      content += Case.pascal(child.key);
      content += ',';
    });
    content += '\n';
    content += '}';
    content += ')';
    content += ';';

    lines.push(content);
  })();
}

const content = lines.join('\n');

fs.writeFileSync('./src/components.ts', content);