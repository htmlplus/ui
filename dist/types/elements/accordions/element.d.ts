import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
import { Context } from './context';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusAccordions extends PlusCore {
    /**
     * Specifies that only one accordion can be open.
     */
    persistent: boolean;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Preset](/preset-property) for details.
     */
    preset?: OverridableValue<never>;
    state: Context;
    open(target: HTMLElement): void;
    render(): any;
}

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusAccordionsAttributesMapper = {};
export type PlusAccordionsOverridableKeys = 'preset';
export interface PlusAccordionsDisables {}
export interface PlusAccordionsOverrides {}
export type PlusAccordionsAttributes = Rename<PlusAccordionsProperties, PlusAccordionsAttributesMapper>;
export type PlusAccordionsAttributesOverridden = Rename<PlusAccordionsPropertiesOverridden, PlusAccordionsAttributesMapper>;
export type PlusAccordionsAttributesBase = Rename<PlusAccordionsPropertiesBase, PlusAccordionsAttributesMapper>;
export type PlusAccordionsEvents = Filter<PlusAccordionsEventsBase, PlusAccordionsDisables>;
export type PlusAccordionsEventsBase = ToEventHandlers<Pick<PlusAccordions, PlusAccordionsEventsKeys>>;
export type PlusAccordionsEventsKeys = never;
export type PlusAccordionsEventsJSX = ToJSXEvent<PlusAccordionsEvents>;
export type PlusAccordionsEventsBaseJSX = ToJSXEvent<PlusAccordionsEventsBase>;
export type PlusAccordionsMethods = Filter<PlusAccordionsMethodsBase, PlusAccordionsDisables>;
export type PlusAccordionsMethodsBase = Pick<PlusAccordions, PlusAccordionsMethodsKeys>;
export type PlusAccordionsMethodsKeys = never;
export type PlusAccordionsProperties = Filter<PlusAccordionsPropertiesOverridden, PlusAccordionsDisables>;
export type PlusAccordionsPropertiesOverridden = Override<PlusAccordionsPropertiesBase, PlusAccordionsOverrides, PlusAccordionsOverridableKeys>;
export type PlusAccordionsPropertiesBase = Pick<PlusAccordions, PlusAccordionsPropertiesKeys>;
export type PlusAccordionsPropertiesKeys = 'persistent' | 'overrides' | 'preset';
export type PlusAccordionsElement = globalThis.HTMLPlusAccordionsElement;
export type PlusAccordionsJSX = PlusAccordionsAttributes & PlusAccordionsEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-accordions": PlusAccordionsJSX;
  }
}
declare global {
  interface HTMLPlusAccordionsElement extends HTMLElement, PlusAccordionsMethods, PlusAccordionsProperties {}
  var HTMLPlusAccordionsElement: {
    prototype: HTMLPlusAccordionsElement;
    new (): HTMLPlusAccordionsElement;
  };
  interface HTMLElementTagNameMap {
    "plus-accordions": HTMLPlusAccordionsElement;
  }
}
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-accordions': {
      properties: PlusAccordionsPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-accordions": PlusAccordionsJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusAccordionsElement>, HTMLPlusAccordionsElement>, keyof PlusAccordionsJSX>;
    }
  }
}