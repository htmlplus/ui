import { OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * Cards contain content and actions about a single subject.
 *
 * @slot default - The default slot.
 *
 * @examples default, elevation, outlined, border-color, border-width, tile, background-color, customized
 */
export declare class PlusCard extends PlusCore {
    /**
     * If you want the card to have shadow, use the elevation property,
     * And select the property value between `1` and `24`.
     */
    elevation?: OverridableValue<number>;
    /**
     * Use the flat property to neutralize elevation.
     */
    flat: boolean;
    /**
     * If you want the card to have border, use the outlined property.
     */
    outlined: boolean;
    /**
     * Use tile property to neutralize border-radius.
     */
    tile: boolean;
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
export type PlusCardAttributesMapper = {};
export type PlusCardOverridableKeys = 'elevation' | 'preset';
export interface PlusCardDisables {}
export interface PlusCardOverrides {}
export type PlusCardAttributes = Rename<PlusCardProperties, PlusCardAttributesMapper>;
export type PlusCardAttributesOverridden = Rename<PlusCardPropertiesOverridden, PlusCardAttributesMapper>;
export type PlusCardAttributesBase = Rename<PlusCardPropertiesBase, PlusCardAttributesMapper>;
export type PlusCardEvents = Filter<PlusCardEventsBase, PlusCardDisables>;
export type PlusCardEventsBase = ToEventHandlers<Pick<PlusCard, PlusCardEventsKeys>>;
export type PlusCardEventsKeys = never;
export type PlusCardEventsJSX = ToJSXEvent<PlusCardEvents>;
export type PlusCardEventsBaseJSX = ToJSXEvent<PlusCardEventsBase>;
export type PlusCardMethods = Filter<PlusCardMethodsBase, PlusCardDisables>;
export type PlusCardMethodsBase = Pick<PlusCard, PlusCardMethodsKeys>;
export type PlusCardMethodsKeys = never;
export type PlusCardProperties = Filter<PlusCardPropertiesOverridden, PlusCardDisables>;
export type PlusCardPropertiesOverridden = Override<PlusCardPropertiesBase, PlusCardOverrides, PlusCardOverridableKeys>;
export type PlusCardPropertiesBase = Pick<PlusCard, PlusCardPropertiesKeys>;
export type PlusCardPropertiesKeys = 'elevation' | 'flat' | 'outlined' | 'tile' | 'overrides' | 'preset';
export type PlusCardElement = globalThis.HTMLPlusCardElement;
export type PlusCardJSX = PlusCardAttributes & PlusCardEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-card": PlusCardJSX;
  }
}
declare global {
  interface HTMLPlusCardElement extends HTMLElement, PlusCardMethods, PlusCardProperties {}
  var HTMLPlusCardElement: {
    prototype: HTMLPlusCardElement;
    new (): HTMLPlusCardElement;
  };
  interface HTMLElementTagNameMap {
    "plus-card": HTMLPlusCardElement;
  }
}
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-card': {
      properties: PlusCardPropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-card": PlusCardJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusCardElement>, HTMLPlusCardElement>, keyof PlusCardJSX>;
    }
  }
}