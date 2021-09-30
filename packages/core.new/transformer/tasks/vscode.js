import fs from 'fs';
import path from 'path';
import * as CONSTANTS from '../constants.js';

export const vscode = (context) => {

    const { component } = context;

    const readme = (() => {

        try {

            const source = path.resolve(dir, 'readme.md');

            return fs.readFileSync(source, 'utf8');
        }
        catch { }
    })();

    const description = ((component) => {

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

    const properties = component
        .properties
        .map((property) => {

            const { name, description } = property;

            return {
                name,
                description,
            }
        });

    const json = {
        version: 1.1,
        tags: [],
    }

    json.tags.push({
        name: key,
        description: {
            kind: 'markdown',
            value: description
        },
        attributes: properties,
        references: [
            {
                name: 'Source code',
                url: `https://github.com/htmlplus/core/tree/main/packages/core/src/components/${key}/${key}.tsx`
            }
        ]
    })
}