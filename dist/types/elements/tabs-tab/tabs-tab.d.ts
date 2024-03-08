import { PlusCore } from "../../core";
/**
 * TODO: Tabs make it easy to switch between different views.
 *
 * @slot default - The default slot.
 */
export declare class TabsTab extends PlusCore {
    static tag: string;
    static style: string;
    /**
     * A Tab can be disabled by setting disabled property.
     */
    disabled?: boolean;
    /**
     * Provides your own value.
     */
    value?: any;
    tunnel?: any;
    change?: Function;
    /**
     * Events handler
     */
    onClick(): void;
    render(): import("@htmlplus/element/client/utils/uhtml").Hole;
}
export interface TabsTabAttributes {
    /**
    * A Tab can be disabled by setting disabled property.
    */
    "disabled"?: boolean;
    /**
    * Provides your own value.
    */
    "value"?: any;
}
export interface TabsTabEvents {
}
export interface TabsTabMethods {
}
export interface TabsTabProperties {
    /**
    * A Tab can be disabled by setting disabled property.
    */
    disabled?: boolean;
    /**
    * Provides your own value.
    */
    value?: any;
}
export interface TabsTabJSX extends TabsTabEvents, TabsTabProperties {
}
declare global {
    interface HTMLPlusTabsTabElement extends HTMLElement, TabsTabMethods, TabsTabProperties {
    }
    var HTMLPlusTabsTabElement: {
        prototype: HTMLPlusTabsTabElement;
        new (): HTMLPlusTabsTabElement;
    };
    interface HTMLElementTagNameMap {
        "plus-tabs-tab": HTMLPlusTabsTabElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-tabs-tab": TabsTabEvents & TabsTabAttributes & {
                [key: string]: any;
            };
        }
    }
}
export type TabsTabElement = globalThis.HTMLPlusTabsTabElement;
