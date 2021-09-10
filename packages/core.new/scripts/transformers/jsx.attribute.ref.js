import { ts } from 'ts-morph';

/**
 * Convert ref attribute
 * <element ref={this.$element} /> => <element bind:this={this.$element} />
 */
export const JsxAttributeRef = (node) => {

    const { initializer, name } = node;

    if (!ts.isJsxAttribute(node)) return;

    if (!ts.isJsxExpression(initializer)) return;

    if (name.getText() !== 'ref') return;

    return ts.factory.createJsxAttribute(
        ts.factory.createIdentifier('bind:this'),
        initializer
    )
}