const
    fs = require('fs-extra'),
    glob = require('glob'),
    path = require('path'),
    root = path.resolve(process.cwd());

const source = 'src/components/**/externals';

const destination = 'dist/externals';

glob.sync(source, { cwd: root })
    .forEach((key) => {

        const [, componentName] = key.split('/').reverse();

        fs.copySync(
            path.join(root, key),
            path.join(root, destination, componentName)
        );
    })
