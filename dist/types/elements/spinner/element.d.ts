import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint, PlusColor } from '../../types';
import { PlusSpinnerType } from './types';
/**
 * An indicator of progress and activity.
 *
 * @stable
 *
 * @examples default, size, custom-size, color, type, customized
 */
export declare class PlusSpinner extends PlusCore {
    /**
     * Specifies the color.
     */
    color?: OverridableValue<PlusColor>;
    /**
     * Specifies the size of the spinner.
     */
    size: OverridableValue<'sm' | 'md' | 'lg' | 'inherit'>;
    /**
     * Specifies which variant of the spinner to use.
     */
    type: PlusSpinnerType;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Preset](/preset-property) for details.
     */
    preset?: OverridableValue<never>;
    get style(): {
        ':host': {
            color: string;
        };
    };
    get elements(): number[];
    render(): any;
}

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusSpinnerAttributesMapper = {};
export type PlusSpinnerOverridableKeys = 'color' | 'size' | 'preset';
export interface PlusSpinnerDisables {}
export interface PlusSpinnerOverrides {}
export type PlusSpinnerAttributes = Rename<PlusSpinnerProperties, PlusSpinnerAttributesMapper>;
export type PlusSpinnerAttributesOverridden = Rename<PlusSpinnerPropertiesOverridden, PlusSpinnerAttributesMapper>;
export type PlusSpinnerAttributesBase = Rename<PlusSpinnerPropertiesBase, PlusSpinnerAttributesMapper>;
export type PlusSpinnerEvents = Filter<PlusSpinnerEventsBase, PlusSpinnerDisables>;
export type PlusSpinnerEventsBase = ToEventHandlers<Pick<PlusSpinner, PlusSpinnerEventsKeys>>;
export type PlusSpinnerEventsKeys = never;
export type PlusSpinnerEventsJSX = ToJSXEvent<PlusSpinnerEvents>;
export type PlusSpinnerEventsBaseJSX = ToJSXEvent<PlusSpinnerEventsBase>;
export type PlusSpinnerMethods = Filter<PlusSpinnerMethodsBase, PlusSpinnerDisables>;
export type PlusSpinnerMethodsBase = Pick<PlusSpinner, PlusSpinnerMethodsKeys>;
export type PlusSpinnerMethodsKeys = never;
export type PlusSpinnerProperties = Filter<PlusSpinnerPropertiesOverridden, PlusSpinnerDisables>;
export type PlusSpinnerPropertiesOverridden = Override<PlusSpinnerPropertiesBase, PlusSpinnerOverrides, PlusSpinnerOverridableKeys>;
export type PlusSpinnerPropertiesBase = Pick<PlusSpinner, PlusSpinnerPropertiesKeys>;
export type PlusSpinnerPropertiesKeys = 'color' | 'size' | 'type' | 'overrides' | 'preset';
export type PlusSpinnerElement = globalThis.HTMLPlusSpinnerElement;
export type PlusSpinnerJSX = PlusSpinnerAttributes & PlusSpinnerEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-spinner": PlusSpinnerJSX;
  }
}
declare global {
  interface HTMLPlusSpinnerElement extends HTMLElement, PlusSpinnerMethods, PlusSpinnerProperties {}
  var HTMLPlusSpinnerElement: {
    prototype: HTMLPlusSpinnerElement;
    new (): HTMLPlusSpinnerElement;
  };
  interface HTMLElementTagNameMap {
    "plus-spinner": HTMLPlusSpinnerElement;
  }
}
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-spinner': {
      properties: PlusSpinnerPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-spinner": PlusSpinnerJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusSpinnerElement>, HTMLPlusSpinnerElement>, keyof PlusSpinnerJSX>;
    }
  }
}