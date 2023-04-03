import {
  assets,
  copy,
  customElement,
  customElementReact,
  document,
  extract,
  parse,
  read,
  readme,
  style,
  validate,
  visualStudioCode,
  webTypes,
} from '@htmlplus/element/compiler/index.js';

import PACKAGE from './package.json' assert { type: 'json' };

export default [
  read(),
  parse(),
  validate(),
  extract(),
  style(),
  customElement({
    prefix: 'plus-'
  }),
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
      return `dist/${context.fileName}`;
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
  readme(),
  document({
    destination: 'dist/json/document.json',
    transformer(context, element) {
      element.description ||= context?.readmeContent
        ?.split('#')[1]
        ?.split('\n')
        ?.slice(1)
        ?.filter((line) => !!line.trim())[0]
        ?.trim();
    }
  }),
  visualStudioCode({
    destination: `${PACKAGE.publishConfig.directory}/json/vscode.json`,
    reference(context) {
      return `https://www.htmlplus.io/javascript/component/${context.componentKey}`;
    },
    transformer(context, element) {
      element.name = 'plus-' + element.name;
      element.description ||= context?.readmeContent
        ?.split('#')[1]
        ?.split('\n')
        ?.slice(1)
        ?.filter((line) => !!line.trim())[0]
        ?.trim();
    }
  }),
  webTypes({
    destination: `${PACKAGE.publishConfig.directory}/${PACKAGE['web-types']}`,
    packageName: PACKAGE.name,
    packageVersion: PACKAGE.version,
    reference(context) {
      return `https://www.htmlplus.io/javascript/component/${context.componentKey}`;
    },
    transformer(context, element) {
      element.name = 'plus-' + element.name;
      element.description ||= context?.readmeContent
        ?.split('#')[1]
        ?.split('\n')
        ?.slice(1)
        ?.filter((line) => !!line.trim())[0]
        ?.trim();
    }
  })
];
