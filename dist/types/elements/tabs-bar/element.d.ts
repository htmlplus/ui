import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * TODO: Arranges tabs within a bar.
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusTabsBar extends PlusCore {
    /**
     * Grows tabs as much as all available space (occupies all horizontal space).
     */
    grow?: boolean;
    /**
     * Specifies how the tabs are aligned.
     */
    justify?: 'start' | 'center' | 'end';
    /**
     * Reverses the arrangement of the tabs.
     */
    reverse?: boolean;
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

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusTabsBarAttributesMapper = {
  'grow': 'grow';
  'justify': 'justify';
  'reverse': 'reverse';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusTabsBarOverridableKeys = 'variant';
export interface PlusTabsBarDisables {}
export interface PlusTabsBarOverrides {}
export type PlusTabsBarAttributes = Filter<PlusTabsBarAttributesOverridden, PlusTabsBarDisables, PlusTabsBarAttributesMapper>;
export type PlusTabsBarAttributesOverridden = Override<PlusTabsBarAttributesBase, PlusTabsBarOverrides, PlusTabsBarOverridableKeys, PlusTabsBarAttributesMapper>;
export type PlusTabsBarAttributesBase = {
  /**
  * Grows tabs as much as all available space (occupies all horizontal space).
  */
  "grow"?: boolean;
  /**
  * Specifies how the tabs are aligned.
  */
  "justify"?: 'start' | 'center' | 'end';
  /**
  * Reverses the arrangement of the tabs.
  */
  "reverse"?: boolean;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusTabsBarProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusTabsBarEvents = Filter<PlusTabsBarEventsBase, PlusTabsBarDisables>;
export type PlusTabsBarEventsBase = {};
export type PlusTabsBarEventsJSX = Filter<PlusTabsBarEventsBaseJSX, PlusTabsBarDisables, {}>;
export type PlusTabsBarEventsBaseJSX = {};
export type PlusTabsBarMethods = Filter<PlusTabsBarMethodsBase, PlusTabsBarDisables>;
export type PlusTabsBarMethodsBase = {};
export type PlusTabsBarProperties = Filter<PlusTabsBarPropertiesOverridden, PlusTabsBarDisables>;
export type PlusTabsBarPropertiesOverridden = Override<PlusTabsBarPropertiesBase, PlusTabsBarOverrides, PlusTabsBarOverridableKeys>;
export type PlusTabsBarPropertiesBase = {
  /**
  * Grows tabs as much as all available space (occupies all horizontal space).
  */
  grow?: boolean;
  /**
  * Specifies how the tabs are aligned.
  */
  justify?: 'start' | 'center' | 'end';
  /**
  * Reverses the arrangement of the tabs.
  */
  reverse?: boolean;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusTabsBarProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-tabs-bar': {
      properties: PlusTabsBarPropertiesOverridden;
    };
  }
}
export type PlusTabsBarElement = globalThis.HTMLPlusTabsBarElement;
export type PlusTabsBarJSX = PlusTabsBarAttributes & PlusTabsBarEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-tabs-bar": PlusTabsBarJSX;
  }
}
declare global {
  interface HTMLPlusTabsBarElement extends HTMLElement, PlusTabsBarMethods, PlusTabsBarProperties {}
  var HTMLPlusTabsBarElement: {
    prototype: HTMLPlusTabsBarElement;
    new (): HTMLPlusTabsBarElement;
  };
  interface HTMLElementTagNameMap {
    "plus-tabs-bar": HTMLPlusTabsBarElement;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-bar": PlusTabsBarJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusTabsBarElement>, HTMLPlusTabsBarElement>, keyof PlusTabsBarJSX>;
    }
  }
}