import { PlusCore } from "../../core";
/**
 * @slot default - The default slot.
 */
export declare class DialogHeader extends PlusCore {
    static tag: string;
    static style: string;
    render(): import("@htmlplus/element/client/utils/uhtml").Hole;
}
export interface DialogHeaderAttributes {
}
export interface DialogHeaderEvents {
}
export interface DialogHeaderMethods {
}
export interface DialogHeaderProperties {
}
export interface DialogHeaderJSX extends DialogHeaderEvents, DialogHeaderProperties {
}
declare global {
    interface HTMLPlusDialogHeaderElement extends HTMLElement, DialogHeaderMethods, DialogHeaderProperties {
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
            "plus-dialog-header": DialogHeaderEvents & DialogHeaderAttributes & {
                [key: string]: any;
            };
        }
    }
}
export type DialogHeaderElement = globalThis.HTMLPlusDialogHeaderElement;
