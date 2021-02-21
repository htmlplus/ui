const
    fs = require('fs-extra'),
    path = require('path'),
    root = path.resolve(process.cwd());

fs.copySync(
    path.join(root, 'node_modules', '@htmlplus/core', 'dist'),
    path.join(root, 'dist'),
);