import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * A container for arranging elements vertically or horizontally.
 *
 * @slot default - The default slot.
 *
 * @examples default, vertical, divider
 */
export declare class PlusStack extends PlusCore {
    /**
     * The gap between items.
     */
    gap?: string | number;
    /**
     * The alignment of items along the cross axis.
     */
    items?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
    /**
     * The distribution of items along the main axis.
     */
    justify?: 'start' | 'end' | 'center' | 'stretch' | 'normal' | 'between' | 'around' | 'evenly';
    /**
     * Whether to reverse the order of items.
     */
    reverse: boolean;
    /**
     * Whether the stack is vertical.
     */
    vertical: boolean;
    /**
     * Controls whether items should wrap onto multiple lines.
     */
    wrap?: boolean | 'reverse';
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
            'align-items': string;
            display: string;
            'flex-direction': string;
            gap: string;
            'justify-content': string;
            'flex-wrap': string;
        };
    };
    render(): any;
}

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusStackAttributesMapper = {
  'gap': 'gap';
  'items': 'items';
  'justify': 'justify';
  'reverse': 'reverse';
  'vertical': 'vertical';
  'wrap': 'wrap';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusStackOverridableKeys = 'variant';
export interface PlusStackDisables {}
export interface PlusStackOverrides {}
export type PlusStackAttributes = Filter<PlusStackAttributesOverridden, PlusStackDisables, PlusStackAttributesMapper>;
export type PlusStackAttributesOverridden = Override<PlusStackAttributesBase, PlusStackOverrides, PlusStackOverridableKeys, PlusStackAttributesMapper>;
export type PlusStackAttributesBase = {
  /**
  * The gap between items.
  */
  "gap"?: string | number;
  /**
  * The alignment of items along the cross axis.
  */
  "items"?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  /**
  * The distribution of items along the main axis.
  */
  "justify"?: 'start' | 'end' | 'center' | 'stretch' | 'normal' | 'between' | 'around' | 'evenly';
  /**
  * Whether to reverse the order of items.
  */
  "reverse"?: boolean;
  /**
  * Whether the stack is vertical.
  */
  "vertical"?: boolean;
  /**
  * Controls whether items should wrap onto multiple lines.
  */
  "wrap"?: boolean | 'reverse';
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusStackProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusStackEvents = Filter<PlusStackEventsBase, PlusStackDisables>;
export type PlusStackEventsBase = {};
export type PlusStackEventsJSX = Filter<PlusStackEventsBaseJSX, PlusStackDisables, {}>;
export type PlusStackEventsBaseJSX = {};
export type PlusStackMethods = Filter<PlusStackMethodsBase, PlusStackDisables>;
export type PlusStackMethodsBase = {};
export type PlusStackProperties = Filter<PlusStackPropertiesOverridden, PlusStackDisables>;
export type PlusStackPropertiesOverridden = Override<PlusStackPropertiesBase, PlusStackOverrides, PlusStackOverridableKeys>;
export type PlusStackPropertiesBase = {
  /**
  * The gap between items.
  */
  gap?: string | number;
  /**
  * The alignment of items along the cross axis.
  */
  items?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  /**
  * The distribution of items along the main axis.
  */
  justify?: 'start' | 'end' | 'center' | 'stretch' | 'normal' | 'between' | 'around' | 'evenly';
  /**
  * Whether to reverse the order of items.
  */
  reverse?: boolean;
  /**
  * Whether the stack is vertical.
  */
  vertical?: boolean;
  /**
  * Controls whether items should wrap onto multiple lines.
  */
  wrap?: boolean | 'reverse';
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusStackProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-stack': {
      properties: PlusStackPropertiesOverridden;
    };
  }
}
export type PlusStackElement = globalThis.HTMLPlusStackElement;
export type PlusStackJSX = PlusStackAttributes & PlusStackEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-stack": PlusStackJSX;
  }
}
declare global {
  interface HTMLPlusStackElement extends HTMLElement, PlusStackMethods, PlusStackProperties {}
  var HTMLPlusStackElement: {
    prototype: HTMLPlusStackElement;
    new (): HTMLPlusStackElement;
  };
  interface HTMLElementTagNameMap {
    "plus-stack": HTMLPlusStackElement;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-stack": PlusStackJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusStackElement>, HTMLPlusStackElement>, keyof PlusStackJSX>;
    }
  }
}