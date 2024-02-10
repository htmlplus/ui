import { PlusCore } from "../../core";
import { DividerPlacement, DividerType, DividerVariant, DividerWidth } from './divider.types';
export declare class Divider extends PlusCore {
    static TAG: string;
    static STYLES: string;
    /**
     * Specifies the location of the default slot.
     */
    placement?: DividerPlacement;
    /**
     * Specifies the width of the border.
     */
    width?: DividerWidth;
    /**
     * Specifies the style of the border.
     */
    type?: DividerType;
    /**
     * Specifies the amount of indentation.
     */
    variant?: DividerVariant;
    /**
     *  Draws the divider in a vertical orientation.
     */
    vertical?: boolean;
    render(): import("@htmlplus/element/client/utils/index.js").Hole;
}
export interface DividerAttributes {
    /**
    * Specifies the location of the default slot.
    */
    "placement"?: DividerPlacement;
    /**
    * Specifies the width of the border.
    */
    "width"?: DividerWidth;
    /**
    * Specifies the style of the border.
    */
    "type"?: DividerType;
    /**
    * Specifies the amount of indentation.
    */
    "variant"?: DividerVariant;
    /**
    *  Draws the divider in a vertical orientation.
    */
    "vertical"?: boolean;
}
export interface DividerEvents {
}
export interface DividerMethods {
}
export interface DividerProperties {
    /**
    * Specifies the location of the default slot.
    */
    placement?: DividerPlacement;
    /**
    * Specifies the width of the border.
    */
    width?: DividerWidth;
    /**
    * Specifies the style of the border.
    */
    type?: DividerType;
    /**
    * Specifies the amount of indentation.
    */
    variant?: DividerVariant;
    /**
    *  Draws the divider in a vertical orientation.
    */
    vertical?: boolean;
}
export interface DividerJSX extends DividerEvents, DividerProperties {
}
declare global {
    interface HTMLPlusDividerElement extends HTMLElement, DividerMethods, DividerProperties {
    }
    var HTMLPlusDividerElement: {
        prototype: HTMLPlusDividerElement;
        new (): HTMLPlusDividerElement;
    };
    interface HTMLElementTagNameMap {
        "plus-divider": HTMLPlusDividerElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-divider": DividerEvents & DividerAttributes & {
                [key: string]: any;
            };
        }
    }
}
export type DividerElement = globalThis.HTMLPlusDividerElement;
