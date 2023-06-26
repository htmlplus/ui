import { PlusBase } from '@app/core';
/**
 * TODO: This component contains the contents of each tab and when the tab is activated the panel is displayed.
 * @slot default - The default slot.
 */
export declare class TabsPanel extends PlusBase {
    static TAG: string;
    static STYLES: string;
    /**
     * Provides your own value.
     */
    value?: any;
    tunnel?: any;
    render(): import("@htmlplus/element/client/utils/uhtml").Hole;
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
export type TabsPanelElement = globalThis.HTMLPlusTabsPanelElement;
