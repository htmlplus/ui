import { AvatarFlip, AvatarName, AvatarRotate, AvatarSize } from './icon2.types.js';
/**
 * @part svg - The svg element.
 */
export declare class Icon2 {
    static TAG: string;
    static STYLES: string;
    /**
     * Adjusts the color of the icons.(All main web color formats are accepted)
     */
    color?: string;
    /**
     * Flips the icon.
     */
    flip?: AvatarFlip;
    /**
     * Specifies the name of the icon.
     */
    name?: AvatarName;
    /**
     * Rotates the icon.
     */
    rotate?: AvatarRotate;
    /**
     * Specifies the size of the icon.
     */
    size?: AvatarSize;
    get attributes(): {
        style: string;
    };
    updatedCallback(): void;
}
export interface Icon2JSX {
    /**
     * Adjusts the color of the icons.(All main web color formats are accepted)
     */
    color?: string;
    /**
     * Flips the icon.
     */
    flip?: AvatarFlip;
    /**
     * Specifies the name of the icon.
     */
    name?: AvatarName;
    /**
     * Rotates the icon.
     */
    rotate?: AvatarRotate;
    /**
     * Specifies the size of the icon.
     */
    size?: AvatarSize;
}
declare global {
    interface HTMLPlusIcon2Element extends HTMLElement {
        /**
         * Adjusts the color of the icons.(All main web color formats are accepted)
         */
        color?: string;
        /**
         * Flips the icon.
         */
        flip?: AvatarFlip;
        /**
         * Specifies the name of the icon.
         */
        name?: AvatarName;
        /**
         * Rotates the icon.
         */
        rotate?: AvatarRotate;
        /**
         * Specifies the size of the icon.
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
