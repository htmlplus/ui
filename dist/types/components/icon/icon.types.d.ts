import { ICON_SIZES } from './icon.constants';
export type IconParser = (input: SVGElement | string) => SVGElement;
export type IconFlip = 'both' | 'horizontal' | 'vertical';
export type IconResolver = (name: string, parser: IconParser) => Promise<SVGElement | string>;
export type IconRotate = 90 | 180 | 270 | (number & {});
export type IconSize = typeof ICON_SIZES[number] | (string & {});
