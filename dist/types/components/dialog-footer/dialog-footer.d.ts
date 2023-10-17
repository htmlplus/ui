import { PlusCore } from "../../core";
/**
 * @slot default - The default slot.
 */
export declare class DialogFooter extends PlusCore {
    static TAG: string;
    static STYLES: string;
    render(): import("@htmlplus/element/client/utils/uhtml").Hole;
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
