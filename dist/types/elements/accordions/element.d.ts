import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
import { Context } from './context';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusAccordions extends PlusCore {
    /**
     * Specifies that only one accordion can be open.
     */
    persistent?: boolean;
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    state: Context;
    open(target: HTMLElement): void;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface PlusAccordionsAttributesBase {
  /**
  * Specifies that only one accordion can be open.
  */
  "persistent"?: boolean;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusAccordionsVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusAccordionsProperties, "overrides">>;
}
export interface PlusAccordionsAttributesDisables {}
export type PlusAccordionsAttributes = Filter<PlusAccordionsAttributesBase, PlusAccordionsAttributesDisables>;
export interface PlusAccordionsEventsBase {}
export interface PlusAccordionsEventsDisables {}
export type PlusAccordionsEvents = Filter<PlusAccordionsEventsBase, PlusAccordionsEventsDisables>;
export interface PlusAccordionsMethodsBase {}
export interface PlusAccordionsMethodsDisables {}
export type PlusAccordionsMethods = Filter<PlusAccordionsMethodsBase, PlusAccordionsMethodsDisables>;
export interface PlusAccordionsPropertiesBase {
  /**
  * Specifies that only one accordion can be open.
  */
  persistent?: boolean;
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusAccordionsVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusAccordionsProperties, "overrides">>;
}
export interface PlusAccordionsPropertiesDisables {}
export type PlusAccordionsProperties = Filter<PlusAccordionsPropertiesBase, PlusAccordionsPropertiesDisables>;
export type PlusAccordionsAttributesAndEvents = PlusAccordionsAttributes & PlusAccordionsEvents;
export interface PlusAccordionsJSX extends PlusAccordionsEvents, PlusAccordionsProperties {}
declare global {
  interface HTMLPlusAccordionsElement extends HTMLElement, PlusAccordionsMethods, PlusAccordionsProperties {}
  var HTMLPlusAccordionsElement: {
    prototype: HTMLPlusAccordionsElement;
    new (): HTMLPlusAccordionsElement;
  };
  interface HTMLElementTagNameMap {
    "plus-accordions": HTMLPlusAccordionsElement;
  }
}
export namespace JSX {
  interface IntrinsicElements {
    "plus-accordions": PlusAccordionsAttributes & PlusAccordionsEvents;
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-accordions": PlusAccordionsAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusAccordionsElement>, keyof PlusAccordionsAttributesAndEvents>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-accordions": PlusAccordionsAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusAccordionsElement>, keyof PlusAccordionsAttributesAndEvents>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-accordions": PlusAccordionsAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusAccordionsElement>, keyof PlusAccordionsAttributesAndEvents>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-accordions": PlusAccordionsAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusAccordionsElement>, keyof PlusAccordionsAttributesAndEvents>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-accordions": PlusAccordionsAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusAccordionsElement>, keyof PlusAccordionsAttributesAndEvents>;
    }
  }
}
export type PlusAccordionsElement = globalThis.HTMLPlusAccordionsElement;
export interface PlusAccordionsVariantOverrides {}