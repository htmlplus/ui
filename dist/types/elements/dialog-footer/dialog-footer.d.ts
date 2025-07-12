import { PlusCore } from '../../core';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class DialogFooter extends PlusCore {
    render(): any;
}

export interface DialogFooterAttributes {
  /**
  * TODO
  */
  "override"?: {
    [key: string]: Partial<DialogFooterProperties>;
  };
}
export interface DialogFooterEvents {}
export interface DialogFooterMethods {}
export interface DialogFooterProperties {
  /**
  * TODO
  */
  "override"?: {
    [key: string]: Partial<DialogFooterProperties>;
  };
}
export interface DialogFooterJSX extends DialogFooterEvents, DialogFooterProperties {}
declare global {
  interface HTMLPlusDialogFooterElement extends HTMLElement, DialogFooterMethods, DialogFooterProperties {}
  var HTMLPlusDialogFooterElement: {
    prototype: HTMLPlusDialogFooterElement;
    new (): HTMLPlusDialogFooterElement;
  };
  interface HTMLElementTagNameMap {
    "plus-dialog-footer": HTMLPlusDialogFooterElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-footer": DialogFooterEvents & DialogFooterAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-footer": DialogFooterEvents & DialogFooterAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
export type DialogFooterElement = globalThis.HTMLPlusDialogFooterElement;