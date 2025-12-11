import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Breakpoint } from '../../types';
/**
 * Centers content vertically and horizontally.
 *
 * @stable
 *
 * @slot default - The default slot.
 *
 * @examples default, inline
 */
export declare class Center extends PlusCore {
    /**
     * Converts the `display` CSS property from `flex` to `inline-flex`.
     */
    inline?: boolean;
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
export interface CenterAttributesBase {
  /**
  * Converts the `display` CSS property from `flex` to `inline-flex`.
  */
  "inline"?: boolean;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<CenterProperties, "overrides">>;
  /**
  * TODO
  */
  "variant"?: OverridableValue<string & {}, CenterVariantOverrides>;
}
export interface CenterAttributesDisables {}
export type CenterAttributes = Filter<CenterAttributesBase, CenterAttributesDisables>;
export interface CenterEventsBase {}
export interface CenterEventsDisables {}
export type CenterEvents = Filter<CenterEventsBase, CenterEventsDisables>;
export interface CenterMethodsBase {}
export interface CenterMethodsDisables {}
export type CenterMethods = Filter<CenterMethodsBase, CenterMethodsDisables>;
export interface CenterPropertiesBase {
  /**
  * Converts the `display` CSS property from `flex` to `inline-flex`.
  */
  inline?: boolean;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<CenterProperties, "overrides">>;
  /**
  * TODO
  */
  variant?: OverridableValue<string & {}, CenterVariantOverrides>;
}
export interface CenterPropertiesDisables {}
export type CenterProperties = Filter<CenterPropertiesBase, CenterPropertiesDisables>;
export interface CenterJSX extends CenterEvents, CenterProperties {}
declare global {
  interface HTMLPlusCenterElement extends HTMLElement, CenterMethods, CenterProperties {}
  var HTMLPlusCenterElement: {
    prototype: HTMLPlusCenterElement;
    new (): HTMLPlusCenterElement;
  };
  interface HTMLElementTagNameMap {
    "plus-center": HTMLPlusCenterElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-center": CenterEvents & CenterAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (CenterEvents & CenterAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-center": CenterEvents & CenterAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (CenterEvents & CenterAttributes)>;
    }
  }
}
export type CenterElement = globalThis.HTMLPlusCenterElement;
export interface CenterVariantOverrides {}