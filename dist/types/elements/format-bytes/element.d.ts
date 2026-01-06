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
     * TODO
     */
    variant?: OverridableValue<never>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    get formatted(): string;
    render(): string;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface PlusFormatBytesAttributesBase {
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
  * TODO
  */
  "variant"?: OverridableValue<never, PlusFormatBytesVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusFormatBytesProperties, "overrides">>;
}
export interface PlusFormatBytesAttributesDisables {}
export type PlusFormatBytesAttributes = Filter<PlusFormatBytesAttributesBase, PlusFormatBytesAttributesDisables>;
export interface PlusFormatBytesEventsBase {}
export interface PlusFormatBytesEventsDisables {}
export type PlusFormatBytesEvents = Filter<PlusFormatBytesEventsBase, PlusFormatBytesEventsDisables>;
export interface PlusFormatBytesMethodsBase {}
export interface PlusFormatBytesMethodsDisables {}
export type PlusFormatBytesMethods = Filter<PlusFormatBytesMethodsBase, PlusFormatBytesMethodsDisables>;
export interface PlusFormatBytesPropertiesBase {
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
  * TODO
  */
  variant?: OverridableValue<never, PlusFormatBytesVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusFormatBytesProperties, "overrides">>;
}
export interface PlusFormatBytesPropertiesDisables {}
export type PlusFormatBytesProperties = Filter<PlusFormatBytesPropertiesBase, PlusFormatBytesPropertiesDisables>;
export type PlusFormatBytesAttributesAndEvents = PlusFormatBytesAttributes & PlusFormatBytesEvents;
export interface PlusFormatBytesJSX extends PlusFormatBytesEvents, PlusFormatBytesProperties {}
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
export namespace JSX {
  interface IntrinsicElements {
    "plus-format-bytes": PlusFormatBytesAttributes & PlusFormatBytesEvents;
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-format-bytes": PlusFormatBytesAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusFormatBytesElement>, keyof PlusFormatBytesAttributesAndEvents>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-format-bytes": PlusFormatBytesAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusFormatBytesElement>, keyof PlusFormatBytesAttributesAndEvents>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-format-bytes": PlusFormatBytesAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusFormatBytesElement>, keyof PlusFormatBytesAttributesAndEvents>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-format-bytes": PlusFormatBytesAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusFormatBytesElement>, keyof PlusFormatBytesAttributesAndEvents>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-format-bytes": PlusFormatBytesAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusFormatBytesElement>, keyof PlusFormatBytesAttributesAndEvents>;
    }
  }
}
export type PlusFormatBytesElement = globalThis.HTMLPlusFormatBytesElement;
export interface PlusFormatBytesVariantOverrides {}