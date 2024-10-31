import { PlusCore } from '../../core';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class DialogBody extends PlusCore {
    /**
     * It makes the user able to scroll the content by adding a scroll beside it.
     */
    scrollable?: boolean;
    render(): any;
}

export interface DialogBodyAttributes {
  /**
  * It makes the user able to scroll the content by adding a scroll beside it.
  */
  "scrollable"?: boolean;
}
export interface DialogBodyEvents {}
export interface DialogBodyMethods {}
export interface DialogBodyProperties {
  /**
  * It makes the user able to scroll the content by adding a scroll beside it.
  */
  scrollable?: boolean;
}
export interface DialogBodyJSX extends DialogBodyEvents, DialogBodyProperties {}
declare global {
  interface HTMLPlusDialogBodyElement extends HTMLElement, DialogBodyMethods, DialogBodyProperties {}
  var HTMLPlusDialogBodyElement: {
    prototype: HTMLPlusDialogBodyElement;
    new (): HTMLPlusDialogBodyElement;
  };
  interface HTMLElementTagNameMap {
    "plus-dialog-body": HTMLPlusDialogBodyElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-body": DialogBodyEvents & DialogBodyAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type DialogBodyElement = globalThis.HTMLPlusDialogBodyElement;