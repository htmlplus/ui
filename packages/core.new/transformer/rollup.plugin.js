import * as Case from 'case';
import * as fs from 'fs';
import { compile, preprocess } from 'svelte/compiler';
import sveltePreprocess from 'svelte-preprocess';
import { Project } from 'ts-morph';
import path from 'path';
import * as visitors from './visitors/index';
import * as CONSTANTS from './constants';

export const HTMLPLUS = (config) => {

    // TODO
    Object.assign(
        {
            prefix: 'app',
            scss: {}
        },
        config,
    );

    // TODO
    const host = compile(
        fs.readFileSync(path.resolve(__dirname, 'transformer/components/host.svelte'), { encoding: 'utf8' }),
        {
            dev: false,
        }
    )
        .js
        .code;

    return {
        name: 'HTMLPLUS',
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

            const tag = `${config.prefix}-${key}`;

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

            // generate svelte source
            const source = lines.join('\n');

            // TODO
            console.log(id, source);

            // convert ts to js and scss to css
            const processed = await preprocess(
                source,
                sveltePreprocess({
                    scss: config.scss
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