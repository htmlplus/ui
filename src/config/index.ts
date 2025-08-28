import { getConfigCreator, setConfigCreator } from '@htmlplus/element';

import { NAMESPACE } from '@/constants';

export type { Config } from '@htmlplus/element';

export const getConfig = getConfigCreator(NAMESPACE);
export const setConfig = setConfigCreator(NAMESPACE);
