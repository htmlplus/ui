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

    const development = context.tags.some((tag) => tag.key == 'development');

    const experimental = context.tags.some((tag) => tag.key == 'experimental');

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

    const styles = (() => {

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

    const parts = context
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

    const slots = context
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

    const lastModified = glob
        .sync(path.join(context.directory, '**/*.*'))
        .reduce((result, file) => {

            const state = fs.statSync(file);

            return result > state.mtime ? result : state.mtime
        }, 0)

    const group = (context.tags.find((tag) => tag.key == 'group') || {}).value || null;

    const main = (group && context.key == group) || !group;

    // TODO
    json.prefix = context.config.prefix;

    json.components.push({
        key: context.key,
        tag: context.tag,
        title: context.title,
        main,
        group,
        development,
        experimental,

        // TODO
        deprecated: false,

        externals,
        lastModified,

        // TODO
        tags: [],

        // TODO
        source: context.key,

        description,
        readme,
        properties: context.properties,
        slots,
        events: context.events,
        styles,
        parts,
        methods: context.methods,
        examples,
    })

    // TODO
    if (json.components.length != context.config.docs.length) return;
    json.components = json.components.sort((a, b) => a.key > b.key ? 1 : -1);
    fs.ensureDirSync(path.dirname(context.config.docs.docs));
    fs.writeJSONSync(context.config.docs.docs, json, { replacer: null, spaces: 2 });
}