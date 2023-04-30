import Zip from 'adm-zip';
import fs from 'fs';
import path from 'path';
import * as url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const file_url = 'https://github.com/twbs/icons/archive/refs/heads/main.zip';

const directory = path.join(__dirname, './assets/names');

if (fs.existsSync(directory)) {
  fs.rmSync(directory, { recursive: true });
}

fs.mkdirSync(directory, { recursive: true });

fetch(file_url).then((response) => {
  response.arrayBuffer().then((buffer) => {
    const icons = [];

    const zip = new Zip(Buffer.from(buffer));

    const entries = zip.getEntries();

    entries.forEach((entry) => {
      if (!entry.entryName.startsWith('icons-main/icons/')) return;

      const name = path.basename(entry.entryName, '.svg');

      const content = zip
        .readAsText(entry)
        .replace(' xmlns="http://www.w3.org/2000/svg"', '')
        .replace(/ class=".*" /, ' ');

      if (!content) return;

      const icon = { name, content };

      icons.push(icon);

      try {
        const entry = entries.find((entry) => {
          return entry.entryName == `icons-main/docs/content/icons/${name}.md`;
        });

        const content = zip.readAsText(entry);

        const [categories, tags] = content
          .replaceAll('---', '')
          .split('categories:')[1]
          .split('tags:')
          .map((section) => {
            return section
              .split(' - ')
              .map((section) => section.trim())
              .filter((section) => section);
          });

        Object.assign(icon, { categories, tags });
      } catch {}
    });

    for (const icon of icons) {
      const file = path.join(directory, `${icon.name}.js`);

      const content = [`export default \`${icon.content}\`;`].join('\n');

      fs.writeFileSync(file, content, 'utf8');

      delete icon.content;
    }

    fs.writeFileSync(`${directory}.json`, JSON.stringify(icons, null, 2), 'utf8');
  });
});
