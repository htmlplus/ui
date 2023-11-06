import { PlusCore } from "../../core";
/**
 * @slot default - The default slot.
 */
export declare class DialogBody extends PlusCore {
    static TAG: string;
    static STYLES: string;
    /**
     * It makes the user able to scroll the content by adding a scroll beside it.
     */
    scrollable?: boolean;
    render(): import("@htmlplus/element/client/utils/uhtml").Hole;
}
export interface DialogBodyJSX {
    /**
    * It makes the user able to scroll the content by adding a scroll beside it.
    */
    "scrollable"?: boolean;
}
export interface DialogBodyAttributeJSX {
    /**
    * It makes the user able to scroll the content by adding a scroll beside it.
    */
    "scrollable"?: boolean;
}
declare global {
    interface HTMLPlusDialogBodyElement extends HTMLElement {
        /**
        * It makes the user able to scroll the content by adding a scroll beside it.
        */
        "scrollable"?: boolean;
    }
    var HTMLPlusDialogBodyElement: {
        prototype: HTMLPlusDialogBodyElement;
        new (): HTMLPlusDialogBodyElement;
    };
    interface HTMLElementTagNameMap {
        "plus-dialog-body": HTMLPlusDialogBodyElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-dialog-body": DialogBodyAttributeJSX & {
                [key: string]: any;
            };
        }
    }
}
export type DialogBodyElement = globalThis.HTMLPlusDialogBodyElement;
