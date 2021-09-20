import * as Case from 'case';
import { Project } from 'ts-morph';
import path from 'path';
import * as visitors from './visitors/index';
import * as CONSTANTS from './constants';
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

            const context = { id, config };

            tasks.parse(context);

            tasks.validate(context);

            tasks.extract(context);

            tasks.markup(context);

            tasks.script(context);

            tasks.style(context);

            tasks.component(context);

            return context.source;
        },
        buildEnd() {

        },
        generateBundle() {

            // TODO
            // this.emitFile({
            //     type: 'asset',
            //     fileName: config.docs.docs,
            //     source: JSON.stringify(docs, null, 2)
            // });

            // TODO
            // this.emitFile({
            //     type: 'asset',
            //     fileName: config.docs.vscode,
            //     source: JSON.stringify(vscode, null, 2)
            // });
        }
    }
}

// TODO
// "styles": [
//     {
//         "name": "--plus-breadcrumb-gutter-x",
//         "dafault": "0.5em",
//         "description": "Used to adjust the Horizontal gap."
//     }
// ],