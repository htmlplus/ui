/**
 * TODO: This component contains panels.
 * @slot default - The default slot.
 */
export declare class TabsPanels {
    static TAG: string;
    static STYLES: string;
    /**
     * Panels are not always used inside tabs.They may be used outside, in which you can use this property to connect them to their corresponding tabs.
     */
    connector?: string;
    /**
     * Watchers
     */
    watcher(): void;
    render(): import("@htmlplus/element/client/utils/uhtml").Hole;
}
export interface TabsPanelsJSX {
    /**
     * Panels are not always used inside tabs.They may be used outside, in which you can use this property to connect them to their corresponding tabs.
     */
    connector?: string;
}
declare global {
    interface HTMLPlusTabsPanelsElement extends HTMLElement {
        /**
         * Panels are not always used inside tabs.They may be used outside, in which you can use this property to connect them to their corresponding tabs.
         */
        connector?: string;
    }
    var HTMLPlusTabsPanelsElement: {
        prototype: HTMLPlusTabsPanelsElement;
        new (): HTMLPlusTabsPanelsElement;
    };
    interface HTMLElementTagNameMap {
        "plus-tabs-panels": HTMLPlusTabsPanelsElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-tabs-panels": TabsPanelsJSX & {
                [key: string]: any;
            };
        }
    }
}
export type TabsPanelsElement = globalThis.HTMLPlusTabsPanelsElement;
