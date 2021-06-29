const
  fs = require('fs-extra'),
  glob = require('glob'),
  path = require('path'),
  root = path.resolve(process.cwd());

// Alias
(() => {

  const mapper = [
    {
      key: '@app/constants',
      base: 'dist/collection',
      source: 'dist/collection/**/*.js',
      destination: 'dist/collection/configs/constants'
    },
    {
      key: '@app/utils',
      base: 'dist/collection',
      source: 'dist/collection/**/*.js',
      destination: 'dist/collection/utils'
    },
    {
      key: '@app/utils',
      base: 'dist/types',
      source: 'dist/types/**/*.*',
      destination: 'dist/types/utils'
    }
  ];

  for (let i = 0; i < mapper.length; i++) {

    const { key, base, source, destination } = mapper[i];

    const files = glob.sync(path.join(root, source));

    const common = base.replace(/\\/g, '/');

    for (let j = 0; j < files.length; j++) {

      const file = files[j];

      let content = fs.readFileSync(file, { encoding: 'utf8' });

      if (!content.match(key)) continue;

      const length = file.split(common).pop().split('/').length - 1;

      let level = '';

      for (let i = 1; i < length; i++) level += '../';

      let address = path.join(level, destination.replace(base, ''));

      address = address.replace(/\\/g, '/');

      if (address.startsWith('/')) address = '.' + address;

      content = content.replace(key, address);

      fs.writeFileSync(file, content);
    }
  }
})();

// Externals
(() => {

  const
    source = 'src/components/**/externals',
    destination = 'dist/externals';

  glob.sync(source, { cwd: root })
    .forEach((key) => {

      const [, componentName] = key.split('/').reverse();

      fs.copySync(
        path.join(root, key),
        path.join(root, destination, componentName)
      );
    })
})();