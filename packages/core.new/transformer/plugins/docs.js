import Case from 'case';
import fs from 'fs-extra';
import glob from 'glob';
import path from 'path';

// TODO
const json = {
    prefix: undefined,
    components: []
};

export const docs = (context) => {

    if (context.skip) return;

    if (!context.config.docs) return;

    context.development = context.tags.some((tag) => tag.key == 'development');

    context.experimental = context.tags.some((tag) => tag.key == 'experimental');

    context.externals = fs.existsSync(path.resolve(context.directory, 'externals'));

    context.examples = (() => {

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

    context.readme = (() => {

        try {

            const source = path.resolve(context.directory, 'readme.md');

            return fs.readFileSync(source, 'utf8');
        }
        catch { }
    })();

    context.description = (() => {

        const content = context.readme || '';

        if (!content.startsWith('# ')) return '';

        const sections = content.split('\n');

        for (let i = 1; i < sections.length; i++) {

            const section = sections[i].trim();

            if (!section) continue;

            return section;
        }

        return '';
    })();

    context.parts = context
        .tags
        .filter((tag) => tag.key == 'part')
        .map((tag) => {

            const sections = tag.value.split('-');

            const name = sections[0].trim();

            const description = sections.slice(1).join('-').trim();

            return {
                name,
                description,
            }
        });

    context.slots = context
        .tags
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

    context.styles = (() => {

        const styles = [];

        try {

            fs.readFileSync(context.stylePath, 'utf8')
                .split('@prop')
                .slice(1)
                .map((section) => {

                    let [description, name] = section.split(/\n/);

                    name = name.split(':').slice(0, -1).join(':').trim();

                    description = description.trim();

                    let [initializer] = context.style.split(name).slice(1, 2);

                    if (initializer) initializer = initializer.split(/;|}/)[0].replace(':', '').trim();

                    styles.push({
                        name,
                        initializer,
                        description
                    })
                })
        }
        catch { }

        return styles;
    })();

    context.lastModified = glob
        .sync(path.join(context.directory, '**/*.*'))
        .reduce((result, file) => {

            const state = fs.statSync(file);

            return result > state.mtime ? result : state.mtime
        }, 0)

    context.group = (context.tags.find((tag) => tag.key == 'group') || {}).value || null;

    context.main = (context.group && context.key == context.group) || !context.group;

    // TODO
    json.prefix = context.config.prefix;

    json.components.push({
        key: context.key,
        tag: context.tag,
        title: context.title,
        main: context.main,
        group: context.group,
        development: context.development,
        experimental: context.experimental,

        // TODO
        deprecated: false,

        externals: context.externals,
        lastModified: context.lastModified,

        // TODO
        tags: [],

        // TODO
        source: context.key,

        description: context.description,
        readme: context.readme,
        properties: context.properties,
        slots: context.slots,
        events: context.events,
        styles: context.styles,
        parts: context.parts,
        methods: context.methods,
        examples: context.examples,
    })

    // TODO
    if (json.components.length != context.config.docs.length) return;
    json.components = json.components.sort((a, b) => a.key > b.key ? 1 : -1);
    fs.ensureDirSync(path.dirname(context.config.docs.docs));
    fs.writeJSONSync(context.config.docs.docs, json, { replacer: null, spaces: 2 });
}