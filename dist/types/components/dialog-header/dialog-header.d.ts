import uhtml from "@htmlplus/element/client/vendors/uhtml.js";
/**
 * @slot default - The default slot.
 */
export declare class DialogHeader {
    static TAG: string;
    static STYLES: string;
    render(): uhtml.Hole;
}
export interface DialogHeaderJSX {
}
declare global {
    interface HTMLPlusDialogHeaderElement extends HTMLElement {
    }
    var HTMLPlusDialogHeaderElement: {
        prototype: HTMLPlusDialogHeaderElement;
        new (): HTMLPlusDialogHeaderElement;
    };
    interface HTMLElementTagNameMap {
        "plus-dialog-header": HTMLPlusDialogHeaderElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-dialog-header": DialogHeaderJSX & {
                [key: string]: any;
            };
        }
    }
}
