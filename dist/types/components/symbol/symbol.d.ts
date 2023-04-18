import { SymbolFlip, SymbolName, SymbolRotate, SymbolSize } from './symbol.types';
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
    flip?: SymbolFlip;
    /**
     * TODO
     */
    name?: SymbolName;
    /**
     * TODO
     */
    rotate?: SymbolRotate;
    /**
     * TODO
     */
    size?: SymbolSize;
    get attributes(): {
        style: string;
    };
    get nodes(): any;
    update(): void;
    updatedCallback(): void;
}
export interface SymbolJSX {
    /**
     * TODO
     */
    color?: string;
    /**
     * TODO
     */
    flip?: SymbolFlip;
    /**
     * TODO
     */
    name?: SymbolName;
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
        flip?: SymbolFlip;
        /**
         * TODO
         */
        name?: SymbolName;
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
