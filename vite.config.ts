import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { vite as htmlplus } from '@htmlplus/element/bundlers.js';

import { glob } from 'glob';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import dts from 'unplugin-dts/vite';
import { defineConfig } from 'vite';

import { examples } from './examples/plugin';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PACKAGE = JSON.parse(fs.readFileSync('./package.json', 'utf8'));

const entries = Object.fromEntries(
	glob
		.sync(['src/elements/*/index.ts'], { absolute: true })
		.map((file) => [`elements/${path.basename(path.dirname(file))}`, file])
		.concat([
			['elements/carousel-child', 'src/elements/carousel/child.ts'],
			['core/config', 'src/config/index.ts'],
			['elements/index', 'src/elements/index.ts']
		])
);

export default defineConfig({
	cacheDir: '.cache',
	server: {
		open: 'src/index.html'
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src')
		}
	},
	css: {
		preprocessorOptions: {
			scss: {
				style: 'compressed',
				additionalData: ['src/styles/mixins', 'src/styles/variables', 'src/styles/reset.scss']
					.map((file) => `@use "${path.resolve(__dirname, file)}" as *;`)
					.join('\n')
			}
		}
	},
	build: {
		emptyOutDir: false,
		minify: false,
		lib: {
			entry: entries,
			formats: ['es']
		},
		rollupOptions: {
			output: {
				dir: 'dist',
				chunkFileNames: `[name].js`,
				manualChunks(id) {
					const normalized = path.normalize(id).split(path.sep).join('/');

					if (normalized.includes('/src/elements/')) return;

					return 'core/index';
				}
			}
		}
	},
	plugins: [
		examples(),
		htmlplus({
			style: {
				source(context) {
					return `${context.directoryPath}/styles.scss`;
				}
			},
			assets: {
				destination(context) {
					return `dist/elements/${context.directoryName}`;
				},
				json(context) {
					return `dist/elements/${context.directoryName}/assets.json`;
				}
			},
			document: {
				destination: `dist/json/document.json`,
				transformer(json) {
					// biome-ignore lint: TODO
					json.elements.forEach((element: any) => {
						element.examples =
							// biome-ignore lint: TODO
							element.examples?.split(',').map((example: any) => example.trim()) || [];
					});
					return json;
				}
			},
			visualStudioCode: {
				destination: `dist/json/vscode.json`,
				reference(context) {
					return `https://www.htmlplus.io/javascript/element/${context.elementKey?.replace('plus-', '')}`;
				}
			},
			webTypes: {
				destination: `dist/json/web-types.json`,
				packageName: PACKAGE.name,
				packageVersion: PACKAGE.version,
				reference(context) {
					return `https://www.htmlplus.io/javascript/element/${context.elementKey?.replace('plus-', '')}`;
				}
			}
		}),
		peerDepsExternal(),
		dts({
			outDirs: 'dist/types',
			resolvers: [
				/**
				 * This resolver generates `.d.ts` files for each `.tsx` file.
				 * While this approach is somewhat of a workaround and temporary,
				 * we are actively seeking a more robust solution.
				 */
				{
					name: 'attach-dynamic-typing',
					supports: (id) => id.endsWith('.tsx'),
					transform({ root, id, code, program }) {
						const sourceFile = program.getSourceFile(id);

						let output = '';

						program.emit(sourceFile, (_fileName, contents) => {
							output =
								contents + code.split('THE FOLLOWING TYPES HAVE BEEN ADDED AUTOMATICALLY').pop() ||
								'';
						});

						return [
							{
								content: output,
								path: path.relative(root, id.replace(/\.tsx?$/, '.d.ts'))
							}
						];
					}
				}
			]
		})
	]
});
