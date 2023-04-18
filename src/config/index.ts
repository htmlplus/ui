import { getConfig as getConfigCore, setConfig as setConfigCore } from '@htmlplus/element';

import * as CONSTANTS from '@app/constants';

let basePath = '';

export const getBasePath = () => {
  return basePath;
};

export const getConfig = (...parameters: string[]) => {
  return getConfigCore(CONSTANTS.CONFIG_NAMESPACE, ...parameters);
};

export const setBasePath = (path: string) => {
  basePath = path;
};

export const setConfig = (config: any, override?: boolean) => {
  setConfigCore(CONSTANTS.CONFIG_NAMESPACE, config, override);
};
