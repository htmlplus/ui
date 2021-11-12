import babelTraverse from '@babel/traverse';
import t from '@babel/types';
import * as CONSTANTS from '../../../../configs/constants.js';
import { isEvent } from '../utils/index.js';

// TODO
const traverse = babelTraverse.default || babelTraverse;

export const markup = (config) => {

    const next = (context) => {

        if (context.skip) return;

        const state = [];

        traverse(context.ast, {
            ClassMethod: {
                exit(path) {

                    const { node: { body, key } } = path;

                    if (key.name != CONSTANTS.TOKEN_METHOD_RENDER) return;

                    body.body = state;
                }
            },
            JSXClosingFragment(path) {

                const { node: { name } } = path;

                if (!name) return;

                state.push(
                    t.callExpression(
                        t.identifier('elementClose'),
                        [
                            t.stringLiteral(name.name)
                        ]
                    )
                )
            },
            JSXExpressionContainer(path) {

                const { node: { expression }, parent: { type } } = path;

                if (type != 'JSXElement') return;

                state.push(expression);
            },
            JSXOpeningElement(path) {

                const { node: { attributes, name, selfClosing } } = path;

                if (!name) return;

                let
                    ref,
                    key = t.nullLiteral();

                const
                    statics = [],
                    dynamics = [],
                    tag = t.stringLiteral(name.name);

                for (const attribute of attributes) {

                    const { name, value } = attribute;

                    if (name.name == 'key') {

                        key = value.expression;

                        continue;
                    }

                    if (name.name == 'ref') {

                        ref = value.expression;

                        continue;
                    }

                    const id = isEvent(name.name) ? t.stringLiteral(name.name.toLowerCase()) : t.stringLiteral(name.name);

                    if (value.type == 'JSXExpressionContainer')
                        dynamics.push([id, value.expression])
                    else
                        statics.push([id, t.stringLiteral(value.value)]);
                }

                const element = t.callExpression(
                    t.identifier(selfClosing ? 'elementVoid' : 'elementOpen'),
                    [
                        tag,
                        key,
                        t.arrayExpression(
                            statics.flat()
                        ),
                        ...dynamics.flat()
                    ]
                );

                if (ref) {
                    state.push(
                        t.expressionStatement(
                            t.assignmentExpression('=', ref, element)
                        )
                    )
                }
                else {
                    state.push(element)
                }
            }
        })
    }

    const finish = () => { }

    return {
        next,
        finish,
    }
}