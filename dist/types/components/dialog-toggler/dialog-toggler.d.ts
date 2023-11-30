import { PlusCore } from "../../core";
/**
 * @slot default - The default slot.
 * @TODO open    - Specifies the content of toggler when it's opened.
 * @TODO close   - Specifies the content of toggler when it's closed.
 */
export declare class DialogToggler extends PlusCore {
    static TAG: string;
    static STYLES: string;
    /**
     * This property helps you to attach which dialog this toggler controls.
     * It doesn't matter where the dialog toggler is.
     * You can put the dialog's toggler inside or outside of the dialog.
     * Read more about connectors [here](/connector).
     */
    connector?: string;
    toggle?: Function;
    tunnel?: boolean;
    get text(): "Close" | "Open";
    /**
     * Watchers
     */
    watcher(): void;
    /**
     * Events handler
     */
    onClick(): void;
    render(): import("@htmlplus/element/client/utils/uhtml").Hole;
}
export interface DialogTogglerAttributes {
    /**
    * This property helps you to attach which dialog this toggler controls.
    * It doesn't matter where the dialog toggler is.
    * You can put the dialog's toggler inside or outside of the dialog.
    * Read more about connectors [here](/connector).
    */
    "connector"?: string;
}
export interface DialogTogglerEvents {
}
export interface DialogTogglerMethods {
}
export interface DialogTogglerProperties {
    /**
    * This property helps you to attach which dialog this toggler controls.
    * It doesn't matter where the dialog toggler is.
    * You can put the dialog's toggler inside or outside of the dialog.
    * Read more about connectors [here](/connector).
    */
    connector?: string;
}
export interface DialogTogglerJSX extends DialogTogglerEvents, DialogTogglerProperties {
}
declare global {
    interface HTMLPlusDialogTogglerElement extends HTMLElement, DialogTogglerMethods, DialogTogglerProperties {
    }
    var HTMLPlusDialogTogglerElement: {
        prototype: HTMLPlusDialogTogglerElement;
        new (): HTMLPlusDialogTogglerElement;
    };
    interface HTMLElementTagNameMap {
        "plus-dialog-toggler": HTMLPlusDialogTogglerElement;
    }
    namespace JSX {
        interface IntrinsicElements {
            "plus-dialog-toggler": DialogTogglerEvents & DialogTogglerAttributes & {
                [key: string]: any;
            };
        }
    }
}
export type DialogTogglerElement = globalThis.HTMLPlusDialogTogglerElement;
