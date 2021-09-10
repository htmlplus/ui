import { ts } from 'ts-morph';

/**
 * map
 */
export const JsxLoop = (node) => {

    const { expression, parent } = node;

    if (!ts.isJsxExpression(node)) return;

    if (ts.isJsxAttribute(parent)) return;

    if (!ts.isCallExpression(expression)) return;

    if (!ts.isPropertyAccessExpression(expression.expression)) return;

    if (expression.expression.name.getText() != 'map') return;

    const variable = expression.expression.expression.getText();

    const [arrowFunction] = expression.arguments;

    const parameters = arrowFunction
        .parameters
        .map((parameter) => parameter.getText())
        .join(', ');

    const body = arrowFunction.body;

    const element = ts.isParenthesizedExpression(body) ? body.expression : body;

    let lines = '';

    lines += '\n';
    lines += `{​#each ${variable}​ as ${parameters}​}​`;
    lines += '\n';
    lines += element.getText();
    lines += '\n';
    lines += '{​/each}​';
    lines += '\n';

    return ts.factory.createIdentifier(lines);
}