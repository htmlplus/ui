import { PlusCore } from "../../core";
/**
 * @slot default - The default slot.
 */
export declare class ProgressBar extends PlusCore {
    static TAG: string;
    static STYLES: string;
    /**
     * TODO
     */
    buffer?: number;
    /**
     * TODO
     */
    immediate?: boolean;
    /**
     * TODO
     */
    label?: boolean;
    /**
     * TODO
     */
    min?: number;
    /**
     * TODO
     */
    max?: number;
    /**
     * TODO
     */
    variant?: string;
    /**
     * TODO
     */
    value?: number;
    get percentage(): string;
    get progress(): number;
    get stacked(): boolean;
    render(): import("@htmlplus/element/client/utils/uhtml").Hole;
}
export interface ProgressBarJSX {
    /**
    * TODO
    */
    "buffer"?: number;
    /**
    * TODO
    */
    "immediate"?: boolean;
    /**
    * TODO
    */
    "label"?: boolean;
    /**
    * TODO
    */
    "min"?: number;
    /**
    * TODO
    */
    "max"?: number;
    /**
    * TODO
    */
    "variant"?: string;
    /**
    * TODO
    */
    "value"?: number;
}
export interface ProgressBarAttributeJSX {
    /**
    * TODO
    */
    "buffer"?: number;
    /**
    * TODO
    */
    "immediate"?: boolean;
    /**
    * TODO
    */
    "label"?: boolean;
    /**
    * TODO
    */
    "min"?: number;
    /**
    * TODO
    */
    "max"?: number;
    /**
    * TODO
    */
    "variant"?: string;
    /**
    * TODO
    */
    "value"?: number;
}
declare global {
    interface HTMLPlusProgressBarElement extends HTMLElement {
        /**
        * TODO
        */
        "buffer"?: number;
        /**
        * TODO
        */
        "immediate"?: boolean;
        /**
        * TODO
        */
        "label"?: boolean;
        /**
        * TODO
        */
        "min"?: number;
        /**
        * TODO
        */
        "max"?: number;
        /**
        * TODO
        */
        "variant"?: string;
        /**
        * TODO
        */
        "value"?: number;
    }
    var HTMLPlusProgressBarElement: {
        prototype: HTMLPlusProgressBarElement;
        new (): HTMLPlusProgressBarElement;
    };
    interface HTMLElementTagNameMap {
        "plus-progress-bar": HTMLPlusProgressBarElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-progress-bar": ProgressBarAttributeJSX & {
                [key: string]: any;
            };
        }
    }
}
export type ProgressBarElement = globalThis.HTMLPlusProgressBarElement;
