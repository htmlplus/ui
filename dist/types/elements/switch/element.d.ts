import { EventEmitter, OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { PlusBreakpoint } from '../../types';
/**
 * Toggles the state of a single item on or off.
 *
 * @examples default, checked, disabled, event, customized, three-dimensional
 */
export declare class PlusSwitch extends PlusCore {
    /**
     * Puts the switch in checked state.
     * @model
     */
    checked?: boolean;
    /**
     * Disables the switch.
     */
    disabled?: boolean;
    /**
     * TODO
     */
    overrides?: OverridesConfig<PlusBreakpoint>;
    /**
     * TODO
     */
    variant?: OverridableValue<never>;
    /**
     * When the switch state is changed this event triggers.
     * @model
     */
    plusChange: EventEmitter<void>;
    toggle(): void;
    onClick(event: any): void;
    onKeyDown(event: any): void;
    render(): any;
}

type Filter<Base, Overrides> = { [K in keyof Base as K extends keyof Overrides ? Overrides[K] extends never ? never : K : K]: Base[K] };
export interface PlusSwitchAttributesBase {
  /**
  * Puts the switch in checked state.
  * @model
  */
  "checked"?: boolean;
  /**
  * Disables the switch.
  */
  "disabled"?: boolean;
  /**
  * TODO
  */
  "overrides"?: OverridesConfig<PlusBreakpoint, Omit<PlusSwitchProperties, "overrides">>;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, PlusSwitchVariantOverrides>;
}
export interface PlusSwitchAttributesDisables {}
export type PlusSwitchAttributes = Filter<PlusSwitchAttributesBase, PlusSwitchAttributesDisables>;
export interface PlusSwitchEventsBase {
  /**
  * When the switch state is changed this event triggers.
  * @model
  */
  onPlusChange?: (event: CustomEvent<void>) => void;
}
export interface PlusSwitchEventsDisables {}
export type PlusSwitchEvents = Filter<PlusSwitchEventsBase, PlusSwitchEventsDisables>;
export interface PlusSwitchMethodsBase {}
export interface PlusSwitchMethodsDisables {}
export type PlusSwitchMethods = Filter<PlusSwitchMethodsBase, PlusSwitchMethodsDisables>;
export interface PlusSwitchPropertiesBase {
  /**
  * Puts the switch in checked state.
  * @model
  */
  checked?: boolean;
  /**
  * Disables the switch.
  */
  disabled?: boolean;
  /**
  * TODO
  */
  overrides?: OverridesConfig<PlusBreakpoint, Omit<PlusSwitchProperties, "overrides">>;
  /**
  * TODO
  */
  variant?: OverridableValue<never, PlusSwitchVariantOverrides>;
}
export interface PlusSwitchPropertiesDisables {}
export type PlusSwitchProperties = Filter<PlusSwitchPropertiesBase, PlusSwitchPropertiesDisables>;
export type PlusSwitchAttributesAndEvents = PlusSwitchAttributes & PlusSwitchEvents;
export interface PlusSwitchJSX extends PlusSwitchEvents, PlusSwitchProperties {}
declare global {
  interface HTMLPlusSwitchElement extends HTMLElement, PlusSwitchMethods, PlusSwitchProperties {}
  var HTMLPlusSwitchElement: {
    prototype: HTMLPlusSwitchElement;
    new (): HTMLPlusSwitchElement;
  };
  interface HTMLElementTagNameMap {
    "plus-switch": HTMLPlusSwitchElement;
  }
}
export namespace JSX {
  interface IntrinsicElements {
    "plus-switch": PlusSwitchAttributes & PlusSwitchEvents;
  }
}
declare module "@builder.io/qwik" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-switch": PlusSwitchAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusSwitchElement>, keyof PlusSwitchAttributesAndEvents>;
    }
  }
}
declare module "inferno" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-switch": PlusSwitchAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusSwitchElement>, keyof PlusSwitchAttributesAndEvents>;
    }
  }
}
declare module "preact" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-switch": PlusSwitchAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusSwitchElement>, keyof PlusSwitchAttributesAndEvents>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-switch": PlusSwitchAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusSwitchElement>, keyof PlusSwitchAttributesAndEvents>;
    }
  }
}
declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-switch": PlusSwitchAttributesAndEvents & Omit<HTMLAttributes<HTMLPlusSwitchElement>, keyof PlusSwitchAttributesAndEvents>;
    }
  }
}
export type PlusSwitchElement = globalThis.HTMLPlusSwitchElement;
export interface PlusSwitchVariantOverrides {}