import type { BREAKPOINTS } from '@/constants';

type OverridableType<Base, Overrides, Keys extends keyof Base> = Omit<Base, Keys> & {
	[K in Keys]: K extends keyof Overrides ? Overrides[K] : Base[K];
};

export interface PlusConfig {
	breakpoint: keyof typeof BREAKPOINTS;
	color: string;
}

export interface PlusConfigOverrides {}

export type PlusConfigOverridden = OverridableType<
	PlusConfig,
	PlusConfigOverrides,
	'breakpoint' | 'color'
>;

export type PlusBreakpoint = PlusConfigOverridden['breakpoint'];

export type PlusColor = PlusConfigOverridden['color'];
