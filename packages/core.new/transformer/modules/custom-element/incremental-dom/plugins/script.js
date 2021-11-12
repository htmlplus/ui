import esbuild from 'esbuild';
import babelGenerator from '@babel/generator';

// TODO
const generator = babelGenerator.default || babelGenerator;

export const script = (config) => {

    const next = (context) => {

        if (context.skip) return;

        const lines = [];

        context.script = generator(context.ast).code;

        lines.push('import { elementOpen, elementClose, elementVoid, patch, text } from "incremental-dom";');

        lines.push('import { proxy } from "../../../transformer/modules/custom-element/incremental-dom/utils/index";');

        lines.push(context.script);

        lines.push(`
            customElements.define(
                '${context.tag}',
                proxy(
                    ${context.name}, 
                    [
                        ${context.properties.map((property) => (`['${property.name}', '${property.type}']`)).join(', ')}
                    ],
                    '${context.style}'
                )
            )
        `);

        context.script = lines.join('\n');

        // TODO: console.log(123, context.script)

        const { code, map, warnings } = esbuild.transformSync(
            context.script,
            {
                loader: 'ts'
            }
        )

        context.code = code;
    }

    const finish = () => { }

    return {
        next,
        finish,
    }
}