import { OverridesConfigBreakpointCreator } from '@htmlplus/element';

import { BREAKPOINTS } from '@/constants';

export interface BreakpointOverrides {}

export type Breakpoint = OverridesConfigBreakpointCreator<
  keyof typeof BREAKPOINTS,
  BreakpointOverrides
>;
