import { PlusCore } from "../../core";
/**
 * @slot default - The default slot.
 * @TODO open    - Specifies the content of toggler when it's opened.
 * @TODO close   - Specifies the content of toggler when it's closed.
 */
export declare class DrawerToggler extends PlusCore {
    static TAG: string;
    static STYLES: string;
    /**
     * This property helps you to attach which drawer this toggler controls.
     * It doesn't matter where the drawer toggler is.
     * You can put the drawer's toggler inside or outside of the drawer.
     * Read more about connectors [here](/connector).
     */
    connector?: string;
    toggle?: Function;
    tunnel?: boolean;
    get text(): "Close" | "Open";
    /**
     * Watchers
     */
    watcher(): void;
    /**
     * Events handler
     */
    onClick(): void;
    render(): import("@htmlplus/element/client/utils/index.js").Hole;
}
export interface DrawerTogglerAttributes {
    /**
    * This property helps you to attach which drawer this toggler controls.
    * It doesn't matter where the drawer toggler is.
    * You can put the drawer's toggler inside or outside of the drawer.
    * Read more about connectors [here](/connector).
    */
    "connector"?: string;
}
export interface DrawerTogglerEvents {
}
export interface DrawerTogglerMethods {
}
export interface DrawerTogglerProperties {
    /**
    * This property helps you to attach which drawer this toggler controls.
    * It doesn't matter where the drawer toggler is.
    * You can put the drawer's toggler inside or outside of the drawer.
    * Read more about connectors [here](/connector).
    */
    connector?: string;
}
export interface DrawerTogglerJSX extends DrawerTogglerEvents, DrawerTogglerProperties {
}
declare global {
    interface HTMLPlusDrawerTogglerElement extends HTMLElement, DrawerTogglerMethods, DrawerTogglerProperties {
    }
    var HTMLPlusDrawerTogglerElement: {
        prototype: HTMLPlusDrawerTogglerElement;
        new (): HTMLPlusDrawerTogglerElement;
    };
    interface HTMLElementTagNameMap {
        "plus-drawer-toggler": HTMLPlusDrawerTogglerElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-drawer-toggler": DrawerTogglerEvents & DrawerTogglerAttributes & {
                [key: string]: any;
            };
        }
    }
}
export type DrawerTogglerElement = globalThis.HTMLPlusDrawerTogglerElement;
