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
  /**
  * TODO
  */
  "override"?: {
    [key: string]: Partial<DialogBodyProperties>;
  };
}
export interface DialogBodyEvents {}
export interface DialogBodyMethods {}
export interface DialogBodyProperties {
  /**
  * It makes the user able to scroll the content by adding a scroll beside it.
  */
  scrollable?: boolean;
  /**
  * TODO
  */
  "override"?: {
    [key: string]: Partial<DialogBodyProperties>;
  };
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
      "plus-dialog-body": DialogBodyEvents & DialogBodyAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-body": DialogBodyEvents & DialogBodyAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
export type DialogBodyElement = globalThis.HTMLPlusDialogBodyElement;