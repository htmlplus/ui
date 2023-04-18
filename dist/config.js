export { g as getConfig, s as setConfig } from './core/index.js';

let basePath = '';
const setBasePath = (path) => {
    basePath = path;
};
const getBasePath = () => {
    return basePath;
};

export { getBasePath, setBasePath };
