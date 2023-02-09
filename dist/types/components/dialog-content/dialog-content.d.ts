import uhtml from "@htmlplus/element/client/vendors/uhtml.js";
/**
 * @slot default - The default slot.
 */
export declare class DialogContent {
    static TAG: string;
    static STYLES: string;
    /**
     * It makes the user able to scroll the content by adding a scroll beside it.
     */
    scrollable?: boolean;
    render(): uhtml.Hole;
}
export interface DialogContentJSX {
    /**
     * It makes the user able to scroll the content by adding a scroll beside it.
     */
    scrollable?: boolean;
}
declare global {
    interface HTMLPlusDialogContentElement extends HTMLElement {
        /**
         * It makes the user able to scroll the content by adding a scroll beside it.
         */
        scrollable?: boolean;
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
            "plus-dialog-content": DialogContentJSX & {
                [key: string]: any;
            };
        }
    }
}
