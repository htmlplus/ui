import { EventEmitter, OverridableValue, OverridesConfig } from '@htmlplus/element';
import { PlusCore } from '../../core';
import { Breakpoint } from '../../types';
/**
 * Toggles the state of a single item on or off.
 *
 * @examples default, checked, disabled, event, customized, three-dimensional
 */
export declare class Switch extends PlusCore {
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
    overrides?: OverridesConfig<Breakpoint>;
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
export interface SwitchAttributesBase {
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
  "overrides"?: OverridesConfig<Breakpoint, Omit<SwitchProperties, "overrides">>;
  /**
  * TODO
  */
  "variant"?: OverridableValue<never, SwitchVariantOverrides>;
}
export interface SwitchAttributesDisables {}
export type SwitchAttributes = Filter<SwitchAttributesBase, SwitchAttributesDisables>;
export interface SwitchEventsBase {
  /**
  * When the switch state is changed this event triggers.
  * @model
  */
  onPlusChange?: (event: CustomEvent<void>) => void;
}
export interface SwitchEventsDisables {}
export type SwitchEvents = Filter<SwitchEventsBase, SwitchEventsDisables>;
export interface SwitchMethodsBase {}
export interface SwitchMethodsDisables {}
export type SwitchMethods = Filter<SwitchMethodsBase, SwitchMethodsDisables>;
export interface SwitchPropertiesBase {
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
  overrides?: OverridesConfig<Breakpoint, Omit<SwitchProperties, "overrides">>;
  /**
  * TODO
  */
  variant?: OverridableValue<never, SwitchVariantOverrides>;
}
export interface SwitchPropertiesDisables {}
export type SwitchProperties = Filter<SwitchPropertiesBase, SwitchPropertiesDisables>;
export interface SwitchJSX extends SwitchEvents, SwitchProperties {}
declare global {
  interface HTMLPlusSwitchElement extends HTMLElement, SwitchMethods, SwitchProperties {}
  var HTMLPlusSwitchElement: {
    prototype: HTMLPlusSwitchElement;
    new (): HTMLPlusSwitchElement;
  };
  interface HTMLElementTagNameMap {
    "plus-switch": HTMLPlusSwitchElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "plus-switch": SwitchEvents & SwitchAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (SwitchEvents & SwitchAttributes)>;
    }
  }
}
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "plus-switch": SwitchEvents & SwitchAttributes & Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, keyof (SwitchEvents & SwitchAttributes)>;
    }
  }
}
export type SwitchElement = globalThis.HTMLPlusSwitchElement;
export interface SwitchVariantOverrides {}