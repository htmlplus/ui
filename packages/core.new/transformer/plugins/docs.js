import Case from 'case';
import fs from 'fs-extra';
import glob from 'glob';
import path from 'path';

export const docs = (context) => {

    const { key, tag, tags, title } = context;

    const development = tags.some((tag) => tag.key == 'development');

    const experimental = tags.some((tag) => tag.key == 'experimental');

    const externals = fs.existsSync(path.resolve(context.directory, 'externals'));

    const readme = (() => {

        try {

            const source = path.resolve(context.directory, 'readme.md');

            return fs.readFileSync(source, 'utf8');
        }
        catch { }
    })();

    const description = (() => {

        const content = readme || '';

        if (!content.startsWith('# ')) return '';

        const sections = content.split('\n');

        for (let i = 1; i < sections.length; i++) {

            const section = sections[i].trim();

            if (!section) continue;

            return section;
        }

        return '';
    })();
    
    const parts = tags
        .filter((tag) => tag.key == 'part')
        .map((tag) => {

            const sections = tag.text.split('-');

            const name = sections[0].trim();

            const description = sections.slice(1).join('-').trim();

            return {
                name,
                description,
            }
        });

    const slots = tags
        .filter((tag) => tag.key == 'slot')
        .map((tag) => {

            const sections = tag.value.split('-');

            const name = sections[0].trim();

            const description = sections.slice(1).join('-').trim();

            return {
                name,
                description,
            }
        });

    const properties = context
        .properties
        .map((property) => {

            const { tags } = property;

            property.experimental = tags.some((tag) => tag.key == 'experimental');

            property.model = tags.some((tag) => tag.key == 'model');

            return property;
        });

    const events = context
        .events
        .map((event) => {

            const { tags } = event;

            event.experimental = tags.some((tag) => tag.key == 'experimental');

            event.model = tags.some((tag) => tag.key == 'model');

            return event;
        });

    const methods = context
        .methods
        .map((method) => {

            const { tags } = method;

            method.experimental = tags.some((tag) => tag.key == 'experimental');

            return method;
        });

    const examples = (() => {

        const items = [];

        const source = path.join(context.directory, 'examples');

        if (!fs.existsSync(source)) return items;

        return fs.readdirSync(source)
            .filter((file) => file.endsWith('.md'))
            .map((file) => {

                const item = {};

                const regex = /```\w+\s\[\w+(:\w+)?\]\s[\S\s]*?```/g;

                const filePath = path.join(source, file);

                const content = fs.readFileSync(filePath, 'utf8');

                item.key = path.basename(filePath).replace('.md', '');

                item.title = Case.capital(item.key);

                item.readme = content.replace(regex, '').trim();

                item.codes = (content.match(regex) || [])
                    .map((section) => {

                        try {

                            const lines = section.split('\n');

                            const key = ((lines[0].match(/\[\w+(:\w+)?\]/) || []).shift() || '').replace('[', '').replace(']', '');

                            const type = ((lines[0].match(/```\w+/) || []).pop() || '').replace('```', '');

                            const value = lines.slice(1, -1).join('\n');

                            return {
                                key,
                                type,
                                value
                            }
                        }
                        catch { }
                    });

                return item;
            })
    })();

    const lastModified = (() => {

        // TODO
        const files = glob.sync(path.join(context.directory, '**/*.*'));

        debugger

        return files.reduce((result, file) => {

            const state = fs.statSync(file);

            return result > state.mtime ? result : state.mtime
        }, 0)
    })();

    const group = (tags.find((tag) => tag.key == 'group') || {}).value;

    const main = key == group;

    const json = {
        prefix: context.config.prefix,
        components: [],
    };

    json.components.push({
        // TODO
        // deprecated,
        // source,
        // styles,
        // tags,
        
        key,
        tag,
        title,
        main,
        group,
        development,
        experimental,
        externals,
        lastModified,
        description,
        readme,
        properties,
        slots,
        events,
        parts,
        methods,
        examples,
    })

    // TODO
    fs.ensureDirSync(path.dirname(context.config.docs.docs));
    fs.writeJSONSync(context.config.docs.docs, json);
}