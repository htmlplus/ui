// TODO

const
    fs = require('fs'),
    path = require('path'),
    components = require('../dist/docs.json'),
    root = path.resolve(process.cwd());

const files = (dir) => {

    const result = [];

    fs.readdirSync(dir).map((file) => {

        file = path.join(dir, file);

        const state = fs.statSync(file);

        if (state.isFile()) {

            const content = fs.readFileSync(file);

            result.push({ file, content, state });

            return;
        }

        files(file).map((file) => result.push(file));
    });

    return result;
}

const source = files(path.join(root, 'src', 'components'));

const destination = files(path.join(root, 'dist', 'htmlplus'));

components
    .filter((component) => component.main)
    .map((component) => {

        component.lastModified = source
            .filter((item) => {

                const key = path.join('components', component.key);

                return item.file.indexOf(key) > -1;
            })
            .reduce((result, item) => result > item.state.mtime ? result : item.state.mtime, 0);

        component.size = destination
            .filter((item) => {

                const key = `plus_${component.key}`;

                return item.content.indexOf(key) > -1;
            })
            .reduce((result, item) => result + item.state.size, 0);
    });

fs.writeFileSync(path.join(root, 'dist', 'docs.json'), JSON.stringify(components, null, 2));
