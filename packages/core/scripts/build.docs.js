const
  Case = require('case'),
  fs = require('fs-extra'),
  glob = require('glob'),
  path = require('path'),
  Constants = require('../src/configs/constants'),
  root = path.resolve(process.cwd());

const parseTag = (input, key, array) => {

  const tags = input.docsTags.filter((tag) => tag.name === key);

  if (array) {

    return tags.map((tag) => {

      const [value, description] = tag.text.split('-').map((section) => section.trim());

      return {
        value,
        description
      }
    })
  }
  else {

    const [tag] = tags;

    if (!tag) return false;

    return tag.text || true;
  }
}

const key = (component) => {
  return component.tag.replace(/\w+-/, '');
}

const title = (component) => {
  return Case.capital(key(component));
}

const main = (component) => {
  return !group(component) || group(component) === key(component);
}

const group = (component) => {
  return parseTag(component, 'group');
}

const development = (component) => {
  return parseTag(component, 'development');
}

const experimental = (component) => {
  return parseTag(component, 'experimental');
}

const deprecated = (component) => {
  return parseTag(component, 'deprecated');
}

const externals = (component) => {

  const dir = path.join(component.dirPath, 'externals');

  return fs.existsSync(dir);
}

const lastModified = (component) => {

  if (!main(component)) return;

  const sections = component.dirPath.split('/');

  const indented = sections.pop() === sections.pop();

  const files = glob.sync(
    path.join(component.dirPath, indented ? '..' : '', '/**/*.*'),
    { cwd: root }
  );

  return files.reduce((result, file) => {

    const state = fs.statSync(file);

    return result > state.mtime ? result : state.mtime
  }, 0)
}

const tags = (component) => {

  return (parseTag(component, 'tags') || '')
    .split(',')
    .map((tag) => tag.trim())
    .filter((tag) => !!tag);
}

const description = (component) => {

  const content = readme(component) || '';

  if (!content.startsWith('# ')) return '';

  const sections = content.split('\n');

  for (let i = 1; i < sections.length; i++) {

    const section = sections[i].trim();

    if (!section) continue;

    return section;
  }

  return '';
}

const readme = (component) => {
  try {
    return fs.readFileSync(component.readmePath, 'utf8');
  }
  catch { }
}

const properties = (component) => {

  return component.props.map((property) => {

    const tags = parseTag(property, 'value', true);

    // TODO
    const values = property.values
      .map((value) => {

        if (value.type === 'boolean') {

          const index = tags.findIndex((tag) => tag.value === 'false' || tag.value === 'true');

          if (index === -1) return value;

          value.index = index;

          value.description = {
            false: (tags.find((tag) => tag.value === 'false') || {}).description || '',
            true: (tags.find((tag) => tag.value === 'true') || {}).description || '',
          };
        }
        else {

          const index = tags.findIndex((tag) => tag.value === value.value);

          if (index === -1) return value;

          value.index = index;

          const tag = tags[index];

          value.description = tag.description;
        }

        return value;
      })
      .sort((a, b) => a.index - b.index)
      .map((value) => {

        delete value.index;

        return value;
      });

    return {
      name: property.name,
      attribute: property.attr,
      default: property.default,
      reflect: property.reflectToAttr,
      required: property.required,
      type: property.type,
      experimental: parseTag(property, 'experimental'),
      description: property.docs,
      default: property.default,
      values
    }
  })
}

const slots = (component) => {

  return component.slots.map((slot) => {

    return {
      name: slot.name,
      description: slot.docs
    }
  });
}

const events = (component) => {

  return component.events.map((event) => {

    const experimental = parseTag(component, 'experimental');

    return {
      name: event.event,
      cancelable: event.cancelable,
      detail: event.detail,
      experimental,
      description: event.docs,
    }
  })
}

