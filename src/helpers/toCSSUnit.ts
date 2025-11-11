import { isCSSUnit } from '@htmlplus/element';

export const toCSSUnit = (input?: number | string): string | undefined => {
	if (typeof input === 'string' && isCSSUnit(input)) {
		return input;
	}
	if (typeof input === 'number' || (typeof input === 'string' && !Number.isNaN(Number(input)))) {
		return `calc(var(--plus-spacing, 1px) * ${input})`;
	}
};
