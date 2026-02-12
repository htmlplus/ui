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
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Variant](/variant-property) for details.
     */
    variant?: OverridableValue<never>;
    state: Context;
    open(target: HTMLElement): void;
    render(): any;
}

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusAccordionsAttributesMapper = {
  'persistent': 'persistent';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusAccordionsOverridableKeys = 'variant';
export interface PlusAccordionsDisables {}
export interface PlusAccordionsOverrides {}
export type PlusAccordionsAttributes = Filter<PlusAccordionsAttributesOverridden, PlusAccordionsDisables, PlusAccordionsAttributesMapper>;
export type PlusAccordionsAttributesOverridden = Override<PlusAccordionsAttributesBase, PlusAccordionsOverrides, PlusAccordionsOverridableKeys, PlusAccordionsAttributesMapper>;
export type PlusAccordionsAttributesBase = {
  /**
  * Specifies that only one accordion can be open.
  */
  "persistent"?: boolean;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusAccordionsProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusAccordionsEvents = Filter<PlusAccordionsEventsBase, PlusAccordionsDisables>;
export type PlusAccordionsEventsBase = {};
export type PlusAccordionsEventsJSX = Filter<PlusAccordionsEventsBaseJSX, PlusAccordionsDisables, {}>;
export type PlusAccordionsEventsBaseJSX = {};
export type PlusAccordionsMethods = Filter<PlusAccordionsMethodsBase, PlusAccordionsDisables>;
export type PlusAccordionsMethodsBase = {};
export type PlusAccordionsProperties = Filter<PlusAccordionsPropertiesOverridden, PlusAccordionsDisables>;
export type PlusAccordionsPropertiesOverridden = Override<PlusAccordionsPropertiesBase, PlusAccordionsOverrides, PlusAccordionsOverridableKeys>;
export type PlusAccordionsPropertiesBase = {
  /**
  * Specifies that only one accordion can be open.
  */
  persistent?: boolean;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusAccordionsProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-accordions': {
      properties: PlusAccordionsPropertiesOverridden;
    };
  }
}
export type PlusAccordionsElement = globalThis.HTMLPlusAccordionsElement;
export type PlusAccordionsJSX = PlusAccordionsAttributes & PlusAccordionsEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-accordions": PlusAccordionsJSX;
  }
}
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
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-accordions": PlusAccordionsJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusAccordionsElement>, HTMLPlusAccordionsElement>, keyof PlusAccordionsJSX>;
    }
  }
}