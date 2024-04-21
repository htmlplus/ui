import { PlusCore } from "../../core";
import { AvatarShape, AvatarSize } from './avatar.types';
/**
 * @stable
 *
 * @slot default - The default slot.
 */
export declare class Avatar extends PlusCore {
    static tag: string;
    static style: string;
    /**
     * Specifies the color.
     */
    color?: string;
    /**
     * Specifies the shape of the element.
     */
    shape?: AvatarShape;
    /**
     * Specifies the size of the element.
     */
    size?: AvatarSize;
    get placements(): {
        bottom: {
            [x: string]: string | number;
            bottom: number;
            transform: string;
        };
        center: {
            [x: string]: string;
            top: string;
            transform: string;
        };
        end: {
            [x: string]: string | number;
            top: string;
            transform: string;
        };
        'end-bottom': {
            [x: string]: string;
            bottom: string;
            transform: string;
        };
        'end-top': {
            [x: string]: string;
            top: string;
            transform: string;
        };
        left: {
            top: string;
            left: number;
            transform: string;
        };
        'left-bottom': {
            bottom: string;
            left: string;
            transform: string;
        };
        'left-top': {
            top: string;
            left: string;
            transform: string;
        };
        right: {
            top: string;
            right: number;
            transform: string;
        };
        'right-bottom': {
            bottom: string;
            right: string;
            transform: string;
        };
        'right-top': {
            top: string;
            right: string;
            transform: string;
        };
        start: {
            [x: string]: string | number;
            top: string;
            transform: string;
        };
        'start-bottom': {
            [x: string]: string;
            bottom: string;
            transform: string;
        };
        'start-top': {
            [x: string]: string;
            top: string;
            transform: string;
        };
        top: {
            [x: string]: string | number;
            top: number;
            transform: string;
        };
    };
    get style(): {
        '--plus-avatar-color': string;
        '--plus-avatar-size': string;
    };
    render(): import("@htmlplus/element/client/utils/uhtml").Hole;
}
export interface AvatarAttributes {
    /**
    * Specifies the color.
    */
    "color"?: string;
    /**
    * Specifies the shape of the element.
    */
    "shape"?: AvatarShape;
    /**
    * Specifies the size of the element.
    */
    "size"?: AvatarSize;
}
export interface AvatarEvents {
}
export interface AvatarMethods {
}
export interface AvatarProperties {
    /**
    * Specifies the color.
    */
    color?: string;
    /**
    * Specifies the shape of the element.
    */
    shape?: AvatarShape;
    /**
    * Specifies the size of the element.
    */
    size?: AvatarSize;
}
export interface AvatarJSX extends AvatarEvents, AvatarProperties {
}
declare global {
    interface HTMLPlusAvatarElement extends HTMLElement, AvatarMethods, AvatarProperties {
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
            "plus-avatar": AvatarEvents & AvatarAttributes & {
                [key: string]: any;
            };
        }
    }
}
export type AvatarElement = globalThis.HTMLPlusAvatarElement;
