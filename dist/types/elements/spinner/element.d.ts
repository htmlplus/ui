import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint, PlusColor } from '../../types';
import { PlusSpinnerType } from './types';
/**
 * An indicator of progress and activity.
 *
 * @stable
 *
 * @examples default, size, custom-size, color, type, customized
 */
export declare class PlusSpinner extends PlusCore {
    /**
     * Specifies the color.
     */
    color?: OverridableValue<PlusColor>;
    /**
     * Specifies the size of the spinner.
     */
    size?: OverridableValue<'sm' | 'md' | 'lg' | 'inherit'>;
    /**
     * Specifies which variant of the spinner to use.
     */
    type?: PlusSpinnerType;
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
            color: string;
        };
    };
    get elements(): number[];
    render(): any;
}

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusSpinnerAttributesMapper = {
  'color': 'color';
  'size': 'size';
  'type': 'type';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusSpinnerOverridableKeys = 'color' | 'size' | 'variant';
export interface PlusSpinnerDisables {}
export interface PlusSpinnerOverrides {}
export type PlusSpinnerAttributes = Filter<PlusSpinnerAttributesOverridden, PlusSpinnerDisables, PlusSpinnerAttributesMapper>;
export type PlusSpinnerAttributesOverridden = Override<PlusSpinnerAttributesBase, PlusSpinnerOverrides, PlusSpinnerOverridableKeys, PlusSpinnerAttributesMapper>;
export type PlusSpinnerAttributesBase = {
  /**
  * Specifies the color.
  */
  "color"?: OverridableValue<PlusColor>;
  /**
  * Specifies the size of the spinner.
  */
  "size"?: OverridableValue<'sm' | 'md' | 'lg' | 'inherit'>;
  /**
  * Specifies which variant of the spinner to use.
  */
  "type"?: PlusSpinnerType;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusSpinnerProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusSpinnerEvents = Filter<PlusSpinnerEventsBase, PlusSpinnerDisables>;
export type PlusSpinnerEventsBase = {};
export type PlusSpinnerEventsJSX = Filter<PlusSpinnerEventsBaseJSX, PlusSpinnerDisables, {}>;
export type PlusSpinnerEventsBaseJSX = {};
export type PlusSpinnerMethods = Filter<PlusSpinnerMethodsBase, PlusSpinnerDisables>;
export type PlusSpinnerMethodsBase = {};
export type PlusSpinnerProperties = Filter<PlusSpinnerPropertiesOverridden, PlusSpinnerDisables>;
export type PlusSpinnerPropertiesOverridden = Override<PlusSpinnerPropertiesBase, PlusSpinnerOverrides, PlusSpinnerOverridableKeys>;
export type PlusSpinnerPropertiesBase = {
  /**
  * Specifies the color.
  */
  color?: OverridableValue<PlusColor>;
  /**
  * Specifies the size of the spinner.
  */
  size?: OverridableValue<'sm' | 'md' | 'lg' | 'inherit'>;
  /**
  * Specifies which variant of the spinner to use.
  */
  type?: PlusSpinnerType;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusSpinnerProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-spinner': {
      properties: PlusSpinnerPropertiesOverridden;
    };
  }
}
export type PlusSpinnerElement = globalThis.HTMLPlusSpinnerElement;
export type PlusSpinnerJSX = PlusSpinnerAttributes & PlusSpinnerEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-spinner": PlusSpinnerJSX;
  }
}
declare global {
  interface HTMLPlusSpinnerElement extends HTMLElement, PlusSpinnerMethods, PlusSpinnerProperties {}
  var HTMLPlusSpinnerElement: {
    prototype: HTMLPlusSpinnerElement;
    new (): HTMLPlusSpinnerElement;
  };
  interface HTMLElementTagNameMap {
    "plus-spinner": HTMLPlusSpinnerElement;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-spinner": PlusSpinnerJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusSpinnerElement>, HTMLPlusSpinnerElement>, keyof PlusSpinnerJSX>;
    }
  }
}