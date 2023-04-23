import { SymbolFlip, SymbolResolver, SymbolRotate, SymbolSize } from './symbol.types';
/**
 * @part svg - The svg element.
 */
export declare class Symbol {
    static TAG: string;
    static STYLES: string;
    /**
     * TODO
     */
    color?: string;
    /**
     * TODO
     */
    defaults?: boolean;
    /**
     * TODO
     */
    flip?: SymbolFlip;
    /**
     * TODO
     */
    label?: string;
    /**
     * TODO
     */
    name?: string;
    /**
     * TODO
     */
    resolver?: SymbolResolver;
    /**
     * TODO
     */
    rotate?: SymbolRotate;
    /**
     * TODO
     */
    size?: SymbolSize;
    svg?: SVGElement;
    get attributes(): {
        'aria-label': string;
        'aria-hidden': string;
        role: string;
        style: string;
    };
    get $host(): HTMLElement;
    get cache(): any;
    set cache(cache: any);
    connectCallback(): Promise<void>;
    update(input: SVGElement | string): void;
    updateCallback(): void;
    render(): SVGElement;
}
export interface SymbolJSX {
    /**
     * TODO
     */
    color?: string;
    /**
     * TODO
     */
    defaults?: boolean;
    /**
     * TODO
     */
    flip?: SymbolFlip;
    /**
     * TODO
     */
    label?: string;
    /**
     * TODO
     */
    name?: string;
    /**
     * TODO
     */
    resolver?: SymbolResolver;
    /**
     * TODO
     */
    rotate?: SymbolRotate;
    /**
     * TODO
     */
    size?: SymbolSize;
}
declare global {
    interface HTMLPlusSymbolElement extends HTMLElement {
        /**
         * TODO
         */
        color?: string;
        /**
         * TODO
         */
        defaults?: boolean;
        /**
         * TODO
         */
        flip?: SymbolFlip;
        /**
         * TODO
         */
        label?: string;
        /**
         * TODO
         */
        name?: string;
        /**
         * TODO
         */
        resolver?: SymbolResolver;
        /**
         * TODO
         */
        rotate?: SymbolRotate;
        /**
         * TODO
         */
        size?: SymbolSize;
    }
    var HTMLPlusSymbolElement: {
        prototype: HTMLPlusSymbolElement;
        new (): HTMLPlusSymbolElement;
    };
    interface HTMLElementTagNameMap {
        "plus-symbol": HTMLPlusSymbolElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-symbol": SymbolJSX & {
                [key: string]: any;
            };
        }
    }
}
export type SymbolElement = globalThis.HTMLPlusSymbolElement;
