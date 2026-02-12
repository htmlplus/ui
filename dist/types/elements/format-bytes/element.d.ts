import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * Converts bytes to a human-readable string. [Metric and IEC](https://wikipedia.org/wiki/Gigabyte) standard are supported.
 *
 * @stable
 *
 * @examples default, standard, formatting, decimals, unit, display, separator, signed, locale
 */
export declare class PlusFormatBytes extends PlusCore {
    /**
     * Specifies the unit will be shown as an abbreviation or not.
     */
    display?: 'long' | 'short';
    /**
     * Localizes the result. [More](https://mdn.io/number-format/constructor).
     */
    locale?: string | string[];
    /**
     * Specifies the number of decimal places.
     * Use an array to specify the minimum and maximum.
     */
    decimals?: number | [number, number];
    /**
     * Specifies the separator between number and unit.
     */
    separator?: string;
    /**
     * Shows plus sign for positive numbers.
     * If the difference is exactly zero a space character will be prepended instead for better alignment.
     */
    signed?: boolean;
    /**
     * Specifies the standard of units.
     * [Metric and IEC](https://wikipedia.org/wiki/Gigabyte) are supported.
     */
    standard?: 'IEC' | 'IEC_OCTET' | 'METRIC' | 'METRIC_OCTET';
    /**
     * Specifies the unit in which the result will be returned.
     */
    unit?: 'auto' | 'base' | 'kilo' | 'mega' | 'giga' | 'tera' | 'peta' | 'exa' | 'zetta' | 'yotta';
    /**
     * The bytes value to convert.
     */
    value?: number;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Variant](/variant-property) for details.
     */
    variant?: OverridableValue<never>;
    get formatted(): string;
    render(): string;
}

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusFormatBytesAttributesMapper = {
  'display': 'display';
  'locale': 'locale';
  'decimals': 'decimals';
  'separator': 'separator';
  'signed': 'signed';
  'standard': 'standard';
  'unit': 'unit';
  'value': 'value';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusFormatBytesOverridableKeys = 'variant';
export interface PlusFormatBytesDisables {}
export interface PlusFormatBytesOverrides {}
export type PlusFormatBytesAttributes = Filter<PlusFormatBytesAttributesOverridden, PlusFormatBytesDisables, PlusFormatBytesAttributesMapper>;
export type PlusFormatBytesAttributesOverridden = Override<PlusFormatBytesAttributesBase, PlusFormatBytesOverrides, PlusFormatBytesOverridableKeys, PlusFormatBytesAttributesMapper>;
export type PlusFormatBytesAttributesBase = {
  /**
  * Specifies the unit will be shown as an abbreviation or not.
  */
  "display"?: 'long' | 'short';
  /**
  * Localizes the result. [More](https://mdn.io/number-format/constructor).
  */
  "locale"?: string | string[];
  /**
  * Specifies the number of decimal places.
  * Use an array to specify the minimum and maximum.
  */
  "decimals"?: number | [number, number];
  /**
  * Specifies the separator between number and unit.
  */
  "separator"?: string;
  /**
  * Shows plus sign for positive numbers.
  * If the difference is exactly zero a space character will be prepended instead for better alignment.
  */
  "signed"?: boolean;
  /**
  * Specifies the standard of units.
  * [Metric and IEC](https://wikipedia.org/wiki/Gigabyte) are supported.
  */
  "standard"?: 'IEC' | 'IEC_OCTET' | 'METRIC' | 'METRIC_OCTET';
  /**
  * Specifies the unit in which the result will be returned.
  */
  "unit"?: 'auto' | 'base' | 'kilo' | 'mega' | 'giga' | 'tera' | 'peta' | 'exa' | 'zetta' | 'yotta';
  /**
  * The bytes value to convert.
  */
  "value"?: number;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusFormatBytesProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusFormatBytesEvents = Filter<PlusFormatBytesEventsBase, PlusFormatBytesDisables>;
export type PlusFormatBytesEventsBase = {};
export type PlusFormatBytesEventsJSX = Filter<PlusFormatBytesEventsBaseJSX, PlusFormatBytesDisables, {}>;
export type PlusFormatBytesEventsBaseJSX = {};
export type PlusFormatBytesMethods = Filter<PlusFormatBytesMethodsBase, PlusFormatBytesDisables>;
export type PlusFormatBytesMethodsBase = {};
export type PlusFormatBytesProperties = Filter<PlusFormatBytesPropertiesOverridden, PlusFormatBytesDisables>;
export type PlusFormatBytesPropertiesOverridden = Override<PlusFormatBytesPropertiesBase, PlusFormatBytesOverrides, PlusFormatBytesOverridableKeys>;
export type PlusFormatBytesPropertiesBase = {
  /**
  * Specifies the unit will be shown as an abbreviation or not.
  */
  display?: 'long' | 'short';
  /**
  * Localizes the result. [More](https://mdn.io/number-format/constructor).
  */
  locale?: string | string[];
  /**
  * Specifies the number of decimal places.
  * Use an array to specify the minimum and maximum.
  */
  decimals?: number | [number, number];
  /**
  * Specifies the separator between number and unit.
  */
  separator?: string;
  /**
  * Shows plus sign for positive numbers.
  * If the difference is exactly zero a space character will be prepended instead for better alignment.
  */
  signed?: boolean;
  /**
  * Specifies the standard of units.
  * [Metric and IEC](https://wikipedia.org/wiki/Gigabyte) are supported.
  */
  standard?: 'IEC' | 'IEC_OCTET' | 'METRIC' | 'METRIC_OCTET';
  /**
  * Specifies the unit in which the result will be returned.
  */
  unit?: 'auto' | 'base' | 'kilo' | 'mega' | 'giga' | 'tera' | 'peta' | 'exa' | 'zetta' | 'yotta';
  /**
  * The bytes value to convert.
  */
  value?: number;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusFormatBytesProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-format-bytes': {
      properties: PlusFormatBytesPropertiesOverridden;
    };
  }
}
export type PlusFormatBytesElement = globalThis.HTMLPlusFormatBytesElement;
export type PlusFormatBytesJSX = PlusFormatBytesAttributes & PlusFormatBytesEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-format-bytes": PlusFormatBytesJSX;
  }
}
declare global {
  interface HTMLPlusFormatBytesElement extends HTMLElement, PlusFormatBytesMethods, PlusFormatBytesProperties {}
  var HTMLPlusFormatBytesElement: {
    prototype: HTMLPlusFormatBytesElement;
    new (): HTMLPlusFormatBytesElement;
  };
  interface HTMLElementTagNameMap {
    "plus-format-bytes": HTMLPlusFormatBytesElement;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-format-bytes": PlusFormatBytesJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusFormatBytesElement>, HTMLPlusFormatBytesElement>, keyof PlusFormatBytesJSX>;
    }
  }
}