export type IconParser = (input: SVGElement | string) => SVGElement;
export type IconFlip = 'both' | 'horizontal' | 'vertical';
export type IconResolver = (name: string, parser: IconParser) => Promise<SVGElement | string>;
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | (number & {}) | (string & {});
