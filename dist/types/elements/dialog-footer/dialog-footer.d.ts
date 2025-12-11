import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Breakpoint } from '../../types';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class DialogFooter extends PlusCore {
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
export interface DialogFooterAttributesBase {
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<DialogFooterProperties, "overrides">>;
  /**
  * TODO
  */
  "variant"?: OverridableValue<string & {}, DialogFooterVariantOverrides>;
}
export interface DialogFooterAttributesDisables {}
export type DialogFooterAttributes = Filter<DialogFooterAttributesBase, DialogFooterAttributesDisables>;
export interface DialogFooterEventsBase {}
export interface DialogFooterEventsDisables {}
export type DialogFooterEvents = Filter<DialogFooterEventsBase, DialogFooterEventsDisables>;
export interface DialogFooterMethodsBase {}
export interface DialogFooterMethodsDisables {}
export type DialogFooterMethods = Filter<DialogFooterMethodsBase, DialogFooterMethodsDisables>;
export interface DialogFooterPropertiesBase {
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<DialogFooterProperties, "overrides">>;
  /**
  * TODO
  */
  variant?: OverridableValue<string & {}, DialogFooterVariantOverrides>;
}
export interface DialogFooterPropertiesDisables {}
export type DialogFooterProperties = Filter<DialogFooterPropertiesBase, DialogFooterPropertiesDisables>;
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
      "plus-dialog-footer": DialogFooterEvents & DialogFooterAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (DialogFooterEvents & DialogFooterAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-footer": DialogFooterEvents & DialogFooterAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (DialogFooterEvents & DialogFooterAttributes)>;
    }
  }
}
export type DialogFooterElement = globalThis.HTMLPlusDialogFooterElement;
export interface DialogFooterVariantOverrides {}