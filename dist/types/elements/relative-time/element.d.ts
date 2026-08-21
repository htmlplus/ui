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
    format: 'long' | 'short' | 'narrow';
    /**
     * Determines whether the numeric value should always be displayed.
     */
    numeric: 'always' | 'auto';
    /**
     * Determines whether the relative time should be updated automatically.
     */
    sync: boolean;
    /**
     * The date and time to be displayed in a relative format.
     */
    value: Date | string;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Preset](/preset-property) for details.
     */
    preset?: OverridableValue<never>;
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

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusRelativeTimeAttributesMapper = {};
export type PlusRelativeTimeOverridableKeys = 'preset';
export interface PlusRelativeTimeDisables {}
export interface PlusRelativeTimeOverrides {}
export type PlusRelativeTimeAttributes = Rename<PlusRelativeTimeProperties, PlusRelativeTimeAttributesMapper>;
export type PlusRelativeTimeAttributesOverridden = Rename<PlusRelativeTimePropertiesOverridden, PlusRelativeTimeAttributesMapper>;
export type PlusRelativeTimeAttributesBase = Rename<PlusRelativeTimePropertiesBase, PlusRelativeTimeAttributesMapper>;
export type PlusRelativeTimeEvents = Filter<PlusRelativeTimeEventsBase, PlusRelativeTimeDisables>;
export type PlusRelativeTimeEventsBase = ToEventHandlers<Pick<PlusRelativeTime, PlusRelativeTimeEventsKeys>>;
export type PlusRelativeTimeEventsKeys = never;
export type PlusRelativeTimeEventsJSX = ToJSXEvent<PlusRelativeTimeEvents>;
export type PlusRelativeTimeEventsBaseJSX = ToJSXEvent<PlusRelativeTimeEventsBase>;
export type PlusRelativeTimeMethods = Filter<PlusRelativeTimeMethodsBase, PlusRelativeTimeDisables>;
export type PlusRelativeTimeMethodsBase = Pick<PlusRelativeTime, PlusRelativeTimeMethodsKeys>;
export type PlusRelativeTimeMethodsKeys = never;
export type PlusRelativeTimeProperties = Filter<PlusRelativeTimePropertiesOverridden, PlusRelativeTimeDisables>;
export type PlusRelativeTimePropertiesOverridden = Override<PlusRelativeTimePropertiesBase, PlusRelativeTimeOverrides, PlusRelativeTimeOverridableKeys>;
export type PlusRelativeTimePropertiesBase = Pick<PlusRelativeTime, PlusRelativeTimePropertiesKeys>;
export type PlusRelativeTimePropertiesKeys = 'format' | 'numeric' | 'sync' | 'value' | 'overrides' | 'preset';
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
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-relative-time': {
      properties: PlusRelativeTimePropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-relative-time": PlusRelativeTimeJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusRelativeTimeElement>, HTMLPlusRelativeTimeElement>, keyof PlusRelativeTimeJSX>;
    }
  }
}