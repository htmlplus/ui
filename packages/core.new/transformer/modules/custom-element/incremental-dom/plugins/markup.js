import babelGenerator from '@babel/generator';
import babelTraverse from '@babel/traverse';
import t from '@babel/types';
import Case from 'case';
import * as CONSTANTS from '../../../../configs/constants.js';
import { isEvent } from '../utils/index.js';

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

                const tag = t.stringLiteral(name.name);

                let key = t.nullLiteral();

                const statics = [];

                const dynamics = [];

                for (const attribute of attributes) {

                    const { name, value } = attribute;

                    if (name.name == 'key') {

                        key = value.expression;

                        continue;
                    }

                    const id = isEvent(name.name) ? t.stringLiteral(name.name.toLowerCase()) : t.stringLiteral(name.name);

                    if (value.type == 'JSXExpressionContainer')
                        dynamics.push([id, value.expression])
                    else
                        statics.push([id, t.stringLiteral(value.value)]);
                }

                state.push(
                    t.callExpression(
                        t.identifier(selfClosing ? 'elementVoid' : 'elementOpen'),
                        [
                            tag,
                            key,
                            t.arrayExpression(
                                statics.flat()
                            ),
                            ...dynamics.flat()
                        ]
                    )
                )
            },
        })
    }

    const finish = () => { }

    return {
        next,
        finish,
    }
}