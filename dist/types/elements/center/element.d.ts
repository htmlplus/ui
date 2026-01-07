import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * Centers content vertically and horizontally.
 *
 * @stable
 *
 * @slot default - The default slot.
 *
 * @examples default, inline
 */
export declare class PlusCenter extends PlusCore {
    /**
     * Converts the `display` CSS property from `flex` to `inline-flex`.
     */
    inline?: boolean;
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
export interface PlusCenterAttributesBase {
  /**
  * Converts the `display` CSS property from `flex` to `inline-flex`.
  */
  "inline"?: boolean;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusCenterProperties, "overrides">>;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusCenterVariantOverrides>;
}
export interface PlusCenterAttributesDisables {}
export type PlusCenterAttributes = Filter<PlusCenterAttributesBase, PlusCenterAttributesDisables>;
export interface PlusCenterEventsBase {}
export interface PlusCenterEventsDisables {}
export type PlusCenterEvents = Filter<PlusCenterEventsBase, PlusCenterEventsDisables>;
export interface PlusCenterMethodsBase {}
export interface PlusCenterMethodsDisables {}
export type PlusCenterMethods = Filter<PlusCenterMethodsBase, PlusCenterMethodsDisables>;
export interface PlusCenterPropertiesBase {
  /**
  * Converts the `display` CSS property from `flex` to `inline-flex`.
  */
  inline?: boolean;
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusCenterProperties, "overrides">>;
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusCenterVariantOverrides>;
}
export interface PlusCenterPropertiesDisables {}
export type PlusCenterProperties = Filter<PlusCenterPropertiesBase, PlusCenterPropertiesDisables>;
export interface PlusCenterJSX extends PlusCenterEvents, PlusCenterProperties {}
declare global {
  interface HTMLPlusCenterElement extends HTMLElement, PlusCenterMethods, PlusCenterProperties {}
  var HTMLPlusCenterElement: {
    prototype: HTMLPlusCenterElement;
    new (): HTMLPlusCenterElement;
  };
  interface HTMLElementTagNameMap {
    "plus-center": HTMLPlusCenterElement;
  }
}
export namespace JSX {
  interface IntrinsicElements {
    "plus-center": PlusCenterAttributes & PlusCenterEvents;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-center": PlusCenterAttributes & PlusCenterEvents & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusCenterElement>, HTMLPlusCenterElement>, keyof (PlusCenterAttributes & PlusCenterEvents)>;
    }
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-center": PlusCenterAttributes & PlusCenterEvents & Omit<HTMLAttributes<HTMLPlusCenterElement>, keyof (PlusCenterAttributes & PlusCenterEvents)>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-center": PlusCenterAttributes & PlusCenterEvents & Omit<HTMLAttributes<HTMLPlusCenterElement>, keyof (PlusCenterAttributes & PlusCenterEvents)>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-center": PlusCenterAttributes & PlusCenterEvents & Omit<HTMLAttributes<HTMLPlusCenterElement>, keyof (PlusCenterAttributes & PlusCenterEvents)>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-center": PlusCenterAttributes & PlusCenterEvents & Omit<HTMLAttributes<HTMLPlusCenterElement>, keyof (PlusCenterAttributes & PlusCenterEvents)>;
    }
  }
}
export type PlusCenterElement = globalThis.HTMLPlusCenterElement;
export interface PlusCenterVariantOverrides {}