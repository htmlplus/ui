import { OverridableValue } from '@htmlplus/element';
import { BREAKPOINTS } from '../constants';
export type PlusBreakpointBase = keyof typeof BREAKPOINTS;
export interface PlusBreakpointOverrides {
}
export type PlusBreakpoint = OverridableValue<PlusBreakpointBase, PlusBreakpointOverrides>;
