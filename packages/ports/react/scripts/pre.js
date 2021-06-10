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

for (let i = 0; i < docs.length; i++) {

  const component = docs[i];

  if (!component.main) continue;

  const children = component.group ? (groups[component.group] || []).slice(1) : [];

  const hasChildren = component.group && children && children.length;

  lines.push('');
  lines.push('/*');
  lines.push(` * ${component.title}`);
  lines.push(' */');

  [component, ...children].forEach((child) => {

    let content = '';

    content += hasChildren ? '' : 'export ';
    content += 'const';
    content += ' ';
    content += hasChildren ? '_' : '';
    content += toPascal(child.key);
    content += ' ';
    content += '=';
    content += ' ';
    content += '/*@__PURE__*/';
    content += ' ';
    content += 'proxy';
    content += '<';
    content += `HTML${toPascal(child.tag)}Element`;
    content += ',';
    content += ' ';
    content += `JSX.${toPascal(child.tag)}`;
    content += '>';
    content += '(';
    content += '\'';
    content += child.tag;
    content += '\'';
    content += ',';
    content += ' ';
    content += '[';
    child.events.map((event, index, events) => {
      content += '\'';
      content += 'plus';
      content += toPascal(event.name);
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

    content += 'type';
    content += ' ';
    content += toPascal(component.key);
    content += 'Type';
    content += ' ';
    content += '=';
    content += ' ';
    content += 'typeof';
    content += ' ';
    content += '_';
    content += toPascal(component.key);
    content += ' ';
    content += '&';
    content += ' ';
    content += '{';
    content += '\n';
    children.forEach((child) => {
      content += ' ';
      content += ' ';
      content += toPascal(child.key.replace(component.key, ''));
      content += ':';
      content += ' ';
      content += 'typeof';
      content += ' ';
      content += '_';
      content += toPascal(child.key);
      content += ';';
      content += '\n';
    });
    content += '}';

    lines.push(content);
  })();

  children.forEach((child) => {

    let content = '';

    content += '(';
    content += '_';
    content += toPascal(component.key);
    content += ' ';
    content += 'as';
    content += ' ';
    content += toPascal(component.key);
    content += 'Type';
    content += ')';
    content += '.';
    content += toPascal(child.key.replace(component.key, ''));
    content += ' ';
    content += '=';
    content += ' ';
    content += '_';
    content += toPascal(child.key);
    content += ';';

    lines.push(content);
  });

  (() => {

    let content = '';

    content += 'export';
    content += ' ';
    content += 'const';
    content += ' ';
    content += toPascal(component.key);
    content += ' ';
    content += '=';
    content += ' ';
    content += '/*@__PURE__*/';
    content += ' ';
    content += '_';
    content += toPascal(component.key);
    content += ' ';
    content += 'as';
    content += ' ';
    content += toPascal(component.key);
    content += 'Type';

    lines.push(content);
  })();
}

const content = lines.join('\n');

fs.writeFileSync('./src/components.ts', content);