import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * TODO: Arranges tabs within a bar.
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusTabsBar extends PlusCore {
    /**
     * Grows tabs as much as all available space (occupies all horizontal space).
     */
    grow: boolean;
    /**
     * Specifies how the tabs are aligned.
     */
    justify: 'start' | 'center' | 'end';
    /**
     * Reverses the arrangement of the tabs.
     */
    reverse: boolean;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Preset](/preset-property) for details.
     */
    preset?: OverridableValue<never>;
    render(): any;
}

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusTabsBarAttributesMapper = {};
export type PlusTabsBarOverridableKeys = 'preset';
export interface PlusTabsBarDisables {}
export interface PlusTabsBarOverrides {}
export type PlusTabsBarAttributes = Rename<PlusTabsBarProperties, PlusTabsBarAttributesMapper>;
export type PlusTabsBarAttributesOverridden = Rename<PlusTabsBarPropertiesOverridden, PlusTabsBarAttributesMapper>;
export type PlusTabsBarAttributesBase = Rename<PlusTabsBarPropertiesBase, PlusTabsBarAttributesMapper>;
export type PlusTabsBarEvents = Filter<PlusTabsBarEventsBase, PlusTabsBarDisables>;
export type PlusTabsBarEventsBase = ToEventHandlers<Pick<PlusTabsBar, PlusTabsBarEventsKeys>>;
export type PlusTabsBarEventsKeys = never;
export type PlusTabsBarEventsJSX = ToJSXEvent<PlusTabsBarEvents>;
export type PlusTabsBarEventsBaseJSX = ToJSXEvent<PlusTabsBarEventsBase>;
export type PlusTabsBarMethods = Filter<PlusTabsBarMethodsBase, PlusTabsBarDisables>;
export type PlusTabsBarMethodsBase = Pick<PlusTabsBar, PlusTabsBarMethodsKeys>;
export type PlusTabsBarMethodsKeys = never;
export type PlusTabsBarProperties = Filter<PlusTabsBarPropertiesOverridden, PlusTabsBarDisables>;
export type PlusTabsBarPropertiesOverridden = Override<PlusTabsBarPropertiesBase, PlusTabsBarOverrides, PlusTabsBarOverridableKeys>;
export type PlusTabsBarPropertiesBase = Pick<PlusTabsBar, PlusTabsBarPropertiesKeys>;
export type PlusTabsBarPropertiesKeys = 'grow' | 'justify' | 'reverse' | 'overrides' | 'preset';
export type PlusTabsBarElement = globalThis.HTMLPlusTabsBarElement;
export type PlusTabsBarJSX = PlusTabsBarAttributes & PlusTabsBarEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-tabs-bar": PlusTabsBarJSX;
  }
}
declare global {
  interface HTMLPlusTabsBarElement extends HTMLElement, PlusTabsBarMethods, PlusTabsBarProperties {}
  var HTMLPlusTabsBarElement: {
    prototype: HTMLPlusTabsBarElement;
    new (): HTMLPlusTabsBarElement;
  };
  interface HTMLElementTagNameMap {
    "plus-tabs-bar": HTMLPlusTabsBarElement;
  }
}
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-tabs-bar': {
      properties: PlusTabsBarPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-bar": PlusTabsBarJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusTabsBarElement>, HTMLPlusTabsBarElement>, keyof PlusTabsBarJSX>;
    }
  }
}