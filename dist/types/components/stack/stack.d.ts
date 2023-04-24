import uhtml from "@htmlplus/element/client/vendors/uhtml.js";
/**
 * @slot default - The default slot.
 */
export declare class Stack {
    static TAG: string;
    /**
     * TODO.
     */
    gap?: string;
    /**
     * TODO.
     */
    vertical?: boolean;
    get attributes(): {
        style: string;
    };
    get style(): string;
    render(): uhtml.Hole;
}
export interface StackJSX {
    /**
     * TODO.
     */
    gap?: string;
    /**
     * TODO.
     */
    vertical?: boolean;
}
declare global {
    interface HTMLPlusStackElement extends HTMLElement {
        /**
         * TODO.
         */
        gap?: string;
        /**
         * TODO.
         */
        vertical?: boolean;
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
            "plus-stack": StackJSX & {
                [key: string]: any;
            };
        }
    }
}
export type StackElement = globalThis.HTMLPlusStackElement;
