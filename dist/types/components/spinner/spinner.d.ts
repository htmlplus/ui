import uhtml from "@htmlplus/element/client/vendors/uhtml.js";
import { SpinnerSize, SpinnerType } from './spinner.types';
/**
 * @stable
 */
export declare class Spinner {
    static TAG: string;
    static STYLES: string;
    /**
     * Specifies the size of the spinner.
     */
    size?: SpinnerSize;
    /**
     * Specifies which variant of the spinner to use.
     */
    type?: SpinnerType;
    get attributes(): {
        role: string;
    };
    get elements(): number[];
    render(): uhtml.Hole;
}
export interface SpinnerJSX {
    /**
     * Specifies the size of the spinner.
     */
    size?: SpinnerSize;
    /**
     * Specifies which variant of the spinner to use.
     */
    type?: SpinnerType;
}
declare global {
    interface HTMLPlusSpinnerElement extends HTMLElement {
        /**
         * Specifies the size of the spinner.
         */
        size?: SpinnerSize;
        /**
         * Specifies which variant of the spinner to use.
         */
        type?: SpinnerType;
    }
    var HTMLPlusSpinnerElement: {
        prototype: HTMLPlusSpinnerElement;
        new (): HTMLPlusSpinnerElement;
    };
    interface HTMLElementTagNameMap {
        "plus-spinner": HTMLPlusSpinnerElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-spinner": SpinnerJSX & {
                [key: string]: any;
            };
        }
    }
}
export type SpinnerElement = globalThis.HTMLPlusSpinnerElement;
