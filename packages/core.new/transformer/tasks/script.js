import * as CONSTANTS from '../constants';

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

    lines.push('import { toAttributes, toBoolean, toClass, toStyle } from "@virtual/utils";');

    lines.push('import { attr, get_current_component, onMount, onDestroy } from "svelte/internal";');

    lines.push(script);

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
                    ${properties.map((property) => `case '${property.name}': ${property.name} = arg2; break;`).join('\n')}
                }
            }
        `);

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

        const isBoolean = type === 'boolean'; // TODO

        if (typeof initializer !== 'undefined') {

            lines.push(`export let ${name} = ${initializer};`);
        }
        else {

            lines.push(`export let ${name};`);
        }

        const value = isBoolean ? `toBoolean(${name})` : name;

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
    });

    methods.forEach((method) => {

        const { name } = method;

        lines.push(`export const ${name} = (...params) => ${CONSTANTS.TOKEN_THIS}.${name}(...params);`);
    });

    if (hasMount)
        lines.push(`onMount(() => ${CONSTANTS.TOKEN_THIS}.${CONSTANTS.TOKEN_LIFECYCLE_MOUNT}());`);

    if (hasUnmount)
        lines.push(`onDestroy(() => ${CONSTANTS.TOKEN_THIS}.${CONSTANTS.TOKEN_LIFECYCLE_UNMOUNT}());`);

    lines.push('</script>');

    context.script = lines.join('\n');
}