import { PlusCore } from "../../core";
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class DialogFooter extends PlusCore {
    static tag: string;
    static style: string;
    render(): import("@htmlplus/element/client/utils/index.js").Hole;
}
export interface DialogFooterAttributes {
}
export interface DialogFooterEvents {
}
export interface DialogFooterMethods {
}
export interface DialogFooterProperties {
}
export interface DialogFooterJSX extends DialogFooterEvents, DialogFooterProperties {
}
declare global {
    interface HTMLPlusDialogFooterElement extends HTMLElement, DialogFooterMethods, DialogFooterProperties {
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
            "plus-dialog-footer": DialogFooterEvents & DialogFooterAttributes & {
                [key: string]: any;
            };
        }
    }
}
export type DialogFooterElement = globalThis.HTMLPlusDialogFooterElement;
