import { PlusCore } from "../../core";
/**
 * @slot default - The default slot.
 */
export declare class ProgressBar extends PlusCore {
    static tag: string;
    static style: string;
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
export interface ProgressBarAttributes {
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
export interface ProgressBarEvents {
}
export interface ProgressBarMethods {
}
export interface ProgressBarProperties {
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
}
export interface ProgressBarJSX extends ProgressBarEvents, ProgressBarProperties {
}
declare global {
    interface HTMLPlusProgressBarElement extends HTMLElement, ProgressBarMethods, ProgressBarProperties {
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
            "plus-progress-bar": ProgressBarEvents & ProgressBarAttributes & {
                [key: string]: any;
            };
        }
    }
}
export type ProgressBarElement = globalThis.HTMLPlusProgressBarElement;
