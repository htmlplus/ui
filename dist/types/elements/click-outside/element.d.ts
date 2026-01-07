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
     * TODO
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * TODO
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

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface PlusClickOutsideAttributesBase {
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
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusClickOutsideProperties, "overrides">>;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusClickOutsideVariantOverrides>;
}
export interface PlusClickOutsideAttributesDisables {}
export type PlusClickOutsideAttributes = Filter<PlusClickOutsideAttributesBase, PlusClickOutsideAttributesDisables>;
export interface PlusClickOutsideEventsBase {
  /**
  * Fires when outside of the element is clicked.
  */
  onPlusClickOutside?: (event: CustomEvent<void>) => void;
}
export interface PlusClickOutsideEventsDisables {}
export type PlusClickOutsideEvents = Filter<PlusClickOutsideEventsBase, PlusClickOutsideEventsDisables>;
export interface PlusClickOutsideMethodsBase {}
export interface PlusClickOutsideMethodsDisables {}
export type PlusClickOutsideMethods = Filter<PlusClickOutsideMethodsBase, PlusClickOutsideMethodsDisables>;
export interface PlusClickOutsidePropertiesBase {
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
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusClickOutsideProperties, "overrides">>;
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusClickOutsideVariantOverrides>;
}
export interface PlusClickOutsidePropertiesDisables {}
export type PlusClickOutsideProperties = Filter<PlusClickOutsidePropertiesBase, PlusClickOutsidePropertiesDisables>;
export interface PlusClickOutsideJSX extends PlusClickOutsideEvents, PlusClickOutsideProperties {}
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
export namespace JSX {
  interface IntrinsicElements {
    "plus-click-outside": PlusClickOutsideAttributes & PlusClickOutsideEvents;
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-click-outside": PlusClickOutsideAttributes & PlusClickOutsideEvents & Omit<DetailedHTMLProps<HTMLAttributes<HTMLPlusClickOutsideElement>, HTMLPlusClickOutsideElement>, keyof (PlusClickOutsideAttributes & PlusClickOutsideEvents)>;
    }
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-click-outside": PlusClickOutsideAttributes & PlusClickOutsideEvents & Omit<HTMLAttributes<HTMLPlusClickOutsideElement>, keyof (PlusClickOutsideAttributes & PlusClickOutsideEvents)>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-click-outside": PlusClickOutsideAttributes & PlusClickOutsideEvents & Omit<HTMLAttributes<HTMLPlusClickOutsideElement>, keyof (PlusClickOutsideAttributes & PlusClickOutsideEvents)>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-click-outside": PlusClickOutsideAttributes & PlusClickOutsideEvents & Omit<HTMLAttributes<HTMLPlusClickOutsideElement>, keyof (PlusClickOutsideAttributes & PlusClickOutsideEvents)>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-click-outside": PlusClickOutsideAttributes & PlusClickOutsideEvents & Omit<HTMLAttributes<HTMLPlusClickOutsideElement>, keyof (PlusClickOutsideAttributes & PlusClickOutsideEvents)>;
    }
  }
}
export type PlusClickOutsideElement = globalThis.HTMLPlusClickOutsideElement;
export interface PlusClickOutsideVariantOverrides {}