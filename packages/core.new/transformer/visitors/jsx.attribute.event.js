import * as Case from 'case';
import { ts } from 'ts-morph';

/**
 * Convert event attribute
 * <element onEventName={any} /> => <element on:eventName={any} />
 */
export const JsxAttributeEvent = (node) => {

    const { initializer, name } = node;

    if (!ts.isJsxAttribute(node)) return;

    if (!ts.isJsxExpression(initializer)) return;

    const before = name.getText();

    // TODO
    const isEvent = before.indexOf('on') === 0 && before[2] === before[2].toUpperCase();

    if (!isEvent) return;

    const after = `on:${Case.camel(before.slice(2))}`;

    return ts.factory.createJsxAttribute(
        ts.factory.createIdentifier(after),
        initializer
    )
}