import path from 'path';
import * as tasks from './tasks/index';

export const htmlplus = (config) => {

    // TODO
    Object.assign(
        {
            prefix: 'app',
            docs: {
                docs: '',
                vscode: '',
            },
            scss: {},
        },
        config,
    );

    return {
        name: 'htmlplus',
        resolveId(id) {

            if (id.startsWith('@virtual/'))
                return path.resolve(__dirname, 'transformer', id.replace('@virtual/', ''), 'index.js');

            return null;
        },
        async load(id) {

            if (!id.endsWith('.tsx')) return null;

            console.time(id)

            const context = { id, config };

            // console.time('parse')
            tasks.parse(context);
            // console.timeEnd('parse')

            // console.time('validate')
            tasks.validate(context);
            // console.timeEnd('validate')

            // console.time('extract')
            tasks.extract(context);
            // console.timeEnd('extract')

            // console.time('markup')
            tasks.markup(context);
            // console.timeEnd('markup')

            // console.time('script')
            tasks.script(context);
            // console.timeEnd('script')

            // console.time('style')
            tasks.style(context);
            // console.timeEnd('style')

            // console.time('component')
            tasks.component(context);
            // console.timeEnd('component')

            console.timeEnd(id)

            // console.log(context.source)

            return context.source;
        }
    }
}