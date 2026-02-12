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
export type PlusCardBodyAttributesMapper = {
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusCardBodyOverridableKeys = 'variant';
export interface PlusCardBodyDisables {}
export interface PlusCardBodyOverrides {}
export type PlusCardBodyAttributes = Filter<PlusCardBodyAttributesOverridden, PlusCardBodyDisables, PlusCardBodyAttributesMapper>;
export type PlusCardBodyAttributesOverridden = Override<PlusCardBodyAttributesBase, PlusCardBodyOverrides, PlusCardBodyOverridableKeys, PlusCardBodyAttributesMapper>;
export type PlusCardBodyAttributesBase = {
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusCardBodyProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusCardBodyEvents = Filter<PlusCardBodyEventsBase, PlusCardBodyDisables>;
export type PlusCardBodyEventsBase = {};
export type PlusCardBodyEventsJSX = Filter<PlusCardBodyEventsBaseJSX, PlusCardBodyDisables, {}>;
export type PlusCardBodyEventsBaseJSX = {};
export type PlusCardBodyMethods = Filter<PlusCardBodyMethodsBase, PlusCardBodyDisables>;
export type PlusCardBodyMethodsBase = {};
export type PlusCardBodyProperties = Filter<PlusCardBodyPropertiesOverridden, PlusCardBodyDisables>;
export type PlusCardBodyPropertiesOverridden = Override<PlusCardBodyPropertiesBase, PlusCardBodyOverrides, PlusCardBodyOverridableKeys>;
export type PlusCardBodyPropertiesBase = {
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusCardBodyProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-card-body': {
      properties: PlusCardBodyPropertiesOverridden;
    };
  }
}
export type PlusCardBodyElement = globalThis.HTMLPlusCardBodyElement;
export type PlusCardBodyJSX = PlusCardBodyAttributes & PlusCardBodyEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-card-body": PlusCardBodyJSX;
  }
}
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
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-card-body": PlusCardBodyJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusCardBodyElement>, HTMLPlusCardBodyElement>, keyof PlusCardBodyJSX>;
    }
  }
}