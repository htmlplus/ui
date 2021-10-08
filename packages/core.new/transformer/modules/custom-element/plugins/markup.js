import babelGenerator from '@babel/generator';
import babelTraverse from '@babel/traverse';
import t from '@babel/types';
import Case from 'case';
import * as CONSTANTS from '../../../configs/constants.js';

// TODO
const generator = babelGenerator.default || babelGenerator;
const traverse = babelTraverse.default || babelTraverse;

// TODO
export const markup = (context) => {

    const { render } = context;

    let markup;

    traverse(render, {
        JSXAttribute: {
            exit(path) {

                const { node } = path;

                if (!t.isJSXExpressionContainer(node.value)) return;

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
        JSXElement: {
            exit(path) {

                const { node } = path;

                if (node.openingElement.name.name != 'Host') return;

                // TODO
                // const attributes = node.openingElement.attributes || [];
                
                markup = t.jsxFragment(
                    t.jsxOpeningFragment(),
                    t.jsxClosingFragment(),
                    node.children,
                )
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

                    const body = generator(arrowFunction.body).code;

                    path.replaceWith(
                        t.jsxText(`{/*REMOVE{#each ${variable} as ${parameters}}
                            ${body}
                        {/each}REMOVE*/}`)
                    )
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
    });

    markup = generator(markup)
        .code
        .replace('<>', '')
        .replace('</>', '')
        .replace(/\{\/\*REMOVE/g, '')
        .replace(/REMOVE\*\/\}/g, '');

    context.markup = markup;
}