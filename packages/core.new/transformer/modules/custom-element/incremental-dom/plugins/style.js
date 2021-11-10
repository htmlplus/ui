import babelTraverse from '@babel/traverse';
import t from '@babel/types';

// TODO
const traverse = babelTraverse.default || babelTraverse;

export const style = (config) => {

    const next = (context) => {

        if (context.skip) return;

        if (!context.style) return;

        traverse(context.ast, {
            ClassBody(path) {
                path.node.body.push(
                    t.classMethod(
                        'get',
                        t.identifier('style'),
                        [],
                        t.blockStatement(
                            [
                                t.returnStatement(
                                    t.templateLiteral(
                                        [
                                            t.templateElement(
                                                {
                                                    raw: context.style
                                                },
                                                true
                                            )
                                        ],
                                        []
                                    )
                                )
                            ]
                        ),
                        false,
                        true,
                    )
                )
            }
        })
    }

    const finish = () => { }

    return {
        next,
        finish,
    }
}