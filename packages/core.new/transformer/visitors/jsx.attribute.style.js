import { ts } from 'ts-morph';

/**
 * Convert style attribute that contains expression
 * <element style={any} /> => <element style={toStyle(any)} />
 */
export const JsxAttributeStyle = (node) => {

    const { initializer, name } = node;

    if (!ts.isJsxAttribute(node)) return;

    if (!ts.isJsxExpression(initializer)) return;

    if (name.getText() !== 'style') return;

    return ts.factory.updateJsxAttribute(
        node,
        name,
        ts.factory.createJsxExpression(
            undefined,
            ts.factory.createCallExpression(
                ts.factory.createIdentifier('toStyle'),
                undefined,
                [
                    initializer.expression
                ]

            )
        )
    )
}