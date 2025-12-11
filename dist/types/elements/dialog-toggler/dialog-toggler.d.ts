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
    variant?: OverridableValue<never>;
    dialog?: DialogContext;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface DialogTogglerAttributesBase {
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
  "variant"?: OverridableValue<never, DialogTogglerVariantOverrides>;
}
export interface DialogTogglerAttributesDisables {}
export type DialogTogglerAttributes = Filter<DialogTogglerAttributesBase, DialogTogglerAttributesDisables>;
export interface DialogTogglerEventsBase {}
export interface DialogTogglerEventsDisables {}
export type DialogTogglerEvents = Filter<DialogTogglerEventsBase, DialogTogglerEventsDisables>;
export interface DialogTogglerMethodsBase {}
export interface DialogTogglerMethodsDisables {}
export type DialogTogglerMethods = Filter<DialogTogglerMethodsBase, DialogTogglerMethodsDisables>;
export interface DialogTogglerPropertiesBase {
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
  variant?: OverridableValue<never, DialogTogglerVariantOverrides>;
}
export interface DialogTogglerPropertiesDisables {}
export type DialogTogglerProperties = Filter<DialogTogglerPropertiesBase, DialogTogglerPropertiesDisables>;
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
      "plus-dialog-toggler": DialogTogglerEvents & DialogTogglerAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (DialogTogglerEvents & DialogTogglerAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-toggler": DialogTogglerEvents & DialogTogglerAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (DialogTogglerEvents & DialogTogglerAttributes)>;
    }
  }
}
export type DialogTogglerElement = globalThis.HTMLPlusDialogTogglerElement;
export interface DialogTogglerVariantOverrides {}