const
  Case = require('case'),
  fs = require('fs-extra'),
  glob = require('glob'),
  path = require('path'),
  Constants = require('../src/configs/constants'),
  root = path.resolve(process.cwd());

const getTag = (input, key) => {

  const tag = input.docsTags.find((item) => item.name === key);

  if (!tag) return false;

  return tag.text || true;
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
  return getTag(component, 'group');
}

const development = (component) => {
  return getTag(component, 'development');
}

const experimental = (component) => {
  return getTag(component, 'experimental');
}

const deprecated = (component) => {
  return getTag(component, 'deprecated');
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

  console.log(1, key(component), files.length)


  return files.reduce((result, file) => {

    const state = fs.statSync(file);

    return result > state.mtime ? result : state.mtime
  }, 0)
}

const tags = (component) => {

  return (getTag(component, 'tags') || '')
    .split(',')
    .map((tag) => tag.trim())
    .filter((tag) => !!tag);
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

const readme = (component) => {

  try {

    return fs.readFileSync(component.readmePath, 'utf8');
  }
  catch { }
}

module.exports.docs = (dest) => (config, compilerCtx, buildCtx, input) => {

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
      properties: properties(component),
      slots: slots(component),
      events: events(component),
      styles: styles(component, buildCtx),
      parts: parts(component),
      methods: methods(component),
      examples: examples(component),
      readme: readme(component),
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