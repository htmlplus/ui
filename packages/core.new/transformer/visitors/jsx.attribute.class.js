import { ts } from 'ts-morph';

/**
 * Convert class attribute that contains expression
 * <element class={any} /> => <element class={toClass(any)} />
 */
export const JsxAttributeClass = (node) => {

    const { initializer, name } = node;

    if (!ts.isJsxAttribute(node)) return;

    if (!ts.isJsxExpression(initializer)) return;

    if (name.getText() !== 'class') return;

    return ts.factory.updateJsxAttribute(
        node,
        name,
        ts.factory.createJsxExpression(
            undefined,
            ts.factory.createCallExpression(
                ts.factory.createIdentifier('toClass'),
                undefined,
                [
                    initializer.expression
                ]

            )
        )
    )
}