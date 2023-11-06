import { PlusCore } from "../../core";
/**
 * @stable
 * @slot default - The default slot.
 */
export declare class Center extends PlusCore {
    static TAG: string;
    static STYLES: string;
    /**
     * Converts the `display` CSS property from `flex` to `inline-flex`.
     */
    inline?: boolean;
    render(): import("@htmlplus/element/client/utils/uhtml").Hole;
}
export interface CenterJSX {
    /**
    * Converts the `display` CSS property from `flex` to `inline-flex`.
    */
    "inline"?: boolean;
}
export interface CenterAttributeJSX {
    /**
    * Converts the `display` CSS property from `flex` to `inline-flex`.
    */
    "inline"?: boolean;
}
declare global {
    interface HTMLPlusCenterElement extends HTMLElement {
        /**
        * Converts the `display` CSS property from `flex` to `inline-flex`.
        */
        "inline"?: boolean;
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
            "plus-center": CenterAttributeJSX & {
                [key: string]: any;
            };
        }
    }
}
export type CenterElement = globalThis.HTMLPlusCenterElement;
