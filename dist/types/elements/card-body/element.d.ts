import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * @development
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusCardBody extends PlusCore {
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
export interface PlusCardBodyAttributesBase {
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusCardBodyProperties, "overrides">>;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusCardBodyVariantOverrides>;
}
export interface PlusCardBodyAttributesDisables {}
export type PlusCardBodyAttributes = Filter<PlusCardBodyAttributesBase, PlusCardBodyAttributesDisables>;
export interface PlusCardBodyEventsBase {}
export interface PlusCardBodyEventsDisables {}
export type PlusCardBodyEvents = Filter<PlusCardBodyEventsBase, PlusCardBodyEventsDisables>;
export interface PlusCardBodyMethodsBase {}
export interface PlusCardBodyMethodsDisables {}
export type PlusCardBodyMethods = Filter<PlusCardBodyMethodsBase, PlusCardBodyMethodsDisables>;
export interface PlusCardBodyPropertiesBase {
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusCardBodyProperties, "overrides">>;
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusCardBodyVariantOverrides>;
}
export interface PlusCardBodyPropertiesDisables {}
export type PlusCardBodyProperties = Filter<PlusCardBodyPropertiesBase, PlusCardBodyPropertiesDisables>;
export interface PlusCardBodyJSX extends PlusCardBodyEvents, PlusCardBodyProperties {}
declare global {
  interface HTMLPlusCardBodyElement extends HTMLElement, PlusCardBodyMethods, PlusCardBodyProperties {}
  var HTMLPlusCardBodyElement: {
    prototype: HTMLPlusCardBodyElement;
    new (): HTMLPlusCardBodyElement;
  };
  interface HTMLElementTagNameMap {
    "plus-card-body": HTMLPlusCardBodyElement;
  }
}
export namespace JSX {
  interface IntrinsicElements {
    "plus-card-body": PlusCardBodyAttributes & PlusCardBodyEvents;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-card-body": PlusCardBodyAttributes & PlusCardBodyEvents & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusCardBodyElement>, HTMLPlusCardBodyElement>, keyof (PlusCardBodyAttributes & PlusCardBodyEvents)>;
    }
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-card-body": PlusCardBodyAttributes & PlusCardBodyEvents & Omit<HTMLAttributes<HTMLPlusCardBodyElement>, keyof (PlusCardBodyAttributes & PlusCardBodyEvents)>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-card-body": PlusCardBodyAttributes & PlusCardBodyEvents & Omit<HTMLAttributes<HTMLPlusCardBodyElement>, keyof (PlusCardBodyAttributes & PlusCardBodyEvents)>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-card-body": PlusCardBodyAttributes & PlusCardBodyEvents & Omit<HTMLAttributes<HTMLPlusCardBodyElement>, keyof (PlusCardBodyAttributes & PlusCardBodyEvents)>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-card-body": PlusCardBodyAttributes & PlusCardBodyEvents & Omit<HTMLAttributes<HTMLPlusCardBodyElement>, keyof (PlusCardBodyAttributes & PlusCardBodyEvents)>;
    }
  }
}
export type PlusCardBodyElement = globalThis.HTMLPlusCardBodyElement;
export interface PlusCardBodyVariantOverrides {}