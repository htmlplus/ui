const
    fs = require('fs'),
    path = require('path'),
    root = path.resolve(process.cwd());

const files = (dir) => {

    const result = [];

    fs.readdirSync(dir).map((file) => {

        file = path.join(dir, file);

        const state = fs.statSync(file);

        if (state.isFile()) {

            const content = fs.readFileSync(file, { encoding: 'utf8' });

            result.push({ file, content, state });

            return;
        }

        files(file).map((file) => result.push(file));
    });

    return result;
}

const map = {
    'constants': 'dist/collection/configs/constants',
    'services': 'dist/collection/services',
    'utils': 'dist/collection/utils',
}

const base = path.join(root, 'dist', 'collection');

files(base)
    .filter((file) => file.file.endsWith('.js') && file.content.match(/@app\//))
    .map((file) => {

        let content = file.content;

        Object.keys(map)
            .map((key) => {

                const value = path.join(root, map[key]);

                const source = value.replace(base, '');

                const length = file.file.replace(base, '').split('\\').length - 1;

                let level = '';

                for (let i = 1; i < length; i++) level += '..\\';

                const regexp = new RegExp(`@app/${key}`);

                content = content.replace(regexp, path.join(`${level}${source}`).replace(/\\/g, '/'));
            });

        fs.writeFileSync(file.file, content);
    });