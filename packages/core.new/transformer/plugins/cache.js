import fs from 'fs-extra';
import path from 'path';

const items = new Map();

const get = (cache, key) => {

    if (items.has(key))
        return items.get(key);

    const target = getTarget(cache, key);

    if (!fs.existsSync(target)) return;

    const value = fs.readJsonSync(target, 'utf8');

    items.set(key, value);

    return value;
}

const set = (cache, key, value) => {

    items.set(key, value);

    const target = getTarget(cache, key);

    const directory = path.dirname(target);

    fs.ensureDir(directory).then(() => {
        fs.writeJson(target, value, 'utf8');
    })
}

const snapshot = (filename) => {

    const stats = fs.statSync(filename);

    return `${stats.ctime}/${stats.mtime}`;
}

const getTarget = (cache, key) => {

    const directory = cache === true ? '.cache' : cache;

    const name = '' + key.split('').reduce((a, b) => { a = ((a << 5) - a) + b.charCodeAt(0); return a & a }, 0);

    const target = path.resolve(directory, name);

    return target;
}

const load = (config) => {

    const next = (context) => {

        if (!config.cache) return;

        const value = get(config.cache, context.filename) || {};

        const files = value.files || [];

        let changed = false;

        for (const file of files) {

            if (file.snapshot == snapshot(file.filename)) continue;

            changed = true;

            break;
        }

        context.skip = !!files.length && !changed;

        if (!context.skip) return;

        // TODO
        context.code = value.context.code;
        context.dependencies = value.context.dependencies;
    }

    const finish = () => { }

    return {
        next,
        finish,
    }
}

const save = (config) => {

    const next = (context) => {

        if (!config.cache) return;

        set(
            config.cache,
            context.filename,
            {
                // TODO
                context: {
                    code: context.code,
                    dependencies: context.dependencies,
                },
                files: [context.filename]
                    .concat(context.dependencies)
                    .map((filename) => ({
                        filename,
                        snapshot: snapshot(filename)
                    }))
            }
        )
    }

    const finish = () => { }

    return {
        next,
        finish,
    }
}

export const cache = {
    load,
    save,
}