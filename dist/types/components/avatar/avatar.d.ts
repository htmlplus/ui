import { AvatarShape, AvatarSize } from './avatar.types';
/**
 * @stable
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
    get style(): string;
    render(): import("@htmlplus/element/client/utils/uhtml").Hole;
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
