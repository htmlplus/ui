import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
import { Context } from '../tabs/context';
/**
 * TODO: Tabs make it easy to switch between different views.
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusTabsTab extends PlusCore {
    /**
     * A Tab can be disabled by setting disabled property.
     */
    disabled: boolean;
    /**
     * Provides your own value.
     */
    value?: string;
    /**
     * TODO
     */
    get active(): boolean;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Preset](/preset-property) for details.
     */
    preset?: OverridableValue<never>;
    parent?: Context;
    onClick(): void;
    render(): any;
}

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusTabsTabAttributesMapper = {};
export type PlusTabsTabOverridableKeys = 'preset';
export interface PlusTabsTabDisables {}
export interface PlusTabsTabOverrides {}
export type PlusTabsTabAttributes = Rename<PlusTabsTabProperties, PlusTabsTabAttributesMapper>;
export type PlusTabsTabAttributesOverridden = Rename<PlusTabsTabPropertiesOverridden, PlusTabsTabAttributesMapper>;
export type PlusTabsTabAttributesBase = Rename<PlusTabsTabPropertiesBase, PlusTabsTabAttributesMapper>;
export type PlusTabsTabEvents = Filter<PlusTabsTabEventsBase, PlusTabsTabDisables>;
export type PlusTabsTabEventsBase = ToEventHandlers<Pick<PlusTabsTab, PlusTabsTabEventsKeys>>;
export type PlusTabsTabEventsKeys = never;
export type PlusTabsTabEventsJSX = ToJSXEvent<PlusTabsTabEvents>;
export type PlusTabsTabEventsBaseJSX = ToJSXEvent<PlusTabsTabEventsBase>;
export type PlusTabsTabMethods = Filter<PlusTabsTabMethodsBase, PlusTabsTabDisables>;
export type PlusTabsTabMethodsBase = Pick<PlusTabsTab, PlusTabsTabMethodsKeys>;
export type PlusTabsTabMethodsKeys = never;
export type PlusTabsTabProperties = Filter<PlusTabsTabPropertiesOverridden, PlusTabsTabDisables>;
export type PlusTabsTabPropertiesOverridden = Override<PlusTabsTabPropertiesBase, PlusTabsTabOverrides, PlusTabsTabOverridableKeys>;
export type PlusTabsTabPropertiesBase = Pick<PlusTabsTab, PlusTabsTabPropertiesKeys>;
export type PlusTabsTabPropertiesKeys = 'disabled' | 'value' | 'active' | 'overrides' | 'preset';
export type PlusTabsTabElement = globalThis.HTMLPlusTabsTabElement;
export type PlusTabsTabJSX = PlusTabsTabAttributes & PlusTabsTabEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-tabs-tab": PlusTabsTabJSX;
  }
}
declare global {
  interface HTMLPlusTabsTabElement extends HTMLElement, PlusTabsTabMethods, PlusTabsTabProperties {}
  var HTMLPlusTabsTabElement: {
    prototype: HTMLPlusTabsTabElement;
    new (): HTMLPlusTabsTabElement;
  };
  interface HTMLElementTagNameMap {
    "plus-tabs-tab": HTMLPlusTabsTabElement;
  }
}
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-tabs-tab': {
      properties: PlusTabsTabPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-tab": PlusTabsTabJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusTabsTabElement>, HTMLPlusTabsTabElement>, keyof PlusTabsTabJSX>;
    }
  }
}