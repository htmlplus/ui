import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * Centers content vertically and horizontally.
 *
 * @stable
 *
 * @slot default - The default slot.
 *
 * @examples default, inline
 */
export declare class PlusCenter extends PlusCore {
    /**
     * Converts the `display` CSS property from `flex` to `inline-flex`.
     */
    inline: boolean;
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
export type PlusCenterAttributesMapper = {};
export type PlusCenterOverridableKeys = 'preset';
export interface PlusCenterDisables {}
export interface PlusCenterOverrides {}
export type PlusCenterAttributes = Rename<PlusCenterProperties, PlusCenterAttributesMapper>;
export type PlusCenterAttributesOverridden = Rename<PlusCenterPropertiesOverridden, PlusCenterAttributesMapper>;
export type PlusCenterAttributesBase = Rename<PlusCenterPropertiesBase, PlusCenterAttributesMapper>;
export type PlusCenterEvents = Filter<PlusCenterEventsBase, PlusCenterDisables>;
export type PlusCenterEventsBase = ToEventHandlers<Pick<PlusCenter, PlusCenterEventsKeys>>;
export type PlusCenterEventsKeys = never;
export type PlusCenterEventsJSX = ToJSXEvent<PlusCenterEvents>;
export type PlusCenterEventsBaseJSX = ToJSXEvent<PlusCenterEventsBase>;
export type PlusCenterMethods = Filter<PlusCenterMethodsBase, PlusCenterDisables>;
export type PlusCenterMethodsBase = Pick<PlusCenter, PlusCenterMethodsKeys>;
export type PlusCenterMethodsKeys = never;
export type PlusCenterProperties = Filter<PlusCenterPropertiesOverridden, PlusCenterDisables>;
export type PlusCenterPropertiesOverridden = Override<PlusCenterPropertiesBase, PlusCenterOverrides, PlusCenterOverridableKeys>;
export type PlusCenterPropertiesBase = Pick<PlusCenter, PlusCenterPropertiesKeys>;
export type PlusCenterPropertiesKeys = 'inline' | 'overrides' | 'preset';
export type PlusCenterElement = globalThis.HTMLPlusCenterElement;
export type PlusCenterJSX = PlusCenterAttributes & PlusCenterEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-center": PlusCenterJSX;
  }
}
declare global {
  interface HTMLPlusCenterElement extends HTMLElement, PlusCenterMethods, PlusCenterProperties {}
  var HTMLPlusCenterElement: {
    prototype: HTMLPlusCenterElement;
    new (): HTMLPlusCenterElement;
  };
  interface HTMLElementTagNameMap {
    "plus-center": HTMLPlusCenterElement;
  }
}
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-center': {
      properties: PlusCenterPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-center": PlusCenterJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusCenterElement>, HTMLPlusCenterElement>, keyof PlusCenterJSX>;
    }
  }
}