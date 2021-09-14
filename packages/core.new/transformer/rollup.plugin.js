import * as Case from 'case';
import * as fs from 'fs';
import { compile, preprocess } from 'svelte/compiler';
import sveltePreprocess from 'svelte-preprocess';
import { Project } from 'ts-morph';
import path from 'path';
import * as visitors from './visitors/index';
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

    return tag.getCommentText();
}

const has = (input, key) => {

    const tags = comment(input).getTags();

    return tags.some((tag) => tag.getTagName() === key);
}

export const htmlplus = (config) => {

    // TODO
    Object.assign(
        {
            prefix: 'app',
            docs: {
                docs: '',
                vscode: '',
            },
            scss: {},
        },
        config,
    );

    // TODO
    const host = compile(
        fs.readFileSync(
            path.resolve(__dirname, 'transformer/components/host.svelte'),
            {
                encoding: 'utf8'
            }
        )
    )
        .js
        .code;

    // TODO
    const docs = {
        prefix: config.prefix,
        components: []
    };

    // TODO
    const vscode = {
        version: 1.1,
        tags: [],
    }

    return {
        name: 'htmlplus',
        resolveId(id) {

            // TODO
            if (id == '@virtual/host') return id;

            // TODO
            if (id == '@virtual/utils')
                return path.resolve(__dirname, 'transformer/utils/index.js');

            return null;
        },
        async load(id) {

            // TODO
            if (id == '@virtual/host') return host;

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

            const title = Case.capital(key);

            const tag = `${config.prefix}-${key}`;

            // TODO
            (() => {

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

                        const description = get(property); // TODO

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

                        const description = get(event); // TODO

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

                        const description = get(method); // TODO

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

                docs.components.push({
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
            });

            // TODO
            (() => {

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
                    .getProperties()
                    .filter((property) => property.getDecorator(CONSTANTS.TOKEN_DECORATOR_PROPERTY))
                    .map((property) => {

                        const name = property.getName();

                        // TODO
                        const description = get(property);

                        return {
                            name,
                            description,
                        }
                    });

                vscode.tags.push({
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
            });

            const properties = component
                .getProperties()
                .filter((property) => property.getDecorator(CONSTANTS.TOKEN_DECORATOR_PROPERTY));

            const events = component
                .getProperties()
                .filter((property) => property.getDecorator(CONSTANTS.TOKEN_DECORATOR_EVENT));

            const states = component
                .getProperties()
                .filter((property) => property.getDecorator(CONSTANTS.TOKEN_DECORATOR_STATE));

            const slots = component
                .getProperties()
                .filter((method) => method.getDecorator(CONSTANTS.TOKEN_DECORATOR_SLOTS));

            const mount = component
                .getMethods()
                .find((method) => method.getName() === CONSTANTS.TOKEN_LIFECYCLE_MOUNT);

            const unmount = component
                .getMethods()
                .find((method) => method.getName() === CONSTANTS.TOKEN_LIFECYCLE_UNMOUNT);

            const methods = component
                .getMethods()
                .filter((method) => method.getDecorator(CONSTANTS.TOKEN_DECORATOR_METHOD))
                .map((method) => {

                    method.getDecorator(CONSTANTS.TOKEN_DECORATOR_METHOD).remove();

                    return method;
                });

            const render = component
                .getMethods()
                .find((method) => method.getName() === CONSTANTS.TOKEN_METHOD_RENDER);

            // TODO
            const template = render
                .getBody()
                .getStatements()[0]
                .getExpression()
                .getExpression();

            // TODO
            Object.keys(visitors)
                .forEach((key) => {

                    const transformer = visitors[key];

                    template.transform((traversal) => {

                        const node = traversal.visitChildren();

                        const result = transformer(node);

                        if (result === null) return null;

                        return result || node;
                    })
                })

            // TODO
            const content = template.getText();

            render.remove();

            const lines = [];

            lines.push(`<svelte:options tag="${tag}" />`);

            lines.push('<script lang="ts">');

            lines.push('import Host from "@virtual/host";');

            lines.push('import { toAttributes, toBoolean, toClass, toStyle } from "@virtual/utils";');

            lines.push('import { attr, get_current_component, onMount, onDestroy } from "svelte/internal";');

            lines.push(ast.print());

            lines.push(`const ${CONSTANTS.TOKEN_SVELTE_VARIABLE_HOST} = get_current_component();`);

            lines.push(`const ${CONSTANTS.TOKEN_THIS} = new ${name}();`);

            lines.push(`${CONSTANTS.TOKEN_API_FULL} = {};`);

            // TODO
            lines.push(`${CONSTANTS.TOKEN_API_FULL}.${CONSTANTS.TOKEN_API_HOST} = () => ${CONSTANTS.TOKEN_SVELTE_VARIABLE_HOST};`);

            if (slots.length)
                lines.push(`${CONSTANTS.TOKEN_API_FULL}.${CONSTANTS.TOKEN_API_SLOTS} = () => $$slots;`);

            if (properties.length)
                lines.push(`
                    ${CONSTANTS.TOKEN_API_FULL}.${CONSTANTS.TOKEN_API_PROPERTY} = (arg1, arg2) => {
                        switch (arg1) {
                            ${properties.map((property) => `case '${property.getName()}': ${property.getName()} = arg2; break;`).join('\n')}
                        }
                    }
                `);

            if (states.length)
                lines.push(`
                    ${CONSTANTS.TOKEN_API_FULL}.${CONSTANTS.TOKEN_API_STATE} = (arg1, arg2) => {
                        switch (arg1) {
                            ${states.map((state) => `case '${state.getName()}': ${state.getName()} = arg2; break;`).join('\n')}
                        }
                    }
                `);

            properties.forEach((property) => {

                let name = property.getName();

                const hasInitializer = property.hasInitializer();

                const isBoolean = property.getTypeNode().getText() === 'boolean';

                if (hasInitializer) {

                    const initializer = property.getInitializer().getText();

                    lines.push(`export let ${name} = ${initializer};`);
                }
                else {

                    lines.push(`export let ${name};`);
                }

                const value = isBoolean ? `toBoolean(${name})` : name;

                lines.push(`$: ${CONSTANTS.TOKEN_THIS}.${name} = ${value};`);
            });

            states.forEach((state) => {

                const name = state.getName();

                const hasInitializer = state.hasInitializer();

                if (hasInitializer) {

                    const initializer = state.getInitializer().getText();

                    lines.push(`let ${name} = ${initializer};`);
                }
                else {
                    lines.push(`let ${name};`);
                }
            });

            methods.forEach((method) => {

                const name = method.getName();

                lines.push(`export const ${name} = (...params) => ${CONSTANTS.TOKEN_THIS}.${name}(...params);`);
            });

            if (mount)
                lines.push(`onMount(() => ${CONSTANTS.TOKEN_THIS}.${CONSTANTS.TOKEN_LIFECYCLE_MOUNT}());`);

            if (unmount)
                lines.push(`onDestroy(() => ${CONSTANTS.TOKEN_THIS}.${CONSTANTS.TOKEN_LIFECYCLE_UNMOUNT}());`);

            lines.push('</script>');

            lines.push(content);

            lines.push('<style lang="scss">');

            // TODO
            lines.push(`@import '${key}.scss';`);

            lines.push('</style>');

            const source = lines.join('\n');

            return source;
        },
        buildEnd() {
            // main 
            // group
            console.log(333333)
        },
        generateBundle() {

            // TODO
            // this.emitFile({
            //     type: 'asset',
            //     fileName: config.docs.docs,
            //     source: JSON.stringify(docs, null, 2)
            // });

            // TODO
            // this.emitFile({
            //     type: 'asset',
            //     fileName: config.docs.vscode,
            //     source: JSON.stringify(vscode, null, 2)
            // });
        }
    }
}

// TODO
// "styles": [
//     {
//         "name": "--plus-breadcrumb-gutter-x",
//         "dafault": "0.5em",
//         "description": "Used to adjust the Horizontal gap."
//     }
// ],