import {
  assets,
  copy,
  customElement,
  customElementReact,
  document,
  extract,
  parse,
  read,
  style,
  validate,
  webTypes
} from '@htmlplus/element/compiler/index.js';

export default [
  read(),
  parse(),
  validate(),
  extract({
    prefix: 'plus'
  }),
  style(),
  customElement(),
  customElementReact({
    compact: true,
    destination: '../distributions/react',
    eventName(eventName) {
      return eventName.replace(/Plus/, '');
    },
    importerComponent(context) {
      return {
        source: `@htmlplus/core/${context.fileName}`
      };
    },
    importerComponentType(context) {
      return {
        source: `@htmlplus/core/types/components/${context.fileName}/${context.fileName}`,
        imported: `${context.className}JSX`,
        local: `${context.className}JSX`
      };
    }
  }),
  assets({
    destination(context) {
      return `dist/${context.fileName}/names`;
    }
  }),
  copy({
    at: 'finish',
    source: 'package-lock.json',
    destination: 'dist/package-lock.json'
  }),
  copy({
    at: 'finish',
    source: 'README.md',
    destination: 'dist/README.md'
  }),
  copy({
    at: 'finish',
    source: 'package.json',
    destination: 'dist/package.json',
    transformer(content) {
      return JSON.stringify(
        {
          ...JSON.parse(content),
          scripts: undefined
        },
        null,
        2
      );
    }
  }),
  document({
    destination: 'dist/json/document.json'
  }),
  webTypes({
    destination: 'dist/json/web-types.json',
    packageName: '@htmlplus/core',
    packageVersion: '0.5.1',
    reference(context) {
      return `https://www.htmlplus.io/javascript/component/${context.componentKey}`;
    },
    transformer(context, element) {
      element.description ||= context?.readmeContent
        ?.split('#')[1]
        ?.split('\n')
        ?.slice(1)
        ?.filter((line) => !!line.trim())[0]
        ?.trim();
    }
  })
];
