import { PlusCore } from "../../core";
import { FloatingOffset, FloatingPlacement } from './floating.types';
/**
 * @stable
 * @slot default - The default slot.
 */
export declare class Floating extends PlusCore {
    static TAG: string;
    /**
     * Positions the element relative to the viewport and prevents it from moving even when scrolled.
     * Otherwise, the element is positioned relative to its nearest ancestor.
     */
    fixed?: boolean;
    /**
     * Specifies the deviation from the center.
     */
    offset?: FloatingOffset;
    /**
     * Specifies the display location.
     */
    placement?: FloatingPlacement;
    get style(): string;
    render(): import("@htmlplus/element/client/utils/index.js").Hole;
}
export interface FloatingAttributes {
    /**
    * Positions the element relative to the viewport and prevents it from moving even when scrolled.
    * Otherwise, the element is positioned relative to its nearest ancestor.
    */
    "fixed"?: boolean;
    /**
    * Specifies the deviation from the center.
    */
    "offset"?: FloatingOffset;
    /**
    * Specifies the display location.
    */
    "placement"?: FloatingPlacement;
}
export interface FloatingEvents {
}
export interface FloatingMethods {
}
export interface FloatingProperties {
    /**
    * Positions the element relative to the viewport and prevents it from moving even when scrolled.
    * Otherwise, the element is positioned relative to its nearest ancestor.
    */
    fixed?: boolean;
    /**
    * Specifies the deviation from the center.
    */
    offset?: FloatingOffset;
    /**
    * Specifies the display location.
    */
    placement?: FloatingPlacement;
}
export interface FloatingJSX extends FloatingEvents, FloatingProperties {
}
declare global {
    interface HTMLPlusFloatingElement extends HTMLElement, FloatingMethods, FloatingProperties {
    }
    var HTMLPlusFloatingElement: {
        prototype: HTMLPlusFloatingElement;
        new (): HTMLPlusFloatingElement;
    };
    interface HTMLElementTagNameMap {
        "plus-floating": HTMLPlusFloatingElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-floating": FloatingEvents & FloatingAttributes & {
                [key: string]: any;
            };
        }
    }
}
export type FloatingElement = globalThis.HTMLPlusFloatingElement;
