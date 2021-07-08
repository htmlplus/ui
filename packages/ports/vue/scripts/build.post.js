const
  Case = require('case'),
  docs = require('@htmlplus/core/dist/json/docs.json'),
  fs = require('fs'),
  path = require('path'),
  pkg = require('../package.json');

// Replace JSX source
(() => {

  const source = 'dist/vue/components.d.ts';

  let content = fs.readFileSync(source, { encoding: 'utf8' });

  content = content.replace('import type { JSX } from \'@htmlplus/core\';', 'import type { JSX } from \'../types\';');

  content = content.replace(/@htmlplus\/core\/dist\//g, '../');

  fs.writeFileSync(source, content);
})();

// Remove prefix from events
(() => {

  const source = 'dist/types/components.d.ts';

  let content = fs.readFileSync(source, { encoding: 'utf8' });

  content = content.replace(/"(on)Plus([A-Z]\w+)"/g, '"$1$2"');

  fs.writeFileSync(source, content);
})();

// Vetur tags
(() => {

  const source = 'dist/vetur/tags.json';

  const dir = path.dirname(source);

  const tags = {};

  for (const component of docs.components) {
    tags[component.tag] = {
      description: component.description,
      attributes: component.properties.map((property) => Case.kebab(property.name))
    }
  }

  const content = JSON.stringify(tags, null, 2);

  !fs.existsSync(dir) && fs.mkdirSync(dir, { recursive: true });

  fs.writeFileSync(source, content);
})();

// Vetur attributes
(() => {

  const source = 'dist/vetur/attributes.json';

  const dir = path.dirname(source);

  const attributes = {}

  for (const component of docs.components) {
    for (const property of component.properties) {
      attributes[`${component.tag}/${Case.kebab(property.name)}`] = {
        type: property.type,
        description: property.description,
        options: property.values
          .filter((value) => value.value !== undefined)
          .map((value) => value.value)
      }
    }
  }

  const content = JSON.stringify(attributes, null, 2);

  !fs.existsSync(dir) && fs.mkdirSync(dir, { recursive: true });

  fs.writeFileSync(source, content);
})();

// web-types
(() => {

  const components = [];

  for (const component of docs.components) {

    const
      attributes = [],
      events = []
      slots = [];

    for (const property of component.properties) {
      attributes.push({
        'name': property.attribute || property.name,
        'description': property.description,
        'required': property.required,
        'default': property.default,
        'value': {
          'kind': 'expression',
          'type': property.type
        }
      })
    }

    for (const event of component.events) {

      let name = event.name;

      // TODO
      if (name.toLowerCase().startsWith(Case.pascal(component.tag).toLowerCase())) {
        name = 'on' + name.substr(Case.pascal(component.tag).length);
      }

      events.push({
        'name': name,
        'description': event.description,
        'arguments': [{
          'name': 'detail',
          'type': event.detail
        }]
      })
    }

    for (const slot of component.slots) {
      slots.push({
        'name': slot.name || 'default',
        'description': slot.description,
      })
    }

    components.push({
      'name': Case.pascal(component.tag),
      'doc-url': `https://htmlplus.io/component/${component.key}`,
      'description': component.description,
      'source': {
        'module': `@htmlplus/vue/dist/types/components/${component.source}/${component.key}.d.ts`, // TODO
        'symbol': Case.pascal(component.key),
      },
      'attributes': attributes,
      'slots': slots,
      'events': events,
    })
  }

  const webTypes = {
    '$schema': 'http://json.schemastore.org/web-types',
    'framework': 'vue',
    'name': '@htmlplus/vue',
    'version': pkg.version,
    'contributions': {
      'html': {
        'types-syntax': 'typescript',
        'description-markup': 'markdown',
        'tags': components
      }
    }
  }

  const content = JSON.stringify(webTypes, null, 2);

  fs.writeFileSync('dist/json/web-types.json', content);
})();