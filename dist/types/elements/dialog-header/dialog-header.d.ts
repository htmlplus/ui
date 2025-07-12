import { PlusCore } from '../../core';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class DialogHeader extends PlusCore {
    render(): any;
}

export interface DialogHeaderAttributes {
  /**
  * TODO
  */
  "override"?: {
    [key: string]: Partial<DialogHeaderProperties>;
  };
}
export interface DialogHeaderEvents {}
export interface DialogHeaderMethods {}
export interface DialogHeaderProperties {
  /**
  * TODO
  */
  "override"?: {
    [key: string]: Partial<DialogHeaderProperties>;
  };
}
export interface DialogHeaderJSX extends DialogHeaderEvents, DialogHeaderProperties {}
declare global {
  interface HTMLPlusDialogHeaderElement extends HTMLElement, DialogHeaderMethods, DialogHeaderProperties {}
  var HTMLPlusDialogHeaderElement: {
    prototype: HTMLPlusDialogHeaderElement;
    new (): HTMLPlusDialogHeaderElement;
  };
  interface HTMLElementTagNameMap {
    "plus-dialog-header": HTMLPlusDialogHeaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-header": DialogHeaderEvents & DialogHeaderAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-header": DialogHeaderEvents & DialogHeaderAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
export type DialogHeaderElement = globalThis.HTMLPlusDialogHeaderElement;