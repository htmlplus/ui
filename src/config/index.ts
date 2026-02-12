import { getConfigCreator, setConfigCreator } from '@htmlplus/element';

import { NAMESPACE } from '@/constants';
import type { PlusBreakpoint } from '@/types';

export type { Config } from '@htmlplus/element';

export const getConfig = getConfigCreator<typeof NAMESPACE, PlusBreakpoint>(NAMESPACE);
export const setConfig = setConfigCreator<typeof NAMESPACE, PlusBreakpoint>(NAMESPACE);
