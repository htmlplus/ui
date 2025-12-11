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
    variant?: OverridableValue<string & {}>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface DialogContentAttributesBase {
  /**
  * It makes the user able to scroll the content by adding a scroll beside it.
  */
  "scrollable"?: boolean;
  /**
  * TODO
  */
  "variant"?: OverridableValue<string & {}, DialogContentVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<DialogContentProperties, "overrides">>;
}
export interface DialogContentAttributesDisables {}
export type DialogContentAttributes = Filter<DialogContentAttributesBase, DialogContentAttributesDisables>;
export interface DialogContentEventsBase {}
export interface DialogContentEventsDisables {}
export type DialogContentEvents = Filter<DialogContentEventsBase, DialogContentEventsDisables>;
export interface DialogContentMethodsBase {}
export interface DialogContentMethodsDisables {}
export type DialogContentMethods = Filter<DialogContentMethodsBase, DialogContentMethodsDisables>;
export interface DialogContentPropertiesBase {
  /**
  * It makes the user able to scroll the content by adding a scroll beside it.
  */
  scrollable?: boolean;
  /**
  * TODO
  */
  variant?: OverridableValue<string & {}, DialogContentVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<DialogContentProperties, "overrides">>;
}
export interface DialogContentPropertiesDisables {}
export type DialogContentProperties = Filter<DialogContentPropertiesBase, DialogContentPropertiesDisables>;
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
      "plus-dialog-content": DialogContentEvents & DialogContentAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (DialogContentEvents & DialogContentAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-content": DialogContentEvents & DialogContentAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (DialogContentEvents & DialogContentAttributes)>;
    }
  }
}
export type DialogContentElement = globalThis.HTMLPlusDialogContentElement;
export interface DialogContentVariantOverrides {}