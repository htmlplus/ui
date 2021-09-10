import { ts } from 'ts-morph';

/**
 * Convert style attribute
 * <element class="any" /> => <element class="any" />
 * <element class={any} /> => <element class={toClass(any)} />
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