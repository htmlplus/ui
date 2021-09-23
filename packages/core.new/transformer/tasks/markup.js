import generator from '@babel/generator';
import traverse from '@babel/traverse';
import * as visitors from '../visitors/index';

// TODO
export const markup = (context) => {

    const { render } = context;

    // debugger

    // const template = render
    //     .body
    //     .body[0]
    //     .argument;

    // traverse(render, {
    //     JSXAttribute(path) {
    //         debugger
    //     }
    // });

    // const { initializer, name } = node;

    // if (!ts.isJsxAttribute(node)) return;

    // if (!ts.isJsxExpression(initializer)) return;

    // if (name.getText() !== 'style') return;

    // return ts.factory.createJsxAttribute(
    //     name,
    //     ts.factory.createJsxExpression(
    //         undefined,
    //         ts.factory.createCallExpression(
    //             ts.factory.createIdentifier('toStyle'),
    //             undefined,
    //             [
    //                 initializer.expression
    //             ]

    //         )
    //     )
    // )

    // // TODO
    // const markup = template
    //     .getText()
    //     .split('\n')
    //     .slice(1, -1)
    //     .join('\n');

    // console.log(1, markup)

    // render.remove();

    context.markup = 'markup';
}