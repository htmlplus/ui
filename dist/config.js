import { g as getConfig$1, C as CONFIG_NAMESPACE, s as setConfig$1 } from './core/index.js';

const getConfig = (...parameters) => {
    return getConfig$1(CONFIG_NAMESPACE, ...parameters);
};
const setConfig = (config, override) => {
    setConfig$1(CONFIG_NAMESPACE, config, override);
};

export { getConfig, setConfig };
