import uhtml from "@htmlplus/element/client/vendors/uhtml.js";
/**
 * @slot default - The default slot.
 */
export declare class DialogFooter {
    static TAG: string;
    static STYLES: string;
    render(): uhtml.Hole;
}
export interface DialogFooterJSX {
}
declare global {
    interface HTMLPlusDialogFooterElement extends HTMLElement {
    }
    var HTMLPlusDialogFooterElement: {
        prototype: HTMLPlusDialogFooterElement;
        new (): HTMLPlusDialogFooterElement;
    };
    interface HTMLElementTagNameMap {
        "plus-dialog-footer": HTMLPlusDialogFooterElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-dialog-footer": DialogFooterJSX & {
                [key: string]: any;
            };
        }
    }
}
export type DialogFooterElement = globalThis.HTMLPlusDialogFooterElement;
