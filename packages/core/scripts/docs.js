const
  Case = require('case'),
  fs = require('fs'),
  path = require('path'),
  Constants = require('../src/configs/constants'),
  root = path.resolve(process.cwd());

const getTag = (input, key) => {

  const tag = input.docsTags.find((item) => item.name === key);

  if (!tag) return false;

  return tag.text || true;
}

const events = (component) => {

  return component.events.map((event) => {

    const experimental = getTag(component, 'experimental');

    return {
      name: event.event,
      cancelable: event.cancelable,
      detail: event.detail,
      experimental,
      description: event.docs,
    }
  })
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

const externals = (component) => {

  const dir = path.join(component.dirPath, 'externals');

  return fs.existsSync(dir);
}

const methods = (component) => {

  return component.methods.map((method) => {

    const parameters = [];

    method.docsTags
      .filter((tag) => tag.name === 'param')
      .map((tag) => {

        const [name, description] = (tag.text || '').split('-').map((section) => section.trim());

        parameters.push({
          name,
          description
        })
      })

    return {
      name: method.name,
      experimental: getTag(method, 'experimental'),
      type: method.returns.type,
      signature: method.signature,
      description: method.docs,
      parameters
    }
  });
}

const parts = (component) => {

  return component.parts.map((part) => {

    return {
      name: part.name,
      description: part.docs
    }
  })
}

const properties = (component) => {

  return component.props.map((property) => {

    let values = [];

    const tags = property.docsTags;

    property.values.forEach((value) => {

      if (value.type !== 'boolean') return values.push(value);

      values.push(
        {
          value: true,
          type: 'boolean'
        },
        {
          value: false,
          type: 'boolean'
        }
      )
    });

    values = values
      .map((value) => {

        const index = tags.findIndex((tag) => tag.name === 'value' && tag.text.startsWith(`${value.value}`));

        if (index === -1) return value;

        value.index = index;

        const tag = tags[index];

        const description = tag.text.split('-').pop().trim();

        value.description = description;

        return value;
      })
      .sort((a, b) => a.index - b.index)
      .map((value) => {

        delete value.index;

        return value;
      });

    return {
      name: property.attr || property.name, // TODO
      attribute: property.attr,
      reflect: property.reflectToAttr,
      required: property.required,
      type: property.type,
      experimental: getTag(property, 'experimental'),
      description: property.docs,
      default: property.default,
      values
    }
  })
}

const readme = (component) => {

  try {

    return fs.readFileSync(component.readmePath, 'utf8');
  }
  catch { }
}

const slots = (component) => {

  return component.slots.map((slot) => {

    return {
      name: slot.name,
      description: slot.docs
    }
  });
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

const tags = (component) => {

  return (getTag(component, 'tags') || '')
    .split(',')
    .map((tag) => tag.trim())
    .filter((tag) => !!tag);
}

module.exports.docs = (dest) => (config, compilerCtx, buildCtx, input) => {

  const components = [];

  for (let i = 0; i < input.components.length; i++) {

    const component = input.components[i];

    const key = component.tag.replace(/\w+-/, '');

    const group = getTag(component, 'group');

    components.push({
      key,
      title: Case.capital(key),
      tag: component.tag,
      externals: externals(component),
      deprecated: getTag(component, 'deprecated'),
      development: getTag(component, 'development'),
      experimental: getTag(component, 'experimental'),
      group,
      main: !group || group === key,
      events: events(component),
      examples: examples(component),
      methods: methods(component),
      parts: parts(component),
      properties: properties(component),
      readme: readme(component),
      slots: slots(component),
      styles: styles(component, buildCtx),
      tags: tags(component)
    })
  }

  const target = path.join(root, dest);

  const dirname = path.dirname(target);

  !fs.existsSync(dirname) && fs.mkdirSync(dirname, { recursive: true });

  const json = {
    namespace: Constants.NAMESPACE,
    prefix: Constants.PREFIX,
    components
  }

  const content = JSON.stringify(json, null, 2);

  fs.writeFileSync(target, content);
}