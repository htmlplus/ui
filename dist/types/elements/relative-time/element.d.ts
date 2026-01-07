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
     * TODO
     */
    variant?: OverridableValue<never>;
    /**
     * TODO
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
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
export interface PlusRelativeTimeAttributesBase {
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
  "variant"?: OverridableValue<never, PlusRelativeTimeVariantOverrides>;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusRelativeTimeProperties, "overrides">>;
}
export interface PlusRelativeTimeAttributesDisables {}
export type PlusRelativeTimeAttributes = Filter<PlusRelativeTimeAttributesBase, PlusRelativeTimeAttributesDisables>;
export interface PlusRelativeTimeEventsBase {}
export interface PlusRelativeTimeEventsDisables {}
export type PlusRelativeTimeEvents = Filter<PlusRelativeTimeEventsBase, PlusRelativeTimeEventsDisables>;
export interface PlusRelativeTimeMethodsBase {}
export interface PlusRelativeTimeMethodsDisables {}
export type PlusRelativeTimeMethods = Filter<PlusRelativeTimeMethodsBase, PlusRelativeTimeMethodsDisables>;
export interface PlusRelativeTimePropertiesBase {
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
  variant?: OverridableValue<never, PlusRelativeTimeVariantOverrides>;
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusRelativeTimeProperties, "overrides">>;
}
export interface PlusRelativeTimePropertiesDisables {}
export type PlusRelativeTimeProperties = Filter<PlusRelativeTimePropertiesBase, PlusRelativeTimePropertiesDisables>;
export interface PlusRelativeTimeJSX extends PlusRelativeTimeEvents, PlusRelativeTimeProperties {}
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
export namespace JSX {
  interface IntrinsicElements {
    "plus-relative-time": PlusRelativeTimeAttributes & PlusRelativeTimeEvents;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-relative-time": PlusRelativeTimeAttributes & PlusRelativeTimeEvents & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusRelativeTimeElement>, HTMLPlusRelativeTimeElement>, keyof (PlusRelativeTimeAttributes & PlusRelativeTimeEvents)>;
    }
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-relative-time": PlusRelativeTimeAttributes & PlusRelativeTimeEvents & Omit<HTMLAttributes<HTMLPlusRelativeTimeElement>, keyof (PlusRelativeTimeAttributes & PlusRelativeTimeEvents)>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-relative-time": PlusRelativeTimeAttributes & PlusRelativeTimeEvents & Omit<HTMLAttributes<HTMLPlusRelativeTimeElement>, keyof (PlusRelativeTimeAttributes & PlusRelativeTimeEvents)>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-relative-time": PlusRelativeTimeAttributes & PlusRelativeTimeEvents & Omit<HTMLAttributes<HTMLPlusRelativeTimeElement>, keyof (PlusRelativeTimeAttributes & PlusRelativeTimeEvents)>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-relative-time": PlusRelativeTimeAttributes & PlusRelativeTimeEvents & Omit<HTMLAttributes<HTMLPlusRelativeTimeElement>, keyof (PlusRelativeTimeAttributes & PlusRelativeTimeEvents)>;
    }
  }
}
export type PlusRelativeTimeElement = globalThis.HTMLPlusRelativeTimeElement;
export interface PlusRelativeTimeVariantOverrides {}