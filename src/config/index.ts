import { getConfig as getConfigCore, setConfig as setConfigCore } from '@htmlplus/element';

import * as CONSTANTS from '@/constants';

export { type Config } from '@htmlplus/element';

export const getConfig = getConfigCore(CONSTANTS.CONFIG_NAMESPACE);
export const setConfig = setConfigCore(CONSTANTS.CONFIG_NAMESPACE);
