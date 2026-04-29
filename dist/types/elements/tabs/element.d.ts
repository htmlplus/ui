import { EventEmitter, OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
import { Context } from './context';
/**
 * Organizes content across different screens.
 *
 * @development
 *
 * @slot default - The default slot.
 *
 * @examples default, disabled, grow, justify, reverse, below, vertical
 */
export declare class PlusTabs extends PlusCore {
    /**
     * Provides your own value.
     */
    value?: string;
    /**
     * You can use vertical property for vertical mode.
     */
    vertical?: boolean;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Variant](/variant-property) for details.
     */
    variant?: OverridableValue<never>;
    /**
     * Fired when the value changes.
     */
    plusChange: EventEmitter<string>;
    get state(): Context;
    change(value: string): void;
    render(): any;
}

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusTabsAttributesMapper = {
  'value': 'value';
  'vertical': 'vertical';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusTabsOverridableKeys = 'variant';
export interface PlusTabsDisables {}
export interface PlusTabsOverrides {}
export type PlusTabsAttributes = Filter<PlusTabsAttributesOverridden, PlusTabsDisables, PlusTabsAttributesMapper>;
export type PlusTabsAttributesOverridden = Override<PlusTabsAttributesBase, PlusTabsOverrides, PlusTabsOverridableKeys, PlusTabsAttributesMapper>;
export type PlusTabsAttributesBase = {
  /**
  * Provides your own value.
  */
  "value"?: string;
  /**
  * You can use vertical property for vertical mode.
  */
  "vertical"?: boolean;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusTabsProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusTabsEvents = Filter<PlusTabsEventsBase, PlusTabsDisables>;
export type PlusTabsEventsBase = {
  /**
  * Fired when the value changes.
  */
  plusChange?: (event: CustomEvent<string>) => void;
};
export type PlusTabsEventsJSX = Filter<PlusTabsEventsBaseJSX, PlusTabsDisables, {
  plusChange: 'onPlusChange';
}>;
export type PlusTabsEventsBaseJSX = {
  /**
  * Fired when the value changes.
  */
  onPlusChange?: (event: CustomEvent<string>) => void;
};
export type PlusTabsMethods = Filter<PlusTabsMethodsBase, PlusTabsDisables>;
export type PlusTabsMethodsBase = {};
export type PlusTabsProperties = Filter<PlusTabsPropertiesOverridden, PlusTabsDisables>;
export type PlusTabsPropertiesOverridden = Override<PlusTabsPropertiesBase, PlusTabsOverrides, PlusTabsOverridableKeys>;
export type PlusTabsPropertiesBase = {
  /**
  * Provides your own value.
  */
  value?: string;
  /**
  * You can use vertical property for vertical mode.
  */
  vertical?: boolean;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusTabsProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-tabs': {
      properties: PlusTabsPropertiesOverridden;
    };
  }
}
export type PlusTabsElement = globalThis.HTMLPlusTabsElement;
export type PlusTabsJSX = PlusTabsAttributes & PlusTabsEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-tabs": PlusTabsJSX;
  }
}
declare global {
  interface HTMLPlusTabsElement extends HTMLElement, PlusTabsMethods, PlusTabsProperties {}
  var HTMLPlusTabsElement: {
    prototype: HTMLPlusTabsElement;
    new (): HTMLPlusTabsElement;
  };
  interface HTMLElementTagNameMap {
    "plus-tabs": HTMLPlusTabsElement;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs": PlusTabsJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusTabsElement>, HTMLPlusTabsElement>, keyof PlusTabsJSX>;
    }
  }
}