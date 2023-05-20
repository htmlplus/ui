/**
 * @stable
 * @slot default - The default slot.
 */
export declare class AvatarGroup {
    static TAG: string;
    static STYLES: string;
    /**
     * Specifies whether to prominent the avatar when the mouse is entered or not.
     */
    hoverable?: boolean;
    /**
     * Specifies whether avatars should be displayed compressed or not.
     */
    stacked?: boolean;
    render(): import("@htmlplus/element/client/utils/index.js").Hole;
}
export interface AvatarGroupJSX {
    /**
     * Specifies whether to prominent the avatar when the mouse is entered or not.
     */
    hoverable?: boolean;
    /**
     * Specifies whether avatars should be displayed compressed or not.
     */
    stacked?: boolean;
}
declare global {
    interface HTMLPlusAvatarGroupElement extends HTMLElement {
        /**
         * Specifies whether to prominent the avatar when the mouse is entered or not.
         */
        hoverable?: boolean;
        /**
         * Specifies whether avatars should be displayed compressed or not.
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
