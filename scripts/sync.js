import glob from 'fast-glob';
import fs from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const files = glob.sync('../node_modules/bootstrap-icons/icons/*.svg', {
  cwd: __dirname,
  absolute: true
});

for (const from of files) {
  const directory = path.join(__dirname, '../src/components/icon/assets/names');

  if (!fs.existsSync(directory)) fs.mkdirSync(directory, { recursive: true });

  const key = path.basename(from, '.svg');

  const to = path.join(directory, `${key}.js`);

  const svg = fs.readFileSync(from, 'utf8');

  const content = [`export default \`${svg}\`;`].join('\n');

  fs.writeFileSync(to, content, 'utf8');
}
