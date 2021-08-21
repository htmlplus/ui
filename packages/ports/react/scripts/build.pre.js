const
  docs = require('@htmlplus/core/dist/json/docs.json'),
  Case = require('case'),
  fs = require('fs'),
  path = require('path'),
  root = path.resolve(process.cwd());

const index = [];

for (let i = 0; i < docs.components.length; i++) {

  const component = docs.components[i];

  if (!component.main) continue;

  const lines = [];

  index.push(`export * from './${component.key}';`);

  const group = !component.group ? [component] : docs.components.filter(x => x.group === component.group);

  const children = group.slice(1);

  const hasChildren = !!children.length;

  lines.push('/* eslint-disable */');
  lines.push('/* tslint:disable */');
  lines.push('/* auto-generated react proxies */');
  lines.push('import { proxy } from \'./proxy\';');
  lines.push('import type { JSX } from \'@htmlplus/core\';');
  lines.push('');

  for (const component of group) {
    lines.push(`import { ${Case.pascal(component.tag)} } from '@htmlplus/core/dist/components/${component.tag}';`);
  }

  lines.push('');

  for (const component of group) {
    lines.push(`if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('${component.tag}'))`);
    lines.push(`  customElements.define('${component.tag}', ${Case.pascal(component.tag)});`);
    lines.push('');
  }

  group.forEach((child, index) => {

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
      content += event.name;
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

  hasChildren && (() => {

    lines.push('');

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

  const content = lines.join('\n');

  const target = path.join(root, `src/${component.key}.ts`);

  fs.writeFileSync(target, content);
}

const content = index.join('\n');

const target = path.join(root, 'src/index.ts');

fs.writeFileSync(target, content);