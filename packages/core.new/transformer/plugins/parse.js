import { parse as parser } from '@babel/parser';

export const parse = (context) => {

    const { content } = context;

    context.ast = parser(
        content,
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