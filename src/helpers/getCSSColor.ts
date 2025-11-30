import { isCSSColor } from '@htmlplus/element';

import { toCSSColor } from './toCSSColor';

export const getCSSColor = (element: Element, input?: string): string | undefined => {
	if (!input) return;

	if (isCSSColor(input)) return input;

	return window
		.getComputedStyle(element)
		.getPropertyValue(toCSSColor(input).trim().slice(4, -1))
		.trim();
};
