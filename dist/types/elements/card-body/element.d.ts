import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * @development
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusCardBody extends PlusCore {
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
export type PlusCardBodyAttributesMapper = {};
export type PlusCardBodyOverridableKeys = 'preset';
export interface PlusCardBodyDisables {}
export interface PlusCardBodyOverrides {}
export type PlusCardBodyAttributes = Rename<PlusCardBodyProperties, PlusCardBodyAttributesMapper>;
export type PlusCardBodyAttributesOverridden = Rename<PlusCardBodyPropertiesOverridden, PlusCardBodyAttributesMapper>;
export type PlusCardBodyAttributesBase = Rename<PlusCardBodyPropertiesBase, PlusCardBodyAttributesMapper>;
export type PlusCardBodyEvents = Filter<PlusCardBodyEventsBase, PlusCardBodyDisables>;
export type PlusCardBodyEventsBase = ToEventHandlers<Pick<PlusCardBody, PlusCardBodyEventsKeys>>;
export type PlusCardBodyEventsKeys = never;
export type PlusCardBodyEventsJSX = ToJSXEvent<PlusCardBodyEvents>;
export type PlusCardBodyEventsBaseJSX = ToJSXEvent<PlusCardBodyEventsBase>;
export type PlusCardBodyMethods = Filter<PlusCardBodyMethodsBase, PlusCardBodyDisables>;
export type PlusCardBodyMethodsBase = Pick<PlusCardBody, PlusCardBodyMethodsKeys>;
export type PlusCardBodyMethodsKeys = never;
export type PlusCardBodyProperties = Filter<PlusCardBodyPropertiesOverridden, PlusCardBodyDisables>;
export type PlusCardBodyPropertiesOverridden = Override<PlusCardBodyPropertiesBase, PlusCardBodyOverrides, PlusCardBodyOverridableKeys>;
export type PlusCardBodyPropertiesBase = Pick<PlusCardBody, PlusCardBodyPropertiesKeys>;
export type PlusCardBodyPropertiesKeys = 'overrides' | 'preset';
export type PlusCardBodyElement = globalThis.HTMLPlusCardBodyElement;
export type PlusCardBodyJSX = PlusCardBodyAttributes & PlusCardBodyEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-card-body": PlusCardBodyJSX;
  }
}
declare global {
  interface HTMLPlusCardBodyElement extends HTMLElement, PlusCardBodyMethods, PlusCardBodyProperties {}
  var HTMLPlusCardBodyElement: {
    prototype: HTMLPlusCardBodyElement;
    new (): HTMLPlusCardBodyElement;
  };
  interface HTMLElementTagNameMap {
    "plus-card-body": HTMLPlusCardBodyElement;
  }
}
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-card-body': {
      properties: PlusCardBodyPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-card-body": PlusCardBodyJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusCardBodyElement>, HTMLPlusCardBodyElement>, keyof PlusCardBodyJSX>;
    }
  }
}