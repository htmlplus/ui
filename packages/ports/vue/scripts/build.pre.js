const
  docs = require('@htmlplus/core/dist/json/docs.json'),
  Case = require('case'),
  fs = require('fs'),
  path = require('path'),
  root = path.resolve(process.cwd());

const index = [];

for (let i = 0; i < docs.components.length; i++) {

  const component = docs.components[i];

  const lines = [];

  index.push(`export * from './${component.key}';`);

  const model = (() => {

    const event = component.events.find((event) => event.model);

    const property = component.properties.find((property) => property.model);

    if (!event || !property) return;

    return {
      event: event.name,
      property: property.name,
    }
  })();

  lines.push('/* eslint-disable */');
  lines.push('/* tslint:disable */');
  lines.push('/* auto-generated vue proxies */');
  lines.push('import { proxy } from \'./proxy\';');
  lines.push('import type { JSX } from \'@htmlplus/core\';');
  lines.push('');
  lines.push(`import { ${Case.pascal(component.tag)} as ${Case.pascal(component.tag)}Core } from '@htmlplus/core/dist/components/${component.tag}';`);
  lines.push('');
  lines.push(`if (typeof window !== 'undefined' && typeof customElements !== 'undefined' && !customElements.get('${component.tag}'))`);
  lines.push(`  customElements.define('${component.tag}', ${Case.pascal(component.tag)}Core);`);
  lines.push('');

  (() => {

    let content = '';

    content += 'export';
    content += ' ';
    content += 'const';
    content += ' ';
    content += Case.pascal(component.tag);
    content += ' ';
    content += '=';
    content += ' ';
    content += '/*@__PURE__*/';
    content += ' ';
    content += 'proxy';
    content += '<';
    content += `HTML${Case.pascal(component.tag)}Element`;
    content += ',';
    content += ' ';
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
    content += 'prefix';
    content += ':';
    content += ' ';
    content += `'${docs.prefix}'`;
    content += ',';
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
    if (model) {
      content += ' ';
      content += ' ';
      content += 'model';
      content += ':';
      content += ' ';
      content += '{';
      content += '\n';
      content += ' ';
      content += ' ';
      content += ' ';
      content += ' ';
      content += 'prop';
      content += ':';
      content += ' ';
      content += `'${model.property}'`;
      content += ',';
      content += '\n';
      content += ' ';
      content += ' ';
      content += ' ';
      content += ' ';
      content += 'event';
      content += ':';
      content += ' ';
      content += `'${model.event}'`;
      content += '\n';
      content += ' ';
      content += ' ';
      content += '}';
      content += ',';
      content += '\n';
    }
    content += '}';
    content += `)`;
    content += `;`;

    lines.push(content);
  })();

  const content = lines.join('\n');

  const target = path.join(root, `src/${component.key}.ts`);

  fs.writeFileSync(target, content);
}

const content = index.join('\n');

const target = path.join(root, 'src/index.ts');

fs.writeFileSync(target, content);