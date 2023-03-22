import uhtml from "@htmlplus/element/client/vendors/uhtml.js";
/**
 * @development
 * @slot default - The default slot.
 */
export declare class Icon {
    static TAG: string;
    static STYLES: string;
    /**
     * TODO
     * size (cm,mm,in,px,pt,pc,em,ex,ch,rem,vw,vh,vmin,vmax,%)
     * inverse
     * spin
     * inactive/disabled
     */
    /**
     * Adjusts the color of the icons.(All main web color formats are accepted)
     */
    color?: string;
    /**
     * Flips the icon.
     */
    flip?: 'both' | 'horizontal' | 'vertical';
    /**
     * Specifies the name of the icon.
     */
    name?: string;
    /**
     * Rotates the icon.
     */
    rotate?: 90 | 180 | 270;
    /**
     * Specifies the size of the icon.
     * `xs`, `sm`, `lg` and `1x` to `10x`.
     */
    size?: string;
    get attributes(): {
        style: string;
    };
    render(): uhtml.Hole;
}
export interface IconJSX {
    /**
     * TODO
     * size (cm,mm,in,px,pt,pc,em,ex,ch,rem,vw,vh,vmin,vmax,%)
     * inverse
     * spin
     * inactive/disabled
     */
    /**
     * Adjusts the color of the icons.(All main web color formats are accepted)
     */
    color?: string;
    /**
     * Flips the icon.
     */
    flip?: 'both' | 'horizontal' | 'vertical';
    /**
     * Specifies the name of the icon.
     */
    name?: string;
    /**
     * Rotates the icon.
     */
    rotate?: 90 | 180 | 270;
    /**
     * Specifies the size of the icon.
     * `xs`, `sm`, `lg` and `1x` to `10x`.
     */
    size?: string;
}
declare global {
    interface HTMLPlusIconElement extends HTMLElement {
        /**
         * TODO
         * size (cm,mm,in,px,pt,pc,em,ex,ch,rem,vw,vh,vmin,vmax,%)
         * inverse
         * spin
         * inactive/disabled
         */
        /**
         * Adjusts the color of the icons.(All main web color formats are accepted)
         */
        color?: string;
        /**
         * Flips the icon.
         */
        flip?: 'both' | 'horizontal' | 'vertical';
        /**
         * Specifies the name of the icon.
         */
        name?: string;
        /**
         * Rotates the icon.
         */
        rotate?: 90 | 180 | 270;
        /**
         * Specifies the size of the icon.
         * `xs`, `sm`, `lg` and `1x` to `10x`.
         */
        size?: string;
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
