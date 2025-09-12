import type { OverridableValue } from '@htmlplus/element';

import type { BREAKPOINTS } from '@/constants';

export type BreakpointBase = keyof typeof BREAKPOINTS;

export interface BreakpointOverrides {}

export type Breakpoint = OverridableValue<BreakpointBase, BreakpointOverrides>;
