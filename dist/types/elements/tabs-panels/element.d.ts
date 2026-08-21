import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * TODO: This element contains panels.
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusTabsPanels extends PlusCore {
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
export type PlusTabsPanelsAttributesMapper = {};
export type PlusTabsPanelsOverridableKeys = 'preset';
export interface PlusTabsPanelsDisables {}
export interface PlusTabsPanelsOverrides {}
export type PlusTabsPanelsAttributes = Rename<PlusTabsPanelsProperties, PlusTabsPanelsAttributesMapper>;
export type PlusTabsPanelsAttributesOverridden = Rename<PlusTabsPanelsPropertiesOverridden, PlusTabsPanelsAttributesMapper>;
export type PlusTabsPanelsAttributesBase = Rename<PlusTabsPanelsPropertiesBase, PlusTabsPanelsAttributesMapper>;
export type PlusTabsPanelsEvents = Filter<PlusTabsPanelsEventsBase, PlusTabsPanelsDisables>;
export type PlusTabsPanelsEventsBase = ToEventHandlers<Pick<PlusTabsPanels, PlusTabsPanelsEventsKeys>>;
export type PlusTabsPanelsEventsKeys = never;
export type PlusTabsPanelsEventsJSX = ToJSXEvent<PlusTabsPanelsEvents>;
export type PlusTabsPanelsEventsBaseJSX = ToJSXEvent<PlusTabsPanelsEventsBase>;
export type PlusTabsPanelsMethods = Filter<PlusTabsPanelsMethodsBase, PlusTabsPanelsDisables>;
export type PlusTabsPanelsMethodsBase = Pick<PlusTabsPanels, PlusTabsPanelsMethodsKeys>;
export type PlusTabsPanelsMethodsKeys = never;
export type PlusTabsPanelsProperties = Filter<PlusTabsPanelsPropertiesOverridden, PlusTabsPanelsDisables>;
export type PlusTabsPanelsPropertiesOverridden = Override<PlusTabsPanelsPropertiesBase, PlusTabsPanelsOverrides, PlusTabsPanelsOverridableKeys>;
export type PlusTabsPanelsPropertiesBase = Pick<PlusTabsPanels, PlusTabsPanelsPropertiesKeys>;
export type PlusTabsPanelsPropertiesKeys = 'overrides' | 'preset';
export type PlusTabsPanelsElement = globalThis.HTMLPlusTabsPanelsElement;
export type PlusTabsPanelsJSX = PlusTabsPanelsAttributes & PlusTabsPanelsEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-tabs-panels": PlusTabsPanelsJSX;
  }
}
declare global {
  interface HTMLPlusTabsPanelsElement extends HTMLElement, PlusTabsPanelsMethods, PlusTabsPanelsProperties {}
  var HTMLPlusTabsPanelsElement: {
    prototype: HTMLPlusTabsPanelsElement;
    new (): HTMLPlusTabsPanelsElement;
  };
  interface HTMLElementTagNameMap {
    "plus-tabs-panels": HTMLPlusTabsPanelsElement;
  }
}
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-tabs-panels': {
      properties: PlusTabsPanelsPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-tabs-panels": PlusTabsPanelsJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusTabsPanelsElement>, HTMLPlusTabsPanelsElement>, keyof PlusTabsPanelsJSX>;
    }
  }
}