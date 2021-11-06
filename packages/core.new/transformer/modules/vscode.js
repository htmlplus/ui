import fs from 'fs-extra';
import path from 'path';

export const vscode = (config) => {

    const json = {
        version: 1.1,
        tags: [],
    };

    const next = (context) => {

        if (context.skip) return;

        if (!config.docs) return;

        const readme = (() => {

            if (context.readme) return context.readme;

            try {

                const source = path.resolve(context.directory, `${context.key}.md`);

                return fs.readFileSync(source, 'utf8');
            }
            catch { }
        })();

        const description = (() => {

            if (context.description) return context.description;

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

        const properties = context
            .properties
            .map((property) => {

                const attribute = {
                    name: property.attribute,
                    description: property.description,
                };

                if (property.values && property.values.length)
                    attribute.values = property
                        .values
                        .filter((value) => value.value)
                        .map((value) => ({ name: value.value }));

                return attribute;
            });

        json.tags.push({
            name: context.key,
            description: {
                kind: 'markdown',
                value: description
            },
            attributes: properties,
            references: [
                {
                    name: 'Source code',
                    url: `https://github.com/htmlplus/core/tree/main/packages/core/src/components/${context.key}/${context.key}.tsx`
                }
            ]
        });
    }

    const finish = () => {

        json.tags = json.tags.sort((a, b) => a.name > b.name ? 1 : -1);

        fs.ensureDirSync(path.dirname(config.vscode));

        fs.writeJSONSync(config.vscode, json, { replacer: null, spaces: 2 });
    }

    return {
        next,
        finish,
    }
}