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
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Variant](/variant-property) for details.
     */
    variant?: OverridableValue<never>;
    render(): any;
}

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusCenterAttributesMapper = {
  'inline': 'inline';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusCenterOverridableKeys = 'variant';
export interface PlusCenterDisables {}
export interface PlusCenterOverrides {}
export type PlusCenterAttributes = Filter<PlusCenterAttributesOverridden, PlusCenterDisables, PlusCenterAttributesMapper>;
export type PlusCenterAttributesOverridden = Override<PlusCenterAttributesBase, PlusCenterOverrides, PlusCenterOverridableKeys, PlusCenterAttributesMapper>;
export type PlusCenterAttributesBase = {
  /**
  * Converts the `display` CSS property from `flex` to `inline-flex`.
  */
  "inline"?: boolean;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusCenterProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusCenterEvents = Filter<PlusCenterEventsBase, PlusCenterDisables>;
export type PlusCenterEventsBase = {};
export type PlusCenterEventsJSX = Filter<PlusCenterEventsBaseJSX, PlusCenterDisables, {}>;
export type PlusCenterEventsBaseJSX = {};
export type PlusCenterMethods = Filter<PlusCenterMethodsBase, PlusCenterDisables>;
export type PlusCenterMethodsBase = {};
export type PlusCenterProperties = Filter<PlusCenterPropertiesOverridden, PlusCenterDisables>;
export type PlusCenterPropertiesOverridden = Override<PlusCenterPropertiesBase, PlusCenterOverrides, PlusCenterOverridableKeys>;
export type PlusCenterPropertiesBase = {
  /**
  * Converts the `display` CSS property from `flex` to `inline-flex`.
  */
  inline?: boolean;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusCenterProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-center': {
      properties: PlusCenterPropertiesOverridden;
    };
  }
}
export type PlusCenterElement = globalThis.HTMLPlusCenterElement;
export type PlusCenterJSX = PlusCenterAttributes & PlusCenterEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-center": PlusCenterJSX;
  }
}
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
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-center": PlusCenterJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusCenterElement>, HTMLPlusCenterElement>, keyof PlusCenterJSX>;
    }
  }
}