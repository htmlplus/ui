/**
 * @stable
 * @slot default - The default slot.
 */
export declare class AspectRatio {
    static TAG: string;
    static STYLES: string;
    /**
     * Specifies the minimum height.
     */
    minHeight?: number | string;
    /**
     * Specifies the maximum height.
     */
    maxHeight?: number | string;
    /**
     * Specifies the ratio.
     */
    value?: number | string;
    get ratio(): number;
    get style(): {
        paddingTop: string;
    };
    render(): import("@htmlplus/element/client/utils/uhtml").Hole;
}
export interface AspectRatioJSX {
    /**
     * Specifies the minimum height.
     */
    minHeight?: number | string;
    /**
     * Specifies the maximum height.
     */
    maxHeight?: number | string;
    /**
     * Specifies the ratio.
     */
    value?: number | string;
}
declare global {
    interface HTMLPlusAspectRatioElement extends HTMLElement {
        /**
         * Specifies the minimum height.
         */
        minHeight?: number | string;
        /**
         * Specifies the maximum height.
         */
        maxHeight?: number | string;
        /**
         * Specifies the ratio.
         */
        value?: number | string;
    }
    var HTMLPlusAspectRatioElement: {
        prototype: HTMLPlusAspectRatioElement;
        new (): HTMLPlusAspectRatioElement;
    };
    interface HTMLElementTagNameMap {
        "plus-aspect-ratio": HTMLPlusAspectRatioElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-aspect-ratio": AspectRatioJSX & {
                [key: string]: any;
            };
        }
    }
}
export type AspectRatioElement = globalThis.HTMLPlusAspectRatioElement;
