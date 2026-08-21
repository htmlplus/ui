import { EventEmitter, OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
import { Context } from './context';
/**
 * Organizes content across different screens.
 *
 * @development
 *
 * @slot default - The default slot.
 *
 * @examples default, disabled, grow, justify, reverse, below, vertical
 */
export declare class PlusTabs extends PlusCore {
    /**
     * Provides your own value.
     */
    value?: string;
    /**
     * You can use vertical property for vertical mode.
     */
    vertical: boolean;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Preset](/preset-property) for details.
     */
    preset?: OverridableValue<never>;
    /**
     * Fired when the value changes.
     */
    plusChange: EventEmitter<string>;
    get state(): Context;
    change(value: string): void;
    render(): any;
}

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusTabsAttributesMapper = {};
export type PlusTabsOverridableKeys = 'preset';
export interface PlusTabsDisables {}
export interface PlusTabsOverrides {}
export type PlusTabsAttributes = Rename<PlusTabsProperties, PlusTabsAttributesMapper>;
export type PlusTabsAttributesOverridden = Rename<PlusTabsPropertiesOverridden, PlusTabsAttributesMapper>;
export type PlusTabsAttributesBase = Rename<PlusTabsPropertiesBase, PlusTabsAttributesMapper>;
export type PlusTabsEvents = Filter<PlusTabsEventsBase, PlusTabsDisables>;
export type PlusTabsEventsBase = ToEventHandlers<Pick<PlusTabs, PlusTabsEventsKeys>>;
export type PlusTabsEventsKeys = 'plusChange';
export type PlusTabsEventsJSX = ToJSXEvent<PlusTabsEvents>;
export type PlusTabsEventsBaseJSX = ToJSXEvent<PlusTabsEventsBase>;
export type PlusTabsMethods = Filter<PlusTabsMethodsBase, PlusTabsDisables>;
export type PlusTabsMethodsBase = Pick<PlusTabs, PlusTabsMethodsKeys>;
export type PlusTabsMethodsKeys = never;
export type PlusTabsProperties = Filter<PlusTabsPropertiesOverridden, PlusTabsDisables>;
export type PlusTabsPropertiesOverridden = Override<PlusTabsPropertiesBase, PlusTabsOverrides, PlusTabsOverridableKeys>;
export type PlusTabsPropertiesBase = Pick<PlusTabs, PlusTabsPropertiesKeys>;
export type PlusTabsPropertiesKeys = 'value' | 'vertical' | 'overrides' | 'preset';
export type PlusTabsElement = globalThis.HTMLPlusTabsElement;
export type PlusTabsJSX = PlusTabsAttributes & PlusTabsEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-tabs": PlusTabsJSX;
  }
}
declare global {
  interface HTMLPlusTabsElement extends HTMLElement, PlusTabsMethods, PlusTabsProperties {}
  var HTMLPlusTabsElement: {
    prototype: HTMLPlusTabsElement;
    new (): HTMLPlusTabsElement;
  };
  interface HTMLElementTagNameMap {
    "plus-tabs": HTMLPlusTabsElement;
  }
}
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-tabs': {
      properties: PlusTabsPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs": PlusTabsJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusTabsElement>, HTMLPlusTabsElement>, keyof PlusTabsJSX>;
    }
  }
}