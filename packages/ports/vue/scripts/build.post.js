const
  Case = require('case'),
  docs = require('@htmlplus/core/dist/docs.json'),
  fs = require('fs'),
  path = require('path'),
  root = path.resolve(process.cwd());

// Replace JSX source
(() => {

  const source = path.join(root, 'dist/vue/components.d.ts');

  let content = fs.readFileSync(source, { encoding: 'utf8' });

  content = content.replace('import type { JSX } from \'@htmlplus/core\';', 'import type { JSX } from \'../types\';');

  content = content.replace(/@htmlplus\/core\/dist\//g, '../');

  fs.writeFileSync(source, content);
})();

// Remove prefix from events
(() => {

  const source = path.join(root, 'dist/types/components.d.ts');

  let content = fs.readFileSync(source, { encoding: 'utf8' });

  content = content.replace(/"(on)Plus([A-Z]\w+)"/g, '"$1$2"');

  fs.writeFileSync(source, content);
})();

// Vetur tags
(() => {

  const source = path.join(root, 'dist/vetur/tags.json');

  const dir = path.dirname(source);

  const tags = {}

  docs.components.forEach((component) => {

    tags[component.tag] = {
      description: component.readme,
      attributes: component.properties.map((property) => Case.kebab(property.name))
    }
  })

  const content = JSON.stringify(tags, null, 2);

  !fs.existsSync(dir) && fs.mkdirSync(dir, { recursive: true });

  fs.writeFileSync(source, content);
})();

// Vetur attributes
(() => {

  const source = path.join(root, 'dist/vetur/attributes.json');

  const dir = path.dirname(source);

  const attributes = {}

  docs.components.forEach((component) => {

    component.properties.forEach((property) => {

      attributes[`${component.tag}/${Case.kebab(property.name)}`] = {
        type: property.type,
        description: property.description,
        // TODO: options: property.values.filter(option => option.value !== undefined).map(option => option.value)
      }
    })
  })

  const content = JSON.stringify(attributes, null, 2);

  !fs.existsSync(dir) && fs.mkdirSync(dir, { recursive: true });

  fs.writeFileSync(source, content);
})();