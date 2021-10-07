import fs from 'fs-extra';
import path from 'path';
import { customElement } from '../modules/index.js';

export const esbuild = (config) => ({
    name: 'htmlplus',
    setup(build) {

        const cache = {
            items: new Map(),
            target(id) {

                const key = path.basename(id).split('.').slice(0, -1).join('.');

                const target = path.resolve(config.cache === true ? '.cache' : config.cache, key);

                return target;
            },
            get(id) {

                if (cache.items.has(id))
                    return cache.items.get(id);

                if (!config.cache) return;

                const target = cache.target(id);

                if (!fs.existsSync(target)) return;

                const value = fs.readJSONSync(target, 'utf8');

                cache.items.set(id, value);

                return value;
            },
            set(id, value) {

                cache.items.set(id, value);

                if (!config.cache) return;

                const target = cache.target(id);

                const directory = path.dirname(target);

                fs.ensureDir(directory);

                fs.writeJSON(target, value, 'utf8');
            }
        };

        const snapshot = (id) => {

            const stats = fs.statSync(id);

            return `${stats.ctime}/${stats.mtime}`;
        }

        build.onLoad({ filter: /\.tsx$/ }, async (args) => {

            const id = args.path;

            const value = cache.get(id) || {};

            const dependencies = value.dependencies || [];

            let changed = false;

            for (const dependency of dependencies) {

                if (dependency.snapshot == snapshot(dependency.id)) continue;

                changed = true;

                break;
            }

            if (dependencies.length && !changed) return value.output;

            const source = await customElement(id, config);

            value.dependencies = [id]
                .concat(source.dependencies)
                .map((id) => ({
                    id,
                    snapshot: snapshot(id)
                }));

            value.output = {
                contents: source.js.code,
                watchFiles: source.dependencies,
            };

            cache.set(id, value);

            return value.output;
        })
    }
})