const styles = (component, buildCtx) => {

  const key = component.tag.replace(/\w+-/, '');

  const dir = path.join(component.dirPath, key + '.scss');

  const styleUpdated = buildCtx
    .stylesUpdated
    .find((style) => style.styleTag === component.tag)
    .styleText || '';

  const styles = [];

  try {

    fs.readFileSync(dir, 'utf8')
      .split('@prop')
      .slice(1)
      .map((section) => {

        let [description, name] = section.split(/\n/);

        name = name.split(':').slice(0, -1).join(':').trim();

        description = description.trim();

        let [value] = styleUpdated.split(name).slice(1, 2);

        if (value) value = value.split(/;|}/)[0].replace(':', '').trim();

        styles.push({
          name,
          dafault: value,
          description
        })
      })
  }
  catch { }

  return styles;
}

const parts = (component) => {

  return component.parts.map((part) => {

    return {
      name: part.name,
      description: part.docs
    }
  })
}

const methods = (component) => {

  return component.methods.map((method) => {

    const parameters = parseTag(method, 'param', true)
      .map((tag) => ({
        name: tag.value,
        description: tag.description,
      }))

    return {
      name: method.name,
      experimental: parseTag(method, 'experimental'),
      type: method.returns.type,
      signature: method.signature,
      description: method.docs,
      parameters
    }
  });
}

const examples = (component) => {

  const items = [];

  const dir = path.join(component.dirPath, 'examples');

  if (!fs.existsSync(dir)) return items;

  return fs.readdirSync(dir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {

      const item = {};

      const regex = /```\w+\s\[\w+(:\w+)?\]\s[\S\s]*?```/g;

      const filePath = path.join(dir, file);

      const content = fs.readFileSync(filePath, 'utf8');

      item.key = path.basename(filePath).replace('.md', '');

      item.title = Case.capital(item.key);

      item.readme = content.replace(regex, '').trim();

      item.codes = (content.match(regex) || [])
        .map((section) => {

          try {

            const lines = section.split('\n');

            const key = ((lines[0].match(/\[\w+(:\w+)?\]/) || []).shift() || '').replace('[', '').replace(']', '');

            const type = ((lines[0].match(/```\w+/) || []).pop() || '').replace('```', '');

            const value = lines.slice(1, -1).join('\n');

            return {
              key,
              type,
              value
            }
          }
          catch { }
        });

      return item;
    })
}

module.exports.docs = (options) => ({
  type: 'custom',
  name: 'custom-docs',
  generator: (config, compilerCtx, buildCtx, input) => {

    const components = [];

    for (let i = 0; i < input.components.length; i++) {

      const component = input.components[i];

      components.push({
        key: key(component),
        tag: component.tag,
        title: title(component),
        main: main(component),
        group: group(component),
        development: development(component),
        experimental: experimental(component),
        deprecated: deprecated(component),
        externals: externals(component),
        lastModified: lastModified(component),
        tags: tags(component),
        description: description(component),
        readme: readme(component),
        properties: properties(component),
        slots: slots(component),
        events: events(component),
        styles: styles(component, buildCtx),
        parts: parts(component),
        methods: methods(component),
        examples: examples(component),
      })
    }

    (() => {

      const target = path.join(root, options.docs);

      const dirname = path.dirname(target);

      !fs.existsSync(dirname) && fs.mkdirSync(dirname, { recursive: true });

      const json = {
        namespace: Constants.NAMESPACE,
        prefix: Constants.PREFIX,
        components
      }

      const content = JSON.stringify(json, null, 2);

      fs.writeFileSync(target, content);
    })();

    (() => {

      const target = path.join(root, options.vscode);

      const dirname = path.dirname(target);

      !fs.existsSync(dirname) && fs.mkdirSync(dirname, { recursive: true });

      const json = {
        'version': 1.1, // TODO
        'tags': components.map((component) => ({
          'name': component.key,
          'description': {
            'kind': 'markdown',
            'value': component.description
          },
          'attributes': component.properties.map((property) => {

            const result = {
              'name': property.attribute,
              'description': property.description,
            };

            const values = property
              .values
              .filter((value) => value.value)
              .map((value) => ({ 'name': value.value }));

            if (values.length) result.values = values;

            return result;
          }),
          'references': [
            {
              'name': 'Source code',
              // TODO
              'url': `https://github.com/htmlplus/core/tree/main/packages/core/src/components/${component.key}.tsx`
            }
          ],
        }))
      }

      const content = JSON.stringify(json, null, 2);

      fs.writeFileSync(target, content);
    })();
  }
})