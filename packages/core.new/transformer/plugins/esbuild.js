import fs from 'fs';
import { transformer } from '../transformer.js';

export const htmlplus = (config) => ({
  name: 'htmlplus',
  setup(build) {

    const cache = new Map();

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