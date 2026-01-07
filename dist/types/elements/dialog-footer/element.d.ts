import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusDialogFooter extends PlusCore {
    /**
     * TODO
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface PlusDialogFooterAttributesBase {
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusDialogFooterProperties, "overrides">>;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusDialogFooterVariantOverrides>;
}
export interface PlusDialogFooterAttributesDisables {}
export type PlusDialogFooterAttributes = Filter<PlusDialogFooterAttributesBase, PlusDialogFooterAttributesDisables>;
export interface PlusDialogFooterEventsBase {}
export interface PlusDialogFooterEventsDisables {}
export type PlusDialogFooterEvents = Filter<PlusDialogFooterEventsBase, PlusDialogFooterEventsDisables>;
export interface PlusDialogFooterMethodsBase {}
export interface PlusDialogFooterMethodsDisables {}
export type PlusDialogFooterMethods = Filter<PlusDialogFooterMethodsBase, PlusDialogFooterMethodsDisables>;
export interface PlusDialogFooterPropertiesBase {
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusDialogFooterProperties, "overrides">>;
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusDialogFooterVariantOverrides>;
}
export interface PlusDialogFooterPropertiesDisables {}
export type PlusDialogFooterProperties = Filter<PlusDialogFooterPropertiesBase, PlusDialogFooterPropertiesDisables>;
export interface PlusDialogFooterJSX extends PlusDialogFooterEvents, PlusDialogFooterProperties {}
declare global {
  interface HTMLPlusDialogFooterElement extends HTMLElement, PlusDialogFooterMethods, PlusDialogFooterProperties {}
  var HTMLPlusDialogFooterElement: {
    prototype: HTMLPlusDialogFooterElement;
    new (): HTMLPlusDialogFooterElement;
  };
  interface HTMLElementTagNameMap {
    "plus-dialog-footer": HTMLPlusDialogFooterElement;
  }
}
export namespace JSX {
  interface IntrinsicElements {
    "plus-dialog-footer": PlusDialogFooterAttributes & PlusDialogFooterEvents;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-footer": PlusDialogFooterAttributes & PlusDialogFooterEvents & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusDialogFooterElement>, HTMLPlusDialogFooterElement>, keyof (PlusDialogFooterAttributes & PlusDialogFooterEvents)>;
    }
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-footer": PlusDialogFooterAttributes & PlusDialogFooterEvents & Omit<HTMLAttributes<HTMLPlusDialogFooterElement>, keyof (PlusDialogFooterAttributes & PlusDialogFooterEvents)>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-footer": PlusDialogFooterAttributes & PlusDialogFooterEvents & Omit<HTMLAttributes<HTMLPlusDialogFooterElement>, keyof (PlusDialogFooterAttributes & PlusDialogFooterEvents)>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-footer": PlusDialogFooterAttributes & PlusDialogFooterEvents & Omit<HTMLAttributes<HTMLPlusDialogFooterElement>, keyof (PlusDialogFooterAttributes & PlusDialogFooterEvents)>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-dialog-footer": PlusDialogFooterAttributes & PlusDialogFooterEvents & Omit<HTMLAttributes<HTMLPlusDialogFooterElement>, keyof (PlusDialogFooterAttributes & PlusDialogFooterEvents)>;
    }
  }
}
export type PlusDialogFooterElement = globalThis.HTMLPlusDialogFooterElement;
export interface PlusDialogFooterVariantOverrides {}