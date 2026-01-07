import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusDialogBody extends PlusCore {
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
    overrides?: OverridesConfig<PlusBreakpoint>;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface PlusDialogBodyAttributesBase {
  /**
  * It makes the user able to scroll the content by adding a scroll beside it.
  */
  "scrollable"?: boolean;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusDialogBodyVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusDialogBodyProperties, "overrides">>;
}
export interface PlusDialogBodyAttributesDisables {}
export type PlusDialogBodyAttributes = Filter<PlusDialogBodyAttributesBase, PlusDialogBodyAttributesDisables>;
export interface PlusDialogBodyEventsBase {}
export interface PlusDialogBodyEventsDisables {}
export type PlusDialogBodyEvents = Filter<PlusDialogBodyEventsBase, PlusDialogBodyEventsDisables>;
export interface PlusDialogBodyMethodsBase {}
export interface PlusDialogBodyMethodsDisables {}
export type PlusDialogBodyMethods = Filter<PlusDialogBodyMethodsBase, PlusDialogBodyMethodsDisables>;
export interface PlusDialogBodyPropertiesBase {
  /**
  * It makes the user able to scroll the content by adding a scroll beside it.
  */
  scrollable?: boolean;
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusDialogBodyVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusDialogBodyProperties, "overrides">>;
}
export interface PlusDialogBodyPropertiesDisables {}
export type PlusDialogBodyProperties = Filter<PlusDialogBodyPropertiesBase, PlusDialogBodyPropertiesDisables>;
export interface PlusDialogBodyJSX extends PlusDialogBodyEvents, PlusDialogBodyProperties {}
declare global {
  interface HTMLPlusDialogBodyElement extends HTMLElement, PlusDialogBodyMethods, PlusDialogBodyProperties {}
  var HTMLPlusDialogBodyElement: {
    prototype: HTMLPlusDialogBodyElement;
    new (): HTMLPlusDialogBodyElement;
  };
  interface HTMLElementTagNameMap {
    "plus-dialog-body": HTMLPlusDialogBodyElement;
  }
}
export namespace JSX {
  interface IntrinsicElements {
    "plus-dialog-body": PlusDialogBodyAttributes & PlusDialogBodyEvents;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-body": PlusDialogBodyAttributes & PlusDialogBodyEvents & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusDialogBodyElement>, HTMLPlusDialogBodyElement>, keyof (PlusDialogBodyAttributes & PlusDialogBodyEvents)>;
    }
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-body": PlusDialogBodyAttributes & PlusDialogBodyEvents & Omit<HTMLAttributes<HTMLPlusDialogBodyElement>, keyof (PlusDialogBodyAttributes & PlusDialogBodyEvents)>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-body": PlusDialogBodyAttributes & PlusDialogBodyEvents & Omit<HTMLAttributes<HTMLPlusDialogBodyElement>, keyof (PlusDialogBodyAttributes & PlusDialogBodyEvents)>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-body": PlusDialogBodyAttributes & PlusDialogBodyEvents & Omit<HTMLAttributes<HTMLPlusDialogBodyElement>, keyof (PlusDialogBodyAttributes & PlusDialogBodyEvents)>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-body": PlusDialogBodyAttributes & PlusDialogBodyEvents & Omit<HTMLAttributes<HTMLPlusDialogBodyElement>, keyof (PlusDialogBodyAttributes & PlusDialogBodyEvents)>;
    }
  }
}
export type PlusDialogBodyElement = globalThis.HTMLPlusDialogBodyElement;
export interface PlusDialogBodyVariantOverrides {}