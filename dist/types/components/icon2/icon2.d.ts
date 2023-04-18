import { AvatarFlip, AvatarName, AvatarRotate, AvatarSize } from './icon2.types.js';
/**
 * @part svg - The svg element.
 */
export declare class Icon2 {
    static TAG: string;
    static STYLES: string;
    /**
     * TODO
     */
    color?: string;
    /**
     * TODO
     */
    flip?: AvatarFlip;
    /**
     * TODO
     */
    name?: AvatarName;
    /**
     * TODO
     */
    rotate?: AvatarRotate;
    /**
     * TODO
     */
    size?: AvatarSize;
    get attributes(): {
        style: string;
    };
    updatedCallback(): void;
}
export interface Icon2JSX {
    /**
     * TODO
     */
    color?: string;
    /**
     * TODO
     */
    flip?: AvatarFlip;
    /**
     * TODO
     */
    name?: AvatarName;
    /**
     * TODO
     */
    rotate?: AvatarRotate;
    /**
     * TODO
     */
    size?: AvatarSize;
}
declare global {
    interface HTMLPlusIcon2Element extends HTMLElement {
        /**
         * TODO
         */
        color?: string;
        /**
         * TODO
         */
        flip?: AvatarFlip;
        /**
         * TODO
         */
        name?: AvatarName;
        /**
         * TODO
         */
        rotate?: AvatarRotate;
        /**
         * TODO
         */
        size?: AvatarSize;
    }
    var HTMLPlusIcon2Element: {
        prototype: HTMLPlusIcon2Element;
        new (): HTMLPlusIcon2Element;
    };
    interface HTMLElementTagNameMap {
        "plus-icon2": HTMLPlusIcon2Element;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-icon2": Icon2JSX & {
                [key: string]: any;
            };
        }
    }
}
export type Icon2Element = globalThis.HTMLPlusIcon2Element;
