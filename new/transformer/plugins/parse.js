import { parse as parser } from '@babel/parser';

export const parse = (config) => {

    const next = (context) => {

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

    const finish = () => { }

    return {
        next,
        finish,
    }
}