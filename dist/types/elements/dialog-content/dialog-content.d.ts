import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Breakpoint } from '../../types';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class DialogContent extends PlusCore {
    /**
     * It makes the user able to scroll the content by adding a scroll beside it.
     */
    scrollable?: boolean;
    /**
     * TODO
     */
    variant?: OverridableValue<string>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
    render(): any;
}

export interface DialogContentAttributes {
  /**
  * It makes the user able to scroll the content by adding a scroll beside it.
  */
  "scrollable"?: boolean;
  /**
  * TODO
  */
  "variant"?: OverridableValue<string, DialogContentVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<DialogContentProperties, "overrides">>;
}
export interface DialogContentEvents {}
export interface DialogContentMethods {}
export interface DialogContentProperties {
  /**
  * It makes the user able to scroll the content by adding a scroll beside it.
  */
  scrollable?: boolean;
  /**
  * TODO
  */
  variant?: OverridableValue<string, DialogContentVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<DialogContentProperties, "overrides">>;
}
export interface DialogContentJSX extends DialogContentEvents, DialogContentProperties {}
declare global {
  interface HTMLPlusDialogContentElement extends HTMLElement, DialogContentMethods, DialogContentProperties {}
  var HTMLPlusDialogContentElement: {
    prototype: HTMLPlusDialogContentElement;
    new (): HTMLPlusDialogContentElement;
  };
  interface HTMLElementTagNameMap {
    "plus-dialog-content": HTMLPlusDialogContentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-content": DialogContentEvents & DialogContentAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-content": DialogContentEvents & DialogContentAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
export type DialogContentElement = globalThis.HTMLPlusDialogContentElement;
export interface DialogContentVariantOverrides {}