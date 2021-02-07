const
  fs = require('fs'),
  path = require('path'),
  root = path.resolve(process.cwd());

const deprecated = (component) => {

  return !!component.docsTags.find((item) => item.name === 'deprecated');
}

const description = (component) => {

  return component.docs;
}

const development = (component) => {

  return !!component.docsTags.find((item) => item.name === 'development');
}

const events = (component) => {

  return (component.events || []).map((event) => {

    const name = event.event
      .split(/(?=[A-Z])/).slice(1).join("")
      .replace(/^\w/, (char) => char.toLowerCase());

    return {
      name,
      cancelable: event.cancelable,
      detail: event.detail,
      description: event.docs,
    }
  });
}

const examples = (component) => {

  const items = [];

  const dir = path.join(component.dirPath, 'examples');

  if (!fs.existsSync(dir)) return items;

  const keys = ((component.docsTags.find((tag) => tag.name === 'examples') || {}).text || '').split(',').map((key) => key.trim());

  return fs.readdirSync(dir)
    .filter((file) => file.endsWith('.md'))
    .map((file) => {

      const item = {};

      const regex = /```\w+\s\[\w+\]\s[\S\s]*?```/g;

      const filePath = path.join(dir, file);

      const content = fs.readFileSync(filePath, 'utf8');

      item.key = path.basename(filePath).replace('.md', '');

      item.title = item.key.split('-').join(' ').replace(/^\w/, (char) => char.toUpperCase());

      item.readme = content.replace(regex, '').trim();

      item.codes = (content.match(regex) || [])
        .map((section) => {

          try {

            const lines = section.split('\n');

            const key = ((lines[0].match(/\[\w+\]/) || []).pop() || '').replace('[', '').replace(']', '');

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
    .sort((a, b) => keys.indexOf(a.key) - keys.indexOf(b.key));
}

const group = (component) => {

  return (component.docsTags.find((item) => item.name === 'group') || {}).text || '';
}

const key = (component) => {

  return component.tag.split('-').slice(1).join('-');
}

const methods = (component) => {

  return (component.methods || []).map((method) => {

    return {
      name: method.name,
      type: method.returns.type,
      signature: method.signature,
      description: method.docs,
    }
  });
}

const properties = (component) => {

  return (component.props || []).map((property) => {

    return {
      name: property.attr || property.name,
      type: property.type,
      description: property.docs,
      default: property.default,
      values: property.values
    }
  });
}

const readme = (component) => {

  try {

    return fs.readFileSync(component.readmePath, 'utf8');
  }
  catch { }
}

const slots = (component) => {

  return (component.slots || []).map((slot) => {

    return {
      name: slot.name || 'default',
      description: slot.docs
    }
  });
}

const styles = (component) => {

  let styles = [];

  try {

    const file = fs.readFileSync(path.join(component.dirPath, component.fileName.replace('tsx', 'scss')), 'utf8');

    const props = file
      .match(/(?<=:host {\s+).*?(?=\s+})/gs)
      .shift()
      .split('\n')
      .map((line) => {

        let i = line.indexOf('@prop');

        if (i < 0) i = line.indexOf('--')

        if (i < 0) return '';

        return line.substr(i, line.length).trim();
      })
      .filter((line) => !!line)
      .map((line) => line.split(':').map((section) => section.trim()));

    const defaults = props.filter(prop => prop[0].startsWith('--'))

    styles = props
      .filter(prop => prop[0].startsWith('@prop'))
      .map(prop => {
        const name = prop[0].split('@prop').pop().trim();
        return {
          name,
          description: prop[1],
          default: ((defaults.find(x => x[0] === name) || []).pop() || '').trim().replace(';', '')
        }
      });
  }
  catch { }

  return styles;
}

const tag = (component) => {

  return component.tag;
}

const tags = (component) => {

  return ((component.docsTags.find((item) => item.name === 'tags') || {}).text || '')
    .replace('-', '')
    .split(',')
    .map((tag) => tag.trim())
    .filter((tag) => !!tag);
}

const title = (component) => {

  return key(component)
    .replace('-', ' ')
    .replace(/^\w/, (char) => char.toUpperCase());
}

const convert = (components) => {

  return components
    .map((component) => ({
      key: key(component),
      tag: tag(component),
      tags: tags(component),
      deprecated: deprecated(component),
      development: development(component),
      title: title(component),
      group: group(component),
      description: description(component),
      events: events(component),
      examples: examples(component),
      methods: methods(component),
      properties: properties(component),
      readme: readme(component),
      slots: slots(component),
      styles: styles(component),
      original: component, // ???
    }))
    .map((component, index, components) => {

      component.main = !component.group || !!components.filter((item) => item.group === component.key && item.group !== item.key).length;

      return component;
    });
}

const docs = (dest) => (input) => {

  const components = convert(input.components);

  const target = path.join(root, dest);

  const dirname = path.dirname(target);

  !fs.existsSync(dirname) && fs.mkdirSync(dirname, { recursive: true });

  const json = JSON.stringify(components, null, 2);

  fs.writeFileSync(target, json);
}

module.exports.docs = docs;