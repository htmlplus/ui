import * as common from '../../plugins/index.js';
import * as plugin from './plugins/index.js';

export const customElement = async (filename, config) => {

    const context = {
        filename,
        config,
    };
    
    await common.cache(context);
    await common.load(context);
    await common.parse(context);
    await common.validate(context);
    await common.extract(context);
    await common.script(context);
    await common.style(context);
    await plugin.markup(context);
    await plugin.script(context);
    await plugin.style(context);
    await plugin.component(context);
    await common.docs(context);
    await common.vscode(context);

    return context;
}