import uhtml from "@htmlplus/element/client/vendors/uhtml.js";
/**
 * @slot default - The default slot.
 */
export declare class AvatarGroup {
    static TAG: string;
    static STYLES: string;
    /**
     * TODO
     */
    hoverable?: boolean;
    /**
     * TODO
     */
    stacked?: boolean;
    render(): uhtml.Hole;
}
export interface AvatarGroupJSX {
    /**
     * TODO
     */
    hoverable?: boolean;
    /**
     * TODO
     */
    stacked?: boolean;
}
declare global {
    interface HTMLPlusAvatarGroupElement extends HTMLElement {
        /**
         * TODO
         */
        hoverable?: boolean;
        /**
         * TODO
         */
        stacked?: boolean;
    }
    var HTMLPlusAvatarGroupElement: {
        prototype: HTMLPlusAvatarGroupElement;
        new (): HTMLPlusAvatarGroupElement;
    };
    interface HTMLElementTagNameMap {
        "plus-avatar-group": HTMLPlusAvatarGroupElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-avatar-group": AvatarGroupJSX & {
                [key: string]: any;
            };
        }
    }
}
export type AvatarGroupElement = globalThis.HTMLPlusAvatarGroupElement;
