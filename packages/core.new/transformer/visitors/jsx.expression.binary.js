import { printNode, ts } from 'ts-morph';

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
export const JsxExpressionBinary = (node) => {

    const { expression, parent } = node;

    if (!ts.isJsxExpression(node)) return;

    if (ts.isJsxAttribute(parent)) return;

    if (!ts.isBinaryExpression(expression)) return;

    if (expression.operatorToken.kind != ts.SyntaxKind.AmpersandAmpersandToken) return;

    const { left, right } = expression;

    const body = ts.isParenthesizedExpression(right) ? right.expression : right;

    const isJSX = ts.isJsxElement(body) || ts.isJsxSelfClosingElement(body);

    let lines = '';

    lines += '\n';
    lines += `{​#if ${printNode(left)}​}​`;
    lines += '\n';
    lines += isJSX ? '' : '{​';
    lines += printNode(body);
    lines += isJSX ? '' : '}​';
    lines += '\n';
    lines += '{​/if}​';
    lines += '\n';

    return ts.factory.createIdentifier(lines);
}