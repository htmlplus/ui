import path from 'path';
import { transformer } from '../transformer';

export const htmlplus = (config) => {
  return {
    name: 'htmlplus',
    resolveId(id) {
      if (id.startsWith('@virtual/'))
        return path.resolve(
          __dirname,
          'transformer',
          id.replace('@virtual/', ''),
          'index.js'
        );

      return null;
    },
    async load(id) {
      if (!id.endsWith('.tsx')) return null;

      const { js } = await transformer(id, config);

      return js.code;
    },
  };
};
