import { EventEmitter, OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Breakpoint } from '../../types';
/**
 * Detects when a click event happens outside of itself.
 *
 * @stable
 *
 * @slot default - The default slot.
 *
 * @examples default, menu
 */
export declare class ClickOutside extends PlusCore {
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
    overrides?: OverridesConfig<Breakpoint>;
    /**
     * TODO
     */
    variant?: OverridableValue<string>;
    /**
     * Fires when outside of the element is clicked.
     */
    plusClickOutside: EventEmitter<void>;
    get options(): {
        capture: boolean;
    };
    watcher(next: any, _prev: any, name: any): void;
    initialize(): void;
    terminate(): void;
    onClickOutside(): void;
    connectedCallback(): void;
    disconnectedCallback(): void;
    render(): any;
}

export interface ClickOutsideAttributes {
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
  "overrides"?: OverridesConfig<Breakpoint, Omit<ClickOutsideProperties, "overrides">>;
  /**
  * TODO
  */
  "variant"?: OverridableValue<string, ClickOutsideVariantOverrides>;
}
export interface ClickOutsideEvents {
  /**
  * Fires when outside of the element is clicked.
  */
  onPlusClickOutside?: (event: CustomEvent<void>) => void;
}
export interface ClickOutsideMethods {}
export interface ClickOutsideProperties {
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
  overrides?: OverridesConfig<Breakpoint, Omit<ClickOutsideProperties, "overrides">>;
  /**
  * TODO
  */
  variant?: OverridableValue<string, ClickOutsideVariantOverrides>;
}
export interface ClickOutsideJSX extends ClickOutsideEvents, ClickOutsideProperties {}
declare global {
  interface HTMLPlusClickOutsideElement extends HTMLElement, ClickOutsideMethods, ClickOutsideProperties {}
  var HTMLPlusClickOutsideElement: {
    prototype: HTMLPlusClickOutsideElement;
    new (): HTMLPlusClickOutsideElement;
  };
  interface HTMLElementTagNameMap {
    "plus-click-outside": HTMLPlusClickOutsideElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-click-outside": ClickOutsideEvents & ClickOutsideAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-click-outside": ClickOutsideEvents & ClickOutsideAttributes & React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}
export type ClickOutsideElement = globalThis.HTMLPlusClickOutsideElement;
export interface ClickOutsideVariantOverrides {}