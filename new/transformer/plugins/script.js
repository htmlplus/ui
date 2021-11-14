import babelGenerator from '@babel/generator';
import esbuild from 'esbuild';

// TODO
const generator = babelGenerator.default || babelGenerator;

export const script = (config) => {

    const next = (context) => {

        if (context.skip) return;

        context.script = generator(context.ast, {
            comments: false,
            decoratorsBeforeExport: true,
        }).code;

        const { code, map, warnings } = esbuild.transformSync(
            context.script,
            {
                loader: 'ts'
            }
        );

        context.script = code;
    }

    const finish = () => { }

    return {
        next,
        finish,
    }
}