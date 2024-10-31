import { PlusCore } from '../../core';
import { FormatBytesDisplay, FormatBytesStandard, FormatBytesUnit } from './format-bytes.types';
/**
 * @stable
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
      "plus-format-bytes": FormatBytesEvents & FormatBytesAttributes & {
        [key: string]: any;
      };
    }
  }
}
export type FormatBytesElement = globalThis.HTMLPlusFormatBytesElement;