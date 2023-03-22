import { Portal as PortalCore, PortalStrategy, PortalTarget } from '@app/services';
/**
 * @experimental
 * @slot default - The default slot.
 */
export declare class Portal {
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
    /**
     * Internal Methods
     */
    initialize(): void;
    terminate(): void;
    /**
     * Watchers
     */
    watcher(next: any, prev: any, name: any): void;
    /**
     * Lifecycles
     */
    connectedCallback(): void;
    disconnectedCallback(): void;
}
export interface PortalJSX {
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
declare global {
    interface HTMLPlusPortalElement extends HTMLElement {
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
    var HTMLPlusPortalElement: {
        prototype: HTMLPlusPortalElement;
        new (): HTMLPlusPortalElement;
    };
    interface HTMLElementTagNameMap {
        "plus-portal": HTMLPlusPortalElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-portal": PortalJSX & {
                [key: string]: any;
            };
        }
    }
}
export type PortalElement = globalThis.HTMLPlusPortalElement;
