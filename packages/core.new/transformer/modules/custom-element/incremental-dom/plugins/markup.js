import babelGenerator from '@babel/generator';
import babelTraverse from '@babel/traverse';
import t from '@babel/types';
import Case from 'case';
import * as CONSTANTS from '../../../../configs/constants.js';

// TODO
const generator = babelGenerator.default || babelGenerator;
const traverse = babelTraverse.default || babelTraverse;

export const markup = (config) => {

    const next = (context) => {

        if (context.skip) return;

        const state = [];

        traverse(context.ast, {
            ClassMethod: {
                exit(path) {

                    const { node } = path;

                    if (node.key.name != CONSTANTS.TOKEN_METHOD_RENDER) return;

                    node.body.body = state;

                    debugger
                }
            },
            JSXOpeningElement(path) {

                if (!path.node.name) return;

                state.push(
                    t.callExpression(
                        t.identifier(path.node.selfClosing ? 'elementVoid' : 'elementOpen'),
                        [
                            t.stringLiteral(path.node.name.name),
                            t.nullLiteral(),
                            t.nullLiteral(),
                            ...path.node.attributes.map((attribute) => [
                                t.stringLiteral(attribute.name.name.toLowerCase()),
                                attribute.value.type === 'JSXExpressionContainer' ? attribute.value.expression : attribute.value
                            ]).flat()
                        ]
                    )
                )
            },
            JSXClosingFragment(path) {

                if (!path.node.name) return;

                state.push(
                    t.callExpression(
                        t.identifier('elementClose'),
                        [
                            t.stringLiteral(path.node.name.name)
                        ]
                    )
                )
            }
        })

    }

    const finish = () => { }

    return {
        next,
        finish,
    }
}