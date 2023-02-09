import uhtml from "@htmlplus/element/client/vendors/uhtml.js";
/**
 * TODO: Tabs make it easy to switch between different views.
 * @slot default - The default slot.
 */
export declare class TabsTab {
    static TAG: string;
    static STYLES: string;
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
    get attributes(): {
        active: boolean;
        onClick: () => void;
    };
    /**
     * Events handler
     */
    onClick(): void;
    render(): uhtml.Hole;
}
export interface TabsTabJSX {
    /**
     * A Tab can be disabled by setting disabled property.
     */
    disabled?: boolean;
    /**
     * Provides your own value.
     */
    value?: any;
}
declare global {
    interface HTMLPlusTabsTabElement extends HTMLElement {
        /**
         * A Tab can be disabled by setting disabled property.
         */
        disabled?: boolean;
        /**
         * Provides your own value.
         */
        value?: any;
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
            "plus-tabs-tab": TabsTabJSX & {
                [key: string]: any;
            };
        }
    }
}