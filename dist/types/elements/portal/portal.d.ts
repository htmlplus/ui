import { PlusCore } from "../../core";
import { Portal as PortalCore, PortalStrategy, PortalTarget } from "../../services";
/**
 * @experimental
 * @slot default - The default slot.
 */
export declare class Portal extends PlusCore {
    static TAG: string;
    static STYLES: string;
    /**
     * Disables the portal.
     */
    disabled?: boolean;
    /**
     * Specifies the position of the portal content relative to the target.
     */
    strategy?: PortalStrategy;
    /**
     * Specifies the position of the portal content, It Can include css selectors,
     * node or any html elements.
     */
    target?: PortalTarget;
    instance?: PortalCore;
    get $nodes(): Element[];
    watcher(next: any, prev: any, name: any): void;
    initialize(): void;
    terminate(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
}
export interface PortalAttributes {
    /**
    * Disables the portal.
    */
    "disabled"?: boolean;
    /**
    * Specifies the position of the portal content relative to the target.
    */
    "strategy"?: PortalStrategy;
    /**
    * Specifies the position of the portal content, It Can include css selectors,
    * node or any html elements.
    */
    "target"?: PortalTarget;
}
export interface PortalEvents {
}
export interface PortalMethods {
}
export interface PortalProperties {
    /**
    * Disables the portal.
    */
    disabled?: boolean;
    /**
    * Specifies the position of the portal content relative to the target.
    */
    strategy?: PortalStrategy;
    /**
    * Specifies the position of the portal content, It Can include css selectors,
    * node or any html elements.
    */
    target?: PortalTarget;
}
export interface PortalJSX extends PortalEvents, PortalProperties {
}
declare global {
    interface HTMLPlusPortalElement extends HTMLElement, PortalMethods, PortalProperties {
    }
    var HTMLPlusPortalElement: {
        prototype: HTMLPlusPortalElement;
        new (): HTMLPlusPortalElement;
    };
    interface HTMLElementTagNameMap {
        "plus-portal": HTMLPlusPortalElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-portal": PortalEvents & PortalAttributes & {
                [key: string]: any;
            };
        }
    }
}
export type PortalElement = globalThis.HTMLPlusPortalElement;
