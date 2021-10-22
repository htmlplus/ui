import { parse as parser } from '@babel/parser';

export const parse = (context) => {

    if (context.skip) return;

    context.ast = parser(
        context.content,
        {
            allowImportExportEverywhere: true,
            plugins: [
                'jsx',
                'typescript',
                'decorators-legacy'
            ]
        }
    )
}