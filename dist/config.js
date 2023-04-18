export { g as getConfig, s as setConfig } from './core/index.js';

let p = '';
const setPath = (path) => {
    p = path;
};
const getPath = () => {
    return p;
};

export { getPath, setPath };
