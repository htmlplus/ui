import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Breakpoint } from '../../types';
/**
 * Outputs a localized time phrase relative to the provided datetime.
 *
 * @examples default, value, sync, format, numeric, localization, parts
 */
export declare class RelativeTime extends PlusCore {
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
     * TODO
     */
    variant?: OverridableValue<never>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<Breakpoint>;
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

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface RelativeTimeAttributesBase {
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
  * TODO
  */
  "variant"?: OverridableValue<never, RelativeTimeVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<Breakpoint, Omit<RelativeTimeProperties, "overrides">>;
}
export interface RelativeTimeAttributesDisables {}
export type RelativeTimeAttributes = Filter<RelativeTimeAttributesBase, RelativeTimeAttributesDisables>;
export interface RelativeTimeEventsBase {}
export interface RelativeTimeEventsDisables {}
export type RelativeTimeEvents = Filter<RelativeTimeEventsBase, RelativeTimeEventsDisables>;
export interface RelativeTimeMethodsBase {}
export interface RelativeTimeMethodsDisables {}
export type RelativeTimeMethods = Filter<RelativeTimeMethodsBase, RelativeTimeMethodsDisables>;
export interface RelativeTimePropertiesBase {
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
  * TODO
  */
  variant?: OverridableValue<never, RelativeTimeVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<Breakpoint, Omit<RelativeTimeProperties, "overrides">>;
}
export interface RelativeTimePropertiesDisables {}
export type RelativeTimeProperties = Filter<RelativeTimePropertiesBase, RelativeTimePropertiesDisables>;
export interface RelativeTimeJSX extends RelativeTimeEvents, RelativeTimeProperties {}
declare global {
  interface HTMLPlusRelativeTimeElement extends HTMLElement, RelativeTimeMethods, RelativeTimeProperties {}
  var HTMLPlusRelativeTimeElement: {
    prototype: HTMLPlusRelativeTimeElement;
    new (): HTMLPlusRelativeTimeElement;
  };
  interface HTMLElementTagNameMap {
    "plus-relative-time": HTMLPlusRelativeTimeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-relative-time": RelativeTimeEvents & RelativeTimeAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (RelativeTimeEvents & RelativeTimeAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-relative-time": RelativeTimeEvents & RelativeTimeAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (RelativeTimeEvents & RelativeTimeAttributes)>;
    }
  }
}
export type RelativeTimeElement = globalThis.HTMLPlusRelativeTimeElement;
export interface RelativeTimeVariantOverrides {}