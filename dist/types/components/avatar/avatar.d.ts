import uhtml from "@htmlplus/element/client/vendors/uhtml.js";
import { AvatarShape, AvatarSize } from './avatar.types';
export declare class Avatar {
    static TAG: string;
    static STYLES: string;
    /**
     * TODO
     */
    shape?: AvatarShape;
    /**
     * TODO
     */
    size?: AvatarSize;
    render(): uhtml.Hole;
}
export interface AvatarJSX {
    /**
     * TODO
     */
    shape?: AvatarShape;
    /**
     * TODO
     */
    size?: AvatarSize;
}
declare global {
    interface HTMLPlusAvatarElement extends HTMLElement {
        /**
         * TODO
         */
        shape?: AvatarShape;
        /**
         * TODO
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
