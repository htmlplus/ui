import * as CONSTANTS from '../constants.js';

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

    lines.push('import { sync, toAttributes, toBoolean, toClass, toStyle } from "../../../transformer/utils/index";');

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

        const isBoolean = type === 'TSBooleanKeyword'; // TODO

        if (typeof initializer !== 'undefined') {

            lines.push(`export let ${name} = ${initializer};`);
        }
        else {

            lines.push(`export let ${name} = undefined;`); // TODO
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
    lines.push(`

        let ready;

        const update = sync(host, {});

        $: ready && update(${CONSTANTS.TOKEN_THIS}.attributes);

        onMount(() => (ready = true));
    `);

    lines.push('</script>');

    context.script = lines.join('\n');
}