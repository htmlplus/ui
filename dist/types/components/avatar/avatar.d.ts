import uhtml from "@htmlplus/element/client/vendors/uhtml.js";
import { AvatarShape, AvatarSize } from './avatar.types';
/**
 * @slot default - The default slot.
 */
export declare class Avatar {
    static TAG: string;
    static STYLES: string;
    /**
     * Specifies the shape of the component.
     */
    shape?: AvatarShape;
    /**
     * Specifies the size of the component.
     */
    size?: AvatarSize;
    get attributes(): {
        style: string;
    };
    render(): uhtml.Hole;
}
export interface AvatarJSX {
    /**
     * Specifies the shape of the component.
     */
    shape?: AvatarShape;
    /**
     * Specifies the size of the component.
     */
    size?: AvatarSize;
}
declare global {
    interface HTMLPlusAvatarElement extends HTMLElement {
        /**
         * Specifies the shape of the component.
         */
        shape?: AvatarShape;
        /**
         * Specifies the size of the component.
         */
        size?: AvatarSize;
    }
    var HTMLPlusAvatarElement: {
        prototype: HTMLPlusAvatarElement;
        new (): HTMLPlusAvatarElement;
    };
    interface HTMLElementTagNameMap {
        "plus-avatar": HTMLPlusAvatarElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-avatar": AvatarJSX & {
                [key: string]: any;
            };
        }
    }
}
export type AvatarElement = globalThis.HTMLPlusAvatarElement;
