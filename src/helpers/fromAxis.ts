export const fromAxis = (input: string, rtl: boolean) => {
  if (!input) return input;

  if (input.match(/right/)) input = rtl ? 'start' : 'end';

  if (input.match(/left/)) input = rtl ? 'end' : 'start';

  return input;
};
