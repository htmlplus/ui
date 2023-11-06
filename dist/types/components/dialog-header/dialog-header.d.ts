import { PlusCore } from "../../core";
/**
 * @slot default - The default slot.
 */
export declare class DialogHeader extends PlusCore {
    static TAG: string;
    static STYLES: string;
    render(): import("@htmlplus/element/client/utils/uhtml").Hole;
}
export interface DialogHeaderJSX {
}
export interface DialogHeaderAttributeJSX {
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
            "plus-dialog-header": DialogHeaderAttributeJSX & {
                [key: string]: any;
            };
        }
    }
}
export type DialogHeaderElement = globalThis.HTMLPlusDialogHeaderElement;
