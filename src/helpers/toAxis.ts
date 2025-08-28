export const toAxis = (input: string, rtl: boolean) => {
	if (!input) return input;

	if (input.match(/start/)) input = rtl ? 'right' : 'left';

	if (input.match(/end/)) input = rtl ? 'left' : 'right';

	return input;
};
