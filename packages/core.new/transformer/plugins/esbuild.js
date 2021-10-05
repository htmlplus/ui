import fs from 'fs-extra';
import path from 'path';
import { transformer } from '../transformer.js';

export const htmlplus = (config) => ({
  name: 'htmlplus',
  setup(build) {

    // TODO
    const cache = {
      items: new Map(),
      get(id) {
        if (cache.items.has(id)) return cache.items.get(id);
        const key = path.basename(id).split('.').slice(0, -1).join('.');
        const target = path.resolve(config.cache, key);
        if (!fs.existsSync(target)) return;
        const value = fs.readJSONSync(target, 'utf8');
        cache.items.set(id, value);
        return value;
      },
      set(id, value) {
        cache.items.set(id, value);
        if (!config.cache) return;
        const key = path.basename(id).split('.').slice(0, -1).join('.');
        const target = path.resolve(config.cache, key);
        const directory = path.dirname(target);
        fs.ensureDir(directory);
        fs.writeJSON(target, value, 'utf8');
      }
    };

    build.onLoad({ filter: /\.tsx$/ }, async (args) => {

      const id = args.path;

      const stats = fs.statSync(id);

      const time = `${stats.ctime}/${stats.mtime}`;

      const value = cache.get(id) || {};

      if (value.time === time) return value.output;

      const { js } = await transformer(id, config);

      value.time = time;

      value.output = {
        contents: js.code,
      };

      cache.set(id, value);

      return value.output;
    })
  }
})