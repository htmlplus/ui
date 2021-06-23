const
  Case = require('case'),
  docs = require('@htmlplus/core/dist/docs.json'),
  fs = require('fs');

(() => {

  const source = './dist/vue/components.d.ts';

  let content = fs.readFileSync(source, { encoding: 'utf8' });

  content = content.replace('import type { JSX } from \'@htmlplus/core\';', 'import type { JSX } from \'../types\';');

  content = content.replace(/@htmlplus\/core\/dist\//g, '../');

  fs.writeFileSync(source, content);
})();

(() => {

  const source = './dist/types/components.d.ts';

  let content = fs.readFileSync(source, { encoding: 'utf8' });

  content = content.replace(/"(on)Plus([A-Z]\w+)"/g, '"$1$2"');

  fs.writeFileSync(source, content);
})();

(() => {

  const tags = {}

  docs.forEach((component) => {

    tags[component.tag] = {
      description: component.readme,
      attributes: component.properties.map((property) => Case.kebab(property.name))
    }
  })

  const content = JSON.stringify(tags, null, 2);

  if (!fs.existsSync('./dist/vetur')) fs.mkdirSync('./dist/vetur');

  fs.writeFileSync('./dist/vetur/tags.json', content);
})();

(() => {

  const attributes = {}

  docs.forEach((component) => {

    component.properties.forEach((property) => {

      attributes[`${component.tag}/${Case.kebab(property.name)}`] = {
        type: property.type,
        description: property.description,
        // options: property.values.filter(option => option.value !== undefined).map(option => option.value)
      }
    })
  })

  const content = JSON.stringify(attributes, null, 2);

  if (!fs.existsSync('./dist/vetur')) fs.mkdirSync('./dist/vetur');

  fs.writeFileSync('./dist/vetur/attributes.json', content);
})();