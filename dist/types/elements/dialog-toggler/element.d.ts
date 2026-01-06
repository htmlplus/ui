import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
import { Context } from '../dialog/context';
/**
 * @subset
 *
 * @slot default - The default slot.
 * @slot open    - Specifies the content of toggler when it's opened.
 * @slot close   - Specifies the content of toggler when it's closed.
 */
export declare class PlusDialogToggler extends PlusCore {
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
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    dialog?: Context;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface PlusDialogTogglerAttributesBase {
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
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusDialogTogglerProperties, "overrides">>;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusDialogTogglerVariantOverrides>;
}
export interface PlusDialogTogglerAttributesDisables {}
export type PlusDialogTogglerAttributes = Filter<PlusDialogTogglerAttributesBase, PlusDialogTogglerAttributesDisables>;
export interface PlusDialogTogglerEventsBase {}
export interface PlusDialogTogglerEventsDisables {}
export type PlusDialogTogglerEvents = Filter<PlusDialogTogglerEventsBase, PlusDialogTogglerEventsDisables>;
export interface PlusDialogTogglerMethodsBase {}
export interface PlusDialogTogglerMethodsDisables {}
export type PlusDialogTogglerMethods = Filter<PlusDialogTogglerMethodsBase, PlusDialogTogglerMethodsDisables>;
export interface PlusDialogTogglerPropertiesBase {
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
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusDialogTogglerProperties, "overrides">>;
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusDialogTogglerVariantOverrides>;
}
export interface PlusDialogTogglerPropertiesDisables {}
export type PlusDialogTogglerProperties = Filter<PlusDialogTogglerPropertiesBase, PlusDialogTogglerPropertiesDisables>;
export type PlusDialogTogglerAttributesAndEvents = PlusDialogTogglerAttributes & PlusDialogTogglerEvents;
export interface PlusDialogTogglerJSX extends PlusDialogTogglerEvents, PlusDialogTogglerProperties {}
declare global {
  interface HTMLPlusDialogTogglerElement extends HTMLElement, PlusDialogTogglerMethods, PlusDialogTogglerProperties {}
  var HTMLPlusDialogTogglerElement: {
    prototype: HTMLPlusDialogTogglerElement;
    new (): HTMLPlusDialogTogglerElement;
  };
  interface HTMLElementTagNameMap {
    "plus-dialog-toggler": HTMLPlusDialogTogglerElement;
  }
}
export namespace JSX {
  interface IntrinsicElements {
    "plus-dialog-toggler": PlusDialogTogglerAttributes & PlusDialogTogglerEvents;
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-toggler": PlusDialogTogglerAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusDialogTogglerElement>, keyof PlusDialogTogglerAttributesAndEvents>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-toggler": PlusDialogTogglerAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusDialogTogglerElement>, keyof PlusDialogTogglerAttributesAndEvents>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-toggler": PlusDialogTogglerAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusDialogTogglerElement>, keyof PlusDialogTogglerAttributesAndEvents>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-toggler": PlusDialogTogglerAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusDialogTogglerElement>, keyof PlusDialogTogglerAttributesAndEvents>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-toggler": PlusDialogTogglerAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusDialogTogglerElement>, keyof PlusDialogTogglerAttributesAndEvents>;
    }
  }
}
export type PlusDialogTogglerElement = globalThis.HTMLPlusDialogTogglerElement;
export interface PlusDialogTogglerVariantOverrides {}