import { FloatingOffset, FloatingPlacement } from './floating.types';
/**
 * @stable
 * @slot default - The default slot.
 */
export declare class Floating {
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
    render(): import("@htmlplus/element/client/utils/uhtml").Hole;
}
export interface FloatingJSX {
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
declare global {
    interface HTMLPlusFloatingElement extends HTMLElement {
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
    var HTMLPlusFloatingElement: {
        prototype: HTMLPlusFloatingElement;
        new (): HTMLPlusFloatingElement;
    };
    interface HTMLElementTagNameMap {
        "plus-floating": HTMLPlusFloatingElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-floating": FloatingJSX & {
                [key: string]: any;
            };
        }
    }
}
export type FloatingElement = globalThis.HTMLPlusFloatingElement;
