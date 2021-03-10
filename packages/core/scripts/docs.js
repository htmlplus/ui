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

const hasExternals = (component) => {

  const dir = path.join(component.dirPath, 'externals');

  return fs.existsSync(dir);
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

  const styles = [];

  try {

    const variables = component.styleUpdated
      .match(/[^(]--(.*?):(.*?)(?=;|})/g)
      .map((key) => key.replace(/;|{/g, '').split(':'))
      .reduce((result, [key, value]) => ({ ...result, [key.trim()]: value.trim() }), {});

    for (let i = 0; i < component.styles.length; i++) {

      const style = component.styles[i];

      styles.push({
        name: style.name,
        description: style.docs,
        default: variables[style.name]
      })
    }
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

module.exports.docs = (dest) => (config, compilerCtx, buildCtx, input) => {

  const components = input.components
    .map((component) => {

      component.styleUpdated = buildCtx.stylesUpdated.find((style) => style.styleTag === component.tag).styleText;

      return {
        description: description(component),
        deprecated: deprecated(component),
        development: development(component),
        events: events(component),
        examples: examples(component),
        group: group(component),
        hasExternals: hasExternals(component),
        key: key(component),
        methods: methods(component),
        properties: properties(component),
        readme: readme(component),
        slots: slots(component),
        styles: styles(component),
        tag: tag(component),
        tags: tags(component),
        title: title(component),
      }
    })
    .map((component, index, components) => {

      component.main = !component.group || !!components.filter((item) => item.group === component.key && item.group !== item.key).length;

      return component;
    });

  const target = path.join(root, dest);

  const dirname = path.dirname(target);

  !fs.existsSync(dirname) && fs.mkdirSync(dirname, { recursive: true });

  const json = JSON.stringify(components, null, 2);

  fs.writeFileSync(target, json);
}