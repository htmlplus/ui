import { PlusCore } from "../../core";
import { StackAlignItems, StackJustifyContent } from './stack.types';
/**
 * @slot default - The default slot.
 */
export declare class Stack extends PlusCore {
    static tag: string;
    /**
     * TODO.
     */
    alignItems?: StackAlignItems;
    /**
     * TODO.
     */
    gap?: string;
    /**
     * TODO.
     */
    justifyContent?: StackJustifyContent;
    /**
     * TODO.
     */
    reverse?: boolean;
    /**
     * TODO.
     */
    vertical?: boolean;
    get style(): any;
    render(): import("@htmlplus/element/client/utils/uhtml").Hole;
}
export interface StackAttributes {
    /**
    * TODO.
    */
    "align-items"?: StackAlignItems;
    /**
    * TODO.
    */
    "gap"?: string;
    /**
    * TODO.
    */
    "justify-content"?: StackJustifyContent;
    /**
    * TODO.
    */
    "reverse"?: boolean;
    /**
    * TODO.
    */
    "vertical"?: boolean;
}
export interface StackEvents {
}
export interface StackMethods {
}
export interface StackProperties {
    /**
    * TODO.
    */
    alignItems?: StackAlignItems;
    /**
    * TODO.
    */
    gap?: string;
    /**
    * TODO.
    */
    justifyContent?: StackJustifyContent;
    /**
    * TODO.
    */
    reverse?: boolean;
    /**
    * TODO.
    */
    vertical?: boolean;
}
export interface StackJSX extends StackEvents, StackProperties {
}
declare global {
    interface HTMLPlusStackElement extends HTMLElement, StackMethods, StackProperties {
    }
    var HTMLPlusStackElement: {
        prototype: HTMLPlusStackElement;
        new (): HTMLPlusStackElement;
    };
    interface HTMLElementTagNameMap {
        "plus-stack": HTMLPlusStackElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-stack": StackEvents & StackAttributes & {
                [key: string]: any;
            };
        }
    }
}
export type StackElement = globalThis.HTMLPlusStackElement;
