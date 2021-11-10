import * as common from '../../../plugins/index.js';
import * as local from './plugins/index.js';
import { docs } from '../../docs.js';
import { vscode } from '../../vscode.js';

export const customElement = async (config) => {

    const tasks = [
        common.cache.load,
        common.load,
        common.parse,
        common.validate,
        common.extract,
        common.script,
        common.scss,
        local.markup,
        local.script,
        local.style,
        local.component,
        docs,
        vscode,
        common.cache.save,
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