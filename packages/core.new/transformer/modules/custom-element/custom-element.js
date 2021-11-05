import * as common from '../../plugins/index.js';
import * as plugin from './plugins/index.js';

export const customElement = async (config) => {

    const tasks = [
        // common.cache.load,
        common.load,
        common.parse,
        common.validate,
        common.extract,
        common.script,
        common.style,
        plugin.markup,
        plugin.script,
        plugin.style,
        plugin.component,
        common.docs,
        common.vscode,
        // common.cache.save,
    ];

    const instances = await Promise.all(tasks.map((task) => task(config)));

    const next = async (filename) => {

        const context = {
            filename
        };

        await Promise.all(instances.map((instance) => instance.next(context)));

        return context;
    }

    const finish = async () => {
        await Promise.all(instances.map((instance) => instance.finish()));
    }

    return {
        next,
        finish,
    }
}