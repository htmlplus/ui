import { ts } from 'ts-morph';

/**
 * Convert spread attribute
 * <element {...any} /> => <element use:toAttributes={any} />
 */
export const JsxAttributeSpread = (node) => {

    const { expression } = node;

    if (!ts.isJsxSpreadAttribute(node)) return;

    return ts.factory.createJsxAttribute(
        ts.factory.createIdentifier('use:toAttributes'),
        ts.factory.createJsxExpression(
            undefined,
            ts.factory.createIdentifier(expression.getText())
        )
    )
}