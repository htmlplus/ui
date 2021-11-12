import Case from 'case';
import * as CONSTANTS from '../../../../configs/constants.js';

export const script = (config) => {

    const next = (context) => {

        if (context.skip) return;

        const lines = [];

        lines.push(`<svelte:options tag="${context.tag}" />`);

        if (config.dev)
            lines.push('<script>');
        else
            lines.push('<script lang="ts">');

        // TODO
        lines.push('import { updateAttribute, sync, toAttributes, toBoolean, toNumber } from "../../../transformer/modules/custom-element/svelte/utils/index";');

        lines.push('import { get_current_component, onMount, onDestroy } from "svelte/internal";');

        lines.push(context.script);

        lines.push(`const ${CONSTANTS.TOKEN_SVELTE_VARIABLE_HOST} = get_current_component();`);

        lines.push(`const ${CONSTANTS.TOKEN_THIS} = new ${context.name}();`);

        lines.push(`${CONSTANTS.TOKEN_API_FULL} = {};`);

        // TODO
        lines.push(`${CONSTANTS.TOKEN_API_FULL}.${CONSTANTS.TOKEN_API_HOST} = () => ${CONSTANTS.TOKEN_SVELTE_VARIABLE_HOST};`);

        // TODO
        // switch (arg1) {
        //     ${properties.map((property) => `case '${property.name}': ${property.name} = arg2; break;`).join('\n')}
        // }
        if (context.properties.length)
            lines.push(`
            ${CONSTANTS.TOKEN_API_FULL}.${CONSTANTS.TOKEN_API_PROPERTY} = (key, value) => {
                ${CONSTANTS.TOKEN_SVELTE_VARIABLE_HOST}[key] = value;
            }
        `);

        if (context.slots.length)
            lines.push(`${CONSTANTS.TOKEN_API_FULL}.${CONSTANTS.TOKEN_API_SLOTS} = () => $$slots;`);

        if (context.states.length)
            lines.push(`
            ${CONSTANTS.TOKEN_API_FULL}.${CONSTANTS.TOKEN_API_STATE} = (arg1, arg2) => {
                switch (arg1) {
                    ${context.states.map((state) => `case '${state.name}': ${state.name} = arg2; break;`).join('\n')}
                }
            }
        `);

        context.properties.forEach((property) => {

            const { initializer, name, type } = property;

            if (typeof initializer !== 'undefined') {
                lines.push(`export let ${name} = ${initializer};`);
            }
            else {
                // TODO
                lines.push(`export let ${name} = undefined;`);
            }

            // TODO
            if (property.reflect)
                lines.push(`$: updateAttribute(${CONSTANTS.TOKEN_SVELTE_VARIABLE_HOST}, '${Case.kebab(name)}', ${name});`);

            // TODO
            switch (type) {

                case 'boolean':
                    lines.push(`$: ${CONSTANTS.TOKEN_THIS}.${name} = toBoolean(${name});`);
                    break;

                case 'number':
                    lines.push(`$: ${CONSTANTS.TOKEN_THIS}.${name} = toNumber(${name});`);
                    break;

                default:
                    lines.push(`$: ${CONSTANTS.TOKEN_THIS}.${name} = ${name};`);
            }
        });

        context.states.forEach((state) => {

            const { initializer, name } = state;

            if (typeof initializer !== 'undefined') {
                lines.push(`let ${name} = ${initializer};`);
            }
            else {
                lines.push(`let ${name};`);
            }

            lines.push(`$: ${CONSTANTS.TOKEN_THIS}.${name} = ${name};`);
        });

        context.methods.forEach((method) => {
            const { name } = method;
            lines.push(`export const ${name} = ${CONSTANTS.TOKEN_THIS}.${name}.bind(${CONSTANTS.TOKEN_THIS});`);
        });

        if (context.hasMount)
            lines.push(`onMount(() => ${CONSTANTS.TOKEN_THIS}.${CONSTANTS.TOKEN_LIFECYCLE_MOUNT}());`);

        if (context.hasUnmount)
            lines.push(`onDestroy(() => ${CONSTANTS.TOKEN_THIS}.${CONSTANTS.TOKEN_LIFECYCLE_UNMOUNT}());`);

        // TODO
        if (context.attributes.length) {

            const attributes = context
                .attributes
                .map((attribute) => `...${CONSTANTS.TOKEN_THIS}.${attribute.name}`)
                .join(', ');

            lines.push(`let ready;`);
            lines.push(`const update = sync(${CONSTANTS.TOKEN_SVELTE_VARIABLE_HOST}, {});`);
            lines.push(`$: ready && update({${attributes}});`);
            lines.push(`onMount(() => (ready = true));`);
        }

        // TODO
        lines.push(`onMount(() => (${CONSTANTS.TOKEN_API_FULL}.ready = true));`);

        lines.push('</script>');

        context.script = lines.join('\n');
    }

    const finish = () => { }

    return {
        next,
        finish,
    }
}