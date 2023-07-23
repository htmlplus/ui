import { PlusBase } from "../../core";
/**
 * TODO: Arranges tabs within a bar.
 * @slot default - The default slot.
 */
export declare class TabsBar extends PlusBase {
    static TAG: string;
    static STYLES: string;
    /**
     * Grows tabs as much as all available space (occupies all horizontal space).
     */
    grow?: boolean;
    /**
     * Specifies how the tabs are aligned.
     */
    justify?: 'start' | 'center' | 'end';
    /**
     * Reverses the arrangement of the tabs.
     */
    reverse?: boolean;
    render(): import("@htmlplus/element/client/utils/uhtml").Hole;
}
export interface TabsBarJSX {
    /**
     * Grows tabs as much as all available space (occupies all horizontal space).
     */
    grow?: boolean;
    /**
     * Specifies how the tabs are aligned.
     */
    justify?: 'start' | 'center' | 'end';
    /**
     * Reverses the arrangement of the tabs.
     */
    reverse?: boolean;
}
declare global {
    interface HTMLPlusTabsBarElement extends HTMLElement {
        /**
         * Grows tabs as much as all available space (occupies all horizontal space).
         */
        grow?: boolean;
        /**
         * Specifies how the tabs are aligned.
         */
        justify?: 'start' | 'center' | 'end';
        /**
         * Reverses the arrangement of the tabs.
         */
        reverse?: boolean;
    }
    var HTMLPlusTabsBarElement: {
        prototype: HTMLPlusTabsBarElement;
        new (): HTMLPlusTabsBarElement;
    };
    interface HTMLElementTagNameMap {
        "plus-tabs-bar": HTMLPlusTabsBarElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-tabs-bar": TabsBarJSX & {
                [key: string]: any;
            };
        }
    }
}
export type TabsBarElement = globalThis.HTMLPlusTabsBarElement;
