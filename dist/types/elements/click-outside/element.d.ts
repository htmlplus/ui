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
     * See [Variant](/variant-property) for details.
     */
    variant?: OverridableValue<never>;
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

type Filter<Base, Disables, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base as Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends keyof Disables ? [Disables[PropKey]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K : K : K extends keyof Disables ? [Disables[K]] extends [false] ? never : K : '*' extends keyof Disables ? [Disables['*']] extends [false] ? never : K : K]: Base[K] };
type Override<Base, Overrides, AllowedKeys, Mapper extends Record<PropertyKey, PropertyKey> | undefined = undefined> = { [K in keyof Base]: Mapper extends Record<PropertyKey, PropertyKey> ? { [P in keyof Mapper as Mapper[P]]: P }[K] extends infer PropKey ? PropKey extends AllowedKeys ? PropKey extends keyof Overrides ? Overrides[PropKey] : Base[K] : Base[K] : Base[K] : K extends AllowedKeys ? K extends keyof Overrides ? Overrides[K] : Base[K] : Base[K] };
export type PlusClickOutsideAttributesMapper = {
  'capture': 'capture';
  'disabled': 'disabled';
  'once': 'once';
  'overrides': 'overrides';
  'variant': 'variant';
};
export type PlusClickOutsideOverridableKeys = 'variant';
export interface PlusClickOutsideDisables {}
export interface PlusClickOutsideOverrides {}
export type PlusClickOutsideAttributes = Filter<PlusClickOutsideAttributesOverridden, PlusClickOutsideDisables, PlusClickOutsideAttributesMapper>;
export type PlusClickOutsideAttributesOverridden = Override<PlusClickOutsideAttributesBase, PlusClickOutsideOverrides, PlusClickOutsideOverridableKeys, PlusClickOutsideAttributesMapper>;
export type PlusClickOutsideAttributesBase = {
  /**
  * A boolean value indicating that events of this type will be dispatched to the registered
  * `listener` before being dispatched to any `EventTarget` beneath it in the DOM tree.
  */
  "capture"?: boolean;
  /**
  * Disables the element functionality.
  */
  "disabled"?: boolean;
  /**
  * The event fires only once.
  */
  "once"?: boolean;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusClickOutsideProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  "variant"?: OverridableValue<never>;
};
export type PlusClickOutsideEvents = Filter<PlusClickOutsideEventsBase, PlusClickOutsideDisables>;
export type PlusClickOutsideEventsBase = {
  /**
  * Fires when outside of the element is clicked.
  */
  plusClickOutside?: (event: CustomEvent<void>) => void;
};
export type PlusClickOutsideEventsJSX = Filter<PlusClickOutsideEventsBaseJSX, PlusClickOutsideDisables, {
  plusClickOutside: 'onPlusClickOutside';
}>;
export type PlusClickOutsideEventsBaseJSX = {
  /**
  * Fires when outside of the element is clicked.
  */
  onPlusClickOutside?: (event: CustomEvent<void>) => void;
};
export type PlusClickOutsideMethods = Filter<PlusClickOutsideMethodsBase, PlusClickOutsideDisables>;
export type PlusClickOutsideMethodsBase = {};
export type PlusClickOutsideProperties = Filter<PlusClickOutsidePropertiesOverridden, PlusClickOutsideDisables>;
export type PlusClickOutsidePropertiesOverridden = Override<PlusClickOutsidePropertiesBase, PlusClickOutsideOverrides, PlusClickOutsideOverridableKeys>;
export type PlusClickOutsidePropertiesBase = {
  /**
  * A boolean value indicating that events of this type will be dispatched to the registered
  * `listener` before being dispatched to any `EventTarget` beneath it in the DOM tree.
  */
  capture?: boolean;
  /**
  * Disables the element functionality.
  */
  disabled?: boolean;
  /**
  * The event fires only once.
  */
  once?: boolean;
  /**
  * Overrides default configuration for specific breakpoints. See [Overrides](/overrides-property) for details.
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusClickOutsideProperties, "overrides">>;
  /**
  * See [Variant](/variant-property) for details.
  */
  variant?: OverridableValue<never>;
};
declare module '@htmlplus/element' {
  interface HTMLPlusElements {
    'plus-click-outside': {
      properties: PlusClickOutsidePropertiesOverridden;
    };
  }
}
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
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-click-outside": PlusClickOutsideJSX & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusClickOutsideElement>, HTMLPlusClickOutsideElement>, keyof PlusClickOutsideJSX>;
    }
  }
}