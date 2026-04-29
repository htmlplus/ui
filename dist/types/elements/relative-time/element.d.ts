import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * Outputs a localized time phrase relative to the provided datetime.
 *
 * @examples default, value, sync, format, numeric, localization, parts
 */
export declare class PlusRelativeTime extends PlusCore {
    /**
     * The format style for the relative time.
     */
    format?: 'long' | 'short' | 'narrow';
    /**
     * Determines whether the numeric value should always be displayed.
     */
    numeric?: 'always' | 'auto';
    /**
     * Determines whether the relative time should be updated automatically.
     */
    sync?: boolean;
    /**
     * The date and time to be displayed in a relative format.
     */
    value?: Date | string;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Variant](/variant-property) for details.
     */
    variant?: OverridableValue<never>;
    parts: Intl.RelativeTimeFormatPart[];
    timeout: number;
    get isValid(): boolean;
    get lang(): string;
    get parsed(): Date;
    refresh(): void;
    disconnectedCallback(): void;
    updateCallback(): void;
    render(): any;
}

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusRelativeTimeAttributesMapper = {
  'format': 'format';
  'numeric': 'numeric';
  'sync': 'sync';
  'value': 'value';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusRelativeTimeOverridableKeys = 'variant';
export interface PlusRelativeTimeDisables {}
export interface PlusRelativeTimeOverrides {}
export type PlusRelativeTimeAttributes = Filter<PlusRelativeTimeAttributesOverridden, PlusRelativeTimeDisables, PlusRelativeTimeAttributesMapper>;
export type PlusRelativeTimeAttributesOverridden = Override<PlusRelativeTimeAttributesBase, PlusRelativeTimeOverrides, PlusRelativeTimeOverridableKeys, PlusRelativeTimeAttributesMapper>;
export type PlusRelativeTimeAttributesBase = {
  /**
  * The format style for the relative time.
  */
  "format"?: 'long' | 'short' | 'narrow';
  /**
  * Determines whether the numeric value should always be displayed.
  */
  "numeric"?: 'always' | 'auto';
  /**
  * Determines whether the relative time should be updated automatically.
  */
  "sync"?: boolean;
  /**
  * The date and time to be displayed in a relative format.
  */
  "value"?: Date | string;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusRelativeTimeProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusRelativeTimeEvents = Filter<PlusRelativeTimeEventsBase, PlusRelativeTimeDisables>;
export type PlusRelativeTimeEventsBase = {};
export type PlusRelativeTimeEventsJSX = Filter<PlusRelativeTimeEventsBaseJSX, PlusRelativeTimeDisables, {}>;
export type PlusRelativeTimeEventsBaseJSX = {};
export type PlusRelativeTimeMethods = Filter<PlusRelativeTimeMethodsBase, PlusRelativeTimeDisables>;
export type PlusRelativeTimeMethodsBase = {};
export type PlusRelativeTimeProperties = Filter<PlusRelativeTimePropertiesOverridden, PlusRelativeTimeDisables>;
export type PlusRelativeTimePropertiesOverridden = Override<PlusRelativeTimePropertiesBase, PlusRelativeTimeOverrides, PlusRelativeTimeOverridableKeys>;
export type PlusRelativeTimePropertiesBase = {
  /**
  * The format style for the relative time.
  */
  format?: 'long' | 'short' | 'narrow';
  /**
  * Determines whether the numeric value should always be displayed.
  */
  numeric?: 'always' | 'auto';
  /**
  * Determines whether the relative time should be updated automatically.
  */
  sync?: boolean;
  /**
  * The date and time to be displayed in a relative format.
  */
  value?: Date | string;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusRelativeTimeProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-relative-time': {
      properties: PlusRelativeTimePropertiesOverridden;
    };
  }
}
export type PlusRelativeTimeElement = globalThis.HTMLPlusRelativeTimeElement;
export type PlusRelativeTimeJSX = PlusRelativeTimeAttributes & PlusRelativeTimeEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-relative-time": PlusRelativeTimeJSX;
  }
}
declare global {
  interface HTMLPlusRelativeTimeElement extends HTMLElement, PlusRelativeTimeMethods, PlusRelativeTimeProperties {}
  var HTMLPlusRelativeTimeElement: {
    prototype: HTMLPlusRelativeTimeElement;
    new (): HTMLPlusRelativeTimeElement;
  };
  interface HTMLElementTagNameMap {
    "plus-relative-time": HTMLPlusRelativeTimeElement;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-relative-time": PlusRelativeTimeJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusRelativeTimeElement>, HTMLPlusRelativeTimeElement>, keyof PlusRelativeTimeJSX>;
    }
  }
}