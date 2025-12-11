import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Breakpoint } from '../../types';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class DialogHeader extends PlusCore {
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
    /**
     * TODO
     */
    variant?: OverridableValue<string & {}>;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface DialogHeaderAttributesBase {
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<DialogHeaderProperties, "overrides">>;
  /**
  * TODO
  */
  "variant"?: OverridableValue<string & {}, DialogHeaderVariantOverrides>;
}
export interface DialogHeaderAttributesDisables {}
export type DialogHeaderAttributes = Filter<DialogHeaderAttributesBase, DialogHeaderAttributesDisables>;
export interface DialogHeaderEventsBase {}
export interface DialogHeaderEventsDisables {}
export type DialogHeaderEvents = Filter<DialogHeaderEventsBase, DialogHeaderEventsDisables>;
export interface DialogHeaderMethodsBase {}
export interface DialogHeaderMethodsDisables {}
export type DialogHeaderMethods = Filter<DialogHeaderMethodsBase, DialogHeaderMethodsDisables>;
export interface DialogHeaderPropertiesBase {
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<DialogHeaderProperties, "overrides">>;
  /**
  * TODO
  */
  variant?: OverridableValue<string & {}, DialogHeaderVariantOverrides>;
}
export interface DialogHeaderPropertiesDisables {}
export type DialogHeaderProperties = Filter<DialogHeaderPropertiesBase, DialogHeaderPropertiesDisables>;
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
      "plus-dialog-header": DialogHeaderEvents & DialogHeaderAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (DialogHeaderEvents & DialogHeaderAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-header": DialogHeaderEvents & DialogHeaderAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (DialogHeaderEvents & DialogHeaderAttributes)>;
    }
  }
}
export type DialogHeaderElement = globalThis.HTMLPlusDialogHeaderElement;
export interface DialogHeaderVariantOverrides {}