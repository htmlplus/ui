import * as Case from 'case';
import { compile, preprocess } from 'svelte/compiler';
import sveltePreprocess from 'svelte-preprocess';
import { Project } from 'ts-morph';
import fs from 'fs';
import path from 'path';
import * as transformers from './transformers/index';

const TOKEN_THIS = 'instance';
const TOKEN_API = `${TOKEN_THIS}.$api`;
const TOKEN_DECORATOR_COMPONENT = 'Component';
const TOKEN_DECORATOR_EVENT = 'Event';
const TOKEN_DECORATOR_PROPERTY = 'Property';
const TOKEN_DECORATOR_STATE = 'State';
const TOKEN_DECORATOR_METHOD = 'Method';
const TOKEN_DECORATOR_HOST = 'Element';
const TOKEN_DECORATOR_SLOTS = 'Slots';
const TOKEN_METHOD_RENDER = 'render';
const TOKEN_LIFECYCLE_MOUNT = 'connectedCallback';
const TOKEN_LIFECYCLE_UNMOUNT = 'disconnectedCallback';

// TODO
const utils = fs.readFileSync(path.resolve(__dirname, 'scripts/utils.js'), { encoding: 'utf8' });

export const HTMLPLUS = (config = {}) => {
    return {
        name: 'HTMLPLUS',
        resolveId(id) {

            if (id == '@virtual/utils') return id;

            return null;
        },
        async load(id) {

            if (id == '@virtual/utils') return utils;

            if (!id.endsWith('.tsx')) return null;

            const project = new Project();

            const ast = project.addSourceFileAtPath(id);

            const component = ast
                .getClasses()
                .find((item) => item.getDecorator(TOKEN_DECORATOR_COMPONENT));

            // TODO
            if (!component) return null;

            component
                .getDecorator(TOKEN_DECORATOR_COMPONENT)
                .remove();

            const name = component.getName();

            const key = Case.kebab(name);

            const tag = `${config.prefix}-${key}`;

            const properties = component
                .getProperties()
                .filter((property) => property.getDecorator(TOKEN_DECORATOR_PROPERTY));

            // TODO
            const reflects = properties
                .filter((property) => true);

            const events = component
                .getProperties()
                .filter((property) => property.getDecorator(TOKEN_DECORATOR_EVENT));

            const states = component
                .getProperties()
                .filter((property) => property.getDecorator(TOKEN_DECORATOR_STATE));

            const slots = component
                .getProperties()
                .filter((method) => method.getDecorator(TOKEN_DECORATOR_SLOTS));

            const mount = component
                .getMethods()
                .find((method) => method.getName() === TOKEN_LIFECYCLE_MOUNT);

            const unmount = component
                .getMethods()
                .find((method) => method.getName() === TOKEN_LIFECYCLE_UNMOUNT);

            const methods = component
                .getMethods()
                .filter((method) => method.getDecorator(TOKEN_DECORATOR_METHOD))
                .map((method) => {

                    method.getDecorator(TOKEN_DECORATOR_METHOD).remove();

                    return method;
                });

            const render = component
                .getMethods()
                .find((method) => method.getName() === TOKEN_METHOD_RENDER);

            // TODO
            const template = render
                .getBody()
                .getStatements()[0]
                .getExpression()
                .getExpression();

            // TODO
            Object.keys(transformers)
                .forEach((key) => {

                    const transformer = transformers[key];

                    template.transform((traversal) => {

                        const node = traversal.visitChildren();

                        const result = transformer(node);

                        if (result === null) return null;

                        return result || node;
                    })
                })

            // TODO
            const content = template
                .getText()
                .split('\n')
                .slice(1, -1)
                .join('\n');

            render.remove();

            const lines = [];

            lines.push(`<svelte:options tag="${tag}" />`);

            lines.push('<script lang="ts">');

            lines.push('import { toAttributes, toBoolean, toClass, toStyle } from "@virtual/utils";');

            lines.push('import { attr, get_current_component, onMount, onDestroy } from "svelte/internal";');

            lines.push(ast.print());

            lines.push('const host = get_current_component();');

            lines.push(`const ${TOKEN_THIS} = new ${name}();`);

            lines.push(`${TOKEN_API} = {};`);

            lines.push(`${TOKEN_API}.host = () => host;`);

            if (slots.length)
                lines.push(`${TOKEN_API}.slots = () => $$slots;`);

            if (properties.length)
                lines.push(`
                    ${TOKEN_API}.property = (arg1, arg2) => {
                        switch (arg1) {
                            ${properties.map((property) => `case '${property.getName()}': {${property.getName()} = arg2;break;}`).join('\n')}
                        }
                    }
                `);

            if (states.length)
                lines.push(`
                    ${TOKEN_API}.state = (arg1, arg2) => {
                        switch (arg1) {
                            ${states.map((state) => `case '${state.getName()}': {${state.getName()} = arg2;break;}`).join('\n')}
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

                lines.push(`$: ${TOKEN_THIS}.${name} = ${value};`);
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

                lines.push(`export const ${name} = (...params) => ${TOKEN_THIS}.${name}(...params);`);
            });

            if (mount)
                lines.push(`onMount(() => ${TOKEN_THIS}.${TOKEN_LIFECYCLE_MOUNT}());`);

            if (unmount)
                lines.push(`onDestroy(() => ${TOKEN_THIS}.${TOKEN_LIFECYCLE_UNMOUNT}());`);

            // TODO
            // lines.push(`onMount(() => host && host.attribute('state', state));`);
            // lines.push(`$: host && host.attribute('state', state)`);
            // lines.push(`$: host && toAttributes(host, ${TOKEN_THIS}.attributes);`);
            // lines.push(`onMount(() => toAttributes(host, ${TOKEN_THIS}.attributes));`);

            lines.push('</script>');

            lines.push(content);

            lines.push('<style lang="scss">');

            // TODO
            lines.push(`@import '${key}.scss';`);

            lines.push('</style>');

            // generate svelte source
            const source = lines.join('\n');

            // TODO
            // console.log(id, source);

            // convert ts to js and scss to css
            const processed = await preprocess(
                source,
                sveltePreprocess({
                    scss: {
                        includePaths: [
                            'src/styles/'
                        ],
                        injectGlobalPaths: [
                            'src/styles/mixins/index.scss',
                            'src/styles/variables/index.scss'
                        ]
                    }
                }),
                {
                    filename: id
                }
            );

            // compile svelte code
            const result = compile(
                processed.toString(),
                {
                    customElement: true,
                    dev: false,
                }
            );

            return result.js.code;
        }
    }
}