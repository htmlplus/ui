import { getConfig as getConfigCore, setConfig as setConfigCore } from '@htmlplus/element';

import * as CONSTANTS from '@app/constants';

export interface Config {
  asset?: {
    [key: string]: any;
  };
  component?: {
    [key: string]: {
      property?: {
        [key: string]: any;
      };
    };
  };
}

export const getConfig = (...parameters: string[]) => {
  return getConfigCore(CONSTANTS.CONFIG_NAMESPACE, ...parameters);
};

export const setConfig = (config: Config, override?: boolean) => {
  setConfigCore(CONSTANTS.CONFIG_NAMESPACE, config, override);
};
