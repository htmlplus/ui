import type { OverridesConfigBreakpointCreator } from '@htmlplus/element';

import type { BREAKPOINTS } from '@/constants';

// biome-ignore lint: TODO
export interface BreakpointOverrides {}

export type Breakpoint = OverridesConfigBreakpointCreator<
	keyof typeof BREAKPOINTS,
	BreakpointOverrides
>;
