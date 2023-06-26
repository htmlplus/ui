import { PlusBase } from '@app/core';
export declare class ProgressBar extends PlusBase {
    static TAG: string;
    static STYLES: string;
    /**
     * TODO
     */
    buffer?: number;
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
    buffer?: number;
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
declare global {
    interface HTMLPlusProgressBarElement extends HTMLElement {
        /**
         * TODO
         */
        buffer?: number;
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
    var HTMLPlusProgressBarElement: {
        prototype: HTMLPlusProgressBarElement;
        new (): HTMLPlusProgressBarElement;
    };
    interface HTMLElementTagNameMap {
        "plus-progress-bar": HTMLPlusProgressBarElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-progress-bar": ProgressBarJSX & {
                [key: string]: any;
            };
        }
    }
}
export type ProgressBarElement = globalThis.HTMLPlusProgressBarElement;
