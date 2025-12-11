import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Breakpoint } from '../../types';
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
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface DialogBodyAttributesBase {
  /**
  * It makes the user able to scroll the content by adding a scroll beside it.
  */
  "scrollable"?: boolean;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, DialogBodyVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<DialogBodyProperties, "overrides">>;
}
export interface DialogBodyAttributesDisables {}
export type DialogBodyAttributes = Filter<DialogBodyAttributesBase, DialogBodyAttributesDisables>;
export interface DialogBodyEventsBase {}
export interface DialogBodyEventsDisables {}
export type DialogBodyEvents = Filter<DialogBodyEventsBase, DialogBodyEventsDisables>;
export interface DialogBodyMethodsBase {}
export interface DialogBodyMethodsDisables {}
export type DialogBodyMethods = Filter<DialogBodyMethodsBase, DialogBodyMethodsDisables>;
export interface DialogBodyPropertiesBase {
  /**
  * It makes the user able to scroll the content by adding a scroll beside it.
  */
  scrollable?: boolean;
  /**
  * TODO
  */
  variant?: OverridableValue<never, DialogBodyVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<DialogBodyProperties, "overrides">>;
}
export interface DialogBodyPropertiesDisables {}
export type DialogBodyProperties = Filter<DialogBodyPropertiesBase, DialogBodyPropertiesDisables>;
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
      "plus-dialog-body": DialogBodyEvents & DialogBodyAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (DialogBodyEvents & DialogBodyAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-body": DialogBodyEvents & DialogBodyAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (DialogBodyEvents & DialogBodyAttributes)>;
    }
  }
}
export type DialogBodyElement = globalThis.HTMLPlusDialogBodyElement;
export interface DialogBodyVariantOverrides {}