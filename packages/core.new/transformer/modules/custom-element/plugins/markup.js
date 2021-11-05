import babelGenerator from '@babel/generator';
import babelTraverse from '@babel/traverse';
import t from '@babel/types';
import Case from 'case';
import * as CONSTANTS from '../../../configs/constants.js';

// TODO
const generator = babelGenerator.default || babelGenerator;
const traverse = babelTraverse.default || babelTraverse;

export const markup = (config) => {

    const next = (context) => {
        
        if (context.skip) return;

        let markup;

        traverse(context.render, {
            JSXAttribute: {
                exit(path) {

                    const { node } = path;

                    if (!t.isJSXExpressionContainer(node.value)) return;

                    /**
                     * TODO
                     * Convert html attribute
                     * <element html={any} /> => <element>{@html any}</element>
                     */
                    // if (node.name.name == 'html') {
                    //     debugger
                    //     path.parentPath.node.children = [node.value];
                    //     // path.remove();
                    // }

                    /**
                     * Convert event attribute
                     * <element onEventName={any} /> => <element on:eventName={any} />
                     */
                    if (node.name.name.match(/on[A-Z]\w+/g)) {

                        const key = `on:${Case.camel(node.name.name.slice(2))}`;

                        path.replaceWith(
                            t.jsxAttribute(
                                t.jsxIdentifier(key),
                                node.value,
                            )
                        );

                        path.skip();
                    }

                    /**
                     * Convert ref attribute
                     * <element ref={any} /> => <element bind:this={any} />
                     */
                    if (node.name.name == 'ref') {

                        path.replaceWith(
                            t.jsxAttribute(
                                t.jsxIdentifier('bind:this'),
                                node.value,
                            )
                        );

                        path.skip();
                    }
                }
            },
            JSXExpressionContainer: {
                exit(path) {

                    const { node, parent } = path;

                    const { expression } = node;

                    if (t.isJSXAttribute(parent)) return;

                    /**
                     * Remove JSXEmptyExpression
                     * { any }
                     */
                    if (t.isJSXEmptyExpression(expression)) {

                        path.remove();

                        return;
                    }

                    /**
                     * <element>{​condition ?  any  :  any }​</element>
                     * <element>{​condition ? (any) : (any)}​</element>
                     */
                    if (t.isConditionalExpression(expression)) {

                        const { alternate, consequent, test } = expression;

                        path.replaceWith(
                            t.jsxText(`{/*REMOVE{#if ${generator(test).code}}
                                ${generator(consequent).code}
                                {:else}
                                ${generator(alternate).code}
                            {/if}REMOVE*/}`)
                        )
                    }

                    /**
                     * <element>
                     *   {​condition && 'string'}​               => {​'string'}​
                     *   {​condition && 100.00}​                 => {​100.00}​
                     *   {​condition && variable}​               => {​variable}​
                     *   {​condition && object.function()}​      => {​object.function()}​
                     *   {​condition && <element/>}​             => <element/>
                     *   {​condition && <element></element>}​    => <element></element>
                     *   {​condition && (body)}​                 => body
                     * </element>
                     */
                    if (t.isLogicalExpression(expression, { operator: '&&' })) {

                        const { left, right } = expression;

                        path.replaceWith(
                            t.jsxText(`{/*REMOVE{#if ${generator(left).code}}
                                ${generator(right).code}
                            {/if}REMOVE*/}`)
                        )
                    }

                    // TODO
                    if (t.isCallExpression(expression)) {

                        const { object, property } = expression.callee;

                        if (!t.isMemberExpression(expression.callee)) return;

                        if (property.name != 'map') return;

                        // TODO
                        // const variable = expression.expression.expression.getText();
                        const variable = generator(object).code;

                        const [arrowFunction] = expression.arguments;

                        const parameters = arrowFunction
                            .params
                            .map((parameter) => parameter.name)
                            .join(', ');

                        const body = (() => {

                            const type = arrowFunction.body.type;

                            switch (type) {

                                // TODO
                                case 'BlockStatement':
                                    // TODO: arrowFunction.body.body[0].argument
                                    return generator(arrowFunction.body.body[0]).code;

                                case 'JSXElement':
                                    return generator(arrowFunction.body).code;

                            }
                        })();

                        path.replaceWith(
                            t.jsxText(`{/*REMOVE{#each ${variable} as ${parameters}}
                                ${body}
                            {/each}REMOVE*/}`)
                        )
                    }

                    // TODO
                    if (t.isJSXElement(parent) && expression.type == 'MemberExpression') {

                        const cloned = expression.__clone();

                        cloned.object.name = `@html ${cloned.object.name}`;

                        path.replaceWith(
                            t.jsxExpressionContainer(
                                cloned
                            )
                        );

                        path.skip();
                    }
                }
            },
            JSXSpreadAttribute: {
                /**
                 * Convert spread attribute
                 * <element {...any} /> => <element use:toAttributes={any} />
                 */
                exit(path) {

                    const { node, parent } = path;

                    if (parent.name.name.match(/^[A-Z]/)) return;

                    path.replaceWith(
                        t.jsxAttribute(
                            t.jsxIdentifier('use:toAttributes'),
                            t.jsxExpressionContainer(node.argument)
                        )
                    );

                    path.skip();
                }
            },
            ThisExpression: {
                /**
                 * Rename this expression
                 */
                enter(path) {

                    path.replaceWith(
                        t.identifier(CONSTANTS.TOKEN_THIS)
                    );

                    path.skip();
                }
            },
            ReturnStatement: {
                enter(path) {

                    const { node } = path;

                    try {
                        if (path.parentPath.parentPath.node.key.name == 'render')
                            markup = node.argument;
                    }
                    catch { }
                }
            },
            SwitchStatement: {
                exit(path) {

                    const { node } = path;

                    const lines = [];

                    const left = generator(node.discriminant).code;

                    for (let i = 0; i < node.cases.length; i++) {

                        const { consequent, test } = node.cases[i];

                        const right = generator(test).code;

                        // TODO
                        const body = (() => {

                            const body = consequent[0].type == 'BlockStatement' ? consequent[0].body[0].argument : consequent[0].argument;

                            return generator(body).code;
                        })();

                        if (i == 0)
                            lines.push(`{/*REMOVE{#if ${left} == ${right}}`);
                        else if (test)
                            lines.push(`{:else if ${left} == ${right}}`);
                        else
                            lines.push(`{:else}`);

                        lines.push(body);
                    }

                    lines.push('{/if}REMOVE*/}');

                    const content = lines.join('\n');

                    const template = t.jsxText(content);

                    path.replaceWith(template);
                },
            },
        });

        markup = generator(markup)
            .code
            .replace('<>', '')
            .replace('</>', '')
            .replace(/\{\/\*REMOVE/g, '')
            .replace(/REMOVE\*\/\}/g, '');

        context.markup = markup;
    }

    const finish = () => { }

    return {
        next,
        finish,
    }
}