import { PlusBase } from "../../core";
import { IconColor, IconFlip, IconResolver, IconRotate, IconSize } from './icon.types';
/**
 * @part svg - The svg element.
 */
export declare class Icon extends PlusBase {
    static TAG: string;
    static STYLES: string;
    /**
     * Specifies the color.
     */
    color?: IconColor;
    /**
     * Flips in `horizontal`, `vertical` or `both` directions.
     */
    flip?: IconFlip;
    /**
     * Specifies an alternate description to use for assistive devices.
     */
    label?: string;
    /**
     * Specifies the name.
     */
    name?: string;
    /**
     * An asynchronous function to load SVG files.
     */
    resolver?: IconResolver;
    /**
     * Specifies the rotation.
     */
    rotate?: IconRotate;
    /**
     * Specifies the size.
     */
    size?: IconSize;
    svg?: SVGElement;
    get cache(): any;
    set cache(cache: any);
    get style(): string;
    watcher(): void;
    sync(input?: SVGElement | string): boolean;
    update(): void;
    render(): import("@htmlplus/element/client/utils/uhtml").Hole;
}
export interface IconJSX {
    /**
     * Specifies the color.
     */
    color?: IconColor;
    /**
     * Flips in `horizontal`, `vertical` or `both` directions.
     */
    flip?: IconFlip;
    /**
     * Specifies an alternate description to use for assistive devices.
     */
    label?: string;
    /**
     * Specifies the name.
     */
    name?: string;
    /**
     * An asynchronous function to load SVG files.
     */
    resolver?: IconResolver;
    /**
     * Specifies the rotation.
     */
    rotate?: IconRotate;
    /**
     * Specifies the size.
     */
    size?: IconSize;
}
declare global {
    interface HTMLPlusIconElement extends HTMLElement {
        /**
         * Specifies the color.
         */
        color?: IconColor;
        /**
         * Flips in `horizontal`, `vertical` or `both` directions.
         */
        flip?: IconFlip;
        /**
         * Specifies an alternate description to use for assistive devices.
         */
        label?: string;
        /**
         * Specifies the name.
         */
        name?: string;
        /**
         * An asynchronous function to load SVG files.
         */
        resolver?: IconResolver;
        /**
         * Specifies the rotation.
         */
        rotate?: IconRotate;
        /**
         * Specifies the size.
         */
        size?: IconSize;
    }
    var HTMLPlusIconElement: {
        prototype: HTMLPlusIconElement;
        new (): HTMLPlusIconElement;
    };
    interface HTMLElementTagNameMap {
        "plus-icon": HTMLPlusIconElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-icon": IconJSX & {
                [key: string]: any;
            };
        }
    }
}
export type IconElement = globalThis.HTMLPlusIconElement;
