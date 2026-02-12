import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * Cards contain content and actions about a single subject.
 *
 * @slot default - The default slot.
 *
 * @examples default, elevation, outlined, border-color, border-width, tile, background-color, customized
 */
export declare class PlusCard extends PlusCore {
    /**
     * If you want the card to have shadow, use the elevation property,
     * And select the property value between `1` and `24`.
     */
    elevation?: OverridableValue<number>;
    /**
     * Use the flat property to neutralize elevation.
     */
    flat?: boolean;
    /**
     * If you want the card to have border, use the outlined property.
     */
    outlined?: boolean;
    /**
     * Use tile property to neutralize border-radius.
     */
    tile?: boolean;
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
export type PlusCardAttributesMapper = {
  'elevation': 'elevation';
  'flat': 'flat';
  'outlined': 'outlined';
  'tile': 'tile';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusCardOverridableKeys = 'elevation' | 'variant';
export interface PlusCardDisables {}
export interface PlusCardOverrides {}
export type PlusCardAttributes = Filter<PlusCardAttributesOverridden, PlusCardDisables, PlusCardAttributesMapper>;
export type PlusCardAttributesOverridden = Override<PlusCardAttributesBase, PlusCardOverrides, PlusCardOverridableKeys, PlusCardAttributesMapper>;
export type PlusCardAttributesBase = {
  /**
  * If you want the card to have shadow, use the elevation property,
  * And select the property value between `1` and `24`.
  */
  "elevation"?: OverridableValue<number>;
  /**
  * Use the flat property to neutralize elevation.
  */
  "flat"?: boolean;
  /**
  * If you want the card to have border, use the outlined property.
  */
  "outlined"?: boolean;
  /**
  * Use tile property to neutralize border-radius.
  */
  "tile"?: boolean;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusCardProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusCardEvents = Filter<PlusCardEventsBase, PlusCardDisables>;
export type PlusCardEventsBase = {};
export type PlusCardEventsJSX = Filter<PlusCardEventsBaseJSX, PlusCardDisables, {}>;
export type PlusCardEventsBaseJSX = {};
export type PlusCardMethods = Filter<PlusCardMethodsBase, PlusCardDisables>;
export type PlusCardMethodsBase = {};
export type PlusCardProperties = Filter<PlusCardPropertiesOverridden, PlusCardDisables>;
export type PlusCardPropertiesOverridden = Override<PlusCardPropertiesBase, PlusCardOverrides, PlusCardOverridableKeys>;
export type PlusCardPropertiesBase = {
  /**
  * If you want the card to have shadow, use the elevation property,
  * And select the property value between `1` and `24`.
  */
  elevation?: OverridableValue<number>;
  /**
  * Use the flat property to neutralize elevation.
  */
  flat?: boolean;
  /**
  * If you want the card to have border, use the outlined property.
  */
  outlined?: boolean;
  /**
  * Use tile property to neutralize border-radius.
  */
  tile?: boolean;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusCardProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-card': {
      properties: PlusCardPropertiesOverridden;
    };
  }
}
export type PlusCardElement = globalThis.HTMLPlusCardElement;
export type PlusCardJSX = PlusCardAttributes & PlusCardEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-card": PlusCardJSX;
  }
}
declare global {
  interface HTMLPlusCardElement extends HTMLElement, PlusCardMethods, PlusCardProperties {}
  var HTMLPlusCardElement: {
    prototype: HTMLPlusCardElement;
    new (): HTMLPlusCardElement;
  };
  interface HTMLElementTagNameMap {
    "plus-card": HTMLPlusCardElement;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-card": PlusCardJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusCardElement>, HTMLPlusCardElement>, keyof PlusCardJSX>;
    }
  }
}