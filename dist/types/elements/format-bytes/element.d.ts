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
    display: 'long' | 'short';
    /**
     * Localizes the result. [More](https://mdn.io/number-format/constructor).
     */
    locale?: string | string[];
    /**
     * Specifies the number of decimal places.
     * Use an array to specify the minimum and maximum.
     */
    decimals: number | [number, number];
    /**
     * Specifies the separator between number and unit.
     */
    separator: string;
    /**
     * Shows plus sign for positive numbers.
     * If the difference is exactly zero a space character will be prepended instead for better alignment.
     */
    signed: boolean;
    /**
     * Specifies the standard of units.
     * [Metric and IEC](https://wikipedia.org/wiki/Gigabyte) are supported.
     */
    standard: 'IEC' | 'IEC_OCTET' | 'METRIC' | 'METRIC_OCTET';
    /**
     * Specifies the unit in which the result will be returned.
     */
    unit: 'auto' | 'base' | 'kilo' | 'mega' | 'giga' | 'tera' | 'peta' | 'exa' | 'zetta' | 'yotta';
    /**
     * The bytes value to convert.
     */
    value?: number;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Preset](/preset-property) for details.
     */
    preset?: OverridableValue<never>;
    get formatted(): string;
    render(): string;
}

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusFormatBytesAttributesMapper = {};
export type PlusFormatBytesOverridableKeys = 'preset';
export interface PlusFormatBytesDisables {}
export interface PlusFormatBytesOverrides {}
export type PlusFormatBytesAttributes = Rename<PlusFormatBytesProperties, PlusFormatBytesAttributesMapper>;
export type PlusFormatBytesAttributesOverridden = Rename<PlusFormatBytesPropertiesOverridden, PlusFormatBytesAttributesMapper>;
export type PlusFormatBytesAttributesBase = Rename<PlusFormatBytesPropertiesBase, PlusFormatBytesAttributesMapper>;
export type PlusFormatBytesEvents = Filter<PlusFormatBytesEventsBase, PlusFormatBytesDisables>;
export type PlusFormatBytesEventsBase = ToEventHandlers<Pick<PlusFormatBytes, PlusFormatBytesEventsKeys>>;
export type PlusFormatBytesEventsKeys = never;
export type PlusFormatBytesEventsJSX = ToJSXEvent<PlusFormatBytesEvents>;
export type PlusFormatBytesEventsBaseJSX = ToJSXEvent<PlusFormatBytesEventsBase>;
export type PlusFormatBytesMethods = Filter<PlusFormatBytesMethodsBase, PlusFormatBytesDisables>;
export type PlusFormatBytesMethodsBase = Pick<PlusFormatBytes, PlusFormatBytesMethodsKeys>;
export type PlusFormatBytesMethodsKeys = never;
export type PlusFormatBytesProperties = Filter<PlusFormatBytesPropertiesOverridden, PlusFormatBytesDisables>;
export type PlusFormatBytesPropertiesOverridden = Override<PlusFormatBytesPropertiesBase, PlusFormatBytesOverrides, PlusFormatBytesOverridableKeys>;
export type PlusFormatBytesPropertiesBase = Pick<PlusFormatBytes, PlusFormatBytesPropertiesKeys>;
export type PlusFormatBytesPropertiesKeys = 'display' | 'locale' | 'decimals' | 'separator' | 'signed' | 'standard' | 'unit' | 'value' | 'overrides' | 'preset';
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
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-format-bytes': {
      properties: PlusFormatBytesPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-format-bytes": PlusFormatBytesJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusFormatBytesElement>, HTMLPlusFormatBytesElement>, keyof PlusFormatBytesJSX>;
    }
  }
}