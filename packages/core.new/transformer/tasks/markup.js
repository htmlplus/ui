import generator from '@babel/generator';
import template from "@babel/template";
import traverse from '@babel/traverse';
import * as t from '@babel/types';
import Case from 'case';
import * as CONSTANTS from '../constants';

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
                 * Convert 'class' or 'style' attribute that contains expression
                 * <element class={any} /> => <element class={toClass(any)} />
                 * <element style={any} /> => <element style={toStyle(any)} />
                 */
                if (['class', 'style'].includes(node.name.name)) {

                    const handler = 'to' + Case.pascal(node.name.name);

                    path.replaceWith(
                        t.jsxAttribute(
                            node.name,
                            t.jsxExpressionContainer(
                                t.callExpression(
                                    t.identifier(handler),
                                    [
                                        node.value.expression
                                    ]
                                )
                            )
                        )
                    );

                    path.skip();
                }

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

                const { alternate, consequent, left, right, test } = node.expression;

                if (t.isJSXAttribute(parent)) return;

                /**
                 * <element>{​condition ?  any  :  any }​</element>
                 * <element>{​condition ? (any) : (any)}​</element>
                 */
                if (t.isConditionalExpression(node.expression)) {

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
                if (t.isLogicalExpression(node.expression, { operator: '&&' })) {

                    path.replaceWith(
                        t.jsxText(`{/*REMOVE{#if ${generator(left).code}}
                            ${generator(right).code}
                        {/if}REMOVE*/}`)
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

    // console.log(markup)

    context.markup = markup;
}