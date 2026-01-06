import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusDialogContent extends PlusCore {
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
export interface PlusDialogContentAttributesBase {
  /**
  * It makes the user able to scroll the content by adding a scroll beside it.
  */
  "scrollable"?: boolean;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusDialogContentVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusDialogContentProperties, "overrides">>;
}
export interface PlusDialogContentAttributesDisables {}
export type PlusDialogContentAttributes = Filter<PlusDialogContentAttributesBase, PlusDialogContentAttributesDisables>;
export interface PlusDialogContentEventsBase {}
export interface PlusDialogContentEventsDisables {}
export type PlusDialogContentEvents = Filter<PlusDialogContentEventsBase, PlusDialogContentEventsDisables>;
export interface PlusDialogContentMethodsBase {}
export interface PlusDialogContentMethodsDisables {}
export type PlusDialogContentMethods = Filter<PlusDialogContentMethodsBase, PlusDialogContentMethodsDisables>;
export interface PlusDialogContentPropertiesBase {
  /**
  * It makes the user able to scroll the content by adding a scroll beside it.
  */
  scrollable?: boolean;
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusDialogContentVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusDialogContentProperties, "overrides">>;
}
export interface PlusDialogContentPropertiesDisables {}
export type PlusDialogContentProperties = Filter<PlusDialogContentPropertiesBase, PlusDialogContentPropertiesDisables>;
export type PlusDialogContentAttributesAndEvents = PlusDialogContentAttributes & PlusDialogContentEvents;
export interface PlusDialogContentJSX extends PlusDialogContentEvents, PlusDialogContentProperties {}
declare global {
  interface HTMLPlusDialogContentElement extends HTMLElement, PlusDialogContentMethods, PlusDialogContentProperties {}
  var HTMLPlusDialogContentElement: {
    prototype: HTMLPlusDialogContentElement;
    new (): HTMLPlusDialogContentElement;
  };
  interface HTMLElementTagNameMap {
    "plus-dialog-content": HTMLPlusDialogContentElement;
  }
}
export namespace JSX {
  interface IntrinsicElements {
    "plus-dialog-content": PlusDialogContentAttributes & PlusDialogContentEvents;
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-content": PlusDialogContentAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusDialogContentElement>, keyof PlusDialogContentAttributesAndEvents>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-content": PlusDialogContentAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusDialogContentElement>, keyof PlusDialogContentAttributesAndEvents>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-content": PlusDialogContentAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusDialogContentElement>, keyof PlusDialogContentAttributesAndEvents>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-content": PlusDialogContentAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusDialogContentElement>, keyof PlusDialogContentAttributesAndEvents>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-content": PlusDialogContentAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusDialogContentElement>, keyof PlusDialogContentAttributesAndEvents>;
    }
  }
}
export type PlusDialogContentElement = globalThis.HTMLPlusDialogContentElement;
export interface PlusDialogContentVariantOverrides {}