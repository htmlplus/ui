import { PlusBase } from '@app/core';
/**
 * @slot default - The default slot.
 */
export declare class DialogContent extends PlusBase {
    static TAG: string;
    static STYLES: string;
    /**
     * It makes the user able to scroll the content by adding a scroll beside it.
     */
    scrollable?: boolean;
    render(): import("@htmlplus/element/client/utils/uhtml").Hole;
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
export type DialogContentElement = globalThis.HTMLPlusDialogContentElement;
