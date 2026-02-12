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
export type PlusProgressBarStackAttributesMapper = {
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusProgressBarStackOverridableKeys = 'variant';
export interface PlusProgressBarStackDisables {}
export interface PlusProgressBarStackOverrides {}
export type PlusProgressBarStackAttributes = Filter<PlusProgressBarStackAttributesOverridden, PlusProgressBarStackDisables, PlusProgressBarStackAttributesMapper>;
export type PlusProgressBarStackAttributesOverridden = Override<PlusProgressBarStackAttributesBase, PlusProgressBarStackOverrides, PlusProgressBarStackOverridableKeys, PlusProgressBarStackAttributesMapper>;
export type PlusProgressBarStackAttributesBase = {
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusProgressBarStackProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusProgressBarStackEvents = Filter<PlusProgressBarStackEventsBase, PlusProgressBarStackDisables>;
export type PlusProgressBarStackEventsBase = {};
export type PlusProgressBarStackEventsJSX = Filter<PlusProgressBarStackEventsBaseJSX, PlusProgressBarStackDisables, {}>;
export type PlusProgressBarStackEventsBaseJSX = {};
export type PlusProgressBarStackMethods = Filter<PlusProgressBarStackMethodsBase, PlusProgressBarStackDisables>;
export type PlusProgressBarStackMethodsBase = {};
export type PlusProgressBarStackProperties = Filter<PlusProgressBarStackPropertiesOverridden, PlusProgressBarStackDisables>;
export type PlusProgressBarStackPropertiesOverridden = Override<PlusProgressBarStackPropertiesBase, PlusProgressBarStackOverrides, PlusProgressBarStackOverridableKeys>;
export type PlusProgressBarStackPropertiesBase = {
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusProgressBarStackProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-progress-bar-stack': {
      properties: PlusProgressBarStackPropertiesOverridden;
    };
  }
}
export type PlusProgressBarStackElement = globalThis.HTMLPlusProgressBarStackElement;
export type PlusProgressBarStackJSX = PlusProgressBarStackAttributes & PlusProgressBarStackEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-progress-bar-stack": PlusProgressBarStackJSX;
  }
}
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
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-progress-bar-stack": PlusProgressBarStackJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusProgressBarStackElement>, HTMLPlusProgressBarStackElement>, keyof PlusProgressBarStackJSX>;
    }
  }
}