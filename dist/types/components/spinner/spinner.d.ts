import { PlusBase } from '@app/core';
import { SpinnerColor, SpinnerSize, SpinnerType } from './spinner.types';
/**
 * @stable
 */
export declare class Spinner extends PlusBase {
    static TAG: string;
    static STYLES: string;
    /**
     * Specifies the color.
     */
    color?: SpinnerColor;
    /**
     * Specifies the size of the spinner.
     */
    size?: SpinnerSize;
    /**
     * Specifies which variant of the spinner to use.
     */
    type?: SpinnerType;
    get style(): string;
    get elements(): number[];
    render(): import("@htmlplus/element/client/utils/uhtml").Hole;
}
export interface SpinnerJSX {
    /**
     * Specifies the color.
     */
    color?: SpinnerColor;
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
         * Specifies the color.
         */
        color?: SpinnerColor;
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
