import { SYMBOL_SIZES } from './symbol.constants';

export type SymbolFlip = 'both' | 'horizontal' | 'vertical';
export type SymbolResolver = (name: string) => Promise<string>;
export type SymbolRotate = 90 | 180 | 270;
export type SymbolSize = typeof SYMBOL_SIZES[number] | (string & {});
export type SymbolTransformer = (svg: SVGElement) => SVGElement;
