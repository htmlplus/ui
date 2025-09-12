import { OverridableValue } from '@htmlplus/element';
import { BREAKPOINTS } from '../constants';
export type BreakpointBase = keyof typeof BREAKPOINTS;
export interface BreakpointOverrides {
}
export type Breakpoint = OverridableValue<BreakpointBase, BreakpointOverrides>;
