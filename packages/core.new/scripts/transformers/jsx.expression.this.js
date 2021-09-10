import { ts } from 'ts-morph';

/**
 * Rename this expression
 */
export const JsxExpressionThis = (node) => {

    const { expression, name } = node;

    if (!ts.isPropertyAccessExpression(node)) return;

    if (expression.getText() != 'this') return;

    return ts.factory.createPropertyAccessExpression(
        ts.factory.createIdentifier('instance'),
        name
    )
}