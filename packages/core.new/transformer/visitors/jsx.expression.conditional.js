import { ts } from 'ts-morph';

/**
 * <element>{​condition ?  any  :  any }​</element>
 * <element>{​condition ? (any) : (any)}​</element>
 */
export const JsxExpressionConditional = (node) => {

    const { expression, parent } = node;

    if (!ts.isJsxExpression(node)) return;

    if (ts.isJsxAttribute(parent)) return;

    if (!ts.isConditionalExpression(expression)) return;

    const { condition, whenTrue, whenFalse } = expression;

    let lines = '';

    lines += '\n';
    lines += `{​#if ${printNode(condition)}​}​`;
    lines += '\n';
    lines += '  ' + printNode(ts.isParenthesizedExpression(whenTrue) ? whenTrue.expression : whenTrue);
    lines += '\n';
    lines += '{​:else}​';
    lines += '\n';
    lines += '  ' + printNode(ts.isParenthesizedExpression(whenFalse) ? whenFalse.expression : whenFalse);
    lines += '\n';
    lines += '{​/if}​';
    lines += '\n';

    return ts.factory.createIdentifier(lines);
}