import type { OverridableValue } from '@htmlplus/element';

import type { BREAKPOINTS } from '@/constants';

export type PlusBreakpointBase = keyof typeof BREAKPOINTS;

export interface PlusBreakpointOverrides {}

export type PlusBreakpoint = OverridableValue<PlusBreakpointBase, PlusBreakpointOverrides>;
