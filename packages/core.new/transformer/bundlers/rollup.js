import path from 'path';
import { customElement } from '../modules/index';

export const rollup = (config) => ({
    name: 'htmlplus',
    async load(id) {

        if (!id.endsWith('.tsx')) return null;

        const { js } = await customElement(id, config);

        return js.code;
    }
})