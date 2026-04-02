import { Config as ElementConfig } from '@htmlplus/element';
import { PlusBreakpoint } from '../types';
export type Config = ElementConfig<'plus', PlusBreakpoint>;
export declare const getConfig: () => ElementConfig<"plus", "xs" | "sm" | "md" | "lg" | "xl" | "@xs" | "@sm" | "@md" | "@lg" | "@xl">;
export declare const setConfig: (config: ElementConfig<"plus", "xs" | "sm" | "md" | "lg" | "xl" | "@xs" | "@sm" | "@md" | "@lg" | "@xl">, options?: import('@htmlplus/element').ConfigOptions) => void;
