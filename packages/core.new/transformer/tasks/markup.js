import * as visitors from '../visitors/index';

// TODO
export const markup = (context) => {

    const { render } = context;

    const template = render
        .getBody()
        .getStatements()[0]
        .getExpression()
        .getExpression();

    const keys = Object.keys(visitors);

    template.transform((traversal) => {

        for (const key of keys) {

            const transformer = visitors[key];

            const node = traversal.visitChildren();

            const result = transformer(node);

            if (result) return result;

            if (result === null) return null;

            return node;
        }
    })

    // TODO
    const markup = template
        .getText()
        .split('\n')
        .slice(1, -1)
        .join('\n');

    render.remove();

    context.markup = markup;
}