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

        const node = traversal.visitChildren();

        for (const key of keys) {

            const transformer = visitors[key];

            // TODO
            if (!node.parent) continue;

            const result = transformer(node);

            if (result) return result;
        }

        return node;
    })

    // TODO
    const markup = template
        .getText()
        .split('\n')
        .slice(1, -1)
        .join('\n');

    console.log(1, markup)

    render.remove();

    context.markup = markup;
}