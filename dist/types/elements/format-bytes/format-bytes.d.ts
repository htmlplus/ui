import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Breakpoint } from '../../types';
import { FormatBytesDisplay, FormatBytesStandard, FormatBytesUnit } from './format-bytes.types';
/**
 * Converts bytes to a human-readable string. [Metric and IEC](https://wikipedia.org/wiki/Gigabyte) standard are supported.
 *
 * @stable
 *
 * @examples default, standard, formatting, decimals, unit, display, separator, signed, locale
 */
export declare class FormatBytes extends PlusCore {
    /**
     * Specifies the unit will be shown as an abbreviation or not.
     */
    display?: FormatBytesDisplay;
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
    standard?: FormatBytesStandard;
    /**
     * Specifies the unit in which the result will be returned.
     */
    unit?: FormatBytesUnit;
    /**
     * The bytes value to convert.
     */
    value?: number;
    /**
     * TODO
     */
    variant?: OverridableValue<string>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
    get formated(): string;
    render(): string;
}

export interface FormatBytesAttributes {
  /**
  * Specifies the unit will be shown as an abbreviation or not.
  */
  "display"?: FormatBytesDisplay;
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
  "standard"?: FormatBytesStandard;
  /**
  * Specifies the unit in which the result will be returned.
  */
  "unit"?: FormatBytesUnit;
  /**
  * The bytes value to convert.
  */
  "value"?: number;
  /**
  * TODO
  */
  "variant"?: OverridableValue<string, FormatBytesVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<FormatBytesProperties, "overrides">>;
}
export interface FormatBytesEvents {}
export interface FormatBytesMethods {}
export interface FormatBytesProperties {
  /**
  * Specifies the unit will be shown as an abbreviation or not.
  */
  display?: FormatBytesDisplay;
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
  standard?: FormatBytesStandard;
  /**
  * Specifies the unit in which the result will be returned.
  */
  unit?: FormatBytesUnit;
  /**
  * The bytes value to convert.
  */
  value?: number;
  /**
  * TODO
  */
  variant?: OverridableValue<string, FormatBytesVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<FormatBytesProperties, "overrides">>;
}
export interface FormatBytesJSX extends FormatBytesEvents, FormatBytesProperties {}
declare global {
  interface HTMLPlusFormatBytesElement extends HTMLElement, FormatBytesMethods, FormatBytesProperties {}
  var HTMLPlusFormatBytesElement: {
    prototype: HTMLPlusFormatBytesElement;
    new (): HTMLPlusFormatBytesElement;
  };
  interface HTMLElementTagNameMap {
    "plus-format-bytes": HTMLPlusFormatBytesElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-format-bytes": FormatBytesEvents & FormatBytesAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-format-bytes": FormatBytesEvents & FormatBytesAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
export type FormatBytesElement = globalThis.HTMLPlusFormatBytesElement;
export interface FormatBytesVariantOverrides {}