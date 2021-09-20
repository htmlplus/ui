import * as visitors from '../visitors/index';

// TODO
export const markup = (context) => {

    const { render } = context;

    const template = render
        .getBody()
        .getStatements()[0]
        .getExpression()
        .getExpression();

    Object.keys(visitors)
        .forEach((key) => {

            const transformer = visitors[key];

            template.transform((traversal) => {

                const node = traversal.visitChildren();

                const result = transformer(node);

                if (result === null) return null;

                return result || node;
            })
        })

    const markup = template.getText();

    render.remove();

    context.markup = markup;
}