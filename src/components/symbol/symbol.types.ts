import { SYMBOL_SIZES } from './symbol.constants';

export type SymbolParser = (input: SVGElement | string) => SVGElement;
export type SymbolFlip = 'both' | 'horizontal' | 'vertical';
export type SymbolResolver = (name: string, parser: SymbolParser) => Promise<SVGElement | string>;
export type SymbolRotate = 90 | 180 | 270;
export type SymbolSize = typeof SYMBOL_SIZES[number] | (string & {});
