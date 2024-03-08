import { EventEmitter } from '@htmlplus/element';
import { PlusCore } from "../../core";
/**
 * @development
 *
 * @slot default - The default slot.
 */
export declare class Tabs extends PlusCore {
    static tag: string;
    static style: string;
    /**
     * Provides your own value.
     */
    value?: any;
    /**
     * You can use vertical property for vertical mode.
     */
    vertical?: boolean;
    /**
     * Panels are not always used inside tabs.They may be used outside, in which you can use
     * this property to connect them to their corresponding tabs.
     */
    connector?: string;
    /**
     * Fired when the value changes.
     */
    plusChange: EventEmitter<any>;
    tunnel?: any;
    watcher(next: any, prev: any, name: any): void;
    broadcast(value: any): void;
    change(value: any): void;
    initialize(): void;
    connectedCallback(): void;
    render(): import("@htmlplus/element/client/utils/uhtml").Hole;
}
export interface TabsAttributes {
    /**
    * Provides your own value.
    */
    "value"?: any;
    /**
    * You can use vertical property for vertical mode.
    */
    "vertical"?: boolean;
    /**
    * Panels are not always used inside tabs.They may be used outside, in which you can use
    * this property to connect them to their corresponding tabs.
    */
    "connector"?: string;
}
export interface TabsEvents {
    /**
    * Fired when the value changes.
    */
    onPlusChange?: (event: CustomEvent<any>) => void;
}
export interface TabsMethods {
}
export interface TabsProperties {
    /**
    * Provides your own value.
    */
    value?: any;
    /**
    * You can use vertical property for vertical mode.
    */
    vertical?: boolean;
    /**
    * Panels are not always used inside tabs.They may be used outside, in which you can use
    * this property to connect them to their corresponding tabs.
    */
    connector?: string;
}
export interface TabsJSX extends TabsEvents, TabsProperties {
}
declare global {
    interface HTMLPlusTabsElement extends HTMLElement, TabsMethods, TabsProperties {
    }
    var HTMLPlusTabsElement: {
        prototype: HTMLPlusTabsElement;
        new (): HTMLPlusTabsElement;
    };
    interface HTMLElementTagNameMap {
        "plus-tabs": HTMLPlusTabsElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-tabs": TabsEvents & TabsAttributes & {
                [key: string]: any;
            };
        }
    }
}
export type TabsElement = globalThis.HTMLPlusTabsElement;
