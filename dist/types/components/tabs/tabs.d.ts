import uhtml from "@htmlplus/element/client/vendors/uhtml.js";
import { EventEmitter } from '@htmlplus/element';
/**
 * @development
 * @slot default - The default slot.
 */
export declare class Tabs {
    static TAG: string;
    static STYLES: string;
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
    /**
     * Internal Methods
     */
    broadcast(value: any): void;
    change(value: any): void;
    initialize(): void;
    /**
     * Watchers
     */
    watcher(next: any, prev: any, name: any): void;
    /**
     * Lifecycles
     */
    connectedCallback(): void;
    render(): uhtml.Hole;
}
export interface TabsJSX {
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
    onPlusChange?: (event: CustomEvent<any>) => void;
}
declare global {
    interface HTMLPlusTabsElement extends HTMLElement {
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
    var HTMLPlusTabsElement: {
        prototype: HTMLPlusTabsElement;
        new (): HTMLPlusTabsElement;
    };
    interface HTMLElementTagNameMap {
        "plus-tabs": HTMLPlusTabsElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-tabs": TabsJSX & {
                [key: string]: any;
            };
        }
    }
}
export type TabsElement = globalThis.HTMLPlusTabsElement;
