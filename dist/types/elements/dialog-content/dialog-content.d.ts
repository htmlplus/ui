import { PlusCore } from "../../core";
/**
 * @slot default - The default slot.
 */
export declare class DialogContent extends PlusCore {
    static TAG: string;
    static STYLES: string;
    /**
     * It makes the user able to scroll the content by adding a scroll beside it.
     */
    scrollable?: boolean;
    render(): import("@htmlplus/element/client/utils/index.js").Hole;
}
export interface DialogContentAttributes {
    /**
    * It makes the user able to scroll the content by adding a scroll beside it.
    */
    "scrollable"?: boolean;
}
export interface DialogContentEvents {
}
export interface DialogContentMethods {
}
export interface DialogContentProperties {
    /**
    * It makes the user able to scroll the content by adding a scroll beside it.
    */
    scrollable?: boolean;
}
export interface DialogContentJSX extends DialogContentEvents, DialogContentProperties {
}
declare global {
    interface HTMLPlusDialogContentElement extends HTMLElement, DialogContentMethods, DialogContentProperties {
    }
    var HTMLPlusDialogContentElement: {
        prototype: HTMLPlusDialogContentElement;
        new (): HTMLPlusDialogContentElement;
    };
    interface HTMLElementTagNameMap {
        "plus-dialog-content": HTMLPlusDialogContentElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-dialog-content": DialogContentEvents & DialogContentAttributes & {
                [key: string]: any;
            };
        }
    }
}
export type DialogContentElement = globalThis.HTMLPlusDialogContentElement;
