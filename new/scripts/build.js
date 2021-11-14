import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import glob from 'glob';
import path from 'path';
import { rollup } from 'rollup';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import { customElementIncrementalDom } from '../transformer/index.js';

const config = {
    dev: false,
    prefix: 'plus',
    include: './src/**/click-outside.tsx',
    // docs: './dist/json/docs.json',
    // vscode: './dist/json/html.html-data.json',
    scss: {
        includePaths: ['./src/styles'],
    },
    // TODO
    chunks: []
}

let transformer;

/**
 * @type {import('rollup').RollupOptions}
 */
const options = {
    input: glob.sync(config.include),
    output: [
        {
            format: 'es',
            dir: 'dist/esm',
            chunkFileNames: '[name].js',
            manualChunks(id) {

                const name = path.basename(id, path.extname(id));

                if (id.includes('cropperjs')) return 'core.cropperjs';

                if (id.includes('helpers')) return 'core.helpers';

                if (id.includes('popperjs')) return 'core.popperjs';

                if (id.includes('services')) return 'core.' + name;

                if (id.endsWith('.tsx')) return name;

                return 'core';
            },
        }
    ],
    plugins: [
        {
            name: 'htmlplus',
            async buildStart() {
                transformer = await customElementIncrementalDom(config);
            },
            async load(id) {

                if (!id.endsWith('.tsx')) return null;

                const { code } = await transformer.next(id);

                return code;
            },
            async buildEnd() {
                await transformer.finish();
            }
        },

        resolve({
            browser: true,
        }),

        commonjs(),

        typescript(),

        terser(),
    ],
};

const build = async () => {

    const time = Date.now();

    const bundle = await rollup(options);

    for (const output of options.output)
        await bundle.write(output);

    await bundle.close();

    console.log(`Build in ${Date.now() - time}ms`);
}

build();