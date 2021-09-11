import { ts } from 'ts-morph';
import * as CONSTANTS from '../constants';

/**
 * Rename this expression
 */
export const JsxExpressionThis = (node) => {

    const { expression, name } = node;

    if (!ts.isPropertyAccessExpression(node)) return;

    if (expression.getText() != 'this') return;

    return ts.factory.createPropertyAccessExpression(
        ts.factory.createIdentifier(CONSTANTS.TOKEN_THIS),
        name
    )
}