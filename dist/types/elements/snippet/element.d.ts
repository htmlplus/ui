import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint, PlusColor } from '../../types';
/**
 * A component that can be used to display inline code snippets.
 *
 * @part copy    - The copy element.
 * @part default - The default element.
 * @part pre     - The pre element.
 * @part symbol  - The symbol element.
 *
 * @slot copy    - The copy slot.
 * @slot default - The default slot.
 *
 * @examples default, symbol, color, custom-color
 */
export declare class PlusSnippet extends PlusCore {
    /**
     * Specifies the color.
     */
    color?: OverridableValue<PlusColor>;
    /**
     * Specifies the symbol.
     */
    symbol: string;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Variant](/variant-property) for details.
     */
    variant?: OverridableValue<never>;
    get style(): {
        ':host': {
            '--plus-snippet-color': string;
        };
    };
    render(): any;
}

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusSnippetAttributesMapper = {
  'color': 'color';
  'symbol': 'symbol';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusSnippetOverridableKeys = 'color' | 'variant';
export interface PlusSnippetDisables {}
export interface PlusSnippetOverrides {}
export type PlusSnippetAttributes = Filter<PlusSnippetAttributesOverridden, PlusSnippetDisables, PlusSnippetAttributesMapper>;
export type PlusSnippetAttributesOverridden = Override<PlusSnippetAttributesBase, PlusSnippetOverrides, PlusSnippetOverridableKeys, PlusSnippetAttributesMapper>;
export type PlusSnippetAttributesBase = {
  /**
  * Specifies the color.
  */
  "color"?: OverridableValue<PlusColor>;
  /**
  * Specifies the symbol.
  */
  "symbol"?: string;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusSnippetProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusSnippetEvents = Filter<PlusSnippetEventsBase, PlusSnippetDisables>;
export type PlusSnippetEventsBase = {};
export type PlusSnippetEventsJSX = Filter<PlusSnippetEventsBaseJSX, PlusSnippetDisables, {}>;
export type PlusSnippetEventsBaseJSX = {};
export type PlusSnippetMethods = Filter<PlusSnippetMethodsBase, PlusSnippetDisables>;
export type PlusSnippetMethodsBase = {};
export type PlusSnippetProperties = Filter<PlusSnippetPropertiesOverridden, PlusSnippetDisables>;
export type PlusSnippetPropertiesOverridden = Override<PlusSnippetPropertiesBase, PlusSnippetOverrides, PlusSnippetOverridableKeys>;
export type PlusSnippetPropertiesBase = {
  /**
  * Specifies the color.
  */
  color?: OverridableValue<PlusColor>;
  /**
  * Specifies the symbol.
  */
  symbol?: string;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusSnippetProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-snippet': {
      properties: PlusSnippetPropertiesOverridden;
    };
  }
}
export type PlusSnippetElement = globalThis.HTMLPlusSnippetElement;
export type PlusSnippetJSX = PlusSnippetAttributes & PlusSnippetEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-snippet": PlusSnippetJSX;
  }
}
declare global {
  interface HTMLPlusSnippetElement extends HTMLElement, PlusSnippetMethods, PlusSnippetProperties {}
  var HTMLPlusSnippetElement: {
    prototype: HTMLPlusSnippetElement;
    new (): HTMLPlusSnippetElement;
  };
  interface HTMLElementTagNameMap {
    "plus-snippet": HTMLPlusSnippetElement;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-snippet": PlusSnippetJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusSnippetElement>, HTMLPlusSnippetElement>, keyof PlusSnippetJSX>;
    }
  }
}