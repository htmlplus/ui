import fs from 'node:fs';
import path from 'node:path';

import { glob } from 'glob';

import { MAPPER } from './configs';

const root = path.resolve(import.meta.dirname, '..');

/** @type {any} */
export const examples = () => {
	return {
		name: 'examples',
		transformIndexHtml: {
			order: 'pre',
			handler(html, ctx) {
				if (ctx.originalUrl.endsWith('?local')) {
					MAPPER.forEach(([a, b]) => {
						html = html.replace(new RegExp(a, 'g'), b);
					});
				}

				html = html.replaceAll(/import\s*\(\s*['"`](@?[\w-]+)/g, (result1, result2) => {
					if (ctx.originalUrl.endsWith('?local')) {
						for (let i = 0; i < 10; i++) {
							const directory = path.resolve(root, '../'.repeat(i), 'node_modules', result2);

							if (!fs.existsSync(directory)) continue;

							result1 = result1.replace(result2, directory);

							break;
						}
					}
					return result1.replace('import(', 'import(/* @vite-ignore */');
				});

				return html;
			}
		},
		configureServer(server) {
			server.middlewares.use((req, res, next) => {
				const file = req.url.replace(/^\/?/, '');

				if (file.includes('*')) {
					const content = JSON.stringify(glob.sync(file, { cwd: root }));

					res.writeHead(200, { 'Content-Type': 'application/json' });

					res.end(content);

					return;
				}

				next();
			});
		}
	};
};
