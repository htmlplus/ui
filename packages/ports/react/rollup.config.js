import docs from '@htmlplus/core/dist/docs.json';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import fs from 'fs';
import copy from 'rollup-plugin-copy';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';

// TODO
(() => {

    const lines = [
        '/* eslint-disable */',
        '/* tslint:disable */',
        '/* auto-generated react proxies */',
        'import { createReactComponent } from \'./react-component-lib\';',
        '',
        'import type { JSX } from \'@htmlplus/core\';',
        '',
    ];

    for (let i = 0; i < docs.length; i++) {

        const { tag } = docs[i];

        const name = tag.match(/[a-z]+/gi)
            .map((word) => {
                return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
            })
            .join('');

        lines.push(`export const ${name.replace('Plus', '')} = /*@__PURE__*/createReactComponent<JSX.${name}, HTML${name}Element>('${tag}');`);
    }

    const content = lines.join('\n');

    fs.writeFileSync('src/components.ts', content);
})();

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs'
        },
        {
            file: pkg.module,
            format: 'esm'
        }
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({ useTsconfigDeclarationDir: true }),
        copy({
            targets: [
                {
                    src: './node_modules/@htmlplus/core/dist/docs.json',
                    dest: './dist'
                },
                {
                    src: './node_modules/@htmlplus/core/dist/externals',
                    dest: './dist'
                }
            ]
        })
    ]
};
