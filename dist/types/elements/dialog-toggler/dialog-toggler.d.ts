import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Breakpoint } from '../../types';
import { DialogContext } from '../dialog/dialog.context';
/**
 * @subset
 *
 * @slot default - The default slot.
 * @slot open    - Specifies the content of toggler when it's opened.
 * @slot close   - Specifies the content of toggler when it's closed.
 */
export declare class DialogToggler extends PlusCore {
    /**
     * This property helps you to attach which dialog this toggler controls.
     * It doesn't matter where the dialog toggler is.
     * You can put the dialog's toggler inside or outside of the dialog.
     * Read more about connectors [here](/connector).
     */
    connector?: string;
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
    /**
     * TODO
     */
    variant?: OverridableValue<string>;
    dialog?: DialogContext;
    render(): any;
}

export interface DialogTogglerAttributes {
  /**
  * This property helps you to attach which dialog this toggler controls.
  * It doesn't matter where the dialog toggler is.
  * You can put the dialog's toggler inside or outside of the dialog.
  * Read more about connectors [here](/connector).
  */
  "connector"?: string;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<DialogTogglerProperties, "overrides">>;
  /**
  * TODO
  */
  "variant"?: OverridableValue<string, DialogTogglerVariantOverrides>;
}
export interface DialogTogglerEvents {}
export interface DialogTogglerMethods {}
export interface DialogTogglerProperties {
  /**
  * This property helps you to attach which dialog this toggler controls.
  * It doesn't matter where the dialog toggler is.
  * You can put the dialog's toggler inside or outside of the dialog.
  * Read more about connectors [here](/connector).
  */
  connector?: string;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<DialogTogglerProperties, "overrides">>;
  /**
  * TODO
  */
  variant?: OverridableValue<string, DialogTogglerVariantOverrides>;
}
export interface DialogTogglerJSX extends DialogTogglerEvents, DialogTogglerProperties {}
declare global {
  interface HTMLPlusDialogTogglerElement extends HTMLElement, DialogTogglerMethods, DialogTogglerProperties {}
  var HTMLPlusDialogTogglerElement: {
    prototype: HTMLPlusDialogTogglerElement;
    new (): HTMLPlusDialogTogglerElement;
  };
  interface HTMLElementTagNameMap {
    "plus-dialog-toggler": HTMLPlusDialogTogglerElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-toggler": DialogTogglerEvents & DialogTogglerAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-toggler": DialogTogglerEvents & DialogTogglerAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
export type DialogTogglerElement = globalThis.HTMLPlusDialogTogglerElement;
export interface DialogTogglerVariantOverrides {}