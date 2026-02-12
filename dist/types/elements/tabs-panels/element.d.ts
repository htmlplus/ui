import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * TODO: This element contains panels.
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusTabsPanels extends PlusCore {
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
export type PlusTabsPanelsAttributesMapper = {
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusTabsPanelsOverridableKeys = 'variant';
export interface PlusTabsPanelsDisables {}
export interface PlusTabsPanelsOverrides {}
export type PlusTabsPanelsAttributes = Filter<PlusTabsPanelsAttributesOverridden, PlusTabsPanelsDisables, PlusTabsPanelsAttributesMapper>;
export type PlusTabsPanelsAttributesOverridden = Override<PlusTabsPanelsAttributesBase, PlusTabsPanelsOverrides, PlusTabsPanelsOverridableKeys, PlusTabsPanelsAttributesMapper>;
export type PlusTabsPanelsAttributesBase = {
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusTabsPanelsProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusTabsPanelsEvents = Filter<PlusTabsPanelsEventsBase, PlusTabsPanelsDisables>;
export type PlusTabsPanelsEventsBase = {};
export type PlusTabsPanelsEventsJSX = Filter<PlusTabsPanelsEventsBaseJSX, PlusTabsPanelsDisables, {}>;
export type PlusTabsPanelsEventsBaseJSX = {};
export type PlusTabsPanelsMethods = Filter<PlusTabsPanelsMethodsBase, PlusTabsPanelsDisables>;
export type PlusTabsPanelsMethodsBase = {};
export type PlusTabsPanelsProperties = Filter<PlusTabsPanelsPropertiesOverridden, PlusTabsPanelsDisables>;
export type PlusTabsPanelsPropertiesOverridden = Override<PlusTabsPanelsPropertiesBase, PlusTabsPanelsOverrides, PlusTabsPanelsOverridableKeys>;
export type PlusTabsPanelsPropertiesBase = {
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusTabsPanelsProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-tabs-panels': {
      properties: PlusTabsPanelsPropertiesOverridden;
    };
  }
}
export type PlusTabsPanelsElement = globalThis.HTMLPlusTabsPanelsElement;
export type PlusTabsPanelsJSX = PlusTabsPanelsAttributes & PlusTabsPanelsEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-tabs-panels": PlusTabsPanelsJSX;
  }
}
declare global {
  interface HTMLPlusTabsPanelsElement extends HTMLElement, PlusTabsPanelsMethods, PlusTabsPanelsProperties {}
  var HTMLPlusTabsPanelsElement: {
    prototype: HTMLPlusTabsPanelsElement;
    new (): HTMLPlusTabsPanelsElement;
  };
  interface HTMLElementTagNameMap {
    "plus-tabs-panels": HTMLPlusTabsPanelsElement;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-panels": PlusTabsPanelsJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusTabsPanelsElement>, HTMLPlusTabsPanelsElement>, keyof PlusTabsPanelsJSX>;
    }
  }
}