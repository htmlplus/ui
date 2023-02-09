import uhtml from "@htmlplus/element/client/vendors/uhtml.js";
/**
 * @slot default - The default slot.
 */
export declare class DialogBody {
    static TAG: string;
    static STYLES: string;
    /**
     * It makes the user able to scroll the content by adding a scroll beside it.
     */
    scrollable?: boolean;
    render(): uhtml.Hole;
}
export interface DialogBodyJSX {
    /**
     * It makes the user able to scroll the content by adding a scroll beside it.
     */
    scrollable?: boolean;
}
declare global {
    interface HTMLPlusDialogBodyElement extends HTMLElement {
        /**
         * It makes the user able to scroll the content by adding a scroll beside it.
         */
        scrollable?: boolean;
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
            "plus-dialog-body": DialogBodyJSX & {
                [key: string]: any;
            };
        }
    }
}
