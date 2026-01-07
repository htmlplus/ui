import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusProgressBarStack extends PlusCore {
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
export interface PlusProgressBarStackAttributesBase {
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusProgressBarStackProperties, "overrides">>;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusProgressBarStackVariantOverrides>;
}
export interface PlusProgressBarStackAttributesDisables {}
export type PlusProgressBarStackAttributes = Filter<PlusProgressBarStackAttributesBase, PlusProgressBarStackAttributesDisables>;
export interface PlusProgressBarStackEventsBase {}
export interface PlusProgressBarStackEventsDisables {}
export type PlusProgressBarStackEvents = Filter<PlusProgressBarStackEventsBase, PlusProgressBarStackEventsDisables>;
export interface PlusProgressBarStackMethodsBase {}
export interface PlusProgressBarStackMethodsDisables {}
export type PlusProgressBarStackMethods = Filter<PlusProgressBarStackMethodsBase, PlusProgressBarStackMethodsDisables>;
export interface PlusProgressBarStackPropertiesBase {
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusProgressBarStackProperties, "overrides">>;
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusProgressBarStackVariantOverrides>;
}
export interface PlusProgressBarStackPropertiesDisables {}
export type PlusProgressBarStackProperties = Filter<PlusProgressBarStackPropertiesBase, PlusProgressBarStackPropertiesDisables>;
export interface PlusProgressBarStackJSX extends PlusProgressBarStackEvents, PlusProgressBarStackProperties {}
declare global {
  interface HTMLPlusProgressBarStackElement extends HTMLElement, PlusProgressBarStackMethods, PlusProgressBarStackProperties {}
  var HTMLPlusProgressBarStackElement: {
    prototype: HTMLPlusProgressBarStackElement;
    new (): HTMLPlusProgressBarStackElement;
  };
  interface HTMLElementTagNameMap {
    "plus-progress-bar-stack": HTMLPlusProgressBarStackElement;
  }
}
export namespace JSX {
  interface IntrinsicElements {
    "plus-progress-bar-stack": PlusProgressBarStackAttributes & PlusProgressBarStackEvents;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-progress-bar-stack": PlusProgressBarStackAttributes & PlusProgressBarStackEvents & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusProgressBarStackElement>, HTMLPlusProgressBarStackElement>, keyof (PlusProgressBarStackAttributes & PlusProgressBarStackEvents)>;
    }
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-progress-bar-stack": PlusProgressBarStackAttributes & PlusProgressBarStackEvents & Omit<HTMLAttributes<HTMLPlusProgressBarStackElement>, keyof (PlusProgressBarStackAttributes & PlusProgressBarStackEvents)>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-progress-bar-stack": PlusProgressBarStackAttributes & PlusProgressBarStackEvents & Omit<HTMLAttributes<HTMLPlusProgressBarStackElement>, keyof (PlusProgressBarStackAttributes & PlusProgressBarStackEvents)>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-progress-bar-stack": PlusProgressBarStackAttributes & PlusProgressBarStackEvents & Omit<HTMLAttributes<HTMLPlusProgressBarStackElement>, keyof (PlusProgressBarStackAttributes & PlusProgressBarStackEvents)>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-progress-bar-stack": PlusProgressBarStackAttributes & PlusProgressBarStackEvents & Omit<HTMLAttributes<HTMLPlusProgressBarStackElement>, keyof (PlusProgressBarStackAttributes & PlusProgressBarStackEvents)>;
    }
  }
}
export type PlusProgressBarStackElement = globalThis.HTMLPlusProgressBarStackElement;
export interface PlusProgressBarStackVariantOverrides {}