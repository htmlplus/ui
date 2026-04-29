import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
import { Context } from '../tabs/context';
/**
 * TODO: Tabs make it easy to switch between different views.
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusTabsTab extends PlusCore {
    /**
     * A Tab can be disabled by setting disabled property.
     */
    disabled?: boolean;
    /**
     * Provides your own value.
     */
    value?: string;
    /**
     * TODO
     */
    get active(): boolean;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Variant](/variant-property) for details.
     */
    variant?: OverridableValue<never>;
    parent?: Context;
    onClick(): void;
    render(): any;
}

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusTabsTabAttributesMapper = {
  'disabled': 'disabled';
  'value': 'value';
  'active': 'active';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusTabsTabOverridableKeys = 'variant';
export interface PlusTabsTabDisables {}
export interface PlusTabsTabOverrides {}
export type PlusTabsTabAttributes = Filter<PlusTabsTabAttributesOverridden, PlusTabsTabDisables, PlusTabsTabAttributesMapper>;
export type PlusTabsTabAttributesOverridden = Override<PlusTabsTabAttributesBase, PlusTabsTabOverrides, PlusTabsTabOverridableKeys, PlusTabsTabAttributesMapper>;
export type PlusTabsTabAttributesBase = {
  /**
  * A Tab can be disabled by setting disabled property.
  */
  "disabled"?: boolean;
  /**
  * Provides your own value.
  */
  "value"?: string;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusTabsTabProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusTabsTabEvents = Filter<PlusTabsTabEventsBase, PlusTabsTabDisables>;
export type PlusTabsTabEventsBase = {};
export type PlusTabsTabEventsJSX = Filter<PlusTabsTabEventsBaseJSX, PlusTabsTabDisables, {}>;
export type PlusTabsTabEventsBaseJSX = {};
export type PlusTabsTabMethods = Filter<PlusTabsTabMethodsBase, PlusTabsTabDisables>;
export type PlusTabsTabMethodsBase = {};
export type PlusTabsTabProperties = Filter<PlusTabsTabPropertiesOverridden, PlusTabsTabDisables>;
export type PlusTabsTabPropertiesOverridden = Override<PlusTabsTabPropertiesBase, PlusTabsTabOverrides, PlusTabsTabOverridableKeys>;
export type PlusTabsTabPropertiesBase = {
  /**
  * A Tab can be disabled by setting disabled property.
  */
  disabled?: boolean;
  /**
  * Provides your own value.
  */
  value?: string;
  /**
  * TODO
  */
  active;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusTabsTabProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-tabs-tab': {
      properties: PlusTabsTabPropertiesOverridden;
    };
  }
}
export type PlusTabsTabElement = globalThis.HTMLPlusTabsTabElement;
export type PlusTabsTabJSX = PlusTabsTabAttributes & PlusTabsTabEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-tabs-tab": PlusTabsTabJSX;
  }
}
declare global {
  interface HTMLPlusTabsTabElement extends HTMLElement, PlusTabsTabMethods, PlusTabsTabProperties {}
  var HTMLPlusTabsTabElement: {
    prototype: HTMLPlusTabsTabElement;
    new (): HTMLPlusTabsTabElement;
  };
  interface HTMLElementTagNameMap {
    "plus-tabs-tab": HTMLPlusTabsTabElement;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-tab": PlusTabsTabJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusTabsTabElement>, HTMLPlusTabsTabElement>, keyof PlusTabsTabJSX>;
    }
  }
}