import { parse as parser } from '@babel/parser';
import fs from 'fs';

export const parse = (context) => {

    const { id } = context;

    const content = fs.readFileSync(id, { encoding: 'utf8' });

    const ast = parser(content, {
        allowImportExportEverywhere: true,
        plugins: [
            'jsx',
            'typescript',
            'decorators-legacy'
        ]
    });

    context.ast = ast;
}