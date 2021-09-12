import * as Case from 'case';
import { Project } from 'ts-morph';
import * as path from 'path';
import fs from 'fs';
import * as CONSTANTS from './constants';

const comment = (input) => {
    return input.getJsDocs()[0];
}

const all = (input, key) => {
    return comment(input)
        .getTags()
        .filter((tag) => tag.getTagName() === key)
        .map((tag) => tag.getCommentText());
}

const get = (input, key) => {

    const tags = comment(input).getTags();

    const tag = tags.find((tag) => tag.getTagName() === key);

    if (!tag) return;

    return tag.getComment();
}

const has = (input, key) => {

    const tags = comment(input).getTags();

    return tags.some((tag) => tag.getTagName() === key);
}

export const HTMLPLUSDOCS = (config = {}) => {

    const document = {
        prefix: config.prefix,
        components: []
    };

    return {
        name: 'docs',
        async load(id) {

            if (!id.endsWith('.tsx')) return null;

            const dir = path.dirname(id);

            const project = new Project();

            const ast = project.addSourceFileAtPath(id);

            const component = ast
                .getClasses()
                .find((item) => item.getDecorator(CONSTANTS.TOKEN_DECORATOR_COMPONENT));

            // TODO
            if (!component) return null;

            component
                .getDecorator(CONSTANTS.TOKEN_DECORATOR_COMPONENT)
                .remove();

            const name = component.getName();

            const key = Case.kebab(name);

            const tag = `${config.prefix}​-${key}​`;

            const title = Case.capital(key);

            const development = has(component, 'development');

            const experimental = has(component, 'experimental');

            const externals = fs.existsSync(path.resolve(dir, 'externals'));

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

            const parts = all(component, 'part')
                .map((tag) => {

                    const sections = tag.split('-');

                    const name = sections[0].trim();

                    const description = sections.slice(1).join('-').trim();

                    return {
                        name,
                        description,
                    }
                });

            const slots = all(component, 'slot')
                .map((tag) => {

                    const sections = tag.split('-');

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

                    const name = property.getName();

                    const attribute = Case.kebab(name);

                    const initializer = property.hasInitializer() ? property.getInitializer().getLiteralValue() : undefined;

                    const reflect = false; // TODO

                    const required = !property.getQuestionTokenNode();

                    const type = property.getType().getText();

                    const experimental = has(property, 'experimental');

                    const description = get(property);

                    const values = []; // TODO

                    const model = has(property, 'model');

                    return {
                        name,
                        attribute,
                        default: initializer,
                        reflect,
                        required,
                        type,
                        experimental,
                        description,
                        values,
                        model,
                    }
                });

            const events = component
                .getProperties()
                .filter((property) => property.getDecorator(CONSTANTS.TOKEN_DECORATOR_EVENT))
                .map((event) => {

                    const name = event.getName();

                    const cancelable = false; // TODO

                    const detail = 'void'; // TODO

                    const experimental = has(event, 'experimental');

                    const description = get(event);

                    const model = has(event, 'model');

                    return {
                        name,
                        cancelable,
                        detail,
                        experimental,
                        description,
                        model,
                    }
                });

            const methods = component
                .getMethods()
                .filter((method) => method.getDecorator(CONSTANTS.TOKEN_DECORATOR_METHOD))
                .map((method) => {

                    const name = method.getName();

                    const experimental = has(method, 'experimental');

                    const type = 'Promise<void>'; // TODO

                    const signature = 'browse() => Promise<void>'; // TODO

                    const description = get(method);

                    const parameters = []; // TODO

                    return {
                        name,
                        experimental,
                        type,
                        signature,
                        description,
                        parameters,
                    }
                });

            const examples = (() => {

                const items = [];

                const source = path.join(dir, 'examples');

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

            // const index = document.components.findIndex((component) => component.key === key);
            // if (index > -1)
            //     document.components.splice(index, 1);

            document.components.push({
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

            return null;
        },
        buildEnd() {
            // main 
            // group
            console.log(333333, document.components[0].properties)
        }
    }
}

// "styles": [
//     {
//         "name": "--plus-breadcrumb-gutter-x",
//         "dafault": "0.5em",
//         "description": "Used to adjust the Horizontal gap."
//     }
// ],

// {
//     "version": 1.1,
//     "tags": [
//         {
//             "name": "aspect-ratio",
//             "description": {
//                 "kind": "markdown",
//                 "value": "This component helps to specify a fixed ratio for the width and height sizes of a visual object (e.g. Image)."
//             },
//             "attributes": [
//                 {
//                     "name": "value",
//                     "description": "Specifies the ratio."
//                 }
//             ],
//             "references": [
//                 {
//                     "name": "Source code",
//                     "url": "https://github.com/htmlplus/core/tree/main/packages/core/src/components/aspect-ratio/aspect-ratio.tsx"
//                 }
//             ]
//         },
//     ]
// }