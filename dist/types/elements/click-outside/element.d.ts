import { EventEmitter, OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * Detects when a click event happens outside of itself.
 *
 * @stable
 *
 * @slot default - The default slot.
 *
 * @examples default, menu
 */
export declare class PlusClickOutside extends PlusCore {
    /**
     * A boolean value indicating that events of this type will be dispatched to the registered
     * `listener` before being dispatched to any `EventTarget` beneath it in the DOM tree.
     */
    capture: boolean;
    /**
     * Disables the element functionality.
     */
    disabled: boolean;
    /**
     * The event fires only once.
     */
    once: boolean;
    /**
     * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * See [Preset](/preset-property) for details.
     */
    preset?: OverridableValue<never>;
    /**
     * Fires when outside of the element is clicked.
     */
    plusClickOutside: EventEmitter<void>;
    options?: AddEventListenerOptions;
    initialize(): void;
    terminate(): void;
    onClickOutside(): void;
    updatedCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}

type Filter<Base, Disables> = { [K in keyof Base as K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys> = { [K in keyof Base]: K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
type ToEventHandlers<T> = { [K in keyof T]?: T[K] extends EventEmitter<infer U> ? (event: CustomEvent<U>) => void : T[K] };
type ToJSXEvent<T> = { [K in keyof T as `on${Capitalize<string & K>}`]: T[K] };
type Rename<T, M extends Partial<Record<keyof T, PropertyKey>>> = Partial<Pick<T, Exclude<keyof T, keyof M>>> & { [K in keyof M as M[K] extends PropertyKey ? M[K] : K]?: K extends keyof T ? T[K] : never };
export type PlusClickOutsideAttributesMapper = {};
export type PlusClickOutsideOverridableKeys = 'preset';
export interface PlusClickOutsideDisables {}
export interface PlusClickOutsideOverrides {}
export type PlusClickOutsideAttributes = Rename<PlusClickOutsideProperties, PlusClickOutsideAttributesMapper>;
export type PlusClickOutsideAttributesOverridden = Rename<PlusClickOutsidePropertiesOverridden, PlusClickOutsideAttributesMapper>;
export type PlusClickOutsideAttributesBase = Rename<PlusClickOutsidePropertiesBase, PlusClickOutsideAttributesMapper>;
export type PlusClickOutsideEvents = Filter<PlusClickOutsideEventsBase, PlusClickOutsideDisables>;
export type PlusClickOutsideEventsBase = ToEventHandlers<Pick<PlusClickOutside, PlusClickOutsideEventsKeys>>;
export type PlusClickOutsideEventsKeys = 'plusClickOutside';
export type PlusClickOutsideEventsJSX = ToJSXEvent<PlusClickOutsideEvents>;
export type PlusClickOutsideEventsBaseJSX = ToJSXEvent<PlusClickOutsideEventsBase>;
export type PlusClickOutsideMethods = Filter<PlusClickOutsideMethodsBase, PlusClickOutsideDisables>;
export type PlusClickOutsideMethodsBase = Pick<PlusClickOutside, PlusClickOutsideMethodsKeys>;
export type PlusClickOutsideMethodsKeys = never;
export type PlusClickOutsideProperties = Filter<PlusClickOutsidePropertiesOverridden, PlusClickOutsideDisables>;
export type PlusClickOutsidePropertiesOverridden = Override<PlusClickOutsidePropertiesBase, PlusClickOutsideOverrides, PlusClickOutsideOverridableKeys>;
export type PlusClickOutsidePropertiesBase = Pick<PlusClickOutside, PlusClickOutsidePropertiesKeys>;
export type PlusClickOutsidePropertiesKeys = 'capture' | 'disabled' | 'once' | 'overrides' | 'preset';
export type PlusClickOutsideElement = globalThis.HTMLPlusClickOutsideElement;
export type PlusClickOutsideJSX = PlusClickOutsideAttributes & PlusClickOutsideEventsJSX;
export namespace JSX {
  interface IntrinsicElements {
    "plus-click-outside": PlusClickOutsideJSX;
  }
}
declare global {
  interface HTMLPlusClickOutsideElement extends HTMLElement, PlusClickOutsideMethods, PlusClickOutsideProperties {}
  var HTMLPlusClickOutsideElement: {
    prototype: HTMLPlusClickOutsideElement;
    new (): HTMLPlusClickOutsideElement;
  };
  interface HTMLElementTagNameMap {
    "plus-click-outside": HTMLPlusClickOutsideElement;
  }
}
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-click-outside': {
      properties: PlusClickOutsidePropertiesOverridden;
    };
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-click-outside": PlusClickOutsideJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusClickOutsideElement>, HTMLPlusClickOutsideElement>, keyof PlusClickOutsideJSX>;
    }
  }
}