import uhtml from "@htmlplus/element/client/vendors/uhtml.js";
/**
 * @stable
 * @slot default - The default slot.
 */
export declare class Center {
    static TAG: string;
    static STYLES: string;
    /**
     * Converts the `display` CSS property from `flex` to `inline-flex`.
     */
    inline?: boolean;
    render(): uhtml.Hole;
}
export interface CenterJSX {
    /**
     * Converts the `display` CSS property from `flex` to `inline-flex`.
     */
    inline?: boolean;
}
declare global {
    interface HTMLPlusCenterElement extends HTMLElement {
        /**
         * Converts the `display` CSS property from `flex` to `inline-flex`.
         */
        inline?: boolean;
    }
    var HTMLPlusCenterElement: {
        prototype: HTMLPlusCenterElement;
        new (): HTMLPlusCenterElement;
    };
    interface HTMLElementTagNameMap {
        "plus-center": HTMLPlusCenterElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-center": CenterJSX & {
                [key: string]: any;
            };
        }
    }
}
