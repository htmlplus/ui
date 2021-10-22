import { customElement } from '../modules/index';

export const rollup = (config) => ({
    name: 'htmlplus',
    async load(id) {

        if (!id.endsWith('.tsx')) return null;

        const { code } = await customElement(id, config);

        return code;
    }
})