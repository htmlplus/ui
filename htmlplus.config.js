import {
  assets,
  copy,
  customElement,
  document,
  extract,
  parse,
  read,
  readme,
  style,
  validate,
  visualStudioCode,
  webTypes
} from '@htmlplus/element/transformer.js';

import fs from 'fs';
import path from 'path';

const DESTINATION = 'dist';

const PACKAGE = JSON.parse(fs.readFileSync('./package.json'));

export default [
  read(),
  parse(),
  validate(),
  extract(),
  style(),
  customElement({
    prefix: 'plus-'
  }),
  assets({
    destination(context) {
      return `${DESTINATION}/${context.fileName}`;
    }
  }),
  copy({
    at: 'finish',
    source: 'package-lock.json',
    destination: `${DESTINATION}/package-lock.json`
  }),
  copy({
    at: 'finish',
    source: 'README.md',
    destination: `${DESTINATION}/README.md`
  }),
  copy({
    at: 'finish',
    source: 'package.json',
    destination: `${DESTINATION}/package.json`,
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
    destination: `${DESTINATION}/json/document.json`,
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
      return `https://www.htmlplus.io/javascript/element/${context.elementKey}`;
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
      return `https://www.htmlplus.io/javascript/element/${context.elementKey}`;
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
  {
    name: 'theme',
    finish: (global) => {
      const outputs = {};

      for (const context of global.contexts) {
        try {
          const directory = path.join(context.directoryPath, 'theme');

          const files = fs.readdirSync(directory);

          for (const file of files) {
            const content = fs.readFileSync(path.join(directory, file), 'utf8');

            outputs[`${file.replace('.css', '')}/${context.fileName}.css`] = content;

            outputs[file] ||= '';

            outputs[file] += content + '\n';
          }
        } catch { }
      }

      for (const output in outputs) {
        if (!Object.hasOwnProperty.call(outputs, output)) return;

        const file = path.join(DESTINATION, 'theme', output);

        const directory = path.dirname(file);

        if (!fs.existsSync(directory)) fs.mkdirSync(directory, { recursive: true });

        fs.writeFileSync(file, outputs[output], 'utf8');
      }
    }
  }
];
