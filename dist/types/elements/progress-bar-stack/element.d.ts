import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * @subset
 *
 * @slot default - The default slot.
 */
export declare class PlusProgressBarStack extends PlusCore {
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
export type PlusProgressBarStackAttributesMapper = {};
export type PlusProgressBarStackOverridableKeys = 'preset';
export interface PlusProgressBarStackDisables {}
export interface PlusProgressBarStackOverrides {}
export type PlusProgressBarStackAttributes = Rename<PlusProgressBarStackProperties, PlusProgressBarStackAttributesMapper>;
export type PlusProgressBarStackAttributesOverridden = Rename<PlusProgressBarStackPropertiesOverridden, PlusProgressBarStackAttributesMapper>;
export type PlusProgressBarStackAttributesBase = Rename<PlusProgressBarStackPropertiesBase, PlusProgressBarStackAttributesMapper>;
export type PlusProgressBarStackEvents = Filter<PlusProgressBarStackEventsBase, PlusProgressBarStackDisables>;
export type PlusProgressBarStackEventsBase = ToEventHandlers<Pick<PlusProgressBarStack, PlusProgressBarStackEventsKeys>>;
export type PlusProgressBarStackEventsKeys = never;
export type PlusProgressBarStackEventsJSX = ToJSXEvent<PlusProgressBarStackEvents>;
export type PlusProgressBarStackEventsBaseJSX = ToJSXEvent<PlusProgressBarStackEventsBase>;
export type PlusProgressBarStackMethods = Filter<PlusProgressBarStackMethodsBase, PlusProgressBarStackDisables>;
export type PlusProgressBarStackMethodsBase = Pick<PlusProgressBarStack, PlusProgressBarStackMethodsKeys>;
export type PlusProgressBarStackMethodsKeys = never;
export type PlusProgressBarStackProperties = Filter<PlusProgressBarStackPropertiesOverridden, PlusProgressBarStackDisables>;
export type PlusProgressBarStackPropertiesOverridden = Override<PlusProgressBarStackPropertiesBase, PlusProgressBarStackOverrides, PlusProgressBarStackOverridableKeys>;
export type PlusProgressBarStackPropertiesBase = Pick<PlusProgressBarStack, PlusProgressBarStackPropertiesKeys>;
export type PlusProgressBarStackPropertiesKeys = 'overrides' | 'preset';
export type PlusProgressBarStackElement = globalThis.HTMLPlusProgressBarStackElement;
export type PlusProgressBarStackJSX = PlusProgressBarStackAttributes & PlusProgressBarStackEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-progress-bar-stack": PlusProgressBarStackJSX;
  }
}
declare global {
  interface HTMLPlusProgressBarStackElement extends HTMLElement, PlusProgressBarStackMethods, PlusProgressBarStackProperties {}
  var HTMLPlusProgressBarStackElement: {
    prototype: HTMLPlusProgressBarStackElement;
    new (): HTMLPlusProgressBarStackElement;
  };
  interface HTMLElementTagNameMap {
    "plus-progress-bar-stack": HTMLPlusProgressBarStackElement;
  }
}
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-progress-bar-stack': {
      properties: PlusProgressBarStackPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-progress-bar-stack": PlusProgressBarStackJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusProgressBarStackElement>, HTMLPlusProgressBarStackElement>, keyof PlusProgressBarStackJSX>;
    }
  }
}