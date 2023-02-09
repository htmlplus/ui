import uhtml from "@htmlplus/element/client/vendors/uhtml.js";
/**
 * TODO: This component contains the contents of each tab and when the tab is activated the panel is displayed.
 * @slot default - The default slot.
 */
export declare class TabsPanel {
    static TAG: string;
    static STYLES: string;
    /**
     * Provides your own value.
     */
    value?: any;
    tunnel?: any;
    get attributes(): {
        active: boolean;
    };
    render(): uhtml.Hole;
}
export interface TabsPanelJSX {
    /**
     * Provides your own value.
     */
    value?: any;
}
declare global {
    interface HTMLPlusTabsPanelElement extends HTMLElement {
        /**
         * Provides your own value.
         */
        value?: any;
    }
    var HTMLPlusTabsPanelElement: {
        prototype: HTMLPlusTabsPanelElement;
        new (): HTMLPlusTabsPanelElement;
    };
    interface HTMLElementTagNameMap {
        "plus-tabs-panel": HTMLPlusTabsPanelElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-tabs-panel": TabsPanelJSX & {
                [key: string]: any;
            };
        }
    }
}