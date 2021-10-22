import { spawn } from 'child_process';
import esbuild from 'esbuild';
import glob from 'glob';
import http from 'http';
import { esbuild as htmlplus } from '../transformer/bundlers/esbuild.js';

const
	clients = [],
	port = 3000,
	time = Date.now();

esbuild
	.build({
		bundle: true,
		sourcemap: true,
		incremental: true,
		format: 'esm',
		outfile: 'public/build/bundle.js',
		stdin: {
			resolveDir: '.',
			contents: glob
				.sync('./src/**/*.tsx')
				.map((file) => `import '${file}';`)
				.join('\n')
		},
		banner: {
			js: '(() => new EventSource("/~dev").onmessage = () => location.reload())();'
		},
		plugins: [
			htmlplus({
				dev: true, 
				prefix: 'plus',
				// cache: '.cache',
				preprocess: {
					scss: {
						includePaths: ['./src/styles'],
					}
				}
			})
		],
		watch: {
			onRebuild(error) {

				clients.forEach((client) => client.write('data: update\n\n'));

				clients.length = 0;

				console.log(error ? error : `[${new Date().toLocaleTimeString()}] Rebuild.`);
			},
		},
	})
	.then(() => serve())
	.catch(() => process.exit(1))

const serve = () => {

	esbuild
		.serve({ servedir: 'public' }, {})
		.then((server) => {

			http.
				createServer((req, res) => {

					const { url, method, headers } = req;

					if (url === '/~dev')
						return clients.push(
							res.writeHead(200, {
								'Content-Type': 'text/event-stream',
								'Cache-Control': 'no-cache',
								'Connection': 'keep-alive',
							})
						)

					const path = ~url.split('/').pop().indexOf('.') ? url : `/index.html`;

					const proxy = http.request(
						{
							hostname: '0.0.0.0',
							port: server.port,
							path,
							method,
							headers
						},
						(response) => {

							res.writeHead(response.statusCode, response.headers);

							response.pipe(res, { end: true });
						}
					);

					req.pipe(proxy, { end: true });
				})
				.listen(port);

			if (clients.length === 0) {

				const platforms = {
					darwin: ['open'],
					linux: ['xdg-open'],
					win32: ['cmd', '/c', 'start'],
				}

				const command = platforms[process.platform][0];

				const args = [...[platforms[process.platform].slice(1)], `http://localhost:${port}`];

				spawn(command, args);
			}

			console.log(`[${new Date().toLocaleTimeString()}] Start on http://localhost:${port} in ${Date.now() - time}ms`);
		})
}