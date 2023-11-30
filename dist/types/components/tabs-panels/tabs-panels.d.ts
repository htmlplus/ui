import { PlusCore } from "../../core";
/**
 * TODO: This component contains panels.
 * @slot default - The default slot.
 */
export declare class TabsPanels extends PlusCore {
    static TAG: string;
    static STYLES: string;
    /**
     * Panels are not always used inside tabs.They may be used outside, in which you can use this property to connect them to their corresponding tabs.
     */
    connector?: string;
    watcher(): void;
    render(): import("@htmlplus/element/client/utils/uhtml").Hole;
}
export interface TabsPanelsAttributes {
    /**
    * Panels are not always used inside tabs.They may be used outside, in which you can use this property to connect them to their corresponding tabs.
    */
    "connector"?: string;
}
export interface TabsPanelsEvents {
}
export interface TabsPanelsMethods {
}
export interface TabsPanelsProperties {
    /**
    * Panels are not always used inside tabs.They may be used outside, in which you can use this property to connect them to their corresponding tabs.
    */
    connector?: string;
}
export interface TabsPanelsJSX extends TabsPanelsEvents, TabsPanelsProperties {
}
declare global {
    interface HTMLPlusTabsPanelsElement extends HTMLElement, TabsPanelsMethods, TabsPanelsProperties {
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
            "plus-tabs-panels": TabsPanelsEvents & TabsPanelsAttributes & {
                [key: string]: any;
            };
        }
    }
}
export type TabsPanelsElement = globalThis.HTMLPlusTabsPanelsElement;
