import Case from 'case';
import fs from 'fs';
import path from 'path';

export const docs = (context) => {

    const { directory, tags } = context;

    const development = tags.some((tag) => tag.name === 'development');

    const experimental = tags.some((tag) => tag.name === 'experimental');

    const externals = fs.existsSync(path.resolve(directory, 'externals'));

    const readme = (() => {

        try {

            const source = path.resolve(directory, 'readme.md');

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
        .filter((tag) => tag.name === 'part')
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
        .filter((tag) => tag.name === 'slot')
        .map((tag) => {

            const sections = tag.text.split('-');

            const name = sections[0].trim();

            const description = sections.slice(1).join('-').trim();

            return {
                name,
                description,
            }
        });

    const properties = component
        .getProperties()
        .filter((property) => property.getDecorator(CONSTANTS.TOKEN_DECORATOR_PROPERTY))
        .map((property) => {

            const { tags } = property;

            property.experimental = tags.some((tag) => tag.name === 'experimental');

            property.model = tags.some((tag) => tag.name === 'model');

            return property;
        });

    const events = component
        .getProperties()
        .filter((property) => property.getDecorator(CONSTANTS.TOKEN_DECORATOR_EVENT))
        .map((event) => {

            const { tags } = event;

            event.experimental = tags.some((tag) => tag.name === 'experimental');

            event.model = tags.some((tag) => tag.name === 'model');

            return event;
        });

    const methods = component
        .getMethods()
        .filter((method) => method.getDecorator(CONSTANTS.TOKEN_DECORATOR_METHOD))
        .map((method) => {

            const { tags } = method;

            method.experimental = tags.some((tag) => tag.name === 'experimental');

            return method;
        });

    const examples = (() => {

        const items = [];

        const source = path.join(directory, 'examples');

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

    const json = {
        prefix: config.prefix,
        components: [],
    };

    json.components.push({
        key,
        tag,
        title,
        // main,
        // group,
        development,
        experimental,
        // deprecated,
        externals,
        // lastModified,
        // tags,
        // source,
        description,
        readme,
        properties,
        slots,
        events,
        // styles,
        parts,
        methods,
        examples,
    })
}