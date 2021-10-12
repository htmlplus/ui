import * as CONSTANTS from '../../../configs/constants.js';

export const script = (context) => {

    const {
        name,
        tag,
        methods,
        properties,
        slots,
        states,
        hasMount,
        hasUnmount,
        script,
    } = context;

    const lines = [];

    lines.push(`<svelte:options tag="${tag}" />`);

    lines.push('<script lang="ts">');

    // TODO
    lines.push('import { sync, toAttributes, toBoolean, toNumber } from "../../../transformer/modules/custom-element/utils/index";');

    lines.push('import { attr, get_current_component, onMount, onDestroy } from "svelte/internal";');

    lines.push(script);

    lines.push(`const ${CONSTANTS.TOKEN_SVELTE_VARIABLE_HOST} = get_current_component();`);

    lines.push(`const ${CONSTANTS.TOKEN_THIS} = new ${name}();`);

    lines.push(`${CONSTANTS.TOKEN_API_FULL} = {};`);

    // TODO
    lines.push(`${CONSTANTS.TOKEN_API_FULL}.${CONSTANTS.TOKEN_API_HOST} = () => ${CONSTANTS.TOKEN_SVELTE_VARIABLE_HOST};`);

    // TODO
    // switch (arg1) {
    //     ${properties.map((property) => `case '${property.name}': ${property.name} = arg2; break;`).join('\n')}
    // }
    if (properties.length)
        lines.push(`
            ${CONSTANTS.TOKEN_API_FULL}.${CONSTANTS.TOKEN_API_PROPERTY} = (key, value) => {
                ${CONSTANTS.TOKEN_SVELTE_VARIABLE_HOST}[key] = value;
            }
        `);

    if (slots.length)
        lines.push(`${CONSTANTS.TOKEN_API_FULL}.${CONSTANTS.TOKEN_API_SLOTS} = () => $$slots;`);

    if (states.length)
        lines.push(`
            ${CONSTANTS.TOKEN_API_FULL}.${CONSTANTS.TOKEN_API_STATE} = (arg1, arg2) => {
                switch (arg1) {
                    ${states.map((state) => `case '${state.name}': ${state.name} = arg2; break;`).join('\n')}
                }
            }
        `);

    properties.forEach((property) => {

        const { initializer, name, type } = property;

        if (typeof initializer !== 'undefined') {

            lines.push(`export let ${name} = ${initializer};`);
        }
        else {

            // TODO
            lines.push(`export let ${name} = undefined;`);
        }

        let value;

        // TODO
        switch (type) {

            case 'TSBooleanKeyword':
                value = `toBoolean(${name})`;
                break;

            case 'TSNumberKeyword':
                value = `toNumber(${name})`;
                break;

            default:
                value = name;
        }

        lines.push(`$: ${CONSTANTS.TOKEN_THIS}.${name} = ${value};`);
    });

    states.forEach((state) => {

        const { initializer, name } = state;

        if (typeof initializer !== 'undefined') {

            lines.push(`let ${name} = ${initializer};`);
        }
        else {

            lines.push(`let ${name};`);
        }

        lines.push(`$: ${CONSTANTS.TOKEN_THIS}.${name} = ${name};`);
    });

    methods.forEach((method) => {

        const { name } = method;

        lines.push(`export const ${name} = ${CONSTANTS.TOKEN_THIS}.${name}.bind(${CONSTANTS.TOKEN_THIS});`);
    });

    if (hasMount)
        lines.push(`onMount(() => ${CONSTANTS.TOKEN_THIS}.${CONSTANTS.TOKEN_LIFECYCLE_MOUNT}());`);

    if (hasUnmount)
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